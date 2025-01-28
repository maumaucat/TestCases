// No Data Clump should be detected in the following code snippet.
// The functions calculateFullTimeSalary, calculateContractorSalary, calculateTaxRate
// have different parameters and no group of tree or more fields are repeated in both classes.

function calculateFullTimeSalary(baseSalary: number, hoursWorked: number, taxRate: number): number {
    const grossSalary = baseSalary * hoursWorked;
    const taxes = grossSalary * taxRate;
    return grossSalary - taxes;
}

function calculateContractorSalary(baseSalary: number[], hoursWorked: number, taxRate: number): number {
    const grossSalary = baseSalary[hoursWorked]
    const taxes = grossSalary * taxRate;
    return grossSalary - taxes;
}

function calculateTaxRate(baseSalary: number, hourWorked: number, taxRate: number): number {
    return taxRate * 100;
}