function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.info(formatString("Hello")); // Output: "HELLO"
console.info(formatString("Hello", true)); // Output: "HELLO"
console.info(formatString("Hello", false)); // Output: "hello"

function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];

const filteredBooks = filterByRating(books);
console.info(filteredBooks); // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

const stringArray = concatenateArrays(["a", "b"], ["c"]);
const numberArray = concatenateArrays([1, 2], [3, 4], [5]);

console.info(stringArray); // Output: ["a", "b", "c"]
console.info(numberArray); // Output: [1, 2, 3, 4, 5]

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

console.info(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.info(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}

console.info(processValue("hello")); // Output: 5
console.info(processValue(10)); // Output: 20

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, product) =>
        product.price > max.price ? product : max
    );
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];

const mostExpensiveProduct = getMostExpensiveProduct(products);
console.info(mostExpensiveProduct); // Output: { name: "Bag", price: 50 }

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

console.info(getDayType(Day.Monday));   // Output: "Weekday"
console.info(getDayType(Day.Sunday));   // Output: "Weekend"

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
