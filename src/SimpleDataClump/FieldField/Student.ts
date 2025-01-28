// A Data Clump should be detected in the following code snippet between the classes Employee and Student.
// The classes Employee and Student have the same fields: firstName, middleName, lastName.

class Student {
    private firstName: string;
    private middleName: string | undefined;
    private lastName: string;
    private matNr: string;


    getStudentInfo(): string {
        return `${this.firstName} ${this.lastName}, Matriculation Number: ${this.matNr}`;
    }
}