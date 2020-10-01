'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  async prompting() {
    this.log(
      yosay(`Welcome to the wondrous ${chalk.red('newpros')} generator!`)
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "appname",
        message: "Your project name",
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
      this.templatePath('_index.php'),
      this.destinationPath('index.php'),
    );
    this.fs.copyTpl(
      this.templatePath('#dev/**/*'),
      this.destinationRoot(this.answers.appname),
      {
        project: this.answers.appname,
        rtl: this.answers.rtl,
      }
    );
  }

};