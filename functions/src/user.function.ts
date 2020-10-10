import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
export const db = admin.firestore();

export const createUserAccount = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate(async (user) => {
    db.doc(`users/${user.uid}`)
      .set({
        uid: user.uid,
        name: user.displayName,
        createdAt: new Date(),
      })
      .then(() => {
        functions.logger.info('success');
      })
      .catch((err) => {
        functions.logger.error(err);
      });
  });
