// https://github.com/iamjahid697/assignment03/blob/main/assignment.js

     //kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer <= 0 || typeof kilometer == "string" || typeof kilometer == "boolean" || typeof kilometer == "object") {
        console.log("Invalid value")
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}
kilometerToMeter(10);


     //budgetCalculator

function budgetCalculator(num1, num2, num3) {
    goriPrize = 50;
    phonePrize = 100;
    laptopPrize = 500;

    goriTotalPrize = 50 * num1;
    phoneTotalPrize = 100 * num2;
    laptopTotalPrize = 500 * num3;

    totalBudget = goriTotalPrize + phoneTotalPrize + laptopTotalPrize;

    return totalBudget;
}
budgetCalculator(10, 10, 10);

      //hotelCost

function hotelCost(days) {
    var hotelRent = 0;
    if (days <= 0 || typeof days == 'string' || typeof days == 'boolean' || typeof days == 'object') {
        console.log("Enter valid days");
    }
    else if (days <= 10) {
        hotelRent = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        hotelRent = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var twentyPlusDays = remaining * 50;

        hotelRent = firstTenDays + secondTenDays + twentyPlusDays;
    }
    return hotelRent;
}
hotelCost(25);

          // megaFriend

function megaFriend(arr) {
    var longestWord = "";
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "string") {
            console.log("Give only string values");
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}