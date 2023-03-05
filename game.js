// array that holds the pattern of colors that the user has to remember
const gamePattern = [];

// array that holds the pattern of the provided colors of the user
const userClickedPattern = [];

const buttonColors = ["red", "green", "blue", "yellow"];

// get random number between 0 to 3
const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  // choose a random color based on the number generated
  const randomChosenColor = buttonColors[randomNumber];

  // store the random chosen color to game pattern
  gamePattern.push(randomChosenColor);

  // use the random chosen color to select the element by id
  $(`#${randomChosenColor}`).fadeIn(300).fadeOut(300).fadeIn(300);

  // play the sound for the chosen color
  const audioForChosenColor = new Audio("sounds/" + randomChosenColor + ".mp3");
  audioForChosenColor.autoplay = true;

  audioForChosenColor.play();
};

nextSequence();

// handle user click event
$(".btn").on("click", (event) => {

  // get the id of the selected button
  const userChosenColour = event.target.id;

  // add the user chosen color to userClickPattern array
  userClickedPattern.push(userChosenColour);
})
