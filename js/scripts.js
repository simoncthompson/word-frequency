// Add JS
// select all of the text in the main-input field with .value
// create a cleanup function to remove all of the \s \n
// special chars etc.
// create array of all words separated by space
// create hash with word frequencies
// pass each key (word) and it's frequency (value) to the ui



// function test() {
//   let rawText = document.getElementById("main-input").value
//   console.log(rawText)
// }

function cleanText() {
  let raw = document.getElementById("main-input").value.toLowerCase()
  clean = raw.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z\s]/g, "")
  return clean // returns string
}

function convertCleanTextToArray() {
  clean = cleanText()
  return clean.split(" ") // returns array
}

function buildWordFrequencyObject() {
  frequencyObject = {}
  textArray = convertCleanTextToArray()
}
