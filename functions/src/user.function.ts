import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const db = admin.firestore();

export const createUserAccount = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate(async (user) => {
    let pokemons = {};
    for (let i = 1; i <= 151; i++) {
      const pokemon = { [i]: false };
      pokemons = Object.assign(pokemon, pokemons);
    }
    db.doc(`users/${user.uid}`)
      .set({
        uid: user.uid,
        name: user.displayName,
        createdAt: new Date(),
      })
      .then(() => {
        return db
          .doc(`users/${user.uid}/collections/pokemons`)
          .set({ pokemons });
      })
      .catch((err) => {
        functions.logger.error(err);
      });
  });
