let childOf = function () {
    return this.parents.map(parent => parent.name || parent).join(" & ") || "unknown";
}

const firstGen = [
    {
        name: "George Windsor",
        parents: [],
        childOf: childOf
    },
    {
        name: "Elizabeth Windsor",
        parents: [],
        childOf: childOf
    },
];

const secondGen = [
    {
        name: "Elizabeth Windsor II",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: childOf
    },
    {
        name: "Margaret Windsor",
        parents: [firstGen[0].name, firstGen[1].name],
        childOf: childOf
    },
];

const thirdGen = [
    {
        name: "Charles Windsor",
        parents: [secondGen[0].name, "Philip Windsor"],
        childOf: childOf
    },
    {
        name: "Anne Windsor",
        parents: [secondGen[0].name, "Philip Windsor"],
        childOf: childOf
    },
    {
        name: "Edward Windsor",
        parents: [secondGen[0].name, "Philip Windsor"],
        childOf: childOf
    },
];

const fourthGen = [
    {
        name: "William Windsor",
        parents: [thirdGen[0].name, "Diana WIndsor"],
        childOf: childOf
    },
    {
        name: "Harry Windsor",
        parents: [thirdGen[0].name, "Diana WIndsor"],
        childOf: childOf
    },
];

console.log(fourthGen[1]);
console.log(fourthGen[1].childOf());
