module.exports = 'lixin';
class B {
    constructor() {
        console.log('init B');
    }
}

function *gen () {
    yield 1;
}
console.log(gen());