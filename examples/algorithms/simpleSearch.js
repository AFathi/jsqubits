/*
 * A simple search algorithm.
 * Given an oracle that returns true for only one number between zero and three,
 * the simple search function can determine which it is with only a single invocation.
 */

/*global require:true, console:true, exports:true, __dirname:true */

(function () {
    "use strict";
    var jsqubits = require(__dirname + '/../../index').jsqubits;

    var simpleSearch = exports.simpleSearch = function(f) {
        var inputBits = {from: 1, to: 2};
        return jsqubits('|001>')
                .hadamard(jsqubits.ALL)
                .applyFunction(inputBits, 0, f)
                .hadamard(inputBits)
                .z(inputBits)
                .controlledZ(2, 1)
                .hadamard(inputBits)
                .measure(inputBits)
                .result;
    };


    var f = function(x) {return x === 2 ? 1 : 0;};
    console.log("f(x) = 1 for x = " + simpleSearch(f));
    
})();