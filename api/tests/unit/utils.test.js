const utils = require('../../utils/utils');

describe("Utils.startPromiseChain", () => {
    let testPromise = utils.startPromiseChain();
    it("should return a promise", () => {
        expect(testPromise.then).toBeInstanceOf( Function )
    })
  });
