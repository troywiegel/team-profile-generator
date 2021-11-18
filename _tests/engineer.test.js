describe("Testing Engineer Role", () => {
    test("Engineer Role", () => {
        const role = getRole()
        const expectedResult = 'Engineer'
        expect(role).toEqual(expectedResult)
    })
})