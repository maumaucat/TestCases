// A Data Clump should be detected in the following code snippet between the functions myFunction and mySecretFunction.
// The functions myFunction and mySecretFunction have the same parameters: numberA, numberB, numberC.

let myFunction = function(numberA: number, numberB: number, numberC: number): number {
    return numberA + numberB + numberC;
};

let mySecretFunction = function(numberA: number, numberB: number, numberC: number): number {
    return numberA * numberB * numberC;
}