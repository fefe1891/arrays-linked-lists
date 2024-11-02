class CircularArray {
    constructor() {
        this.array = [];
        this.rotateVal = 0;
    }

    addItem(item) {
        this.array.push(item);
    }

    getByIndex(index) {
        if (!this.array.length) return null;
        return this.array[(this.rotateVal + index) % this.array.length];
    }

    rotate(n) {
        let len = this.array.length;
        this.rotateVal = (this.rotateVal + n) % len;

        // Adjust if it's a negative rotation
        if (this.rotateVal < 0) {
            this.rotateVal += len;
        }
    }

    printArray() {
        if (!this.array.length) {
            console.log('No elements');
            return;
        }
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.getByIndex(i));
        }
    }
}

module.exports = CircularArray;