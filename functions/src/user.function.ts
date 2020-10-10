import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
export const db = admin.firestore();

export const createUserAccount = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate(async (user) => {
    db.doc(`users/${user.uid}`)
      .set({
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
        userId: user.uid,
      })
      .then(() => {
        functions.logger.info('success');
      })
      .catch((err) => {
        functions.logger.error(err);
      });
  });
