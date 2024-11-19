// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

// Roll dice 2 Times
callTwice(rollDie);
// Roll dice 10 Times
callTenTimes(rollDie);

// ====================
// RETURNING FUNCTIONS
// ====================
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLARS!!");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
    };
  }
}

// catch the return
const mystery = makeMysteryFunc();
console.log(mystery);


function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(18, 64);
const isSenior = makeBetweenFunc(65, 120);

console.log("Are you a kid: " + isChild(40));
console.log("Are you a kid: " + isChild(8));
console.log("Are you a kid: " + isChild(18));
isAdult(40);
isAdult(74);
isAdult(22);
isSenior(29);
isSenior(75);
isSenior(101);
