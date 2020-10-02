'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  async prompting() {
    this.log(
      yosay(`Yo, yo, yo. Are you ready to install ${chalk.red('maxwokr')} generator!`)
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "appname",
        message: "Project name:",
        default: this.appname
      },
      {
        type: "confirm",
        name: "account",
        message: "Account?",
        default: true,
      },
      {
        type: "confirm",
        name: "raffle",
        message: "Raffle?",
        default: true,
      },
      {
        type: "confirm",
        name: "rtl",
        message: "rtl?",
        default: true,
      },
      // {
      //   type: "confirm",
      //   name: "fonts",
      //   message: "Custom fonts?",
      //   default: true,
      // },
    ]);
  }

  writing() {

    // this.log("Your project name", this.answers.appname);
    // this.log("account :", this.answers.account);
    // this.log("raffle :", this.answers.raffle);

    if(this.answers.raffle) {
      this.fs.copy(
        this.templatePath('_raffle.php'),
        this.destinationPath('raffle.php'),
      );
    }
    if(this.answers.account) {
      this.fs.copy(
        this.templatePath('_account.php'),
        this.destinationPath('account.php'),
      );
    }
    if(this.answers.rtl) {
      this.fs.copy(
        this.templatePath('_rtl.php'),
        this.destinationPath('rtl.php'),
      );
    }
    this.fs.copy(
      this.templatePath('_prepros.config'),
      this.destinationPath('prepros.config'),
    );
    this.fs.copy(
      this.templatePath('_index.php'),
      this.destinationPath('index.php'),
    );
    this.fs.copy(
      this.templatePath('fonts'),
      this.destinationPath('fonts'),
    );
    this.fs.copy(
      this.templatePath('img'),
      this.destinationPath('img'),
    );
    this.fs.copyTpl(
      this.templatePath('#dev'),
      this.destinationPath('#dev'),
      {
        project: this.answers.appname,
        rtl: this.answers.rtl,
      }
    );
  }

};
