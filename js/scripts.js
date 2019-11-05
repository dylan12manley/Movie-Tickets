
function Ticket (age, movie, time, cost) {
  this.age = age,
  this.movie = movie,
  this.time = time, //
  this.cost = cost // a ratio depending on how old the movie is
}

// function timeTranslator(time) {
//   if(time === 7){
//     return time = 'atinee';
//   } else {
//     return time = 'Evening'
//   }
// }
function calcCost (time, age, cost){
  if ((time === 7) && (age <= 13)) {
    console.log("youngens matinee");
    return cost - 5
  } else if ((time === 7) && (age >= 65)) {
    console.log("oldies matinee");
    return cost - 6
  } else if (age <=13) {
    console.log("youngens")
    return cost -2
  } else if (age >= 65) {
    console.log("oldies")
    return cost - 3
  } else if (time === 7) {
    console.log("matinee");
    return cost -3
  } else {
  return cost
  }
  return cost
}

$(document).ready(function(){
  $('form#userInput').submit(function (event){
    event.preventDefault();
    var userAgeInput = parseInt($('input#user-age').val());
    var movieTimeInput = parseInt($("input[name='Radio']:checked").val());
    var movieInput = $("input[name='movie']:checked").val();
    var price = 10;
    var priceTicket = calcCost (movieTimeInput, userAgeInput, price);
    var myTicket = new Ticket(userAgeInput, movieInput, movieTimeInput, priceTicket);
    console.log(movieInput);
    console.log(myTicket);
    console.log(calcCost(movieTimeInput, userAgeInput, price));

  });
  $('#jokerInput').click(function(){
    $('#jokerTime').toggle();
    $('#goneWithTime , #toyStoryTime').hide();
  });
  $('#goneWithInput').click(function(){
    $('#goneWithTime').toggle();
    $('#jokerTime , #toyStoryTime').hide();
  });
  $('#toyStoryInput').click(function(){
    $('#toyStoryTime').toggle()
    $('#jokerTime , #goneWithTime').hide();

  });
});
