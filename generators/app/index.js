'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {

  },

  writing: function () {

    var from = this.templatePath('rx/**/*');
    var to = this.destinationPath();

    this.fs.copyTpl(from, to, {name: getCwdDirName()}, {}, {globOptions: {dot: true}});
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
  },

  end: function () {
    this.log(chalk.yellow('\n--------------------init success,getting started--------------------\n'));
    this.log(chalk.green( chalk.yellow('$ npm start') +'         # Running the Rx project' ));
    this.log(chalk.green( chalk.yellow('$ npm run build') +'     # Build files for production' ));
    this.log(chalk.yellow('\n--------------------------------------------------------------------\n'));
    process.exit(1);
  }
});

function getCwdDirName() {
  return path.basename(process.cwd());
}