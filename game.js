// array that holds the pattern of colors that the user has to remember
const gamePattern = [];

// array that holds the pattern of the provided colors of the user
const userClickedPattern = [];

const buttonColors = ["red", "green", "blue", "yellow"];

// function to play sound for the provided color
const playSoundForColor = (selectedColor) => {
  const audioForChosenColor = new Audio("sounds/" + selectedColor + ".mp3");
  audioForChosenColor.autoplay = true;

  audioForChosenColor.play();
}

// function to animate for the selected color
const animateForColor = (selectedColor) => {
  $(`#${selectedColor}`)
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100)
  .addClass("pressed");

  setTimeout(() => { $(`#${selectedColor}`).removeClass("pressed") }, 100);
}

// get random number between 0 to 3
const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  // choose a random color based on the number generated
  const randomChosenColor = buttonColors[randomNumber];

  // store the random chosen color to game pattern
  gamePattern.push(randomChosenColor);

  // animate the selected random color
  animateForColor(randomChosenColor)

  // play the sound for the chosen color
  playSoundForColor(randomChosenColor);
};

nextSequence();

// handle user click event
$(".btn").on("click", (event) => {

  // get the id of the selected button
  const userChosenColour = event.target.id;

  // add the user chosen color to userClickPattern array
  userClickedPattern.push(userChosenColour);

  // play sound for the selected color
  playSoundForColor(userChosenColour);

    // animate the selected color by user
    animateForColor(userChosenColour)
})
