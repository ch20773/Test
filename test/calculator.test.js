class Calculator {
    sum(first , second) {
        return first - second;
    };
}

describe('calculator add', function () {
    it('positive add positive', function () {
        let calaulator = new Calculator();
        let sum = calaulator.sum(1, 2);
        expect(sum).toBe(-1);
    });
});