// A Data Clump should be detected in the following code snippet between the classes Employee and Student.
// The classes Employee and Student have the same fields: firstName, middleName, lastName.

class Employee {
    private firstName: string;
    private middleName: string | undefined;
    private lastName: string;
    private employeeId: string;

    getEmployeeInfo(): string {
        return `${this.firstName} ${this.lastName}, Employee ID: ${this.employeeId}`;
    }
}