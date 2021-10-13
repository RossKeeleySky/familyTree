// In this method the Generation class are created seperately and pushed to the family class
// Instances People class instances are created from a method in the Generation class
// Downside is that able to call the childOf() function

class Person {
    constructor (name, parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf() {
        return this.parents.join(" and ");
    }
}

class Generation {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    
    newPerson(name, parents) {
        let person = new Person(name, parents);
        this.members.push(person);
    }
}

class Family {
    constructor(name) {
        this.name = name
        this.generations = [];
    }

    get wholeFamily () {
        return this.family;
    }
}

let royalFamily = new Family("Windsor");

let firstGeneration = new Generation("first generation");
firstGeneration.newPerson("Philip Windsor", [])
firstGeneration.newPerson("Margaret Windsor", ["George V Windsor", "Elizabeth Bowes-Lyon"])

let secondGeneration = new Generation("second generation");
secondGeneration.newPerson("Charles Windsor", ["Elizabeth II Windsor", " Philip Windsor"])
secondGeneration.newPerson("Diana Windsor", [])
secondGeneration.newPerson("Anne Windsor", ["Elizabeth II Windsor", " Philip Windsor"])
secondGeneration.newPerson("Andrew Windsor", ["Elizabeth II Windsor", " Philip Windsor"])
secondGeneration.newPerson("Edward Windsor", ["Elizabeth II Windsor", " Philip Windsor"])
secondGeneration.newPerson("William Windsor", ["Charles Windsor", "Diana Windsor"])
secondGeneration.newPerson("Catherine Windsor", [])
secondGeneration.newPerson("Harry Windsor", ["Charles Windsor", "Diana Windsor"])
secondGeneration.newPerson("Meghan Windsor", [])

let thirdGeneration = new Generation("third generation");
thirdGeneration.newPerson("George Windsor", ["William Windsor", "Catherine Windsor"])
thirdGeneration.newPerson("Charlotte Windsor", ["William Windsor", "Catherine Windsor"])
thirdGeneration.newPerson("Louis Windsor", ["William Windsor", "Catherine Windsor"])
thirdGeneration.newPerson("Archie Harrison Windsor", ["Harry Windsor", "Meghan Windsor"])

royalFamily.generations.push(firstGeneration, secondGeneration, thirdGeneration);

console.log(royalFamily);
console.log(JSON.stringify(royalFamily));
console.log(WilliamWindsor.childOf())

