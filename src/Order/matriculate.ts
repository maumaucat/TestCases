// A Data Clump should be detected in the following code snippet between the functions immaculateStudent and exmatriculateStudent.
// The functions immaculateStudent and exmatriculateStudent have the same parameters: name, age, matNr.

function immatriculateStudent(name : string, age: number, matNr : number) : void {
    console.log(`Student immatriculated: ${name}, Matriculation Number: ${matNr}`);
}

function exmatriculateStudent(age: number, matNr : number, name : string) : void {
    console.log(`Student exmatriculated: ${name}, Matriculation Number: ${matNr}`);
}

