# Best Practices

These best practices more of a knowledge sharing which have been acquired collectively while working in different projects, or reading articles, books, and other resources. The main objective of this document is to produce readable, reusable, consistent, and refactorable software.

Not every practices herein has to be strictly followed, and even fewer will be universally agreed upon. These are guidelines and nothing more.

## Table of Contents

1. [HTML](#html)
1. [CSS](#css)
1. [Angular](#angular)
1. [Typescript](#typescript)
1. [Node JS](#node-js)
1. [User Experience](#user-experience)
1. [Security](#security)
1. [Git](#git)
1. [Markdown](#markdown)
1. [Content Creation](#content-creation)
1. [Others](#others)

## HTML

### 1.1 Do not use `placeholder` if it same as `label`

Do not use `placeholder` if it same as `label`. The placeholder should be used to provide `hints and tips`.

**Otherwise:** It will cause duplication.

### 1.2 Do not use `plain text`

We should not have plan text into HTML it should be enclosed in some element like `div` or `span`.

### 1.3 Use `links` instead of `buttons`

If `buttons` are outside of the form then we should use `links` instead of `buttons`.

## CSS

### 1.1 Don't write `inline styles`

We should not write inline styles. We should use external stylesheets.

**Otherwise:** You cannot reuse the styles anywhere else. Also, it the html markup of the page becomes cumbersome, and tough to parse.

### 1.2 Use `class` selectors instead of `id`

Instead of using the `id` selector we should use the `class` selectors as they are reusable.

**Code Example** - `Do` -

```html
<header>
  <h4 class="sidebar-heading">Sub Heading</h4>
</header>
```

**Code Example** - `Avoid` -

```html
<header>
  <h4 id="sidebar-heading">Sub Heading</h4>
</header>
```

### 1.3 Use `hidden` attribute

To hide a DOM element, you don't need JavaScript. A native HTML attribute is enough hidden. The effect is similar to adding a style `display: none;`. The element simply disappears from the page.

#### Code Example

```html
<p hidden>This paragraphs is not visible on page</p>
```

## Angular

### 1.1 Use proper `file namings`

The Angular official style guide is pretty straight forward in providing the best way to name the files that contain the building blocks of Angular.

- `Components` should be suffixed with `.component.ts`
- `Directives` should be suffixed with `.directive.ts`
- `Pipes` should be suffixed with `.pipe.ts`
- `Guards` should be suffixed with `.guard.ts`
- `Interceptors` should be suffixed with `.interceptor.ts`
- `Modules` should be suffixed with `.module.ts`
- `Routing` Modules should be suffixed with `-routing.module.ts`
- `Other files` should be named according to what they do, for example a file containing `utility filter` functions should be stored in a file named `filtering.ts` inside a `utils` folder at the `src` level.

### 1.2 Avoid using `nested subscriptions`

We should use `higher-order` observables like `switchMap()` to flatten or join the inner observables.

**Otherwise:** It causes pyramid shaped callback hell and make code unreadable.

**Code Example** - `Do`

```typescript
todo$ = Observable<Todo> = this.route.params.pipe(
map(params => +params['id]),
switchMap(id => this.todoStore.getTodoById(id))
);
```

**Code Example** - `Avoid`

```typescript
this.route.params.subscribe(params =>
const id = +params['id];
this.todoStore.todos.subscribe({todo: Todd[]} => {
    this.todo = todos.find(todo => todo.id === id);
    });
}
```

### 1.3 Naming convention for `subject` and `observable`

We should postfix `subject` with `subject` and observable with `$`

**Code Example** -

```typescript
 private categorySelectionSubject = new Subject<number>();
  categorySelectedAction$ = this.categorySelectionSubject.asObservable();
);
```

### 1.4 Do not use `functions` in the `templates`

We should use functions in the templates as they are bad for performance. Instead of this, we use `pipes` for smoother code execution.

**Code Example** - `Do`

```typescript
 <span> {{ travelDetailsJson | travelDetails: 'source' }} </span>
  <mat-tab label="{{ 'New' | userTabName: isAdmin }}">
    <mat-tab label="{{ 'New' | userTabName: isAdmin:isReadonly }}"></mat-tab
  ></mat-tab>
```

**Code Example** - `Avoid`

```typescript
<span> {{ getSourceDetails(travelDetailsJson); }} </span>
```

### 1.5 Use `asapSchedule` instead of `setTimeOut`

We should use `asapSchedule` from `rxjs` instead of `setTimeOut` for adding delay.

### 1.6 Use `takeUntil` or `take(1)`

Instead of writing the code for `unsubscribe` from an `observable` on a specific event like on destroying of a component, we should use `takeUntil`, `take(1)`.

**Otherwise:** Failing to unsubscribe from observables will lead to unwanted memory leaks as the observable stream is left open, potentially even after a component has been destroyed / the user has navigated to another page.

**Code Example** -

```typescript

private _destroyed$ = new Subject();
public ngOnInit (): void {
    iAmAnObservable
    .pipe(
      map(value => value.item)
      // We want to listen to iAmAnObservable until the component is destroyed,
      takeUntil(this._destroyed$)
    )
    .subscribe(item => this.textToDisplay = item);
}
public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
}

```

### 1.7 Avoid `logic` inside the `subscribe` function

By this, our code become more functional from imperative and even looks cleaner.

**Code Example** - `Do`

```typescript
pokemon$
  .pipe(
    filter(({ type }) => type !== 'Water'),
    map((pokemon) => getStats(pokemon)),
    tap((stats) => logStats(stats))
  )
  .subscribe((stats) => saveToPokedex(stats));
```

**Code Example** - `Avoid`

```typescript
pokemon$.subscribe((pokemon: Pokemon) => {
  if (pokemon.type === 'Water') {
    return;
  }
  const pokemonStats = getStats(pokemon);
  logStats(pokemonStats);
  saveToPokedex(pokemonStats);
});
```

### 1.8 Use `json` pipe for debugging

We should use `json` pipe to see the `data` on the `template` which is useful for debugging purpose.

**Code Example** -

```html
<div><pre> {{profileForm | json}}</pre></div>
```

### 1.9 Use `child component` when using `ngFor`

Whenever we write an `ngFor` directive on an HTML element with children, consider separating that element into a dependent component. This makes for lesser code in the parent component and allows to delegate any repeating logic to the child components

**Code Example** - `Do`

```html
<user-detail-component *ngFor="let user of users" [user]="user"></user-detail-component>
```

**Code Example** - `Avoid`

```html
<div *ngFor="let user of users">
  <h3 class="user_wrapper">{{user.name}}</h3>
  <span class="user_info">{{ user.age }}</span>
  <span class="user_info">{{ user.dateOfBirth | date : 'YYYY-MM-DD' }}</span>
</div>
```

### 1.10 Delegate harder than `primitive logic` from `templates` to `component methods`

Any logic other than checking straightforward conditions should be written in the component's class method, not in the template directly. It is, writing `*ngIf="someVariable === 1"` in our template is OK, anything longer should be moved away.

**Code Example** - `Do`

```html
<div [formGroup]="form" [ngClass]="{'has-error': hasFieldError('firstName')}">
  <input type="text" formControlName="firstName" />
</div>
```

**Code Example** - `Avoid`

```html
<div
  [formGroup]="form"
  [ngClass]="{
          'has-error': (form.controls['firstName'].invalid && (submitted || form.controls['firstName'].touched))
          }">
  <input type="text" formControlName="firstName" />
</div>
```

### 1.11 Use `ngFor` with `trackBy`

We use the `ngFor` directive to iterate arrays in Angular templates. When we change an array, the complete `DOM tree` gets re-renders, which is not performance-wise. To solve this, we must use `ngFor` with `trackBy`, which uniquely identifies each DOM element and enables Angular to re-render only the modified element

**Code Example** -

```typescript

@Component({
  selector: 'my-app',
  template: `
  <li *ngFor="let product of products; trackBy:productById"></li>
  `
})
export class App {
  products:[
    {id:0, name: "product 1"},
    {id:1, name: "product 2"}
  ];
  productById(index, product){
    return product.id;
  }
```

### 1.12 In angular app avoid using enums as they can't be tree shaken

### 1.13 Use image optimization technique by using "ngSrc" attribute instead of "src" also set the dimensions (width and height) to avoid content shifting

### 1.14 Avoid creating large shared enums and barrel files

#### 2.1 Use `Declarative Data Access` pattern

We should use this pattern from getting the data from service to showing it on the UI. The advantage is that we don't have to use the 'subscribe' and 'unsubscribe' code block as we use the 'async' pipe.

**Code Example** -

```html
<div *ngIf="products$ | async as products">
  <button type="button" *ngFor="let product of products">
    {{product.productName}} ({{product.category}})
  </button>
</div>
```

```typescript
products$ = this.productService.products$;
```

```typescript
product$ = this.http.get<Product[]>(this.url).pipe(
  tap((data) => console.log(data)),
  catchError(this.handleError)
);
```

### 2.2 Use `adapter pattern`

We should use `adapter pattern` while consuming the `3rd party library` so that we can replace them later-on without any issue.

## Typescript

### 1.1 No `Mental Mapping`

We usually make mental mapping when coding quickly. Of course, things are readable and clear for us, but that's not professional since your future self or a future other developer won't understand your mapping right away.

**Code Example** - `Do`

```typescript
names.forEach((name) => {
  this.notifyUsers(name);
});
```

**Code Example** - `Avoid`

```typescript
names.forEach((u) => {
  this.notifyUsers(u);
});
```

### 1.2 `Functions` should do one thing

A function name should be a verb or a phrase, fully exposing the intent behind it and the intent of the arguments. Their name should say what they do. You can check if your function is clean and successful if it does one thing and it does it well, as well as having a clear and meaningful name.

**Code Example** - `Do`

```typescript
function notifyUser() {}

function getUsers() {}

function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  fs.create(`./public/${name}`);
}
```

**Code Example** - `Avoid`

```typescript
function notify() {}

function getUsers() {}

function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}
```

### 1.3 Use `includes()` to instead `multiple conditions`

We often use multiple conditions when coding. We can use an array to store multiple values because the Array object has already a built-in method named `includes`

**Code Example** - `Do`

```typescript
if (['orange', 'red', 'gray'].includes(x)) {
  // do something
}
```

**Code Example** - `Avoid`

```typescript
if (x === 'orange' || x === 'red' || x === 'gray') {
  // do something
}
```

### 1.4 Use `Template Literals` to concatenate strings

We should use template literals to concatenate the strings variables instead of using `+`, we can make it much lighter with the `${}` and ```

**Code Example** - `Do`

```typescript
const winnerMsg = `Congrats to the winner: ${winnerName}, you got a ${gift}`;

const msg = `Working in conjunction with humanitarian aid agencies,
  we have supported programmes to help alleviate human suffering.`;
```

**Code Example** - `Avoid`

```typescript
const winnerMsg = 'Congrats to the winner: ' + winnerName + ', you got a ' + gift;

const msg =
  'Working in conjunction with humanitarian aid agencies,\n\t' +
  'we have supported programmes to help alleviate human suffering. \n\t';
```

### 1.5 Avoid using `Magic Numbers`

A magic number means we are assigning a number with no clear meaning. Sometimes we use a value for a specific purpose, and we don't assign the value in a meaningful variable. The problem is that when someone works with your code, then the person doesn't know the meaning of that direct value.

**Code Example** - `Do`

```typescript
let NUMBER_OF_STUDENTS = 50;
for (let i = 0; i < NUMBER_OF_STUDENTS; i++) {
  //do something
}
```

**Code Example** - `Avoid`

```typescript
for (let i = 0; i < 50; i++) {
  //do something
}
```

### 1.6 Avoid `Deep Nesting`

Sometimes we use nested loops that are difficult to understand. The way to handle that is to extract all loops into separate functions instead. Suppose we have an array of another array that contains another array, and we want the value of the last array. We can write a nested loop that will work for our requirements. But this is not the proper way. It will make code much cleaner, easier, less repetitive, easier to read, and reusable.

**Code Example** - `Do`

```typescript
const array = [[['John Snow']]];
const getValuesOfNestedArray = (element) => {
  if (Array.isArray(element)) {
    return getValuesOfNestedArray(element[0]);
  }
  return element;
};
getValuesOfNestedArray(array);
```

**Code Example** - `Avoid`

```typescript
const array = [[['John Snow']]];
array.forEach((firstArr) => {
  firstArr.forEach((secondArr) => {
    secondArr.forEach((element) => {
      console.log(element);
    });
  });
});
```

### 1.7 Avoid `Large Functions`

When a function or a class is much larger, then it is suggested to separate it into multiples. This will make our code easier, clean, easy to understand, and also reusable. When there are individual functions, then this will be reusable in the whole application.

**Code Example** - `Do`

```typescript
// add
const add = (a, b) => {
  return a + b;
};
// sub
const sub = (a, b) => {
  return a - b;
};
```

**Code Example** - `Avoid`

```typescript
const addSub = (a, b) => {
  // add
  const addition = a + b;
  // sub
  const sub = a - b;
  // returning as a string
  return `${addition}${sub}`;
};
```

### 1.8 Favor `Descriptive` Over `Concise`

Try to use detail for any naming. Suppose we need a function that will find a user with their phone. Here we can use meaningful names, but there is a huge possibility of mistakes if there are other, similar functions. We must use a detailed, meaningful name that expresses the meaning in a nutshell.

**Code Example** - `Do`

```typescript
const searchUserByPhoneNo = (phone) => {
  //Do something
};
```

**Code Example** - `Avoid`

```typescript
const searchUser = (phone) => {
  //Do something
};
```

### 1.9 `Capitalize` Constant Values (SNAKE UPPER CASE)

We should fully capitalized names for constants. Snake uppercase means all the letters will be uppercase, and an underscore will separate all the words.

**Code Example** -

```typescript
const DAYS_IN_A_YEAR = 365;
```

### 1.10 Avoid `Inlining Function Types`

Instead of that, you should declare your types explicitly above the function. The function becomes much easier to read and understand what is going on. You will still get your IntelliSense in your editor and if you still need to understand the types, the types are declared immediately above.

**Code Example** - `Do`

```typescript
type SearchParams = {
  title?:string;
  publishYear?:string;
  author?:string;
  }

  type Book = {
  isbn:string;
  title:string;
  publishYear:string;
  author:string[];
  }

  type GetBooks (s:SearchParams) => Promise<Book[]>

  const getBooks:GetBooks = searchParams =>
      fetch(api + createQuery(searchParams))
      .then(res=>res.ok ? res.json(): Promise.reject(res))
```

**Code Example** - `Avoid`

```typescript
const getBooks=(
  searchParams
  :{
      title?:string;
      publishYear?:string;
      author?:string;
  }):Promise<({
      isbn:string;
      title:string;
      publishYear:string;
      author:string[];
      })[]>{
  return fetch(api + createQuery(searchParams:{
      title?:string;
      publishYear?:string;
      author?:string;
  })).then(res=>res.ok ? res.json(): Promise.reject(res))
}
```

### 1.11 Use `strong type checks`

We should use `===` instead of `==`

**Code Example** - `Do`

```typescript
if (val === '123') {
  console.log(val);
}
```

**Code Example** - `Avoid`

```typescript
if (val == 123) {
  console.log(val);
}
```

### 1.12 Use proper `variable naming`

Name your variables in a way that they reveal the intention behind them. This way they become searchable and easier to understand after a person sees them. Also, don't add extra unneeded words or context to the variable names.

**Code Example** - `Do`

```typescript
const MAX_AGE = 30;
let daysSinceLastVisit = 10;

let currentYear = new Date().getFullYear();
const isUserOlderThanAllowed = user.age > MAX_AGE;
```

**Code Example** - `Avoid`

```typescript
let daysSLV = 10;
let y = new Date().getFullYear();

let ok;
if (user.age > 30) {
  ok = true;
}
```

**Code Example** - `Do`

```typescript
let name;
let product;
```

**Code Example** - `Avoid`

```typescript
let nameValue;
let theProduct;
```

**Code Example** - `Do`

```typescript
const product = {
  id: 1,
  name: 'T-Shirt',
  price: 8.99,
  units: 12,
};
product.name;
```

**Code Example** - `Avoid`

```typescript
const product = {
  productId: 1,
  productName: 'T-Shirt',
  productPrice: 8.99,
  productUnits: 12,
};
product.productName;
```

### 1.13 Use proper `function naming`

Use long and descriptive names. Considering that it represents a certain behavior, a function name should be a verb or a phrase fully exposing the intent behind it as well as the intent of the arguments. Their name should say what they do.

Avoid a long number of arguments. Ideally, a function should have two or fewer arguments specified. The fewer the arguments, the easier is to test the function.

Also, we should use default arguments instead of conditionals.

**Code Example** - `Do`

Descriptive Name

```typescript
function sendEmailUser(emailAddress) {
  // implementation
}
```

**Code Example** - `Avoid`

```typescript
function email(user) {
  // implementation
}
```

**Code Example** - `Do`

Less number of arguments

```typescript
  function getProducts({ fields, fromDate, toDate }) {
  // implementation
  }

  getProducts({
  fields: ['id', 'name', 'price', 'units],
  fromDate: '2020-07-01',
  toDate: '2020-07-22'
  });
```

**Code Example** - `Avoid`

```typescript
function getProducts(fields, fromDate, toDate) {
  // implementation
}
```

**Code Example** - `Do`

Default arguments

```typescript
function createShape(type = 'circle') {
  // ...
}
```

**Code Example** - `Avoid`

```typescript
function createShape(type) {
  const shapeType = type || 'circle';
  // ...
}
```

### 1.14 Use `scan` instead of `reduce` operator

Because reduce is an aggregate operator which emits aggregate result on completion, but scan is a transformational operator which emits accumulated result at each interval. It is preferred because while working with streams we want an intermittent result rather than waiting for a single aggregated result at completion.

**Code Example** -

```typescript
const source$ = range(0, 10);

source$
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x + x),
    scan((acc, x) => acc + x, 0)
  )
  .subscribe((x) => console.log(x));
```

### 1.15 Place most of the code outside the `conditional branch`

If we have to run a certain code only if a condition is met, The problem with this approach is that the execution of the function can become difficult to follow, especially if the code in the if the branch is much longer.

**Code Example** - `Do`

```typescript
function drawRectangle(e) {
  const mouseOutOfBounds = this.getMousePos(e);
  if (mouseOutOfBounds) {
    return;
  }

  const ctx = this.canvas.getContext('2d');

  ctx.beginPath();
  ctx.lineWidth = '4';
  ctx.strokeStyle = 'green';
  ctx.rect(30, 30, 50, 50);
  ctx.stroke();
}
```

**Code Example** - `Avoid`

```typescript
function drawRectangle(e) {
  const mouseOutOfBounds = this.getMousePos(e);
  if (!mouseOutOfBounds) {
    const ctx = this.canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = '4';
    ctx.strokeStyle = 'green';
    ctx.rect(30, 30, 50, 50);
    ctx.stroke();
  }
}
```

### 1.16 Use `Optional Chaining`

Optional chaining is useful when you have a big object that contains other nested objects and you want to check if some properties are available on that object without getting an error. The optional chaining `?.` is used to check if a value or a property before `?.` is `null` or `undefined`. If it is, it returns `undefined`. Otherwise, it just returns the value.

**Code Example** - `Do`

```typescript
const value = data?.test?.value;
console.log(value);

// We can also use it with functions
const person = {
  name: 'John',
  age: 19,
  fullName() {
    return 'John Snow';
  },
};

person.lastName(); //Error.
person.lastName?.(); //undefined(no error).
person.fullName?.(); //John Snow
```

**Code Example** - `Avoid`

```typescript
const data = { test: { value: 1 } };
if (data && data.test) {
  console.log(data.test.value);
}
```

### 1.17 Use `Nullish Coalescing`

The nullish coalescing operator `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined` , and otherwise returns its left-hand side operand.

**Code Example** - `Do`

```typescript
let maybeValue = '';
let safeValue = maybeValue ?? 'value';
console.log(safeValue); // ""
maybeValue = null;
let safeValue = maybeValue ?? 'value';
console.log(safeValue); // "value"

const authorName = book?.author?.firstName ?? 'Unknown';
```

**Code Example** - `Avoid`

```typescript
let maybeValue = 'I exist';
let safeValue = maybeValue || 'value';
console.log(safeValue); // I exist
```

### 1.18 Passing `arguments` as `objects`

This way of passing arguments has lots of benefits: The order of the parameters does not matter anymore, allowing you to concentrate on delivering high-quality code instead of repeatedly checking the function definition. Auto-completion becomes easier as the `IDE` will focus on the specific argument that you are providing.

**Code Example** -

```typescript
const createProduct = ({ name, description, price }) => {
  // Create the product
};

createProduct({
  name: 'Pepperoni Pizza',
  description: 'Hot, crispy and tasty!',
  price: 15.99,
});
```

### 1.19 Use `Object.entries()` to check empty object

We can use the `Object.entries()` method to check whether an object is empty or not. Since `Object.entries()` returns the array of the object's enumerable properties, therefore if the length of that array is `0`, that means the object is empty such that the object has `0` property.

**Code Example** -

```typescript
let sampleObj = {
  name: 'Mark',
  occupation: 'Developer',
};
let emptyObj = {};
console.log(Object.entries(sampleObj).length === 0); // false
console.log(Object.entries(emptyObj).length === 0); // false
```

### 1.20 Use `early return` pattern

A code full of `if` and `else` is Inefficient, Hard to read and Hard to maintain. `Return early` is a pattern where it is recommended to return your results as early as possible instead of `else` statement usages. By applying the return early pattern, our code has become More contrived, More readable and More efficient.

**Code Example** - `Do`

```typescript
function FizzBuzz(i) {
  if (i % 15 == 0) {
    return 'FizzBuzz';
  }
  if (i % 3 == 0) {
    return 'Fizz';
  }
  return i % 5 == 0 ? 'Buzz' : i;
}
```

**Code Example** - `Avoid`

```typescript
function FizzBuzz(i) {
  let result = undefined;
  if (i % 15 == 0) {
    result = 'FizzBuzz';
  } else if (i % 3 == 0) {
    result = 'Fizz';
  } else if (i % 5 == 0) {
    result = 'Buzz';
  } else {
    result = i;
  }
  return result;
}
```

### 1.21 Use `dot` over `bracket` syntax

We should use `dot` syntax whenever we know what our properties are, it makes code more succinct and easier to read. The only time we should use `bracket` syntax is when the property is a variable that may be subject to change.

**Code Example** - `Do`

```typescript
book.preface.intro = 'Section 1';
```

**Code Example** - `Avoid`

```typescript
book['preface']['intro'] = 'Section 1';
```

### 1.22 Use `spread` operator to conditionally add properties to object or array

We should the `spread` operator, `...`, to quickly add properties to a `object` or 'array' conditionally.

**Code Example** -

```typescript
const condition = true;
const person = {
  id: 1,
  name: 'John Doe',
  ...(condition && { age: 16 }),
};
```

```javascript
const fruits = ['a', 'b', ...(isSummer ? ['w'] : [])];
```

### 1.23 Use `in` keyword to check property exist in an object

We should use the `in` keyword to check whether a property exists in an object

**Code Example** -

```typescript
const person = { name: 'John Doe', salary: 1000 };
console.log(salary in person); // returns true
console.log(age in person); // returns false
```

### 1.24 Use `multiline` over `single-line` comment

We should prefer the multiline comments instead of using the single-line comment incase for the long comment text.

**Code Example** - `Do`

```typescript
/*
  This is also another comment which is long but
  this comment is written as a multi-line comment
*/
```

**Code Example** - `Avoid`

```typescript
// This is a long comment
// Which is written as multiple single line comment.
```

### 1.25 Use `Union Types` instead of `Enum`

We should use union types instead of `enum` as they supports more features, linear and doesn't get compiled.

If we need to use `enum` then we should make it `const`, then it will not get compiled into build output. For magic strings, we can replace them with `enum`.

**Code Example** - `Do`

```typescript
export type GamePadInput = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
```

**Code Example** - `Do`

```typescript
const enum ProductType = {
    Sports,
    HomeGoods,
    Groceries
}
```

**Code Example** - `Avoid`

```typescript
enum GamePadInput {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

### 1.26 Avoid `Code Duplication`

We should do our absolute best to avoid duplicate code. Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

**Code Example** - `Do`

```typescript
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience,
    };

    switch (employee.type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects();
        break;
      case 'developer':
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```

**Code Example** - `Avoid`

```typescript
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}
```

### 1.27 Avoid using `flags` as `function parameters`

Flags means that this function does more than one thing. Functions should do one thing. Split out your functions if they are following different code paths based on a boolean.

**Code Example** - `Do`

```typescript
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

**Code Example** - `Avoid`

```typescript
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```

### 1.28 Avoid `positional markers`

They usually just add noise. Let the functions and variable names along with the proper indentation and formatting give the visual structure to your code.

**Code Example** - `Do`

```typescript
$scope.model = {
  menu: 'foo',
  nav: 'bar',
};

const actions = function () {
  // ...
};
```

**Code Example** - `Avoid`

```typescript
// Bad
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar',
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function () {
  // ...
};
```

### 1.29 Avoid `Contraction`

We should not use contractions. They contribute to nothing but decreased readability of the code. We should find a short, descriptive name.

**Code Example** - `Do`

```typescript
const onItemClick = () => {};
```

**Code Example** - `Avoid`

```typescript
const onItmClk = () => {};
```

### 1.30 Use `named parameters`

We should use named parameters instead of using `options` object which makes it hard to know what options a function accepts. Using named parameters for optional settings makes it easier to understand how a function should be invoked. We also doesn't have to assign it into the local variables. Also, it is okay to omit some options when invoking a function with named parameters, these properties will be marked as `undefined`.

**Code Example** - `Do`

```typescript
function setPageThread(name, options = ({ popular, expires, activeClass } = {})) {
  console.log(popular);
  console.log(expires);
  console.log(activeClass);
}
```

**Code Example** - `Avoid`

```typescript
function setPageThread(name, options = {}) {
  let popular = options.popular;
  let expires = options.expires;
  let activeClass = options.activeClass;
}
```

### 1.31 Avoid calling `Object.prototype` methods directly

`Object.prototype` methods like `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf` shouldn't be called on the object itself since it may be shadowed by the properties on the `object` in question. Our object may have non-inherited properties with the same name, or it might have been created without the `Object` prototype by calling `Object.create(null)`. Therefore, to make sure that we can call those methods, we should use `call` method.

**Code Example** -

```typescript
const obj = {
  a: 1,
};
const hasA = Object.prototype.hasOwnProperty.call(obj, 'a');
```

### 1.32 Avoid using `nested subscriptions`

We should use `higher-order` observables like `switchMap()` to flatten or join the inner observables.

**Otherwise:** It causes pyramid shaped callback hell and make code unreadable.

**Code Example** - `Do`

```typescript
todo$ = Observable<Todo> = this.route.params.pipe(
map(params => +params['id]),
switchMap(id => this.todoStore.getTodoById(id))
);
```

**Code Example** - `Avoid`

```typescript
this.route.params.subscribe(params =>
const id = +params['id];
this.todoStore.todos.subscribe({todo: Todd[]} => {
    this.todo = todos.find(todo => todo.id === id);
    });
}
```

### 1.33 Use `Type Annotations` over `Type Assertions`

This enforces type safety and will cause compile-time errors if the declared type is missing any properties or wrongly typed.

**Code Example** - `Do`

```typescript
const william: Person = {
  name: 'William',
  age: 25,
  occupation: 'artist',
};
```

**Code Example** - `Avoid`

```typescript
const john = {
  name: 'John',
  age: 25,
} as Person;
// bad :(
const william = <Person>{
  name: 'William',
  age: 25,
};
```

### 1.34 Use `compound operators`

The `++` operator was used to do `pointer arithmetic`, now it is used to add `1` to variable. We should not use this operator. Instead of this, we use `compound operators` like `+=`.

### 1.35 Avoid assigning variable as `undefined`

As a developer we should not assign `undefined` to `variables`, we let the `JavaScript` to do that, we should use `null` assignment in that case. The `null` is an object type and type of `undefined` is `undefined` itself.

### 1.36 Use conditionals encapsulation

We should wrap the conditional block into a function by having descriptive name. It will increase the readiablity.

**Code Example** - `Do`

```typescript
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
```

**Code Example** - `Avoid`

```typescript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

### 1.37 Don't ignore caught errors

Doing nothing with a caught error doesn't give you the ability to ever fix or react to said error. Logging the error to the `console` (console.log) isn't much better as often times it can get lost in a sea of things printed to the `console`. If you wrap any bit of code in a `try/catch` it means you think an error may occur there and therefore you should have a plan, or create a code path, for when it occurs.

**Code Example** - `Do`

```typescript
try {
  functionThatMightThrow();
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
}
```

**Code Example** - `Avoid`

```typescript
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}
```

### 1.38 Don't ignore rejected promises or observables

For the same reason you shouldn't ignore caught errors from `try/catch`.

**Code Example** - `Do`

```typescript
getData()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
  });
```

**Code Example** - `Avoid`

```typescript
getData()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

### 1.39 Use Logical nullish assignment (??=)

The logical nullish assignment (`x ??= y`) operator only assigns if `x` is `nullish` (null or undefined).

**Code Example** - `Do`

```typescript
let user = { name: 'John Snow' };
user.twitterName ??= '@john_snow';
```

**Code Example** - `Avoid`

```typescript
let user = { name: 'John Snow' };
if (!user.twitterName) {
  user.twitterName = '@john_snow';
}
```

### 1.40 No Implicit Else

Tt causes problems like readability, cognitive load, unforeseen conditions and fail-fast principle violation. Th solution can be to write the explicit else. If we early return on an `if` sentence then we can omit the `else` part.

**Code Example** - `Do`

```typescript
function carBrandExplicit(model) {
  if (model === 'A4') {
    return 'audi';
  }
  if (model === 'AMG') {
    return 'Mercedes-Benz';
  }
  // Fail Fast
  throw new Exception('Model not found);
}
```

**Code Example** - `Avoid`

```typescript
function carBrandImplicit(model) {
  if (model === 'A4') {
    return 'audi';
  }
  return 'Mercedes-Benz';
}
```

### 1.41 Avoid using private keyword

In TypeScript, we have 2 ways to make fields in a class private. There is the old private keyword, which can only be used in TypeScript. Then there’s the new #field syntax, a feature of ECMAScript 2022.

These two features are roughly the same, so it is recommended that you use #field instead. Since it's a feature natively supported by JavaScript, the private keyword is just a TypeScript patch when #field is not supported.

**Code Example** - `Do`

```typescript
class Test {
  #age: number;
}
```

**Code Example** - `Avoid`

```typescript
class Test {
  private name: number;
}
```

### 1.42 at() method for array and string

We can access an item of an array at position i by writing A[i]. But what if i is negative and we want to get the element from the end of the array? We can write A[A.length + i]. But it’s not very convenient. Another way is use A.slice[i](0). But it’s not very efficient.

**prefer** -

```typescript
const A = [2, 4, 6, 8, 10];
A.at(-1); // 10
const S = 'Hello World';
S.at(-1); // 'd'
```

### 1.43 Find an item in an array from the end with findLast()

**prefer** -

```typescript
const A = [1, 20, 3, 40, 5];
A.find((v) => v % 10 == 0); // 20
A.findLast((v) => v % 10 == 0); // 40
A.findIndex((v) => v % 10 == 0); // 1
A.findLastIndex((v) => v % 10 == 0); // 3
A.findLastIndex((v) => v == 0); // -1
```

### 1.44 Let’s use hasOwn() instead of hasOwnProperty()

There is Object.prototype.hasOwnProperty() method to check if an object has a property as its direct property. But it’s quite cumbersome to use. Keep in mind that JavaScript is a dynamic language. We can add a property to any object. So hasOwnProperty() can be shadowed by a property of the object with the same name. To avoid this, we can use hasOwn() method

**avoid** -

```typescript
let hasOwnProperty = Object.prototype.hasOwnProperty;
if (hasOwnProperty.call(object, 'foo')) {
  console.log('has property foo');
}
```

**prefer** -

```typescript
if (Object.hasOwn(object, 'foo')) {
  console.log('has property foo');
}
```

### 1.45 cause is a new property of error

It’s very common to see error handling code like this:

```typescript
await fetch('https://example.com/data.csv').catch((err) => {
  throw new Error('failed to get: ' + err.message);
});
```

What it does is wrapping the original error with a new error. But the original error is lost. Now we can use cause property to store the original error and retrieve it later:

```typescript
await fetch('https://example.com/data.csv')
  .catch((err) => {
    throw new Error('failed to get', { cause: err });
  })
  .catch((err) => {
    console.log('cause', err.cause);
  });
```

### 1.46 Optional properties

Defining properties as optional that are sometimes there and sometimes not. We should clearly expressed,model which combinations exist and which don’t. Defining properties as optional in lieu of dividing types is easier and generates less code. It also needs a sound understanding of the product being developed and can limit usage of code if assumptions about the product change.

**Avoid** -

```typescript
interface Product {
  id: string;
  type: 'digital' | 'physical';
  weightInKg?: number;
  sizeInMb?: number;
}
```

**Prefer** -

```typescript
interface Product {
  id: string;
  type: 'digital' | 'physical';
}

interface DigitalProduct extends Product {
  type: 'digital';
  sizeInMb?: number;
}

interface PhysicalProduct extends Product {
  type: 'physical';
  sizeInKg?: number;
}
```

### 1.47 One letter generics

We should give a full descriptive type name.

**Avoid** -

```typescript
function head<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

**Prefer** -

```typescript
function head<Element>(arr: Element[]): Element | undefined {
  return arr[0];
}
```

### 1.48 Optional properties - Defining properties as optional that are sometimes there and sometimes not. We should clearly expressed,model which combinations exist and which don’t. Defining properties as optional in lieu of dividing types is easier and generates less code. It also needs a sound understanding of the product being developed and can limit usage of code if assumptions about the product change

**Avoid** -

```typescript
interface Product {
  id: string;
  type: 'digital' | 'physical';
  weightInKg?: number;
  sizeInMb?: number;
}
```

**Prefer** -

```typescript
interface Product {
  id: string;
  type: 'digital' | 'physical';
}

interface DigitalProduct extends Product {
  type: 'digital';
  sizeInMb?: number;
}

interface PhysicalProduct extends Product {
  type: 'physical';
  sizeInKg?: number;
}
```

### 1.49 One letter generics - Should Give a full descriptive type name

**Avoid** -

```typescript
function head<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

**Prefer** -

```typescript
function head<Element>(arr: Element[]): Element | undefined {
  return arr[0];
}
```

### 1.50 Use new way of injecting dependencies using the inject() function

It makes the code cleaner, more readable and consistent (even when injecting tokens vs services).The types will be automatically inferred and do not need to be manually specified and easier and less verbose inheritance (more details about this below).

import { Component, inject } from '@angular/core';

```typescript
@Component({
  /*...*/
})
export class MyComponent {
  private readonly someToken = inject(SOME_TOKEN);
  private readonly myService = inject(MyService);
  private readonly httpClient = inject(HttpClient);
}
```

### 1.51 Class Names

Classes and objects should have noun or noun phrase names like Customer, WikiPage, Account, and AddressParser. Avoid words like Manager, Processor, Data, or Info in the name of a class. A class name should not e a verb.

### 1.52 Method Names

Methods should have verb or verb phrase names like postPayment, deletePage, or save.

### 1.53 Pick one word per concept

Pick one word for one abstract concept and stick with it. For instances, it is confusing to have fetch, retrieve, and get as equivalent methods of different classes. Likewise, it is confusing to have a controller and a manager and a driver in the same codebase. A consistent lexicon is a great boon to the programmers who must use your code.

### 1.54 Blocks and Indenting

Blocks within if statements, else statements, while statements, and so on should be one line long. probably that line should be a function call. This also implies that functions should be large enough to hold nested structures. therefore, the indent level of a function should not be greater than one or two. This, ofcourse, makes the functions easier to read and understand.

The smaller and more focused a function is, the easier it is to choose a descriptive name.

### 1.55 Flag arguments

Flag arguments are ugly. passing a boolean into a function is a truly terrible practice. it loudly pro-claiming that this function does more than one thing.

### 1.56 Command query separation

Functions should either do something or answer something, but not both. either your function should change the state of an object, or it should return some information about that object.

### 1.57 Prefer exceptions to returning error codes

When you return an error code, you create the problem that the caller must deal with the error immediately. on the other hand if you use exceptions instead of returned error codes, then the error processing code can be separated from the happy path code and can be simplified.

Do not use a comment when you can use a function or a variable.

### 1.58 Javadocs in Nonpublic code

As useful as javadocs are for public API's, they are anathema to code that is not intended for public consumption.

### 1.59 Vertical Density

Lines of code that are tightly related should appear vertically dense.

### 1.60 Vertical openness between concepts

Each blank line is a visual cue that identifies a new and separate concept.

### 1.61 Horizontal openness and density

We don't put spaces between the function names and the opening parenthesis, this is because the function and its arguments are closely related.

### 1.62 Provide context with exceptions

Each exception that you throw should provide enough context to determine the source and location of an error. Crate informative error messages and pass them along with our exceptions.

### 1.63 Don't return null

All it takes is one missing null check to send an application spinning our of control. If you are tempted to return null from a method, consider throwing an exception or returning a special case object instead. If you are calling a null-returning method from a third-party API, consider wrapper that method with a method that either throws an exception or returns a special case object.

### 1.64 Don't pass null

Returning from methods is bad, but passing null into methods is worse. Unless you are working with an API which expects you to pass null, you should avoid passing null in your code wherever possible.

### 1.65 FIRST Rule

Clean test follow five other rules that form this acronym - Fast - Tests should be fast. Independent - tests should not depend on each other. Repeatable - Tests should be repeatable in any environment. Self-validating - the test should have a boolean output. Either they pass or fail. Timely - The tests need to be written in a timely fashion.

### 1.66 Keep the design "simple" by following these rules

Runs all the tests, contains no duplication, expresses the intent of the programmer, minimizes the number of classes and methods. Duplication is the primary enemy of a well-designed system.

### 1.67 Too much information

A well-defined interface does not offer very many functions to depend upon, so coupling is low. A poorly defined interface provides lots of functions that you must call, so coupling is high. Concentrate on keeping interfaces very tight and very small. Help keep coupling low by limiting information.

### 1.68 In general it is better to have many functions that to pass some code into a function to select the behavior

### 1.69 Prefer polymorphism to If/Else or Switch/Case - consider polymorphism before using a switch

### 1.70 Use long names for long scopes

The length of a name should be related to the length of the scope. You can use very short variable names for tiny scopes, but for big scopes you should use longer names

### 1.71 Names should describe side-effects

Names should describe everything that a function, variable, or class is or does like createOrReturnOos

## Node JS

### 1.1 Do not return the `plain text` as a response

We should not return the plain text as a response from the API. Although this is not imposed or mandated by any REST architectural style, most REST APIs by convention use `JSON` as the data format.

### 1.2 Return the `error details` in the `response body`

We should return the error details in the response body. Even better if you include which fields were affected by the error.

**Code Example** -

```json
{
  "error": "Invalid payload.",
  "detail": {
    "name": "This field is required."
  }
}
```

### 1.3 Use `kebab-case` for `URLs`

We should use kebab-case for URLs - For example, if you want to get the list of orders.

**Code Example** -`Do`

```url
/system-orders
```

**Code Example** - `Avoid`

```url
/systemOrders or /system_orders
```

### 1.4 Use `camelCase` for `Parameters`

We should use camelCase for parameters. For example, if you want to get products from a particular shop.

**Code Example** - `Do`

```url
/system-orders/{orderId}
```

**Code Example** - `Avoid`

```url
/system-orders/{order_id} or /system-orders/{OrderId}
```

### 1.5 Use `Plural Name` to Point to a `Collection`

We should use Plural Name to Point to a Collection.

**Code Example** - `Do`

```url
GET /users
```

**Code Example** -`Avoid`

```url
GET /user or GET /User
```

### 1.6 `URL` Should point to a `property` instead of a `resource`

URL should starts with a collection and ends with an identifier to keep the concept singular and consistent.

**Code Example** -`Do`

```url
GET /shops/:shopId/ or GET /category/:categoryId
```

**Code Example** -`Avoid`

```url
GET /shops/:shopId/category/:categoryId/price
```

### 1.7 Keep `Verbs` out of `Resource URL`

We should not use verbs to express our intention in the URL. Instead, use proper HTTP methods to describe the operation.

**Code Example** -`Do`

```url
PUT /users/{userId}
```

**Code Example** -`Avoid`

```url
POST /updateUser/{userId} or GET /getUsers
```

### 1.8 Use `Verbs` for `Non-Resource URL`

If we have an endpoint that returns nothing but an operation. In this case, we can use verbs. These are not our CRUD operations but considered as functions that do a specific job in our system.

**Code Example** -

If you want to resend the alert to a user.

```url
POST /alerts/245743/resend
```

### 1.9 Use `camelCase` for `JSON` property

If we are building a system in which the request body or response is JSON, the property names should be in camelCase

**Code Example** - `Do`

```json
{
  "userId": "1",
  "userName": "John Snow"
}
```

**Code Example** - `Avoid`

```json
{
  "user_id": "1",
  "user_name": "John Snow"
}
```

### 1.10 Include the `total` number of `resources` in the response

If an `API` returns a list of objects always include the total number of resources in the response. We can use the total property for this.

**Code Example** - `Do`

```json
{
  "users": [{}, {}, ...],
  "total": 34
}
```

**Code Example** - `Avoid`

```json
{
  "users": [{}, {}, ...]
}
```

### 1.11 Validate the `Content-Type`

The server should not assume the content type. Always validate the content-type and if we want to go with a default one then use `content-type: application/json`

**Otherwise:** For example, if you accept `application/x-www-form-urlencoded` then an attacker can create a form and trigger a simple POST request.

### 1.12 Use correct `HTTP Methods`

We should use correct HTTP Methods for CRUD Functions. HTTP methods serve the purpose of explaining CRUD functionality.

- `GET`: To retrieve a representation of a resource.
- `POST`: To create new resources and sub-resources.
- `PUT`: To update existing resources.
- `PATCH`: To update existing resources. It only updates the fields that were supplied, leaving the others alone
- `DELETE`: To delete existing resources.

### 1.13 Return correct `Status Code`

We should return the correct status code against the verbs. A response’s status is specified by its status code: `1xx` for information, `2xx` for success, `3xx` for redirection, `4xx` for client errors and `5xx` for server errors

- `GET`: 200 OK
- `PUT`: 200 OK
- `POST`: 201 Created
- `PATCH`: 200 OK
- `DELETE`: 204 No Content

### 1.14 Use `Async/Await`

We should use `Async/Await` instead of callbacks as it makes code more readable.

### 1.15 Use `__dirname` variable and `path()` function

We should use `__dirname` variable and `path()` function to avoid different window inconsistency while defining path of a file.

**Code Example** -

```typescript
app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname, 'views/index.html'));
});
```

### 1.16 Use `util.inspect()` to debug an `object`

To debug the code we can use `util.inspect(object, showHidden=false, depth=2, colorize=true);` method. It returns a string representation of an object.

## User Experience

### 1.1 Use `Typeahead` or `Combobox`

If a `lookup` has lots of values then make it `Typeahead` component or `combobox`. It will give `select` and `textbox` both to the user.

**Otherwise:** User might have bad user experience while scanning all the value.

### 1.2 `Forms` should be `one column`

One-column forms are more comfortable to scan and conform better to mobile displays.

**Otherwise:** Multiple columns can strain a user and cause them to skip fields accidentally.

### 1.3 Present `checkboxes` and `radios` vertically

It's easier to scan checkbox and radio options when presented vertically. However, presenting options with associated graphics can add an extra dimension to the design that negates the need for a vertical presentation.

![image](./src/assets/images/bp-ux-show-vertically.jpeg)

### 1.4 Show all `selection options` if < `6`

Use a drop-down selector when there are over 5 options and incorporate search within the drop-down when greater than 25 options otherwise we should use radio-box. However, it's okay to use a drop-down selector for under 6 options if space is limited, like in certain inline editing situations.

**Otherwise:** Placing options in a drop-down selector hides choices and requires two clicks to choose an option.

![image](./src/assets/images/bp-ux-show-radio-instead-selections.jpeg)

### 1.5 Size the `modal` window appropriately

The size of modal window shouldn't be too large. The modal window shouldn't take the entire screen. Ideally, it shouldn't take more than 25% of the screen for the overlay. If you cannot fit your content in a window and want to use a scroll bar, its' probably better to create a separate page for that purpose.

### 1.6 Don't use `nested modals`

Never design a modal window that triggers a modal window.

**Otherwise:** It will add visual complexity to your design.

### 1.7 Use `flat` buttons on modals

To unify the button action with the dialog content.

![image](./src/assets/images/bp-ux-flat-buttons-on-modals.png)

### 1.8 Use `Raised` and `Ghost` buttons

For primary actions, use raised buttons and for secondary or tertiary content we can use ghost buttons.

![image](./src/assets/images/bp-ux-primary-and-ghost-buttons.png)

### 1.9 Provide meaningful placeholder

Use placeholder text to give the user a hint about the data they need to provide. For example, if you ask the user to provide a tracking number, you can add a placeholder with an example of a tracking number).

![user-experience-meaningful-placeholder](./src/assets/images/bp-ux-user-experience-meaningful-placeholder.png)

### 1.10 Add a help icon (“?” or “i”) next to the field to help the user enter the data

A tooltip with helpful information becomes visible when the user hovers over the icon. This feature will be helpful when you want to provide a quick guide on data input ( i.e., you ask the user to provide social security number, but they might know where to find it) or when you collect personal information (i.e., you ask the user to provide a phone number, and want to explain how you will use it).

![user-experience-help-icon.png](./src/assets/images/bp-ux-user-experience-help-icon.png)

### 1.11 Use toggle if you have two options, and they are yes or no instead of `radio` or `select`

### 1.12 Make one primary button

It is generally not a good idea to place a few primary buttons next to each other, as this can confuse users and make it difficult for them to understand which button to click at first sight.

To avoid this issue, you have to combine different types of buttons (filled, with border, plain) if you use them together.

![bp-ux-button-variations.webp](./src/assets/images/bp-ux-button-variations.webp)

### 1.13 Use proper colors for positive and negative actions

For example, a red button might be used to indicate a warning or a destructive action like "Delete", while a green button might be used to indicate a positive action such as saving or approving something. Moreover, you can add an icon to the context to make it even more prominent.

![bp-ux-colored-button.webp](./src/assets/images/bp-ux-colored-button.webp)

### 1.14 Make it clear

It is generally not a good idea to use “Yes” or “No” labels for buttons, as these labels do not provide enough context for users to understand the action that the button initiates.

Your button labels should push users to act with action verbs. When users read an action verb, they know what the button will do like "Save", "Discard" instead of "Yes", "No".

### 1.15 Place checkbox vertically, not horizontally

Vertical alignment can make the options easier to read and understand. Vertical alignment can also make the checkbox group more compact and save space. Placing checkboxes vertically can also make the group more visually distinct.

### 1.16 Use multi-select field if you have more than 7 values

A multi-select field can be a good alternative to a checkbox with more than seven options (The rule of 5 plus minus 2). This allows the user to easily select and deselect multiple options without having to check and uncheck a large number of checkboxes individually.

![bp-ux-prefer-multiselect.webp](./src/assets/images/bp-ux-prefer-multiselect.webp)

### 1.17 - Do not use Long dropdowns

Have you ever tried to get to the needed item in a dropdown menu when it has to be scrolled? Believe us, this is not an easy task, especially for mobile users. Do not complicate their lives, this is not an easy thing, alas.

![bp-ux-avoid-long-dropdowns.webp](./src/assets/images/bp-ux-avoid-long-dropdowns.webp)

### 1.18 - Do not show Unneeded messages

There is nothing worse than texting your boss that you want to quit, change your mind, hastily delete the message, and then try to explain what you wanted to write in it. We are talking about the example below. Many web solutions fall short of this approach. Unlike yours, if you follow our recommendations.

![bp-ux-unneeded-message.webp](./src/assets/images/bp-ux-unneeded-message.webp)

## Security

### 1.1 Use `Guid ID's`

We should use `Guid ID's` as a random ID generator instead of using the `Sequential ID's`.

**Otherwise:** It might lead to the Broken object level authorization security issue.

### 1.2 Harden the `environment`

We should keep all software and its components up-to-date, remove unused features or dependencies.

## Git

### 1. General -

### 1.1 Use prefixes for message

```shell
docs: message, feat: message, fix: message, perf: message, refactor: message, revert: message, style: message, test: message, build: message, ci: message, chore: message
```

### 1.2 Good message examples

```shell
chore: update npm dependency to the latest version
refactor(core): add and move tests for `Dispatcher`.\
fix(zone.js): store remove abort listener on the scheduled task.
fix(docs-infra): remove config release from test scripts
build: update io_bazel_rules_sass digest to 61dde52
docs: resolve extra padding on tutorial editor (#54828)
```

### 1.3 Code review guidelines

Checklist - readability, performance, reusability, test coverage (edge cases), maintainability

### 1.4 Good issue title examples

Use format `[Component] ([Project/Module]) - [Action] [Description]`. This format is detailed and structured, making it easy to understand the scope and context of the issue at a glance. It provides a balanced level of detail, is easy to understand, and helps in quickly identifying the scope and action required.

- routes (example-app) - add examples for all supported functionality
- ui (dashboard) - update styling for the new theme
- backend (auth-service) - fix token expiration issue
- API (user-profile) - remove deprecated endpoints
- docs (setup-guide) - update installation instructions
- database (orders) - optimize query performance
- middleware (security) - implement additional logging
- frontend (homepage) - redesign layout
- notifications (email-service) - fix delivery delays
- testing (unit-tests) - add coverage for new features
- authentication (login) - enhance error handling
- config (deployment) - update environment variables
- cache (redis) - clear stale data periodically
- analytics (tracking) - implement new metrics
- integration (payment-gateway) - fix transaction validation
- localization (translations) - add support for new languages
- access-control (roles) - update permissions for new role
- build (CI/CD) - fix pipeline failure
- dependencies (package) - update to latest version
- logging (monitoring) - reduce log verbosity
- directives (tooltip) - fix positioning issue
- pipes (date-format) - add custom date formats
- modules (shared) - reorganize and optimize imports
- styles (global) - update primary color palette
- routing (app) - fix navigation guard logic
- animations (modal) - enhance open/close transitions
- forms (user-registration) - add validation messages
- testing (unit-tests) - increase coverage for new components
- docs (api-reference) - update with latest changes
- examples (demos) - add example for dynamic forms
- config (angular.json) - update build configurations
- state-management (ngrx) - optimize store selectors
- i18n (translations) - add new language support
- build (webpack) - fix asset bundling issue
- dependency (package.json) - update Angular to latest version
- layout (grid) - improve responsive design
- security (auth) - fix token storage vulnerability
- performance (lazy-loading) - optimize module loading
- components (dropdown) - add multi-select functionality
- services (auth) - implement token refresh logic

## Markdown

### 1.1 Using `numeric` list, instead of `alphabetic` list

We should use numeric list, instead of alphabetic list as numeric lists are easier to scan and read when the list is long.

## Visual Studio Code

- Better prompts

`<!-- add a button for a power (or exponential) function -->`

```javascript
/* draw a brown wooden boat with a white sail on top of a blue ocean
- the sky is light blue with on white cloud
- the cloud has three different sized circles that overlap each other
- the sun is a yellow circle inside a yellow-orange circle inside an orange circle in
- the sail is a large white triangle connected to the top of the dark brown mast down
- the boat is curved at the bottom and has a dark brown rectangle for the body
*/
```

- `# please give me the code in YAML to deploy a WordPress container to a Kubernetes cluster`

- `please document this code`

- `please explain this code to me`

- Provide query in steps like recipe instruction instead of single paragraph, keep relevant tab opened for a better context, provide one or two examples for a better context.

## Content Creation

### Video

- Sounds editing - voice over should should be loudest then music then sound effects, we should use b-roll.
- Create folders for footage, music, sound effects, images, graphics, keep these folder into a folder with that video name.
- Editing steps - plan your edit (timeline rough idea). assembly (just rough cut of a-roll, no visual, music, images or b-roll), visuals (image, b-roll, graphics, color correction on a-roll), music (70% volume dialogue, 30% volume music), sound effects (sfx).
- Video recording tips - don't shoot in back-lighting but in front-lighting or find a flat lighting, do not shoot with front camera but back camera.

### Blogs

- bold formatting might be more appropriate for a call to action, while italic formatting might be more suitable for a quote or a scientific term.

### Presentation

- share various links into one link by using <https://linkmix.co/en/> e.g. <https://linkmix.co/11386218>.

### Others

- Using AI tools -
  - solves anything - `chatgpt`
  - writes anything - `copy.ai`
  - create art - `midjourney`
  - create ppts - `tome.app`
  - create music - `soundraw.io`
  - create video - `kaiber`
  - create 3d gif - `leiapix converter`
  - create reels - `fliki`
  - note taking - `fireflies`
  - edit videos - `runway`
  - create avatars - `anime ai`
