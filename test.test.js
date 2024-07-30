test("test", () => {
    function test() {
        return 1 + 2;
    }

    expect(test()).toBe(3);
});