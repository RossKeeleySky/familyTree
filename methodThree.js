// In this method the Family class contains a method to create generations
// The people are then made seperately and added to their respective generations
// The downside being that the generation must be referenced by it's index

class Person {
    constructor (name, parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf() {
        return `${this.name}'s parents are ${this.parents.join(" and ")}`;
    }
}

class Generation {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
}

class Family {
    constructor(name) {
        this.name = name
        this.generations = [];
    }

    newGeneration(name) {
        let generation = new Generation(name);
        this.generations.push(generation);
    }

    get wholeFamily () {
        return this.family;
    }
}

let royalFamily = new Family("Windsor");

royalFamily.newGeneration("firstGeneration");
royalFamily.newGeneration("firstGeneration");
royalFamily.newGeneration("firstGeneration");

// first generation
const ElizabethIIWindsor = new Person("Elizabeth II Windsor", ["George V Windsor", "Elizabeth Bowes-Lyon"]);
const PhilipWindsor = new Person("Philip Windsor", []);
const MargaretWindsor = new Person("Margaret Windsor", ["George V Windsor", "Elizabeth Bowes-Lyon"]);

royalFamily.generations[0].members.push(ElizabethIIWindsor, PhilipWindsor, MargaretWindsor);

// second generation
const CharlesWindsor = new Person("Charles Windsor", ["Elizabeth II Windsor", " Philip Windsor"]);
const DianaWindsor = new Person("Diana Windsor", []);
const AnneWindsor = new Person("Anne Windsor", ["Elizabeth II Windsor", " Philip Windsor"]);
const EdwardWindsor = new Person("Edward Windsor", ["Elizabeth II Windsor", " Philip Windsor"]);
const AndrewWindsor = new Person("Andrew Windsor", ["Elizabeth II Windsor", " Philip Windsor"]);
const WilliamWindsor = new Person("William Windsor", ["Charles Windsor", "Diana Windsor"]);
const CatherineWindsor = new Person("Catherine Windsor", []);
const HarryWindsor = new Person("Harry Windsor", ["Charles Windsor", "Diana Windsor"]);
const MeghanWindsor = new Person("Meghan Windsor", []);

royalFamily.generations[1].members.push(CharlesWindsor, DianaWindsor, AnneWindsor, EdwardWindsor, AndrewWindsor, WilliamWindsor, CatherineWindsor, HarryWindsor, MeghanWindsor);


// third generation
const GeorgeWindsor = new Person("George Windsor", ["William Windsor", "Catherine Windsor"]);
const CharlotteWindsor = new Person("Charlotte Windsor", ["William Windsor", "Catherine Windsor"]);
const LouisWindsor = new Person("Louis Windsor", ["William Windsor", "Catherine Windsor"]);
const ArchiHarrisonWindsor = new Person("Archie Harrison Windsor", ["Harry Windsor", "Meghan Windsor"]);

royalFamily.generations[2].members.push(GeorgeWindsor, CharlotteWindsor, LouisWindsor, ArchiHarrisonWindsor);

console.log(royalFamily);
console.log(JSON.stringify(royalFamily));
console.log(ArchiHarrisonWindsor.childOf());
console.log(WilliamWindsor);

module.exports = royalFamily;
module.exports = WilliamWindsor;