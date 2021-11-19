const Engineer = require('../lib/engineer')

describe('Testing Engineer Role', () => {
    test('getRole() should return troy role as Engineer', () => {

        const troy = new Engineer('troy', '2', 'troy@troy.com', 'troywiegel')

        expect(troy.getRole()).toEqual('Engineer')
    })
})

describe('Testing Engineer Github', () => {
    test('getGithub() should return the engineers github username that was input', () => {

        const troy = new Engineer('troy', '2', 'troy@troy.com', 'Engineer', 'troywiegel')

        expect(troy.getGithub()).toEqual('troywiegel')
    })
})