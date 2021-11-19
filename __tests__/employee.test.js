const Employee = require('../lib/employee')

describe('Testing Employee Name', () => {
    test('getName() should return the employees name that was input', () => {

        const troy = new Employee('troy', '2', 'troy@troy.com')

        expect(troy.getName()).toEqual('troy')
    })
})

describe('Testing Employee ID', () => {
    test('getId() should return the employees ID that was input', () => {

        const troy = new Employee('troy', '2', 'troy@troy.com')

        expect(troy.getId()).toEqual('2')
    })
})

describe('Testing Employee Email', () => {
    test('getEmail() should return the employees email that was input', () => {

        const troy = new Employee('troy', '2', 'troy@troy.com')

        expect(troy.getEmail()).toEqual('troy@troy.com')
    })
})

describe('Testing Employee Role', () => {
    test('getRole() should return the employees role', () => {

        const troy = new Employee('troy', '2', 'troy@troy.com')

        expect(troy.getRole()).toEqual('Employee')
    })
})