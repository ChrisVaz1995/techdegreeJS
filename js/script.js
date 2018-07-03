var quotes = [

{
  quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
  source: "John F. Kennedy",
  citation: "White House",
  year: "Unkown"
},

{
  quote: "Not everyone who works hard is rewarded. But! All those who succeed have worked hard!",
  source: "Kamogawa Genji",
  citation: "Hajime no Ippo: The Fighting",
  year: 2013
},

{
  quote: "There is beauty in simplicity",
  source: "Paul Nakauchi",
  citation: "Overwatch",
  year: "2016"
},

{
  quote:"I used to follow my dreams until I caught up to em'",
  source: "Logic",
  citation: "Undeniable Album",
  year: 2012

}



];

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

function printQuote() {
  var currentQuote = getRandomQuote();
  var message = "<p class='quote'>" + currentQuote.quote + "</p>";
  message += "<p class='source'>" + currentQuote.source + "</p>";
  message += "<span class='citation'>" + currentQuote.citation + "</span>";

  if(currentQuote.year != undefined) {
    message += "<span class='year'>" + currentQuote.year + "</span>";
  }

  document.getElementById("quote-box").innerHTML = message;
}


document.getElementById('loadQuote').addEventListener('click', printQuote, false);
