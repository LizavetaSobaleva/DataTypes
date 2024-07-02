var MyStack = function(stack) {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack = [...this.stack, x]
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop()
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let top = this.stack.at(-1)
    return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length ? false : true
};

MyStack.prototype.show = function() {
    return this.stack
};


let myStack = new MyStack()
myStack.push(1)
myStack.push(2)
console.log(myStack.top())


console.log(myStack.pop())
