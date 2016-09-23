describe('moveZeroes function', function() {
  it('should move zeroes to the left if no boolean was given', function() {
    expect(moveZeroes([0,1,0])).to.equal([1,0,0]);
  });
  it('should move zeroes to the left if boolean is equal true', function() {
    expect(moveZeroes([0,1,0], true)).to.equal([1,0,0]);
  });
  it('should move zeroes to the right if boolean is equal false', function() {
    expect(moveZeroes([0,1,0], false)).to.equal([0,0,1]);
  });
});