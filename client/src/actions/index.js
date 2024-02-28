export function convertDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const date = dateTime.toLocaleDateString("en-US");
  const time = dateTime.toLocaleTimeString("en-US");
  return { date, time };
}

export function makeKeyboard(inputString) {

    console.log(inputString)
  // Split the input string into words
  const words = inputString.trim().split(/\s+/);

  // Get the first letter of the first word
  const firstLetter = words[0] ? words[0][0] : "";

  // Get the first letter of the last word
  const lastLetter = words.length > 1 ? words[words.length - 1][0] : "";

  // Concatenate the first letters
  const keyboard = `${firstLetter}${lastLetter}`;

  console.log(keyboard)
  return keyboard.toUpperCase(); // Convert to uppercase if needed
}
