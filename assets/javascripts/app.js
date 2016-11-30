var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var choices = ['rock', 'paper', 'scissors'];
var yourSelection = document.getElementById('your-choice');
var compSelection = document.getElementById('comp-choice');
var rockImage = document.createElement("img");
var paperImage = document.createElement("img");
var scissorsImage = document.createElement("img");
var rockImage2 = document.createElement("img");
var paperImage2 = document.createElement("img");
var scissorsImage2 = document.createElement("img");
var rockImage3 = document.createElement("img");
var paperImage3 = document.createElement("img");
var scissorsImage3 = document.createElement("img");
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var winNumber = 0
var loseNumber = 0
var result = document.getElementById('result');
var scissorsPerc = document.getElementById('scissors-perc');
var rockPerc = document.getElementById('rock-perc');
var paperPerc = document.getElementById('paper-perc');
var totalRock = 0
var totalPaper = 0
var totalScissors = 0
var rockWin = 0
var paperWin = 0
var scissorsWin = 0
var colorSwitch = document.getElementById("result")






rock.addEventListener('click', function() {
  colorSwitch.className = ''
  totalRock += 1
  clearSelection();
  clearResult();
  setTimeout(clearResult1, 500)
  setTimeout(clearResult2, 1000)
  setTimeout(clearResult3, 1500)
  userSelection = "rock"
  rockImage.src = 'assets/images/rock2.png'
  yourSelection.appendChild(rockImage);
  choice = computerChoice();
  if(choice == 'rock'){
    setTimeout(addCompRock2, 2000)
  } else if ( choice == 'paper'){
    setTimeout(addCompPaper, 2000)
  } else if ( choice == 'scissors'){
    setTimeout(addCompScissors, 2000)
  }
  // winOrLose();
  setTimeout(winOrLose, 2000)
  setTimeout(rockPercentage, 2000);
});

function rockPercentage() {
  rockPerc.innerText = parseFloat((rockWin/totalRock) * 100 ).toPrecision(3) + "%"
}

function paperPercentage() {
  paperPerc.innerText = parseFloat((paperWin/totalPaper) * 100 ).toPrecision(3) + "%"
}

function scissorsPercentage() {
  scissorsPerc.innerText = parseFloat((scissorsWin/totalScissors) * 100 ).toPrecision(3) + "%"
}

paper.addEventListener('click', function() {
  colorSwitch.className = ''
  totalPaper += 1
  clearSelection();
  clearResult();
  setTimeout(clearResult1, 500)
  setTimeout(clearResult2, 1000)
  setTimeout(clearResult3, 1500)
  userSelection = 'paper'
  paperImage.src = 'assets/images/paper2.png'
  yourSelection.appendChild(paperImage);
  choice = computerChoice();
  if(choice == 'rock'){
    setTimeout(addCompRock, 2000)
  } else if ( choice == 'paper'){
    setTimeout(addCompPaper2, 2000)
  } else if ( choice == 'scissors'){
    setTimeout(addCompScissors, 2000)
  }
  // winOrLose();
  setTimeout(winOrLose, 2000)
  setTimeout(paperPercentage,2000);
});

scissors.addEventListener('click', function() {
  colorSwitch.className = ''
  totalScissors += 1
  clearSelection();
  clearResult();
  setTimeout(clearResult1, 500)
  setTimeout(clearResult2, 1000)
  setTimeout(clearResult3, 1500)
  userSelection = 'scissors'
  scissorsImage.src = 'assets/images/scissors2.png'
  yourSelection.appendChild(scissorsImage);
  choice = computerChoice();

  if(choice == 'rock'){
    setTimeout(addCompRock, 2000)
  } else if ( choice == 'paper'){
    setTimeout(addCompPaper, 2000)
  } else if ( choice == 'scissors'){
    setTimeout(addCompScissors2, 2000)
  }
  // winOrLose()
  setTimeout(winOrLose, 2000)
  setTimeout(scissorsPercentage, 2000);
});

function addCompRock() {
  rockImage.src = 'assets/images/rock2.png'
  compSelection.appendChild(rockImage);
}

function addCompPaper() {
  paperImage.src = 'assets/images/paper2.png'
  compSelection.appendChild(paperImage);
}

function addCompScissors() {
  scissorsImage.src = 'assets/images/scissors2.png'
  compSelection.appendChild(scissorsImage);
}

function addCompScissors2() {
  scissorsImage2.src = 'assets/images/scissors2.png'
  compSelection.appendChild(scissorsImage2);
}

function addCompPaper2() {
  paperImage2.src = 'assets/images/paper2.png'
  compSelection.appendChild(paperImage2);
}

function addCompRock2() {
  rockImage2.src = 'assets/images/rock2.png'
  compSelection.appendChild(rockImage2);
}

function winOrLose() {
  if(userSelection === 'rock'){
    switch(choice) {
      case 'rock':
      result.innerText = "It's a Tie!"
      break;
      case 'paper':
      colorSwitch.className = "red-result"
      lose.innerText = loseNumber += 1
      result.innerText = "You Lost!"
      break;
      case 'scissors':
      win.innerText = winNumber += 1
      colorSwitch.className = "green-result"
      result.innerText = "You Won!"
      rockWin += 1
      break;
    }
  } else if(userSelection === 'paper') {
    switch(choice) {
      case 'rock':
      colorSwitch.className = "green-result"
      win.innerText = winNumber += 1
      result.innerText = "You Won!"
      paperWin += 1
      break;
      case 'paper':
      result.innerText = "It's a Tie!"
      break;
      case 'scissors':
      colorSwitch.className = "red-result"
      lose.innerText = loseNumber += 1
      result.innerText = "You Lost!"
      break;
    }
  } else if(userSelection === 'scissors') {
    switch(choice) {
      case 'rock':
      colorSwitch.className = "red-result"
      lose.innerText = loseNumber += 1
      result.innerText = "You Lost!"
      break;
      case 'paper':
      colorSwitch.className = "green-result"
      win.innerText = winNumber += 1
      result.innerText = "You Won!"
      scissorsWin += 1
      break;
      case 'scissors':
      result.innerText = "It's a Tie!"
      break;
    }
  }
}
function clearResult(){
  result.innerText = ''
}
function clearResult1() {
  result.innerText = ''
  rockImage3.src = 'assets/images/rock3.png'
  result.appendChild(rockImage3)
}

function clearResult2() {
  result.innerText = ''
  // rockImage3.src = 'assets/images/rock3.png'
  paperImage3.src = 'assets/images/paper3.png'
  // result.appendChild(rockImage3)
  result.appendChild(paperImage3)
}

function clearResult3() {
  result.innerText = ''
  // rockImage3.src = 'assets/images/rock3.png'
  // paperImage3.src = 'assets/images/paper3.png'
  scissorsImage3.src = 'assets/images/scissors3.png'
  // result.appendChild(rockImage3)
  // result.appendChild(paperImage3)
  result.appendChild(scissorsImage3)
}

function clearSelection() {
  yourSelection.innerHTML = ""
  compSelection.innerHTML = ""
}

function computerChoice() {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}
