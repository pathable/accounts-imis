Accounts.oauth.registerService('imis');

if (Meteor.isClient) {
  const loginWithImis = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Imis.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction('imis', loginWithImis);
  Meteor.loginWithImis = (...args) => Accounts.applyLoginFunction('imis', args);
} else {
  Accounts.addAutopublishFields({
    // not sure whether the github api can be used from the browser,
    // thus not sure if we should be sending access tokens; but we do it
    // for all other oauth2 providers, and it may come in handy.
    forLoggedInUser: ['services.imis'],
    forOtherUsers: ['services.imis.username'],
  });
}
