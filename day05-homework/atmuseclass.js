"use strict";
exports.__esModule = true;
var atmclass_1 = require("./atmclass");
//let atm001 = new AtmClass;
var atm001 = new atmclass_1.AtmClass();
atm001.setInitialBalance(750);
atm001.viewBalance();
atm001.deposit(20);
atm001.viewBalance();
atm001.withdraw(35);
atm001.viewBalance();