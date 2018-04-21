"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hash_1 = require("./Hash");
var inserts = 100000;
var bins = 100;
var start = Date.now();
var h = new Hash_1.Hash(bins);
for (var i = 0; i < inserts; i++) {
    h.insert(Math.floor(Math.random() * inserts));
}
//console.log(h.toString());
var millis = Date.now() - start;
console.log("The process with " + inserts.toLocaleString() + " inserts and " + bins.toLocaleString() + " bins took " + millis.toLocaleString() + " milliseconds.");
//# sourceMappingURL=app.js.map