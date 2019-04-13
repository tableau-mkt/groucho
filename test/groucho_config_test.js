module('Config');

test('Config', 2  , function() {
  ok(typeof groucho.config === "object", "Config exists without being explicitly set");
  deepEqual( groucho.config.trackProperties, ['title','type','tags'], "Config object set to defaults");
});
