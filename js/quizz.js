let score = 0

var ques1 = document. write("Which of these can you NOT recycle? \nA - Glass\nB - Paper\nC - Pens and pencils\nAnswer: ")
alert("The answer you have selected is " + ques1);

if (ques1 === "C" || ques1 === "c" ){
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score = 0;
  alert("Your answer is not correct. The correct answer is c");
}

var ques2 = prompt("Which colour bin does paper and cardboard go in? \nA - Blue\nB - Green\nC - Yellow\nAnswer: ")
alert("The answer you have selected is " + ques2);

if (ques2 === "A" || ques2 === "a") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct. The correct answer is a")
}

var ques3 = prompt("Which type of transport is best for the environment? \nA - Bus\nB - Car\nC - Bike\nAnswer:")
alert("The answer you have selected is " + ques3);

if (ques3 === "C" || ques3 === "c") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct . The correct answer is c")
}

var ques4 = prompt("What is deforestation? \nA - The loss of trees\nB - The loss of clouds\nC - The loss of water\nAnswer:")
alert("The answer you have selected is " + ques4);

if (ques4 === "A" || ques4 === "a") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct. The correct answer is a")
}

var ques5 = prompt("Which of these is a type of green energy? \nA - Petrol\nB - Wind\nC - Wood\nAnswer:")
alert("The answer you have selected is " + ques5);

if (ques5 === "B" || ques5 === "b") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--;
  alert("Your answer is not correct. The correct answer is b")
}

var ques6 = prompt("When you go to the shop, it's best to... \nA - Buy a paper bag\nB - Buy a plastic bag\nC - Bring your re-usable bag from home\nAnswer:")
alert("The answer you have selected is " + ques6);

if (ques6 === "C" || ques6 === "c") {
  score++;
  alert("Your answer is correct. Your score is currently " + score);
} else {
  score--
  alert("Your answer is not correct. The correct answer is c")
}

if (score >= 3) {
  alert("You have passed with a score of " + score);
} else {
  alert("You did not pass with a score of " + score)
}
