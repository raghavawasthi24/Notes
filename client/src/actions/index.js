export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return dateTime.toLocaleDateString("en-US", options);
}

export function makekeyword(inputString) {
  console.log(inputString);
  // Split the input string into words
  const words = inputString.trim().split(/\s+/);

  // Get the first letter of the first word
  const firstLetter = words[0] ? words[0][0] : "";

  // Get the first letter of the last word
  const lastLetter = words.length > 1 ? words[words.length - 1][0] : "";

  // Concatenate the first letters
  const keyword = `${firstLetter}${lastLetter}`;

  console.log(keyword);
  return keyword.toUpperCase(); // Convert to uppercase if needed
}
