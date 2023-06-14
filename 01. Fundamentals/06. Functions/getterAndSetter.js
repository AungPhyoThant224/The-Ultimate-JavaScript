/**
 * getter => access properties
 * setter => chante(mutate) them
 */

const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName);

person.fullName = "John Smith";

console.log(person.fullName);