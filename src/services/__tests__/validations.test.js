// TODO: Create tests suite for validation function

const { isValid } = require('../validations');

test('should return error message for gamer tag with length less than 8 characters', () => {
    const gamerTag = 'Bob';
    const result = isValid(gamerTag);
    const expectedErrorMessage = "Invalid - gamertag length must be at least 8 characters";
    expect(result).toBe(expectedErrorMessage);
});

test('should return error message for gamer tag without special character', () => {
    const gamerTag = 'NoSpecialCharacter';
    const result = isValid(gamerTag);
    const expectedErrorMessage = "Invalid - gamertag must contain at least a special character";
    expect(result).toBe(expectedErrorMessage);
});


test('should return error message for gamer tag without a number', () => {
    const gamerTag = 'NoNumber!';
    const result = isValid(gamerTag);
    const expectedErrorMessage = "Invalid - gamertag must contain at least a number";
    expect(result).toBe(expectedErrorMessage);
});





/*
describe('validations tests suites - isValid', () => {
    test('should return false if the name is less than 8 characters', () => {
        const result = isValid('test');
        expect(result.message).toBe('Invalid - gamertag length must be at least 8 characters');
    });

    test('should return true if the name is greater than 8 characters', () => {
        const result = isValid('gamerTag123');
        expect(result).toBe(true);
        expect(result.message).toBe('Valid - gamertag passes all validation rules');
    });
});*/