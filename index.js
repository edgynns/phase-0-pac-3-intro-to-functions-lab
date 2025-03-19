// Function to return a string in all caps
function shout(string) {
  return string.toUpperCase();
}

// Function to return a string in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// Function to log a string in all caps
function logShout(string) {
  console.log(string.toUpperCase());
}

// Function to log a string in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Function to handle different responses based on the input
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}