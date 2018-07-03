var quotes = [
// Array of quotes //
{
  quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
  source: "John F. Kennedy",
  citation: " White House",
  year: " Unkown",
  category: " U.S."
},

{
  quote: "Not everyone who works hard is rewarded. But! All those who succeed have worked hard!",
  source: "Kamogawa Genji",
  citation: "Hajime no Ippo: New Challenger",
  year: 2002,
  category: " Anime"
},

{
  quote: "There is beauty in simplicity",
  source: "Paul Nakauchi",
  citation: " Overwatch",
  year: 2016,
  category: " Video Game"
},

{
  quote:"I used to follow my dreams until I caught up to em'",
  source: "Logic",
  citation: " Undeniable Album",
  year: 2012,
  category: " Music"
},

{
  quote: "Reptition is the path to mastery",
  source: " Feodor Chin",
  citation: " Overwatch ",
  year: 2016,
  category: "Video Game"
}


// This code randomizes the quotes that it gets from the arrays. //
];

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// This calls the getRandomQuote //

function printQuote() {
  var currentQuote = getRandomQuote();
  var message = "<p class='quote'>" + currentQuote.quote + "</p>";
  message += "<p class='source'>" + currentQuote.source + "</p>";
  message += "<span class='citation'>" + currentQuote.citation + "</span>";
  message += "<span class='category'>" + currentQuote.category + "</span>";

  if(currentQuote.year != undefined) {
    message += "<span class='year'>" + currentQuote.year + "</span>";
  }

  document.getElementById("quote-box").innerHTML = message;
}

//This randomizes the colors that prints in the background //

function randomColors() {
  var addColor1 = Math.floor(Math.random() * 256);
  var addColor2 = Math.floor(Math.random() * 256);
  var addColor3 = Math.floor(Math.random() * 256);
  var combineColors = "rgb(" + addColor1 + "," + addColor2 + "," + addColor3 + ")"
  console.log(combineColors);
  document.body.style.background = combineColors;
}

randomColors();
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
