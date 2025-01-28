// A Data Clump should be detected in the following code snippet between the classes Customer and its function updateAddress.
// The classes Customer and its function updateAddress have the same fields/parameter: streetAddress, city, postalCode.

class Customer {
    private fullName: string;
    private streetAddress: string;
    private city: string;
    private postalCode: string;
    private phoneNumber: string;
    private email: string;

    updateAddress(streetAddress: string, city: string, postalCode: string): void {
        this.streetAddress = streetAddress;
        this.city = city;
        this.postalCode = postalCode;
    }
}