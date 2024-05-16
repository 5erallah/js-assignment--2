const quotes = [
    "“A room without books is like a body without a soul.”-- Marcus Tullius Cicero",

    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”-- Albert Einstein",

  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”-― Dr. Seuss ",

  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”-― Marilyn Monroe",

  "“Be the change that you wish to see in the world.”-― Mahatma Gandhi",  
  ];


  
  function generateQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[index];
  }

/////////////////////////////////////  Bounes //////////////////////////////////////////////

// let currentQuotes = -1;

// function generateQuote() {
//     let NewQoutes;
//     do {
//       NewQoutes = Math.floor(Math.random() * quotes.length);
//     } while (NewQoutes === currentQuotes);
    
//     currentQuotes = NewQoutes;
    
//     document.getElementById('quote').innerText = quotes[currentQuotes];
//   }

