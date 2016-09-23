describe('moveZeroes', function() {
  it('should move zeroes to the left if no boolean was given', function() {
    expect(moveZeroes([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).to.eql([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
    expect(moveZeroes([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0])).to.eql([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0])
  });
  it('should move zeroes to the left if boolean is true', function() {
    expect(moveZeroes([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true)).to.eql([12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
  });
  it('should move zeroes to the right if boolean is false', function() {
    expect(moveZeroes([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false)).to.eql([0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
  });
});

describe('sumByFactors', function() {
  it('should return a matrix', function() {
    expect(sumByFactors([12, 15])).to.eql([[2, 12], [3, 27], [5, 15]]);
    expect(sumByFactors([15, 30, -45])).to.eql([[2, 30], [3, 0], [5, 0]]);
  });
});

describe('planeSeats', function() {
  it('should return a string', function() {
    expect(planeSeats(6, 4)).to.equal('s_ss_s');
  });
  it('should return the smallest lexicographical arrangement', function() {
    expect(planeSeats(6, 3)).to.equal('__ss_s');
    expect(planeSeats(12, 10)).to.equal('s_ss_sssssss');
    expect(planeSeats(11, 7)).to.equal('_ss_ss_ss_s');
  });
});