// No Data Clump should be detected in the following code snippet.
// The function executeDeviceFunction is inherited by the classes Phone and Laptop from the same class Device.

class Device {
    executeDeviceFunction(func: Function, expectedResult: string, timeout: number): void {
        console.log('Device function executed');
    }
}

class Phone extends Device {
    executeDeviceFunction(func: Function, expectedResult: string, timeout: number) {
        super.executeDeviceFunction(func, expectedResult, timeout);
    }
}

class Laptop extends Device {
    executeDeviceFunction(func: Function, expectedResult: string, timeout: number) {
        super.executeDeviceFunction(func, expectedResult, timeout);
    }
}