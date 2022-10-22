const givenObject = {
    name: { first: 'Robert', middle: '', last: 'Smith' },
    age: 25,
    DOB: '-',
    hobbies: ['running', 'coding', '-'],
    education: { highschool: 'N/A', college: 'Yale' }
}

['name', 'age', 'DOB', 'hobbies', 'education']
['first', 'middle', 'last']
['highschool', 'college']

const resultObject = {
    name: { first: 'Robert', last: 'Smith' },
    age: 25,
    hobbies: ['running', 'coding'],
    education: { college: 'Yale' }
}
