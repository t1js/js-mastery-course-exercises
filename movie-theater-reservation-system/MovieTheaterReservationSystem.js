export default function MovieTheaterReservationSystem(theaterName, location) {
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
        let adjustedPrice;

        if (movieShowing && movieShowing.time === showTime) {
            if (showTime >= 0 && showTime < 12) {
                adjustedPrice = movieShowing.price * 0.5;
            } else if (showTime >= 12 && showTime < 17) {
                adjustedPrice = movieShowing.price;
            } else if (showTime >= 17 && showTime < 24) {
                adjustedPrice = movieShowing.price * 1.5;
            }
            if (movieShowing.seats.available > 0) {
                if (paidAmount === adjustedPrice) {
                    movieShowing.seats.available -= 1;
                    console.log(`You've purchased a ticket for ${movieName} at ${showTime}.`);
                } else if (paidAmount > adjustedPrice) {
                    movieShowing.seats.available -= 1;
                    console.log(`You've purchased a ticket for ${movieName} at ${showTime}. Your change is ${paidAmount - adjustedPrice}`);
                } else {
                    console.error("Not enough money to purchase a ticket. Sorry!");
                }
            } else {
                console.error("Sorry, no available seats left.");
            }
    } else {
        console.error("No such movie at provided time.");
    }
};
    this.showSchedule = function() {
        for (const movieName in this.movieShowings) {
            const movie = this.movieShowings[movieName];
            console.log(`${movieName}: showing at ${movie.time}. Available seats: ${movie.seats.available}.`);
        }
    }
}