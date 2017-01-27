'use strict';

console.prototype.dawg = console.prototype.dawg || function () {
    console.log(arguments.length ? arguments : 'yo', ', dawg');
};
