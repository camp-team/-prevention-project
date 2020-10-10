import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserLoginList } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  uid: string;
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        this.uid = afUser && afUser.uid;
        return this.db.doc<User>(`users/${afUser.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  );

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  getPokemonList(uid: string) {
    return this.db.doc(`users/${uid}/collections/pokemons`).valueChanges();
  }

  getLoginList(uid: string): Observable<UserLoginList[]> {
    return this.db
      .collection<UserLoginList>(`users/${uid}/dates`)
      .valueChanges();
  }

  updateUser(user: User): Promise<void> {
    return this.db.doc(`users/${user.uid}`).update(user);
  }

  updateMyPokemonCollections(pokemonId: number, uid: string) {
    return this.db.doc(`users/${uid}/collections/pokemons`).update({
      [pokemonId]: true,
    });
  }
}
