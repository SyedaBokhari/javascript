// creating objects in normal way

let person1 = {
    Firstname : "John",
    Lastname : "Doe",
    getFullName() {
        return this.Firstname + " " + this.Lastname;
    },
    
};
let person2 = {
    Firstname : "Jane",
    Lastname : "Doe",
    getFullName() {
        return this.Firstname + " " + this.Lastname;
    },
    
};

console.log(person1);
console.log(person2);

/* Factory funtion  
    is a function that creates objects
*/

function createPerson(first, last) {
    return {
    firstName: first,
    lastName: last,
    getFullName() {
    return firstName + ' ' + lastName;
                  },
            };
    }

    let person3 = createPerson('John', 'Doe');
    let person4 = createPerson('Jane', 'Doe');

    console.log(person3);
    console.log(person4);