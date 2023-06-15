const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('The value must be String.');
        }

        const parts = value.split(' ');
        if (parts.length === 1) {
            throw new Error('Must enter both first and last name.')
        }

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

/**
 * At least one error occurs from the statements from try block,
 * catch object catch that error and do something with it.
 */
try {
    person.fullName = 5;
}
catch (error) {
    console.error(error);
}