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
    this.theaterName = theaterName;
    this.location = location;
    this.movieShowings = {};
    this.addMovie = function(movieName, showTime, seatCount, basePrice) {
        this.movieShowings[movieName] = {
            time: showTime,
            seats: {
                total: seatCount,
                available: seatCount,
                arrangement: []
            },
            price: basePrice
        };
    };
    this.reserveSeat = function(movieName, showTime){
        const movieShowing = this.movieShowings[movieName];

        if (movieShowing && movieShowing.time === showTime) {
            if (movieShowing.seats.available > 0) {
                movieShowing.seats.available -= 1;
                console.log(`You've reserved a seat for ${movieName} at ${showTime}.`);
            } else {
                console.error("Sorry, no available seats left.");
            }
        } else {
            console.error("No such movie at provided time.");
        }
    };
    this.purchaseTicket = function(movieName, showTime, paidAmount) {
        const movieShowing = this.movieShowings[movieName];
        const originalPrice = movieShowing.price;

        if (showTime >= 0 && showTime < 12) {
            movieShowing.price *= 0.5;
        } else if (showTime >= 12 && showTime < 17) {
            movieShowing.price = movieShowing.price;
        } else if (showTime >= 17 && showTime < 24) {
            movieShowing.price *= 1.5;
        }

        if (movieShowing && movieShowing.time === showTime) {
            if (movieShowing.seats.available > 0) {
                if (paidAmount === movieShowing.price) {
                    movieShowing.seats.available -= 1;
                    console.log(`You've purchased a ticket for ${movieName} at ${showTime}.`);
                } else if (paidAmount > movieShowing.price) {
                    movieShowing.seats.available -= 1;
                    console.log(`You've purchased a ticket for ${movieName} at ${showTime}. Your change is ${paidAmount - movieShowing.price}`);
                } else {
                    console.error("Not enough money to purchase a ticket. Sorry!");
                }
            } else {
                console.error("Sorry, no available seats left.");
            }
    } else {
        console.error("No such movie at provided time.");
    }
    movieShowing.price = originalPrice;
};
    this.showSchedule = function() {
        for (const movieName in this.movieShowings) {
            const movie = this.movieShowings[movieName];
            console.log(`${movieName}: showing at ${movie.time}. Available seats: ${movie.seats.available}.`);
        }
    }
}