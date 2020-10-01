const CustomError = require("../extensions/custom-error");

const chainMaker = {

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value = String(value);
    if (this.chain === undefined && value === 'undefined') {
      this.chain = `( )`;
      return this;
    } else if (this.chain === undefined && value !== 'undefined') {
      this.chain = `( ${value} )`;
      return this;
    } else if (this.chain !== undefined && value === 'undefined') {
      this.chain = `${this.chain}~~( )`;
      return this;
    } else {
      this.chain = `${this.chain}~~( ${value} )`;
      return this;
    }
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.split('~~').length) {
      delete this.chain;
      throw new Error('THROWN');
    } else {
      this.chain = this.chain.split('~~');
      this.chain.splice(position - 1, 1);
      this.chain = this.chain.join('~~');
      return this;
    }
  },

  reverseChain() {
    if (this.chain === undefined) return this;
    this.chain = this.chain.split('~~');
    this.chain =  this.chain.reverse().join('~~');
    return this;
  },

  finishChain() {
    this.prevChain = this.chain;
    delete this.chain;
    return this.prevChain;
  }
};

module.exports = chainMaker;

// .addLink('DEF').reverseChain().finishChain(), 
// '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )'

// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain()
// .addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14));