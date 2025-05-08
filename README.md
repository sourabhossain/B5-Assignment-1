
# B5 - Assignment 1

## What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword gives you all the property names (keys) of an object as a **union type**.

It helps you create functions or types that are restricted to the actual keys of an object, improving **type safety** and reducing runtime errors.

### Example

```ts
type Person = {
  name: string;
  age: number;
  email: string;
  address: string;
};

type Keys = keyof Person; 
// Result: "name" | "age" | "email" | "address"
```

You can use it like this:

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { 
  name: "Sourab", 
  age: 30, 
  email: "sourab@gmail.com", 
  address: "Dhaka, Bangladesh" 
};

console.log(getValue(person, "name")); // Output: Sourab
```

---

## What is type inference in TypeScript? Why is it helpful?

Type inference means TypeScript **guesses the type** for you.

You don’t need to write the type every time. It saves time and keeps code clean.

### Example

```ts
let city = "Feni"; // TypeScript knows it's a string
let number = 100;     // TypeScript knows it's a number
```

TypeScript understands the type by looking at the value.

### Why is it helpful?

1. **Less Code**: You don’t have to write types everywhere.
2. **Readability**: Code is cleaner and easier to read.
3. **Safety**: TypeScript still checks types, so you get the benefits of type safety without extra work.
4. **Flexibility**: You can still override the inferred type if needed.
5. **Better Tooling**: IDEs can provide better autocompletion and error checking.
