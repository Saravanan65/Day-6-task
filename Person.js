class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  }
  
  
  const person1 = new Person("John", "Doe", 30);
  console.log(person1.getFullName()); 
  console.log(person1.getAge()); 