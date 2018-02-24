$(document).ready(function() {

  var page     = 1;

  $("#quote-button").on("click", function(){
    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(response){
      var newQuote = response.quoteText;
      var author   = response.quoteAuthor;
      page += 1;
      if (author === '') {
        author = "Unknown";
      }

      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text="'+ newQuote + '" ' + author);
      $("#page").html('PG. ' + page);
      $("#quote-text").css({'margin-left' : '0', 'font-size' : '1rem'})
      $("#author").css({'color' : 'hsl(0,0%,10%)', 'font-size' : '1rem'})
      $("#quote-text").html(newQuote);
      $("#author").html('&#8212   ' + author);
    });
  });

});
