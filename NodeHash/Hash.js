"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hash = /** @class */ (function () {
    function Hash(numOfBins) {
        this.size = 0;
        this.bins = numOfBins;
        this.hash_table = new Array();
        for (var i = 0; i < this.bins; i++) {
            this.hash_table.push(null);
        }
    }
    Hash.prototype.insert = function (value) {
        var hashValue = value % this.bins;
        var location = this.hash_table[hashValue];
        this.hash_table[hashValue] = new Node(value, location);
        this.size++;
    };
    Hash.prototype.exists = function (value) {
        var hashValue = value % this.bins;
        var location = this.hash_table[hashValue];
        if (location == null)
            return false;
        else {
            while (location.value != value && location.next != null)
                location = location.next;
            if (location.value == value)
                return true;
            else
                return false;
        }
    };
    Hash.prototype.remove = function (value) {
        var hashValue = value % this.bins;
        var location = this.hash_table[hashValue];
        if (location == null)
            return false;
        else {
            var previous = null;
            while (location.value != value && location.next != null) {
                previous = location;
                location = location.next;
            }
            if (location.value != value)
                return false;
            else {
                if (previous == null)
                    this.hash_table[hashValue] = location.next;
                else
                    previous.next = location.next;
                this.size--;
                return true;
            }
        }
    };
    Hash.prototype.toString = function () {
        var toSend = "";
        var index = 0;
        this.hash_table.forEach(function (element) {
            toSend = toSend + "bins[" + index + "] = ";
            var vals = "";
            while (element != null) {
                vals = vals + element.value + " ";
                element = element.next;
            }
            toSend = toSend + vals + "\n";
            index++;
        });
        return toSend;
    };
    return Hash;
}());
exports.Hash = Hash;
var Node = /** @class */ (function () {
    function Node(val, next_node) {
        this.value = val;
        this.next = next_node;
    }
    return Node;
}());
//# sourceMappingURL=Hash.js.map