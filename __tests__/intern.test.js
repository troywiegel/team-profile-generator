const Intern = require('../lib/intern')

describe('Testing Intern Role', () => {
    test('Intern Role', () => {

        const troy = new Intern('troy', '2', 'troy@troy.com', 'school')

        expect(troy.getRole()).toEqual('Intern')
    })
})

describe('Testing Intern School', () => {
    test('getSchool() should return the interns school that was input', () => {

        const troy = new Intern('troy', '2', 'troy@troy.com', 'Intern', 'UW')

        expect(troy.getSchool()).toEqual('UW')
    })
})