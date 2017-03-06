const DtsCreator = require('friendly-typed-css-modules');
const optionDefaults = {
  allowGenericStringAccess: true,
};

module.exports = function typedCssLoader(source, map) {
  this.cacheable && this.cacheable();
  const callback = this.async();

  const options = Object.assign(
    {},
    optionDefaults,
    this.options ? this.options : {}
  );
  const creator = new DtsCreator(options);

  creator.create(this.resourcePath, source).then(function(content) {
    content.writeFile().then(function() {
      callback(null, source, map);
    });
  });
};
