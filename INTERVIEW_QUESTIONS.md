# Interview Questions

- [General](#general)
- [Angular](#angular)
- [Angular Categorical Questions -](#angular-categorical-questions--)
- [Angular Material](#angular-material)
- [JavaScript](#javascript)
- [TypeScript](#typescript)
- [Unit / E2E Testing](#unit--e2e-testing)
- [HTML](#html)
- [CSS](#css)
- [Backend](#backend)
- [Coding Exercise](#coding-exercise)
- [Feedbacks](#feedbacks)

## General

- Keep camera on and give self introduction - My name is Himanshu Goel, and I am having over a decade of experience in full-stack development. From the past four years, I've been working with Sopra Banking on a low-code framework development. My journey began with the Dotnet technology stack, including asp.net and C#. However, I soon transitioned into working with Angular.js and later versions of Angular (Angular 4+). Additionally, I have also worked in Node.js for creating RESTful APIs. Outside of work, I like to watch movies, reading books, writing blogs and playing video games during my free time

- Organization introduction - Sopra Banking is a global leader in banking software solutions and great place to work certified.

- About job profile, projects, team, company, attitude and responsibilities - We are hiring for our R&D vertical for an web-based financial application and includes technologies like angular, angular material, prime-ng, typescript, unit testing (karma, jasmine), cypress and java in backend. Someone will play a pivotal role in the development and implementation of our Angular-based solutions, working with the latest Angular versions, will also work like a mentor.

- About candidate and his technical journey in stories, concise answer, thoughtful questions

- Don't ask many yes / no questions but open-ended questions like 'tell me about a time when', 'tell me more about that project' or 'how you solve this problem'.

- Favorite vs code shortcuts or extension

- How is your git workflow works?

- Code best practices you use or refer while doing code reviews

- Have you done any open source contribution or written any blogs?

- How do you do documentation, have you used markdown?

- Have you mentored team members?

- What is UX, some of its best practices or anti-patterns?

- Application security best practices or OWASP top 10? - CSP, Cross-site scripting, Broken Authentication, Sensitive data exposure, Security Misconfiguration

- Complex problem they have worked upon?

- Any new technology, how you will learn?

- Any project or shared code or ask for any homework. And then ask questions based on that homework.

- Which languages are you proficient in and could teach others?

- How long have you worked with this language? what are the best and worst changes you have seen since started.

- If you were asked to present to a group of engineers about a particular technology, what would you present?

- What technical projects do your do at home?

- If you had more time what technology you would study?

- When you are learning a new technology, what process do you use to bring yourself up to speed

- What do you do when you see a colleague is approaching a problem the wrong way? let them do it and learn, or...?

- Do you read books? What are the last three books you have read?

## Angular

- What is SPA and PWA?

- The @Injectable() providedIn property vs. @NgModule() providers array

- Why angular 2 and how is the author (Misko Hevery)?

- Angular key features with each version upgrade (angular 3 - version mismatch between @angular/core, @angular/compiler and @angular/router libraries, angular 4 - emphasis on making angular apps more faster, compact, faster compilation, better bug fixes alert, angular 5 - build optimizer, compiler improvements, internationalized number, date and currency pipes, @angular/http is deprecated and replaced with @angular/common/http, HttpModule replaced with HttpClientModule, angular 6 - angular elements, library support, tree shakable providers, angular 7 - cli prompts, virtual scrolling, drag and drops, bundle budgets in cli, angular 8 - differential loading by default where browser chooses between modern or legacy JS based on its own capabilities, dynamic imports for route configurations, web worker support, ng deploy added into cli, angular 9 - ivy compiler, new options for providedIn, component harnesses, youtube player and google maps components, angular 10 - date range picker component, optional stricter settings, angular 11 - fixed few popular bug fixes, automatic font inlining, hot module replacement, faster builds, TSLint deprecation, remove ie9, ie10 and ie mobile support, angular 12 - nullish coalescing support, deprecated support for IE11, angular 13 - dynamic components, accessibility improvements for angular material components)

- How do you do angular upgrade for your project

- Angular bootstrapping flow - When an Angular application is started, the main.ts file is loaded first, here we bootstrap the root module i.e. app.module.ts. In this module, we specify a component as the bootstrap component and tell angular to load this component and all its dependencies at start up and register it’s selector app-root. Now when browser loads the index.html file, it knows what is app-root and render all the contents of this component.

- Query decorator - @ViewChild, @ViewChildren, @ContentChild, @ContentChildren

- ng-container vs. div or span.

- SkipSelf and Optional attributes

- Interceptors - logging, auth token, readonly, busy, cache

- Three types of data bindings – interpolation, event binding, property binding. Interpolation is a one way data binding. Angular does not have built-in two way data binding, however, by combining property binding and event binding we can achieve two way data binding.

- Inbuilt structural directives are `*ngFor`, `*ngIf` and attribute directives are`NgStyle`and`NgModel`

- Types of guards – resolve, can activate, can activate child, can deactivate, and can load (can load is like can activate but it will not even go get the contents, html and the javascript until it get satisfied it is used in lazy loading).

- Module attributes - Bootstrap, Declaration, Exports, Import, Providers

- The useExisting and useFactory Providers

- Main files of build folder - The main.js file contains all the code in our application, the polyfills.js file loads all the polyfill script to make sure it can be compatible with all the modern browsers. The runtime.js loads all the other files. The styles.js file loads the styles as the name suggests and vendor.js file loads all the imported libraries.

- Zone, Tree shaking, Standalone component, APP_INITIALIZER

- Reactive vs. Template driven forms with typed form vs. untyped form

- Regarding - NG0100: Expression has changed after it was checked

- Interceptors which one you have used in which scenarios

- Route guards which one you have used in which scenario and route resolvers?

- Class based route guards vs. functional route guards (as inject() is available now in angular 14)

- Angular performance improvements - pipe, destroying observables, track by function, proper bundle settings, lazy loaded modules, webpack explorer

- JIT vs. AOT, Ivy vs. View engine, forRoot vs. forChild, Component vs. Directive, Pure and Impure pipe

- Ivy - TView, LView and RView - When Ivy does rendering, it needs to keep track of three kinds of data: Template, Logical Tree, and Render Tree. These three concepts are shortened for brevity as T, L, and R prefix in many of our data structures. The template is the parsed version of the source code. It contains instructions for rendering the template in the form of Ivy-instructions and metadata about the component/directive. Logical-view (LView) represents instances of a template (TView). We use the word “logical” to highlight how the developer thinks about the application from a logical perspective. A ParentComponent contains a ChildComponent. From a logical perspective, we think about a ParentComponent containing a ChildComponent, hence the “logical” designation. The render tree is the actual DOM render tree. It is different from the logical tree above in that the render tree must take content projection into account. Because of this parent/child relationship is not as straightforward as in the logical view.

- Transclusion / Content projection, Template reference variable

- The angular.json file settings like prefix, builder, build, test lint, output path, main, index, assets, styles, script, production budgets, vendor chunk, extract licenses, source map, named chunks

- Do you use angular cli, why the need of the angular cli tool?

- Async pipe

- Subject vs. Subject Behaviour

- Hot observables vs. cold observables

- Schedulers

- Examples of custom directive - password strength, external link, format text, debounce click, tooltip, copy to clipboard, input mask, read more/less, age input, role-based access control, feature toggle based on role/permission

- State management options – angular service, NgRx, ngrx-data, observable store, Akita, Ngxs, MobX.

- switchMap (cancelable requests - searches), concatMap (run in sequence, when order is important), mergeMap (run parallel, when order is not important), exhaustMap (like for login when we don't want to make more request until initial one gets completed)

## Angular categorical questions -

- What are Angular directives - Component directives, Attribute directives, Structural directives

- What is an AOT compilation? What are its benefits? Improved performance, Smaller bundle size, Early error detection

- Define lifecycle hooks in Angular - ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

- How do we generate a class in Angular using CLI? - ng generate class myStore

- Types of Control Value Accessor (like checkbox, radio, number, range, select)

## Angular Material

- View encapsulation modes – none, emulated and shadowDom.

- How angular view encapsulation avoid overriding the component style from external style.

- How to get even disable form controls values from form group. (getRawValue())

- Which new angular material component you have used?

- Virtual scrolling

- MDC-based components

- Secondary Entry Points

```typescript
// Earlier
import { MatButtonModule, MatCardModule } from '@angular/material';

// Now
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// One entrypoint:
// With secondary entrypoints:
```

- Have you considered Accessibility during your development?

- Web accessibility guidelines – WCAG (A, AA, AAA).

- aria attributes like aria-busy, aria-disabled, aria-grabbed, aria-hidden, aria-invalid.

## JavaScript

- Can you discuss the differences between synchronous and asynchronous programming in JavaScript, and explain when you would use each approach?

- console.log(1 + '1' - 1); // result: 11

- What is **proto**?

- Different loops - for, do-while, while, for-in, for-of, forEach

- Hoisting, Closure, Arrow functions, Symbols, Iterators, Generators, Map, Weak map, Set, Weak set

- Any patterns you have used like singleton, facade, pub-sub, revealing module pattern, factory, abstract factory, builder, prototype, adapter?

- Explicit binding – .call() or .apply(). The call() and apply() methods allows us to call a function and change the 'this' value, but sometimes we need to make a copy of the function and also change the this value, we can do this by 'bind()' method.

- Mutability vs. Immutability

- structuredClone() - deep copy vs. shallow copy

- Conditionally add property on a object -

```javascript
const a = {
  ...(someCondition && { b: 5 }),
};
```

- Conditionally add element on an array

```javascript
const fruits = ['a', 'b', ...(isSummer ? ['w'] : [])];
```

- Interface indexable types with template strings

```javascript

interface HeadersResponse {
    "content-type": string,
    date: string,
    "content-length": string,
    [headerName: `x-${string}`]: string
}

```

- What is the difference between readonly and const. The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.

- Callback vs. Promises vs. Async-Await vs. Observables

- Javascript Event loop

- Module formats - IIFE, Asynchronous Module Definition (AMD), CommonJS (CJS), Universal Module Definition (UMD), ES6 Modules. Non-native – AMD, common js, UMD, system.register. Native format – ES2015.

- Module loaders – AMD for require JS, for AMD, common JS, UMD and system.register we need SystemJS.

- Cache busting, Semantic versioning, package-lock.json file

- Why 0.2 + 0.1 != 0.3

- History of JS – at the national centre for super computing applications at the university of Illinois, there were couple of kids who were developing a client program for internet for number of protocols like WAIS, Archie, Gopher, FTB, Finger and WWW, they called this program MOSAIC. Finally, out of these protocols the WWW won, this format can also display image tag. A bunch of the people from that project were lured to California where they become part of a company called Netscape. Netscape made the first commercial web browser called Netscape navigator and it was a huge hit. For the new release of this navigator they also wanted to make it easy for end-user programming, they remembered something that had been on Macintosh called HyperCard, that was a simple application program based on a simple metaphor of stacks of cards and it was an event driven script thing and remarkably easy to use and they wanted something like that in the web browser. So, they gave this job to Brendan Eich, his idea was he would write a scheme interpreter to do this like he was told to do in a language like java or visual basic which people like and popular at that time, this if for the kids. He was given 10 days to create a prototype of this new interactive browser and in those 10 days he designed and implemented a new programming language which is an amazing achievement. So, from java he took syntax another language was scheme which is a dialect of LISP, scheme has lambdas i.e. functions, there is a dialect of small talk called Self it was having better performance and expressive, from Self he didn’t took the feature of classes, by removing classes they could make it much faster and much better to program. Netscape called this initial language as LiveScript. While this is going on another language that was being developed by a guy at Sun named Jim Gosling, they wrote a web browser in this language the browser called hot java, the language name was Java and become wildly successful. These both companies were working against Microsoft, so they form an alliance the first thing they agreed upon that Netscape adds java to the web browser in-exchange for that Sun will drop their hot java browser. Another thing is that they have to kill LiveScript as they were saying to the world that Java is the last programming language world ever need, but Netscape denied that because Java was not for beginners and they also wanted to launch the new browser right away and so the way they put Java in was they had Java talk to LiveScript through an interface called Live Connect. So, LiveScript could talk to the browser and java could talk to LiveScript through Live Connect. And if they took LiveScript out, Java wouldn’t work, so to save the alliance they change the name of language from LiveScript to javascript, and to showcase not a new language but as a subset to javas, interpreted java and they lied about the relationships of these two languages. Meanwhile after seeing this Microsoft had completely missed the web and the internet, they thought the future of telecommunications was going to be fax and cable TV. So they bought out a browser company, it was another spinoff out of Illinois called spyglass, took their thing and relabelled it as IE and decided that they also need one more thing related to JS. So, they reverse engineering the first JS engine. MS also noticed all the blunders, bugs, errors, design defects, MS carefully documents all of them and replicates them, they called it JScript. Then Netscape went to w3c to make the standard of their language, but w3c denied then they went to ISO, and then European computer manufactures association (ECMA), MS also joined this committee and dominates the committee. Also, MS told that all the bugs will remain in the standard, those standards where published by name ECMAScript.

- Object.create(null) - create an object that inherits nothing, not even from object.prototype. It will act much more like hash table.

## TypeScript

- What is compiler vs. transpiler (es6 to es5 for browser like 'user?.name')

- What is "Duck Typing"

- `null` vs. `undefined`

- What is type guards?

- tsconfig.json file settings like dist, noImplicitReturns, target, noImplicitAny, strictNullChecks, strict

- TSLint vs. ESLint - rules you have used

- Utility types like partial, required, readonly, record, pick, omit, non-nullable

- Best practices like not using any keyword

- Basic typescript types – Boolean, Number, String, Arrays, Enum, Void, Null, Undefined, Never, Any

- Type Declaration Files

## Unit / E2E Testing

- Benefits

- What is Test Harness?

- What is TestBed?

- Dependency injection?

- Testing structure types - AAA (Act, Arrange, assert), Behavioral (Given, When, Then)

- Styles of unit testing – output verification or functional verification, state verification, collaboration verification.

- Dummy vs. Stubs vs. Fake vs. Spy vs. Mock

- Test doubles – dummies like a placeholder, stubs objects that return predefined data, fakes slightly more realistic, mocks objects pre-programmed with expected outputs for given inputs and alsoD able to verify their calls, spies real object and verify interactions like mocks it is an hybrid of stubs, fakes and mocks.

- Marble testing is a technique where we draw marble diagrams using ACSII characters while writing unit test to visualize asynchronous observables behavior in a synchronous way. Benefits – readable code, test synchronously and helps to find out race condition in our code. Marble syntax - -, |, #, ^, !, a, ()

- debugEl with 'By' predicate vs. element.querySelector

- Have you used any e2e testing framework like cypress or protractor?

## HTML

- Semantic elements - header footer, section, nav, article, aside

- HTML 5 storage API – session (per origin and per instance, tied to domain origin) storage, local storage.

## CSS

- Block vs. inline elements

- Types of selectors - relational, attribute, structural, star selector

- Pseudo classes allow us to conditionally select an element based on state or position, they start with a colon (:) like :hover, :nth-of-type, :first-of-type, :last-of-type, :nth-child, :first-child, :last-child

- Specificity - id selector > class & attribute > type selector

- Z-index allows us to control the stacking order of the elements.

- Responsive web design using fluid grid, media queries, flexible images.

- 12 column grid layout and visual breakpoints

- Fallbacks and Polyfills – Fallback is to provide similar functionality as a native feature but maybe just with a different API. A Polyfills, on the other hand, is meant to replicate the exact same interface as well as functionality as how the native implementation would be built in the browser.

## Backend

- What is REST?

- PUT vs. PATCH - PUT verb replaces an item but PATCH only changes a piece.

- CORS

- Middleware

- HATEOAS

## Coding Exercise

- Given a string, reverse each word in the sentence

- How would you check if a number is an integer? (If a number is a decimal or an integer is to check if there is a remainder when divided by 1.)

- Given two strings, return true if they are anagrams of one another.

```javascript
a = a.split('').sort().join('');
b = b.split('').sort().join('');
return a === b;
```

- Pair programming interviews are better than take home test. Key skills to touch on angular, typescript, RxJS, javascript knowledge, ecosystem knowledge, front-end skills semantic html and CSS, version control, branching, PR review process, preferred tooling.

- Refactor bad code to good code or give review comments

```typescript
setTimeout(restart, 36000000);

type User = {
  userName: string;
  userLastName: string;
  userAge: number;
};

function print(user: User): void {
  console.log(`${user.userName} ${user.userLastName} (${user.userAge})`);
}

function createBlogPost(text: string, author: string, date?: Date) {
  return {
    text: text,
    author: author,
    date: date || new Date(),
  };
}

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products');
  const products: any = await response.json();
  return products;
}

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products');
  const products: unknown = await response.json();
  return products as Product[];
}

function head<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

```typescript
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 36000000

setTimeout(restart, MILLISECONDS_PER_HOUR);

type User = {
  name: string;
  lastName: string;
  age: number;
};

function print(user: User): void {
  console.log(`${user.name} ${user.lastName} (${user.age})`);
}

function createBlogPost(text: string, author: string, date: Date = new Date()) {
  return {
    text: text,
    author: author,
    date: date,
  };
}

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products');
  const products: unknown = await response.json();
  return products as Product[];
}

function isArrayOfProducts(obj: unknown): obj is Product[] {
  return Array.isArray(obj) && obj.every(isProduct);
}

function isProduct(obj: unknown): obj is Product {
  return obj != null && typeof (obj as Product).id === 'string';
}

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products');
  const products: unknown = await response.json();
  if (!isArrayOfProducts(products)) {
    throw new TypeError('Received malformed products API response');
  }
  return products;
}

function head<Element>(arr: Element[]): Element | undefined {
  return arr[0];
}
```

## Feedbacks

### Negative Points

- Lack of technical knowledge or skills: Highlight specific instances where the candidate demonstrated a lack of technical proficiency relevant to the job requirements.

- Inadequate understanding of key concepts: Identify instances where the candidate struggled to explain or apply fundamental concepts necessary for the role.

- Weak problem-solving abilities: Mention situations where the candidate had difficulty solving problems or providing logical solutions.

- Poor communication skills: Describe instances where the candidate had trouble articulating their thoughts, listening effectively, or responding clearly to questions.

- Inadequate experience: Discuss any shortcomings in the candidate's previous work experience that make them ill-suited for the role.

- Lack of enthusiasm or motivation: If the candidate appeared disinterested or lacked enthusiasm during the interview, include this observation in your feedback.

- Poor cultural fit: If you believe the candidate may not align with the company's values, culture, or team dynamics, express your concerns in this regard.

- Inability to adapt or learn quickly: If adaptability and learning are essential for the role, mention any indications that the candidate may struggle in this aspect.

- Failure to demonstrate relevant achievements: Discuss any gaps in the candidate's track record or their inability to provide concrete examples of their accomplishments.

- Lack of research on the company: If the candidate seemed unaware of the company's mission, values, or products, note this as it may indicate a lack of preparation.

- Overconfidence or arrogance: Address instances where the candidate came across as overly confident or dismissive of feedback or suggestions.

- Inconsistent responses: Point out any contradictions or inconsistencies in the candidate's responses to questions or in their overall interview performance.

- Incomplete or incorrect answers: Identify instances where the candidate provided incomplete or inaccurate information in response to technical or job-related questions.

- Lack of preparation: Highlight situations where it was evident that the candidate did not sufficiently research the role, the company, or the industry.

- Limited problem-solving or critical thinking skills: If the role requires strong problem-solving abilities, note any instances where the candidate struggled to think critically or analytically.

- Inability to handle stress or pressure: If the candidate appeared flustered or overwhelmed during challenging interview questions or scenarios, mention this concern.

- Weak interpersonal skills: Discuss situations where the candidate had difficulty working collaboratively, lacked team-oriented behavior, or exhibited poor interpersonal skills.

- Inconsistent work history: Address any gaps or frequent job changes in the candidate's work history that might raise concerns about their commitment or stability.

- Lack of relevant qualifications or certifications: Mention any deficiencies in the candidate's qualifications, certifications, or training that are crucial for the role.

- Difficulty with time management: If the candidate struggled to manage their time effectively during the interview or had difficulty meeting deadlines in their previous work, make this observation.

- Disorganized presentation: If the candidate had difficulty organizing their thoughts, answering questions in a structured manner, or delivering a clear presentation, include this in your feedback.

- Resistance to feedback: If the candidate appeared unwilling to accept constructive criticism or feedback during the interview, note this as a potential issue.

- Limited adaptability to new technologies or tools: Address any concerns about the candidate's ability to learn and adapt to new software, technologies, or tools relevant to the role.

- Failure to meet specific job requirements: If the candidate does not meet one or more of the specific job requirements mentioned in the job description, emphasize these shortfalls.

- Lack of passion for the role or industry: If the candidate did not demonstrate genuine enthusiasm or a strong interest in the field or role, communicate this concern.

- Inattention to detail: Highlight instances where the candidate made mistakes or failed to pay attention to important details, especially if the role requires precision.

### Positive Points

- Job-specific skills and knowledge: Assess whether the candidate possesses the necessary skills and knowledge directly related to the job requirements. Note any deficiencies in these areas.

- Technical proficiency: Evaluate the candidate's technical abilities and whether they meet the technical requirements for the role. Mention any gaps in their technical knowledge or experience.

- Industry-specific experience: Consider whether the candidate has relevant experience in the specific industry or domain associated with the job. If not, highlight this as a potential shortcoming.

- Leadership and management qualities: For leadership roles, evaluate the candidate's ability to lead and manage teams effectively. Highlight any lack of leadership skills or experience.

- Communication skills: Discuss whether the candidate's communication skills align with the role's demands, especially if the position requires extensive client interaction, presentations, or written communication.

- Problem-solving capabilities: Assess the candidate's problem-solving skills, especially in situations closely resembling the challenges they would face in the position.

- Project management and organization: For roles requiring strong project management or organizational skills, indicate whether the candidate demonstrates these competencies.

- Sales and customer relationship abilities: If the position involves sales or customer relationship management, evaluate the candidate's sales techniques, ability to build rapport with clients, and sales targets met.

- Regulatory and compliance knowledge: In industries with strict regulations, evaluate whether the candidate has a good understanding of relevant regulations and compliance issues.

- Creativity and innovation: For roles that demand creativity and innovation, consider whether the candidate demonstrated these qualities during the interview process.

- Teamwork and collaboration: Assess the candidate's ability to work effectively in a team and whether they possess the necessary collaboration skills for the role.

- Cross-functional expertise: Determine whether the candidate has experience or knowledge in areas that require collaboration across multiple functions within the organization.

- Cultural fit: Evaluate the candidate's alignment with the company's culture and values. Highlight any mismatches in terms of culture fit.

- Adaptability to industry trends: Consider whether the candidate displayed an understanding of current industry trends and their ability to adapt to changes in the field.

- Regulatory or certification requirements: Ensure the candidate meets any specific regulatory or certification requirements mandated by the position or industry.

- Sales targets or performance metrics: If applicable, assess the candidate's track record in meeting or exceeding sales targets or performance metrics relevant to the role.

- Client or customer feedback: If available, share any feedback or interactions with clients or customers during the interview process that may influence the hiring decision.

- Programming proficiency: Assess the candidate's proficiency in relevant programming languages and technologies. Highlight any gaps in their coding skills or knowledge.

- Problem-solving and algorithmic skills: Evaluate the candidate's ability to solve complex technical problems and design efficient algorithms.

- Understanding of data structures: Assess the candidate's knowledge of data structures and their ability to choose the right data structures for different tasks.

- Coding practices and standards: Discuss whether the candidate follows coding best practices, adheres to coding standards, and writes clean and maintainable code.

- Version control proficiency: Evaluate the candidate's familiarity with version control systems (e.g., Git) and their ability to work collaboratively on code repositories.

- Testing and quality assurance: Assess the candidate's understanding of software testing, test-driven development (TDD), and their commitment to delivering high-quality code.

- Technical documentation: Discuss the candidate's ability to create and maintain technical documentation for their code and projects.

- Frameworks and libraries: Evaluate the candidate's knowledge of relevant software development frameworks and libraries, and their ability to effectively use them.

- Database design and management: Assess the candidate's expertise in database design, querying, and management, especially if the role involves database-related tasks.

- Web development skills: For web development roles, evaluate the candidate's proficiency in web technologies such as HTML, CSS, JavaScript, and relevant web frameworks.

- Knowledge of software development methodologies: Discuss whether the candidate is familiar with software development methodologies such as Agile, Scrum, or DevOps, and their ability to work within those frameworks.

- Problem-solving and debugging: Consider how the candidate approaches and resolves technical issues, including their debugging skills.

- Software architecture and design patterns: Evaluate the candidate's understanding of software architecture principles and design patterns and their ability to apply these concepts in their work.

- Performance optimization: Assess the candidate's ability to optimize code and applications for performance, scalability, and efficiency.

- Security awareness: Discuss whether the candidate demonstrates a strong understanding of cybersecurity best practices and can develop secure code.

- Open-source contributions or personal projects: Take into account any open-source contributions or personal coding projects that the candidate may have worked on as a demonstration of their skills and commitment.

- Learning and adaptability: Evaluate the candidate's willingness and ability to learn new technologies and adapt to changes in the software development landscape.

- Code review and teamwork: Assess how well the candidate collaborates with other team members in code reviews and in resolving technical issues.

- Software development tools: Consider the candidate's proficiency with development tools such as integrated development environments (IDEs), build systems, and debugging tools.

- Project management and deadline adherence: Assess their ability to manage their workload, adhere to project timelines, and deliver work on schedule.

# Programming Questions

1 - Largest Odd Number in String

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

2 - Two Sum

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

3 - Palindrome Number

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

4 - Roman to Integer
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

5 - Longest Common Prefix

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

21. Merge Two Sorted Lists

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

26. Remove Duplicates from Sorted Array
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

28. Find the Index of the First Occurrence in a String

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

58. Length of Last Word

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

69. Sqrt(x)

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

121. Best Time to Buy and Sell Stock
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

136. Single Number

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

205. Isomorphic Strings
Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

231. Power of Two

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false

344. Reverse String

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

345. Reverse Vowels of a String

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

349. Intersection of Two Arrays

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

367. Valid Perfect Square

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

387. First Unique Character in a String

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

409. Longest Palindrome

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

414. Third Maximum Number

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

434. Number of Segments in a String
Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1

485. Max Consecutive Ones

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

507. Perfect Number
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
Example 2:

Input: num = 7
Output: false

509. Fibonacci Number

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

541. Reverse String II

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"

557. Reverse Words in a String III

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"

709. To Lower Case

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"

1002. Find Common Characters

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]

1436. Destination City

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo"
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
Example 2:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are:
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
Clearly the destination city is "A".

2828. Check if a String Is an Acronym of Words

Example 1:

Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
Example 2:

Input: words = ["an","apple"], s = "a"
Output: false
Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
The acronym formed by concatenating these characters is "aa".
Hence, s = "a" is not the acronym.
Example 3:

Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
Output: true
Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
Hence, s = "ngguoy" is the acronym.

3. Longest Substring Without Repeating Characters
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

7. Reverse Integer

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

12. Integer to Roman
Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

22. Generate Parentheses

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

43. Multiply Strings
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

46. Permutations
Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]

78. Subsets
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

151. Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

287. Find the Duplicate Number

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

442. Find All Duplicates in an Array
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []

1839. Longest Substring Of All Vowels in Order
Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
