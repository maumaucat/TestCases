// No Data Clump should be detected in the following code snippet.
// The classes Bibliothek and BookStore have slightly different fields and no group of tree or more fields are repeated in both classes.

class Bibliothek {
    private books: string[];
    public anzahl: number;
    private name: string;
    private adresse: string;

}

class BookStore {
    public books: string[];
    public anzahl: number;
    private name: string;
    private adresse1: string;
}