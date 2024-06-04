class Employee {
    #id;
    #salary;

    constructor(name, id, salary) {
        this.name = name;
        this.#id = id;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log('Salary must be a positive number.');
        }
    }

    getDetails() {
        return `Name: ${this.name}, ID: ${this.#id}, Salary: ${this.#salary}`;
    }

    getId() {
        return this.#id;
    }
}

class Manager extends Employee {
    constructor(name, id, salary, department, experience) {
        if (experience <= 4) {
            throw new Error('Manager must have more than 4 years of experience.');
        }

        super(name, id, salary);
        this.department = department;
        this.experience = experience;
    }

    getManagerDetails() {
        return `${this.getDetails()}, Department: ${this.department}, Experience: ${this.experience} years`;
    }
}

const createManager = (name, id, salary, department, experience) => {
    try {
        let manager = new Manager(name, id, salary, department, experience);
        console.log(manager.getManagerDetails());
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

let emp1 = new Employee('Keshvi', 2399, 50000);
console.log(emp1.getDetails());
emp1.setSalary(55000);
console.log(emp1.getDetails());

createManager('Rajat Sinha', 2387, 75000, 'IT', 3); 

createManager('insaan', 1090, 80000, 'HR', 5); 

try {
    console.log(emp1.getId()); 
} catch (error) {
    console.log(error.message);
}
