function cleanText() {
  let raw = document.getElementById("main-input").value.toLowerCase();
  clean = raw.replace(/\s{2,}/g, " ").replace(/[^a-zA-Z ]/g, "");
  return clean; // returns string
}

function convertCleanTextToSingleWordsArray() {
  clean = cleanText();
  return clean.split(" "); // returns array
}

function buildWordFrequencyObject() {
  frequencyObject = {}
  textArray = convertCleanTextToSingleWordsArray()
  for (i = 0; i < textArray.length; i++) {
    if (frequencyObject.hasOwnProperty(textArray[i])) {
      frequencyObject[textArray[i]]++;
    } else {
      frequencyObject[textArray[i]] = 1;
      }
    }
    return frequencyObject;
  }

function sortFrequencyObjectToArray() {
  let frequencyObject = buildWordFrequencyObject();
  let sortedArray = [];
  for (word in frequencyObject) {
      sortedArray.push([word, frequencyObject[word]]);
  };
  sortedArray.sort(function(a, b) {
      return b[1] - a[1];
  });
  return sortedArray;
}

function printWordsToPage() {
  sortedArray = sortFrequencyObjectToArray();
  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i][0] == "") {
      continue
    } else {
      p = document.createElement("p");
      p.innerText = `${sortedArray[i][0]}: ${sortedArray[i][1]}`;
      document.getElementById("results-area").appendChild(p);
    }
  }
}
