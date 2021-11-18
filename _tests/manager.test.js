describe("Testing Manager Role", () => {
    test("Manager Role", () => {
        const role = getRole()
        const expectedResult = 'Manager'
        expect(role).toEqual(expectedResult)
    })
})