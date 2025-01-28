// A Data Clump should be detected in the following code snippet between functions bookRoom and cancelBooking.
// The functions bookRoom and cancelBooking have the same parameters: roomNumber, checkInDate, checkOutDate, guestName.

class HotelBooking {

    bookRoom(roomNumber: string, checkInDate: Date, checkOutDate: Date, guestName: string): void {
        console.log(`Booking room ${roomNumber} for ${guestName} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()}`);
    }

    cancelBooking(roomNumber: string, checkInDate: Date, checkOutDate: Date, guestName: string): void {
        console.log(`Cancelling booking for room ${roomNumber} for ${guestName} from ${checkInDate.toDateString()} to ${checkOutDate.toDateString()}`);
    }
}