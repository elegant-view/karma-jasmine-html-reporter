var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initReporter = function(files,  baseReporterDecorator) {

  baseReporterDecorator(this);

  files.push(createPattern(__dirname + '/css/jasmine.css'));
  files.push(createPattern(__dirname + '/lib/html.jasmine.reporter.js'));
  files.push(createPattern(__dirname + '/lib/adapter.js'));
};

initReporter.$inject = ['config.files',  'baseReporterDecorator'];

module.exports = {
  'reporter:kjhtml': ['type', initReporter]
};
