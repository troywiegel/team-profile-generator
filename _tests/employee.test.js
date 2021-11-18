describe("Testing Employee Role", () => {
    test("Employee Role", () => {
        const role = getRole()
        const expectedResult = 'Employee'
        expect(role).toEqual(expectedResult)
    })
})