// console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("==========\n\nEXERCISE 1: Print odd numbers");
let userNumber = prompt("Enter a number:");
printOdds(userNumber);
prompt("Press enter to continue");

function printOdds(count) {
    if (count > 0) {
        for (let i = 0; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log(`Error: cannot count to ${count}`);
    }
}


// Exercise 2 Section
console.log("==========\n\nEXERCISE 2: Legal to drive?");
function checkAge(userName, age) {
    let aboveSixteen = (userName == "" || userName == undefined) ? "Congrats, you can drive!" : `Congrats ${userName}, you can drive!`;
    let belowSixteen = `${(userName == "" || userName == undefined) ? "Sorry" : `Sorry ${userName}`}, but you need to wait until you're 16.`;
    if (age == "" || age == undefined) {
        console.log("Sorry, I don't have enough information to tell if you are old enough to drive.")
    }
    else if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

let userName = prompt("Please enter your name:");
let age = prompt("Please enter your age:");
checkAge(userName, age);
prompt("Press enter to continue");

// Exercise 3 Section
console.log("==========\n\nEXERCISE 3: Which quadrant?");
let whichQuadrant = function cartesian(x, y) {
    let quadrant;
    if (x == 0 || y == 0) {
        quadrant = `on the ${(x == 0 && y == 0) ? "origin" : (x == 0) ? "y axis" : "x axis"}`;
    }
    else if (x > 0) {
        quadrant = (y > 0) ? 1 : 4;
    }
    else {
        quadrant = (y > 0) ? 2 : 3;
    }
    console.log(quadrant);
    return quadrant;
}

// whichQuadrant(0, 0);
// whichQuadrant(0, 1);
// whichQuadrant(1, 0);
// whichQuadrant(1, 1);
// whichQuadrant(-1, 1);
// whichQuadrant(-1, -1);
// whichQuadrant(1, -1);
// whichQuadrant();
// whichQuadrant(1);
let userX = prompt("Enter a point on the x axis:");
let userY = prompt("Enter a point on the y axis:");
console.log("Quadrant of your graph point:");
whichQuadrant(userX, userY);
prompt("Press enter to continue");

// Exercise 4 Section
console.log("==========\n\nEXERCISE 4: What type of triangle?");
// typeOfTriangle();
// typeOfTriangle(1);
// typeOfTriangle(1, 2);
// typeOfTriangle(5, 4, 3);
// typeOfTriangle(3, 5, 3);
// typeOfTriangle(3, 5, 5);
// typeOfTriangle(3, 3, 3);
// typeOfTriangle(6, 3, 3);
// typeOfTriangle(3, 3, 7);
// typeOfTriangle(3, 0, 3);
// typeOfTriangle(-1, -1, -1);
let userSideA = prompt("Enter the length of one side of your triangle:");
let userSideB = prompt("Enter the length of another side of your triangle:");
let userSideC = prompt("Enter the length of the last side of your triangle:");
typeOfTriangle(userSideA, userSideB, userSideC);
prompt("Press enter to continue");

function typeOfTriangle(a, b, c) {
    let sides = [a, b, c];
    sides.sort(function(x, y) {
        return x - y;
    });
    a = sides[0];
    b = sides[1];
    c = sides[2];

    let type;
    if (a + b <= c || c == undefined || isNaN(a) || isNaN(b) || isNaN(c)) {
        type = "invalid";
    }
    else {
        if (a == c) {
            type = "equilateral";
        }
        else if (a == b || b == c) {
            type = "isosceles";
        }
        else {
            type = "scalene";
        }
    }
    console.log(type);
    return type;
}

// Exercise 5 Section
console.log("==========\n\nEXERCISE 5: Data Plan Status");
// dataPlanStatus(50, 5, 12.82);
// dataPlanStatus(50, 5, 5.25);
// dataPlanStatus(50, 30, 50);
// dataPlanStatus(50, 30, 60.44);
// dataPlanStatus(50, 30, 40.1);
// dataPlanStatus(50, 50, 50);
// dataPlanStatus(50, 5, 55.36);
// dataPlanStatus(5, 5, 30.27);
// dataPlanStatus(50);
let planLimit = prompt("Enter your monthly data limit in GB:");
let day = prompt("How many days have passed since your monthly plan renewed?");
let usage = prompt("How much data have you used so far in GB?");
dataPlanStatus(planLimit, day, usage);

function dataPlanStatus(planLimit, day, usage) {
    if (day < 1 || day > 30) {
        console.log("ERROR: invalid day");
        return;
    }
    if (planLimit <= 0 || planLimit == undefined || usage == undefined || day == undefined) {
        console.log("ERROR: invalid plan");
        return;
    }
    
    let daysRemaining = 30 - day;
    let dataRemaining = Math.round((planLimit - usage) * 100) / 100;
    let avgDailyUse = Math.round(planLimit / 30 * 100) / 100;
    let avgActualUse = Math.round(usage / day * 100) / 100;
    let avgTargetUse = Math.round(dataRemaining / daysRemaining * 100) / 100;

    console.log(`DAY ${day} OF 30 (${daysRemaining} days remaining)`);
    console.log(`Average daily use: ${avgActualUse} GB/day`);
    if (dataRemaining < 0) {
        console.log(`You have EXCEEDED your ${planLimit}GB monthly limit by ${-dataRemaining} GB.`);
        console.log(`If you will continue to use more than ${avgDailyUse} GB/day, consider upgrading your plan.`);
    }
    else if (day == 30) {
        console.log("You have stayed within your plan limit this month.");
        console.log(`Unused data: ${dataRemaining} GB`);
    }
    else {
        if (avgActualUse > avgDailyUse) {
            console.log(`You are EXCEEDING your expected daily average of ${avgDailyUse} GB/day.`);
            console.log(`At this rate, you will exceed your 30-day limit by ${avgActualUse * 30 - planLimit} GB.`);
            console.log(`To stay within your data plan, use no more than ${avgTargetUse} GB/day for the next ${daysRemaining} days.`);
        }
        else {
            console.log("You are on track to stay within your data limit this month.");
            console.log(`You can use up to ${avgTargetUse} GB/day for the next ${daysRemaining} days.`);
        }
    }
}
