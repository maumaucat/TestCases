// A data clump should be detected in the following code snippet between the class FlightBooking and the function TravelInsurance.issueInsurance.
// The classes FlightBooking has the fields and TravelInsurance.issueInsurance the Parameter: passengerName, passportNumber, departureDate, destination.

class FlightBooking {
    private passengerName: string;
    private passportNumber: string;
    private departureDate: Date;
    private destination: string;


    getBookingSummary(): string {
        return `Passenger: ${this.passengerName}, Passport: ${this.passportNumber}, Departure: ${this.departureDate.toDateString()}, Destination: ${this.destination}`;
    }
}


