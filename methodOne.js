// This was really just a temp file to trawl data, create class instances, and test them

class Person {
    constructor (name, parents) {
        this.name = name;
        this.parents = parents;
    }
    childOf() {
        return this.parents.join(" and ");
    }
}

// first generation
const ElizabethIIWindsor = new Person("Elizabeth II Windsor", ["George V Windsor", "Elizabeth Bowes-Lyon"]);
const PhilipWindsor = new Person("Philip Windsor", []);
const MargaretWindsor = new Person("Margaret Windsor", ["George V Windsor", "Elizabeth Bowes-Lyon"]);

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

// third generation
const GeorgeWindsor = new Person("George Windsor", ["William Windsor", "Catherine Windsor"]);
const CharlotteWindsor = new Person("Charlotte Windsor", ["William Windsor", "Catherine Windsor"]);
const LouisWindsor = new Person("Louis Windsor", ["William Windsor", "Catherine Windsor"]);
const ArchiHarrisonWindsor = new Person("Archie Harrison Windsor", ["Harry Windsor", "Meghan Windsor"]);

console.log(LouisWindsor);
console.log(LouisWindsor.childOf());

