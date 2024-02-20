class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is good player`);
  }
}

class Criketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
    this.name = name;
    this.age = age;
  }
  play() {
    super.play();
    console.log(`${this.name} is good player man`);
  }
}

let sakib = new Criketer("sakib", 34, "All rounder", "bangladesh");

console.log(sakib.play());
