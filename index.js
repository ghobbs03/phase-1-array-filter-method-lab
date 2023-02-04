// Code your solution here

function findMatching(drivers, driverName) {
    return drivers.filter(name => name.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(drivers, startingLetters) {
    return drivers.filter(name => name.startsWith(startingLetters));
}

function matchName(driverObjArray, driverName) {
    return driverObjArray.filter(obj => obj.name === driverName);
}