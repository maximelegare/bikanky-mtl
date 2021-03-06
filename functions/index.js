// fireBase functions for server side.
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminUser = functions.https.onCall((data) => {
  return admin.auth().getUserByEmail((data.email)).then((user) =>{
    return admin.auth().setCustomUserClaims(user.uid, {admin: true});
  }).then(() => {
      return {
          message: `Success! ${data.email} is now an admin user`
      }
  }).catch((err) => {
      console.log(err)
  })
})