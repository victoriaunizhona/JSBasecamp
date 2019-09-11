
document.getElementById("control-button").addEventListener("click", calculateTotal);
document.getElementById("clear-button").addEventListener("click", clearResults);



function calculateTotal() {

  // Preparing input to work
  var inputValue = document.getElementById('main-textarea').value;

  inputValue = inputValue.replace(/[.,\/#!$%\^&\*;:{}=\-@_`–~()]/g, ""); //removes all the punctuation marks from the sentence
  inputValue = inputValue.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
  inputValue = inputValue.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  inputValue = inputValue.replace(/\n /, "\n"); // exclude newline with a start spacing

  var wordsArray = inputValue.split(" ");

  var numberWords = countNumberWords(wordsArray);
  var longestWord = findLongestWord(wordsArray);
  var shortestWord = findShortestWord(wordsArray);
  var averageLength = findAverageLength(wordsArray);



  // Adding results of calculation to UI
  document.getElementById("numWords").innerHTML = `< ${numberWords} >`;
  document.getElementById("maxWord").innerHTML = `< ${longestWord} >`;
  document.getElementById("minWord").innerHTML = `< ${shortestWord} >`;
  document.getElementById("averageLenth").innerHTML = `< ${averageLength} >`;


  // Calculate number of words
  function countNumberWords(arr) {
    if (arr[0] === "") { return 0 }
    return arr.length;
  }

  // Calculate the longest word
  function findLongestWord(arr) {
    var longestWord = arr.reduce(function (longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }

  // Calculate the shortest word
  function findShortestWord(arr) {
    var shortestWord = arr.reduce(function (shortest, currentWord) {
      return currentWord.length < shortest.length ? currentWord : shortest;
    }, wordsArray[0]);
    return shortestWord.length;
  }

  // Calculate the avarage length of the word
  function findAverageLength(arr) {
    if (numberWords === 0) {
      return 0;
    }
    var totalLength = arr.reduce(function (total, currentWord) {
      return total + currentWord.length;
    }, 0);
    averageLength = Math.round(totalLength / numberWords);
    return averageLength;
  }

}

function clearResults() {

  // Clear input 
  document.getElementById("main-textarea").value = "";

  // Clear answers
  var answerElements = document.querySelectorAll(".answer-item");
  var i;
  for (i = 0; i < answerElements.length; i++) {
    answerElements[i].innerHTML = "";
  }

}