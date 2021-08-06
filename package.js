Package.describe({
  summary: "Login service for Imis accounts",
  version: "1.1.0",
  name: "pathable:accounts-imis",
  git: "https://github.com/pathable/accounts-imis",
});

Package.onUse((api) => {
  api.versionsFrom('2.3');

  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);
  // Export Accounts (etc) to packages using this one.
  api.imply("accounts-base", ["client", "server"]);

  api.use("accounts-oauth", ["client", "server"]);
  api.use("pathable:imis-oauth@1.1.0");
  api.imply("pathable:imis-oauth");

  api.addFiles("imis.js");
});
