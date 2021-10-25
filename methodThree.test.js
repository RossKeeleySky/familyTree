const { royalFamily, WilliamWindsor } = require("./methodThree");

// console.log(royalFamily);
// console.log(JSON.stringify(royalFamily));
// console.log(ArchiHarrisonWindsor.childOf());
// console.log(WilliamWindsor);

describe(WilliamWindsor, () => {
    test('this should find the name and parents of the WilliamWindsor person object', () => {
      expect(WilliamWindsor.name).toBe('William Windsor');
    });

    test('it should return the parents of the person selected using the childOf function', () => {
        expect(typeof WilliamWindsor.childOf()).toEqual('string');
    });
})

