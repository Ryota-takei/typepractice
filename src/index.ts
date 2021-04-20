document.getElementById("app")!.innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  starDate: Date;
};

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
  name: "Max",
  privileges: ["create-server"],
  starDate: new Date()
};

type Combineable = string | number;
type Numberic = number | boolean;

type Universal = Combineable & Numberic;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combineable, b: Combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + +b.toString();
  }
  return a + b;
}

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);
//   if ("privileges" in emp) {
//     console.log(emp.privileges);
//   }
// }

// printEmployeeInformation({ name: "ema", starDate: new Date() });

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function MoveAnimal(animal: Animal) {
//   // if ("flyingSpeed" in animal) {
//   //   console.log(animal.flyingSpeed);
//   // }

//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log(speed);
// }

// MoveAnimal({ type: "bird", flyingSpeed: 5 });

// // const input = <HTMLInputElement>document.getElementById("message-output")!;
// const input = document.getElementById("message-output");

// if (input) {
//   (input as HTMLInputElement).value = "こんにちは";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "正しいメールアドレスではありません",
//   userName:"ユーザー名に記号を含めることはできません"
// };

const result = add("hello", "ts");
result.split(" ");

const fetcheUserData = {
  id: "ul",
  name: "user1",
  job: {
    title: "developer",
    description: "typescript"
  }
};

console.log(fetcheUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "DEFALUT";

console.log(storedData);
