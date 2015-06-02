function Ticket(movieName, age, movieTime){
  this.movieName = movieName;
  this.age = age;
  this.movieTime = movieTime;

}

Ticket.prototype.price = function(){
  var standardPrice = 10;

  if (this.age === "Child"){
    standardPrice -= 3;
  } else if (this.age === "Seniors") {
    standardPrice -= 2;
  } else {
    standardPrice += 1;
  }

  if (this.movieTime === "Morning"){
    standardPrice -= 1;
  } else if (this.movieTime === "Night") {
    standardPrice += 5;
  } else {
    standardPrice += 1;
  }

  return standardPrice;
}


$(document).ready(function(){
  $('#ticket-details').submit(function(event){
    event.preventDefault();
    var selectedMovieName = $('#selected-movie :selected').text();
    var selectedAge = $('#selected-age :selected').text();
    var selectedTime = $('#selected-time :selected').text();
    var testTicket = new Ticket(selectedMovieName, selectedAge, selectedTime);
    var ticketPrice = testTicket.price();
    $('#show-price').text("The Price of the Ticket is: $" + ticketPrice);

  });
});
