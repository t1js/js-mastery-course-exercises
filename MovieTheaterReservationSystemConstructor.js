/* Develop a Theater constructor function that manages movie screenings, seat
bookings, and ticket sales. The system should handle multiple movie showings,
track seat availability, and manage reservations effectively.

Tasks:

1. Define the Constructor:
The constructor should take parameters for theaterName and location.
Initialize properties to manage multiple movie showings, each with its own
set of seats and pricing.

2. Implement Movie Addition Method:
Add a method addMovie that accepts parameters for movieName, showtime,
and seatCount.
Each movie showing should have its own unique seating arrangement and
ticket availability.

3. Implement Seat Reservation Method:
Create a reserveSeat method that takes movieName and showtime, and
decreases the number of available seats.
Ensure that reservations cannot exceed available seats.

4. Implement Ticket Pricing and Purchase Method:
Implement a method purchaseTicket that checks for seat availability,
accepts payment, and issues a ticket if the transaction is successful.
This method should handle pricing variations based on factors like time of
day or special screenings.

5. Implement a Viewing Schedule Display:
Add a method showSchedule that prints out all movies, their showtimes, and
available seats.

6. Testing and Validation:
Create an instance of the Theater and use the methods to add movies,
attempt to book beyond capacity, purchase tickets, and display the current
movie schedule.*/

function MovieTheaterReservationSystemConstructor(theaterName, location) {

    this.addMovie = function(movieName, showTime, seatCount) {

    };
    this.reserveSeat = function(movieName, showTime){

    };
    this.purchaseTicket = function() {

    };
    this.showSchedule = function() {
        
    }
}