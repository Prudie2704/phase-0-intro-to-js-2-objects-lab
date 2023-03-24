const employee = {name: 'Sam', streetAddress: '11 Broadway'
};
employee.name = 'Sam'
employee.streetAddress = '11 Broadway'

const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddresss', '12 Broadway');
     
newEmployee.name = 'Sam'
newEmployee.streetAddress = '12 Broadway'

