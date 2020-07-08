const { resolver } = require('./index');

describe("Basic tests", () => {
  it("should return the correct value", () => {
    expect(resolver()).toEqual("success");
  });
});
