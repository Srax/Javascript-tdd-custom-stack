module.exports = class Stack {
    constructor() {
      this.top = -1;
      this.items = {};
    }
  
    get peek() {
      return this.items[this.top];
    }
  
    get length() {
        return this.top + 1;
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

  
    pop() {
        if(this.length === 0) {
            return undefined;
        }
        let poppedItem = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return poppedItem;
    }

    shift() {
        if(this.length === 0) {
            return undefined;
        }
        let shiftedItem = this.items[0];
        for(let i = 0; i < this.length; i++) {
            this.items[i] = this.items[i+1];
            if(this.items[i] === undefined) {
                delete this.items[i];
            }
        }
        this.top -= 1;
        return shiftedItem;
    }
}