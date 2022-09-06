/* basic typing */

const str: string = "hello world";

console.log(str);

/* interfaces */

// types are capitalized by convention
interface Person {
  name: string;
  age: number;
  favFood: "🌮" | "🍕" | "🍉" | "🍍";
}

const Willow: Person = {
  name: "Willow",
  age: 26,
  favFood: "🍍",
};

/* extension */

interface Programmer extends Person {
  favLanguage: "ts" | "js" | "c" | "python" | "php";
}

const WillowAtWork: Programmer = {
  ...Willow,
  favLanguage: "ts",
};

/* generics */

interface Group<Type> {
  name: string;
  members: Type[];
}

const Club: Group<Person> = {
  name: "cool peeps",
  members: [Willow],
};

/* typing functions */

const birthday = (person: Person): Person => {
  return {
    ...person,
    age: person.age + 1,
  };
};

function birthdayOldSchool(person: Person): Person {
  return {
    ...person,
    age: person.age + 1,
  };
}

/* functions as types */

interface ObjWithFunc {
  func: (emoji: string) => void;
}

const x: ObjWithFunc = {
  func: (emoji) => {
    console.log(emoji);
  },
};

/* ADVANCED */

/* intersection and unions */

interface A {
  a: string;
}

interface B {
  b: string;
}

type Combined = A | B;

type Intersect = A & B;

const combinedInstance: Combined = {
  a: "a",
  b: "b",
  c: "c",
};

const doAsyncShit = (): Promise<A> => {
  return new Promise((resolve, reject) => {
    resolve({ a: "a" });
    reject({ b: "b" });
  });
};

/* type guards */

interface Dog {
  breed: string;
  ageInDogYears: number;
  name: string;
}

const genericBirthday = (arg: Person | Dog) => {
  if (isDog(arg)) {
    return {
      ...arg,
      ageInDogYears: arg.ageInDogYears + 7,
    };
  } else {
    return {
      ...arg,
      age: arg.age + 1,
    };
  }
};

const isDog = (arg: Person | Dog): arg is Dog => {
  return (arg as Dog).ageInDogYears !== undefined;
};
