const tickets = require('./vc');

describe("Test selling ticket", function () {
    const test1 = [25, 25, 50];
    const test2 = [25, 100];
    const test3 = [25, 25, 50, 50, 100];
    it("tickets([25, 25, 50]) should be YES", function () {
        expect(tickets(test1)).toBe('YES');
    });
    it("tickets([25, 100]) should be NO", function () {
        expect(tickets(test2)).toBe('NO');
    });
    it("tickets([25, 25, 50, 50, 100]) should be NO", function () {
        expect(tickets(test3)).toBe('NO');
    });
});