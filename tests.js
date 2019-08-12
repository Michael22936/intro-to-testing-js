// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sum', function () {
   it('should be a defined function', function () {
       expect(typeof sum).toBe('function');
    });
   it('should return the number 4 when passed the numbers 2 and 2', function () {
       expect(sum(2, 2)).toBe(4)
   });
    it('should return the number 5 when passed the numbers 2 and 3', function () {
        expect(sum(2, 3)).toBe(5)
    });
    it('should return false when passed two strings', function () {
        expect(sum('black', 'sheep')).toBe(false)
    });
});

describe('isEven', function () {
   it('should be a defined function', function () {
       expect(typeof isEven).toBe('function');
   });
    it('should be a boolean', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return true on 2', function () {
       expect(isEven(2)).toBe(true);
    });
    it('should return true on -4', function () {
        expect(isEven(-4)).toBe(true);
    });
});