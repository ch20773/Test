import {Accounting} from "./Accounting";

describe('Accounting Score', function () {
    const Accounting = new Accounting();
    describe('Name of the group', () => {
        it('', () => {
            const accounting = new Accounting();
            accounting.getAll = () => {
                const array = [
                    new Budget('202010', 310)
                ];
                return array;

            };
            expect(accounting.totalAmount('202010', '')).toBe(310);
        });
    });
});