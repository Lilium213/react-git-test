import React from 'react';

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello...? I'm ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){

        let description = `${super.getDescription()} Is currently a student.`;

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation)
            greeting += ` I'm visiting from ${this.homeLocation}.`;

        return greeting;
    }
}

const me = new Student('Andrew', 19, 'Computer Science');
const you = new Student('Jeff');
const traveler = new Traveler('Pedro', 35, 'Germany');
const unknownTraveler = new Traveler('Juan',23);
console.log(me.getDescription());
console.log(you.getDescription());
console.log(traveler.getGreeting());
console.log(unknownTraveler.getGreeting());