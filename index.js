// Code your solution in this file!
const drivers = ['Lewis', 'John', 'Joe', 'Doe'];

const returnFirstTwoDrivers = function(array) {
    const firstTwoDrivers = array.slice(0, 2);
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function(array) {
    const lastTwoDrivers = array.slice(2, 4);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(price) {
    return function() {
        const fare = price * price;
        return fare;
    }
}

function fareDoubler(fare) {
    createFareMultiplier(fare);
    return fare * 2;
}

function fareTripler(fare) {
    createFareMultiplier(fare);
    return fare * 3;
}

function selectDifferentDrivers(array, driversFunction) {
    if (driversFunction === returnFirstTwoDrivers) {
        returnFirstTwoDrivers(array);
    } else if (driversFunction === returnLastTwoDrivers) {
        returnLastTwoDrivers(array);
    }
    return driversFunction(array);
}