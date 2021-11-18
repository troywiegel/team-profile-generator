describe("Testing Intern Role", () => {
    test("Intern Role", () => {
        const role = getRole()
        const expectedResult = 'Intern'
        expect(role).toEqual(expectedResult)
    })
})