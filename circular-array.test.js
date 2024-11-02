const CircularArray = require('./CircularArray');

describe('CircularArray', () => {
    let ca;

    beforeEach(() => {
        ca = new CircularArray();
    });

    test('adding and retrieving items', () => {
        ca.addItem(5);
        ca.addItem(10);
        expect(ca.getByIndex(0)).toBe(5);
        expect(ca.getByIndex(1)).toBe(10);
    });

    test('getting item with no elements', () => {
        const result = ca.getByIndex(1);
        expect(result).toBe(null);
    });

    test('rotating right', () => {
        ca.addItem(5);
        ca.addItem(10);
        ca.rotate(1);
        expect(ca.getByIndex(0)).toBe(10);
        expect(ca.getByIndex(1)).toBe(5);
    });

    test('rotating left', () => {
        ca.addItem(5);
        ca.addItem(10);
        ca.rotate(-1);
        expect(ca.getByIndex(0)).toBe(10);
        expect(ca.getByIndex(1)).toBe(5);
    });
});