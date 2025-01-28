// No Data Clump should be detected in the following code snippet.
// The classes FireFighter and Teacher inherit all fields from the interface Job.
// It is necessary to have the same fields in both classes.
// The function apply is inherited from the interface Job and is implemented in both classes.

interface Job {
    title: string;
    salary: number;
    location: string;
    description: string;
    isRemote: boolean;
    apply(cv: string, applicationLetter: string, qualified: boolean ): void;
}

class FireFighter implements Job {
    description: string;
    isRemote: boolean;
    location: string;
    salary: number;
    title: string;

    apply(cv: string, applicationLetter: string, qualified: boolean): void {
    }

}

class Teacher implements Job {
    description: string;
    isRemote: boolean;
    location: string;
    salary: number;
    title: string;

    apply(cv: string, applicationLetter: string, qualified: boolean): void {
    }

}