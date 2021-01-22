// 01 kilometer to meter function

function kilometerToMeter(km) {
    meter = km * 1000;
    if (km < 0) {
        return 'Your input number is not a valid number. Try again with 0 to upper number';
    } else {
        return meter;
    }
}
// var result = kilometerToMeter(0);
// var result2 = kilometerToMeter(-1);
// console.log(result);
// console.log(result2);


// 02 budget calculator

function budgetCalculator([watch, mobile, laptop]) {
    watchCost = 50 * watch;
    mobileCost = 100 * mobile;
    laptopCost = 500 * laptop;
    totalCost = watchCost + mobileCost + laptopCost;
    if ((watch < 0) || (mobile < 0) || (laptop < 0)) {
        return 'You can not buy a negative material because it does not exist .';
    } else {
        return totalCost;
    }
}
// var result = budgetCalculator([20, 10, 5]);
// var result2 = budgetCalculator([20, 10, -5]);
// console.log(result);
// console.log(result2);


// 03 hotelCost

function hotelCost(stayDay) {
    var hotelBill = 0;
    if (stayDay < 0) {
        return 'Your input day is not valid. Day can not be a negative value';
    } else if (stayDay <= 10) {
        hotelBill = stayDay * 100;
        return hotelBill;
    } else if (stayDay <= 20) {
        first10days = 10 * 100;
        remaining = stayDay - 10;
        secondBill = 80 * remaining;
        hotelBill = first10days + secondBill;
        return hotelBill;
    } else {
        first10days = 10 * 100;
        secondBill = 10 * 80;
        remainingDay = stayDay - 20;
        thirdBill = remainingDay * 50;
        hotelBill = first10days + secondBill + thirdBill;
        return hotelBill;
    }
}
// var result = hotelCost(31);
// var result2 = hotelCost(-1);
// console.log(result);
// console.log(result2);

// 04 megaFriend - find the largest name of a array

function megaFriend(str) {
    var wordLength = 0;
    var biggestWord;
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > wordLength) {
            var wordLength = str[i].length;
            biggestWord = str[i];
        }
    }
    return biggestWord;
}
// console.log(megaFriend(["Nahid ", "Nahid", "Nahid", "Nafgghid", "Hasrggnsan","Nahid"]));