// A data clump should be detected in the following code snippet between the class FlightBooking and function TravelInsurance.issueInsurance.
// The class FlightBooking has the fields and function TravelInsurance.issueInsurance the parameters: passengerName, passportNumber, departureDate, destination.
class TravelInsurance {
    issueInsurance( passengerName: string, passportNumber: string, departureDate: Date, destination: string): string {
        return `
        Insurance Details:
        Passenger: ${passengerName}
        Passport: ${passportNumber}
        Coverage Start: ${departureDate.toDateString()}
        Destination: ${destination}
        `;
    }
}