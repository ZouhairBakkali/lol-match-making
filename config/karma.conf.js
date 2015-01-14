module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-*/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/components/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'       
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
