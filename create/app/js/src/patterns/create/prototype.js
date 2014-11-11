"use strict";

function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + " has done " + this.miles + " miles";
    };
}

// 注 意 这 里 我 们 使 用 Note here that we are using Object. prototype. newMethod 而 不 是
// Object. prototype ， 以 避 免 我 们 重 新 定 义 原 型 对 象
Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
};
