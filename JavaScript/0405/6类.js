class Person {
    constructor(name,birthday) {
        this.name=name;
        this.birthday=birthday;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.birthday;
    }
}
let person = new Person("小华",2020);
console.log(person.age());