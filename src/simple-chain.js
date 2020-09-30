const CustomError = require("../extensions/custom-error");

const chainMaker = {

  deleteChain() {
    delete this.chain;
  },

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value = String(value);
    if (this.chain === undefined) {
      this.chain = `( ${value} )`;
      return this;
    } else {
      this.chain = `${this.chain}~~( ${value} )~~`;
      this.chain = this.chain.slice(0, -2);
      return this;
    }
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.split('~~').length) {
      this.deleteChain();
      throw new Error('THROWN');
    } else {
      this.chain = this.chain.split('~~').splice(position - 1, 1).join('~~');
      return this;
    }
  },

  reverseChain() {
    this.chain = this.chain.split('~~');
    this.chain =  this.chain.reverse().join('~~');
    return this;
  },

  finishChain() {
    return this.chain;
  }
};

module.exports = chainMaker;

// 
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain()
// .reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());



// let str = 'asdweqwe~~asdqwe~~asde';
// str = str.split('~~');
// str.splice(1,1);
// str = str.join('~~');
// console.log(str);
