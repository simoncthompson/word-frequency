const STOPWORDS = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]

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

function clearResults() {
  document.getElementById("results-area").innerHTML = "";
}

function clearAll(){
  location.reload();
}

function printWordsToPage() {
  clearResults();
  sortedArray = sortFrequencyObjectToArray();
  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i][0] == "" ||
      (STOPWORDS.includes(sortedArray[i][0]) && document.getElementById("no-stop-words-toggle").checked == true)) {
      continue
    } else {
      p = document.createElement("p");
      p.innerText = `${sortedArray[i][0]}: ${sortedArray[i][1]}`;
      document.getElementById("results-area").appendChild(p);
    }
  }
}
