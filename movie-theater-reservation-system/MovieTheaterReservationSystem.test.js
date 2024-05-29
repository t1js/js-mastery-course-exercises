import MovieTheaterReservationSystem from '../movie-theater-reservation-system/MovieTheaterReservationSystem.js';

let testInstance = new MovieTheaterReservationSystem("Test Cinema", "Test Location");

testInstance.addMovie("some movie", 13, 50, 100);
testInstance.addMovie("some other movie", 18, 40, 150);

testInstance.showSchedule();

//valid seat reservation
testInstance.reserveSeat("some movie", 13);
//valid movie, invalid time, should throw an error
testInstance.reserveSeat("some movie", 18);
//invalid movie, valid time, should throw an error
testInstance.reserveSeat("invalid movie", 13);
//invalid movie, invalid time, should throw an error
testInstance.reserveSeat("invalid movie", 19);
//valid ticket purchase, no change
testInstance.purchaseTicket("some movie", 13, 100);
//valid ticket purchase, change 168
testInstance.purchaseTicket("some movie", 13, 268);
//invalid movie, valid time, should throw an error
testInstance.purchaseTicket("invalid movie", 13, 100);
//valid movie, invalid time, should throw an error
testInstance.purchaseTicket("some movie", 17, 100);
//valid movie, valid time, not enough money, should throw an error
testInstance.purchaseTicket("some movie", 13, 40);

//all tests above pass, will convert them into proper tests later
//missing tests for adjusted prices !!