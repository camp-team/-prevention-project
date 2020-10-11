import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';
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

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private datePipe: DatePipe
  ) {}

  private transDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  getPokemonList(uid: string) {
    return this.db.doc(`users/${uid}/collections/pokemons`).valueChanges();

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

  reportDateAndPokemon(
    uid: string,
    pokemonId1?: number,
    pokemonId2?: number
  ): Promise<void> {
    const date: string = this.transDate();
    const day: number = Number(date.substr(8, 2));
    if (pokemonId2) {
      const correctNum = 2;
      return this.db
        .doc(`users/${uid}/dates/${date.substr(0, 7)}`)
        .set(
          { [day]: { correctNum, pokemonId1, pokemonId2, date } },
          { merge: true }
        );
    } else if (pokemonId1 && !pokemonId2) {
      const correctNum = 1;
      return this.db
        .doc(`users/${uid}/dates/${date.substr(0, 7)}`)
        .set({ [day]: { correctNum, pokemonId1, date } }, { merge: true });
    } else {
      const correctNum = 0;
      return this.db
        .doc(`users/${uid}/dates/${date.substr(0, 7)}`)
        .set({ [day]: { date, correctNum } }, { merge: true });
    }
  }
}
