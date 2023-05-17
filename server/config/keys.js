//add this file to gitignore

module.exports = {
  google: {
    clientID:
      "794923320918-n11hp6dm0ruknui960mrk53qmkpf4r5i.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURl: "/auth/google/redirect",
  },
  mongoDB:{
    dbURL:"mongodb+srv://yati:12345678yati@cluster0.vsy5krb.mongodb.net/passportAuth"
  },
  session:{
    cookiekey:'books are the best'
  }
};
