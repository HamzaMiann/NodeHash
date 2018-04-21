
export class Hash {

	private bins: number;
	private hash_table: Array<Node>
	public size: number = 0;

	constructor(numOfBins: number) {
		this.bins = numOfBins;
		this.hash_table = new Array<Node>();
		for (var i = 0; i < this.bins; i++) {
			this.hash_table.push(null);
		}
	}

	public insert(value: number): void {
		var hashValue: number = value % this.bins;
		var location: Node = this.hash_table[hashValue];
		this.hash_table[hashValue] = new Node(value, location);
		this.size++;
	}

	public exists(value: number): boolean {
		var hashValue: number = value % this.bins;
		var location: Node = this.hash_table[hashValue];
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
	}

	public remove(value: number): boolean {
		var hashValue: number = value % this.bins;
		var location: Node = this.hash_table[hashValue];
		if (location == null)
			return false;
		else {
			var previous: Node = null;
			while (location.value != value && location.next != null) {
				previous = location;
				location = location.next;
			}
			if (location.value != value)
				return false
			else {
				if (previous == null)
					this.hash_table[hashValue] = location.next;
				else
					previous.next = location.next;
				this.size--;
				return true;
			}
		}
	}

	public toString(): string {
		var toSend: string = "";
		var index: number = 0;
		this.hash_table.forEach((element: Node) => {
			toSend = toSend + "bins[" + index + "] = ";
			var vals: string = "";
			while (element != null) {
				vals = vals + element.value + " ";
				element = element.next;
			}
			toSend = toSend + vals + "\n";
			index++;
		});
		return toSend;
	}

}

class Node {

	public value: number;
	public next: Node;

	constructor(val: number, next_node: Node) {
		this.value = val;
		this.next = next_node;
	}

}