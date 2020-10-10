import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { UserLoginList } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

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
