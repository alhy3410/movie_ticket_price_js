describe('Ticket', function(){
  it('will create a new movie ticket, and input the name, age and time', function(){
    var testTicket = new Ticket("", 0, "");
    expect(testTicket.movieName).to.eql("");
    expect(testTicket.age).to.eql(0);
    expect(testTicket.movieTime).to.eql("");
  });
});
