// https://github.com/iamjahid697/assignment03/blob/main/assignment.js

//kilometerToMeter

function kilometerToMeter(kilometer){
    meter = kilometer * 1000;
    return meter;
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

