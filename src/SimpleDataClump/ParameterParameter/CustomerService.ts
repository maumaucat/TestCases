// A data clump should be detected in the following code snippet between the functions updateCustomerDetails and createCustomer.
// The functions updateCustomerDetails and createCustomer have the same parameters: firstName, lastName, email, phoneNumber.

class CustomerService {
    updateCustomerDetails(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ): void {
        console.log(`Customer updated: ${firstName} ${lastName}`);
    }

    createCustomer(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ): void {
        console.log(`Customer created: ${firstName} ${lastName}`);
    }
}