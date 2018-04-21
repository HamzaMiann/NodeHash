
import { Hash } from './Hash'
const inserts = 100000;
const bins = 100;


var start = Date.now();

var h = new Hash(bins);

for (var i = 0; i < inserts; i++) {
	h.insert(Math.floor(Math.random() * inserts));
}

//console.log(h.toString());

var millis = Date.now() - start;

console.log(`The process with ${inserts.toLocaleString()} inserts and ${bins.toLocaleString()} bins took ${millis.toLocaleString()} milliseconds.`);