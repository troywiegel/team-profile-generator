const Manager = require('../lib/manager')

describe('Testing Manager Role', () => {
    test('Manager Role', () => {

        const troy = new Manager('troy', '2', 'troy@troy.com', '100')

        expect(troy.getRole()).toEqual('Manager')
    })
})

describe('Testing Manager Office Number', () => {
    test('getOffice() should return the managers office number that was input', () => {

        const troy = new Manager('troy', '2', 'troy@troy.com', 'Manager', '100')

        expect(troy.getOffice()).toEqual('100')
    })
})