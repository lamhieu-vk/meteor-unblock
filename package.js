Package.describe({
  name: "lamhieu:unblock",
  version: "0.1.0",
  summary: "This package provides `this.unblock` inside Meteor publications",
  git: "https://github.com/lamhieu-vk/meteor-unblock.git",
  documentation: "README.md",
});

Package.onUse(api => {
  api.versionsFrom("1.7");
  api.use("ecmascript", ["server"]);
  api.addFiles("core.js", "server");
  api.export("MeteorCore", "server");
  api.mainModule("unblock.js", "server");
});

Package.onTest(api => {
  api.versionsFrom("1.7");
  api.use("ecmascript", ["server"]);
  api.use("tinytest");
  api.use("lamhieu:unblock");
  api.mainModule("unblock-tests.js");
});
