const lib = require('./lib');

// Group related tests
// Refactoring with confidence
describe('absolute', () => {
    it('should return a positive number if input is positive.', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })
    
    it('should return a positive number if input is negative.', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })
    
    it('should return a 0 if input is 0.', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
});

// The tests should not be too specifics or too general. Look for certain patterns instead of exactly equal
describe("greet", () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Mosh');
        //expect(result).toMatch('/Mosh/');
        expect(result).toContain('/Mosh/');
    });
});


describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();

        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        //Too specific 
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');

        expect(result.length).toBe(3);

        //Proper wayL: check the existence of the element in the array
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        // Cleaner way 
        expect(result).toEqual(expect.arrayContaining(['EUR', 'AUD', 'USD']));

    });
})


describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        expect(result).toBe({id: 1, price: 10}); //toBe compares the reference of the object in memory. These two objects are in different location in memory. -> instead, use toEqual
        expect(result).toEqual({id: 1, price: 10}); 
        expect(result).toMatchObject({id: 1, price: 10}); // use toMatch object in irder to match all the properties in the object 
    })
})


