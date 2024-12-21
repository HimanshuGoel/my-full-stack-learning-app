# Interview Questions - TypeScript

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

## Programming Questions

- Given a string, reverse each word in the sentence

- How would you check if a number is an integer?

If a number is a decimal or an integer is to check if there is a remainder when divided by 1.

- Given two strings, return true if they are anagrams of one another

```javascript
a = a.split('').sort().join('');
b = b.split('').sort().join('');
return a === b;
```

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

- Largest Odd Number in String

```typescript

// Example 1
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

// Example 3:
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

```

- Two Sum

```typescript

// Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

// Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
```

- Palindrome Number

```typescript

// Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

```

- Roman to Integer

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

```typescript

// Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

// Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

// Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

```

- Longest Common Prefix

```typescript

// Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

// Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

```

- Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

```typescript
// Example 1:
Input: s = '()';
Output: true;

// Example 2:
Input: s = '()[]{}';
Output: true;

// Example 3:
Input: s = '(]';
Output: false;
```

Merge Two Sorted Lists

```typescript
// Example 1:
Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
Output: [1, 1, 2, 3, 4, 4];

// Example 2:
Input: (list1 = []), (list2 = []);
Output: [];

// Example 3:
Input: (list1 = []), (list2 = [0]);
Output: [0];
```

- Remove Duplicates from Sorted Array

```typescript
// Example 1:
Input: nums = [1, 1, 2];
Output: 2, (nums = [1, 2, _]);

// Example 2:
Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
Output: 5, (nums = [0, 1, 2, 3, 4, _, _, _, _, _]);
```

- Find the Index of the First Occurrence in a String

```typescript

// Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

// Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

```

- Length of Last Word

```typescript

// Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

// Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.

// Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

```

- Sqrt(x)

```typescript

// Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

```

- Best Time to Buy and Sell Stock

```typescript

// Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

```

- Single Number

```typescript
// Example 1:
Input: nums = [2, 2, 1];
Output: 1;

// Example 2:
Input: nums = [4, 1, 2, 1, 2];
Output: 4;

// Example 3:
Input: nums = [1];
Output: 1;
```

- Isomorphic Strings

```typescript
// Example 1:
Input: (s = 'egg'), (t = 'add');
Output: true;

// Example 2:
Input: (s = 'foo'), (t = 'bar');
Output: false;

// Example 3:
Input: (s = 'paper'), (t = 'title');
Output: true;
```

- Power of Two

```typescript
// Example 1:
Input: n = 1;
Output: true;
Explanation: 20 = 1;

// Example 2:
Input: n = 16;
Output: true;
Explanation: 24 = 16;

// Example 3:
Input: n = 3;
Output: false;
```

- Reverse String

```typescript
// Example 1:
Input: s = ['h', 'e', 'l', 'l', 'o'];
Output: ['o', 'l', 'l', 'e', 'h'];

// Example 2:
Input: s = ['H', 'a', 'n', 'n', 'a', 'h'];
Output: ['h', 'a', 'n', 'n', 'a', 'H'];
```

- Reverse Vowels of a String

```typescript
// Example 1:
Input: s = 'hello';
Output: 'holle';

// Example 2:
Input: s = 'leetcode';
Output: 'leotcede';
```

- Intersection of Two Arrays

```typescript

// Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

// Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

```

- Valid Perfect Square

```typescript

// Example 1:
Input: num = 16
Output: true
Explanation: We return true because 4 \* 4 = 16 and 4 is an integer.

// Example 2:
Input: num = 14
Output: false
Explanation: We return false because 3.742 \* 3.742 = 14 and 3.742 is not an integer.

```

- First Unique Character in a String

```typescript
// Example 1:
Input: s = 'leetcode';
Output: 0;

// Example 2:
Input: s = 'loveleetcode';
Output: 2;

// Example 3:
Input: s = 'aabb';
Output: -1;
```

- Longest Palindrome

```typescript

// Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

```

- Third Maximum Number

```typescript

// Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

// Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.

```

- Number of Segments in a String

```typescript

// Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
Input: s = "Hello"
Output: 1
```

- Max Consecutive Ones

```typescript

// Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2

```

- Perfect Number

A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

```typescript

// Example 1:
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

// Example 2:
Input: num = 7
Output: false

```

- Fibonacci Number

```typescript

// Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

```

- Reverse String II

```typescript
// Example 1:
Input: (s = 'abcdefg'), (k = 2);
Output: 'bacdfeg';

// Example 2:
Input: (s = 'abcd'), (k = 2);
Output: 'bacd';
```

- Reverse Words in a String III

```typescript
// Example 1:
Input: s = "Let's take LeetCode contest";
Output: "s'teL ekat edoCteeL tsetnoc";

// Example 2:
Input: s = 'Mr Ding';
Output: 'rM gniD';
```

- To Lower Case

```typescript
// Example 1:
Input: s = 'Hello';
Output: 'hello';

// Example 2:
Input: s = 'here';
Output: 'here';

// Example 3:
Input: s = 'LOVELY';
Output: 'lovely';
```

- Find Common Characters

```typescript
// Example 1:
Input: words = ['bella', 'label', 'roller'];
Output: ['e', 'l', 'l'];

// Example 2:
Input: words = ['cool', 'lock', 'cook'];
Output: ['c', 'o'];
```

- Destination City

```typescript

// Example 1:
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo"
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are:
"D" -> "B" -> "C" -> "A".
"B" -> "C" -> "A".
"C" -> "A".
"A".
Clearly the destination city is "A".

```

- Check if a String Is an Acronym of Words

```typescript

// Example 1:
Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.

// Example 2:
Input: words = ["an","apple"], s = "a"
Output: false
Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
The acronym formed by concatenating these characters is "aa".
Hence, s = "a" is not the acronym.

// Example 3:
Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
Output: true
Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
Hence, s = "ngguoy" is the acronym.

```

- Longest Substring Without Repeating Characters

```typescript

// Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

// Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

// Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

```

- Reverse Integer

```typescript
// Example 1:
Input: x = 123;
Output: 321;

// Example 2:
Input: x = -123;
Output: -321;

// Example 3:
Input: x = 120;
Output: 21;
```

- Integer to Roman

```typescript

// Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

// Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

// Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

- Generate Parentheses

```typescript
// Example 1:
Input: n = 3;
Output: ['((()))', '(()())', '(())()', '()(())', '()()()'];

// Example 2:
Input: n = 1;
Output: ['()'];
```

- Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

```typescript
// Example 1:
Input: (num1 = '2'), (num2 = '3');
Output: '6';

// Example 2:
Input: (num1 = '123'), (num2 = '456');
Output: '56088';
```

- Permutations

```typescript
// Example 1:
Input: nums = [1, 2, 3];
Output: [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];

// Example 2:
Input: nums = [0, 1];
Output: [
  [0, 1],
  [1, 0],
];

// Example 3:
Input: nums = [1];
Output: [[1]];
```

- Subsets

```typescript
// Example 1:
Input: nums = [1, 2, 3];
Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

// Example 2:
Input: nums = [0];
Output: [[], [0]];
```

- Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

```typescript

// Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

// Example 2:
Input: s = " hello world "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
Input: s = "a good example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

```

- Find the Duplicate Number

```typescript
// Example 1:
Input: nums = [1, 3, 4, 2, 2];
Output: 2;

// Example 2:
Input: nums = [3, 1, 3, 4, 2];
Output: 3;
```

- Find All Duplicates in an Array

```typescript
// Example 1:
Input: nums = [4, 3, 2, 7, 8, 2, 3, 1];
Output: [2, 3];

// Example 2:
Input: nums = [1, 1, 2];
Output: [1];

// Example 3:
Input: nums = [1];
Output: [];
```

- Longest Substring Of All Vowels in Order

```typescript

// Example 1:
Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.

// Example 2:
Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.

// Example 3:
Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.

```

Sopra Banking Software
Sopra Banking Software
Full-time · 3 yrs 3 mosFull-time · 3 yrs 3 mos
HybridHybrid
Software Development Engineer II (SDE II)
Software Development Engineer II (SDE II)
Jan 2024 - Oct 2024 · 10 mosJan 2024 to Oct 2024 · 10 mos
IndiaIndia
• Working as a full-stack developer responsible for creating responsive user interfaces using Angular and developing REST APIs in Java for seamless communication between frontend and backend systems.

• Implemented a program to create Excel file from input XML using Apache POI and used STAX parser to efficiently read and process XML data.

• Designed XML schema and dynamically generated header tags using W3C DOM in Java.

• Implemented automated testing with Cypress to ensure the robustness and reliability of applications.

• Mentored new team members, providing guidance and support to facilitate their onboarding and growth within the organization.• Working as a full-stack developer responsible for creating responsive user interfaces using Angular and developing REST APIs in Java for seamless communication between frontend and backend systems. • Implemented a program to create Excel file from input XML using Apache POI and used STAX parser to efficiently read and process XML data. • Designed XML schema and dynamically generated header tags using W3C DOM in Java. • Implemented automated testing with Cypress to ensure the robustness and reliability of applications. • Mentored new team members, providing guidance and support to facilitate their onboarding and growth within the organization.
SQL, Angular and +6 skills

Kalam AwardKalam Award
Software Development Engineer (SDE I)
Software Development Engineer (SDE I)
Feb 2022 - Jan 2024 · 2 yrsFeb 2022 to Jan 2024 · 2 yrs
Noida, Uttar Pradesh, IndiaNoida, Uttar Pradesh, India
• Backend development of spark batch applications using reactive programming in Java microservice architecture.

• Achieved test coverage exceeding 90% through rigorous unit and integration testing practices.

• Contributed to the release management process, utilizing Helm commands for tagging, installation, and deployment to target environments.

• Conducted code reviews and provided constructive feedback to maintain coding standards and ensure
code quality.• Backend development of spark batch applications using reactive programming in Java microservice architecture. • Achieved test coverage exceeding 90% through rigorous unit and integration testing practices. • Contributed to the release management process, utilizing Helm commands for tagging, installation, and deployment to target environments. • Conducted code reviews and provided constructive feedback to maintain coding standards and ensure code quality.
Angular, Spring Boot and +6 skills
Software Engineer Trainee
Software Engineer Trainee
Aug 2021 - Feb 2022 · 7 mosAug 2021 to Feb 2022 · 7 mos
IndiaIndia
• Actively participated in agile development methodologies, contributing to sprint planning, daily standups, and retrospective meetings.

• Developed a Quiz app project using ReactJs, SpringBoot, and MySQL, showcasing proficiency in modern web technologies.

• Utilized Git for version control, effectively managing code repositories and facilitating collaborative development.

• Demonstrated strong communication skills and cross-team collaboration, ensuring seamless integration of software components.

- Node chains –

![ds-node-chains](./images/ds-node-chains.png)

- Linked list – single chain of nodes, head pointer, tail pointer, operations – add, remove, find, enumerate.

- Doubly linked list – singly linked list works great when we need only forward access to the nodes, but for backwards compatibility as-well we need to use doubly linked list.

![ds-doubly-linked-list](./images/ds-doubly-linked-list.png)

- Stack - It is based on LIFO concept. Each pop reduces the stack depth.

- Stack using linked list – pros with linked list approach – no hard size limit, easy to implement – no bounds checking, empty list means empty stack, cons – memory allocation on push, per node memory overhead, potential performance issues.

- Stack using arrays – cons with arrays approach – over-allocation of array. While enumerating we need to iterate it backwards.

- Postfix calculator – postfix notation also known as reverse polish notation in this approach operator follows the operands by this, we can avoid the ambiguity in operation order.

![ds-postfix-calculator](./images/ds-postfix-calculator.png)

- Undo implementation using Stack – we use stack to store the changes and to reverse the changes when undo is clicked.

- Queue - It is based on FIFO concepts. We can do enqueue and dequeue operations on it.

- Queue using linked list implementation – in this we will add last and remove first, not add first and remove last due to enumeration order. Add last/remove first allow list enumeration to “just work”. Queue allows to take incoming data and store it in a way that allows us to process it later, but in the order, it showed up, which is a sort of fairness.

- Handling growth of an array – we also need to copy from 0 to head – 1 in case of non-empty values. Arrays has benefits over linked list approach like data locality and performance gains, reducing the overall number of allocations and incredibly fast enqueue and dequeue times when there isn’t an allocation being performed.

- Priority queue – highest priority items dequeued first, not first in and first out. Only enqueue operation need to be change in implementation others operations will be same.

- What is a tree – instead of a linear structure which can be traversed backward and forward, these are a hierarchical rather than a linear manner. Terms are root or head node, leaf nodes, child nodes. A node can have any number of children but only one parent. Fundamental rule for a tree structure is that there is exactly one path from the head node to any other node in the tree and likewise exactly one path from any node in the tree back to the head node, therefore there is exactly one path can be taken between any nodes in the tree.

- Binary tree – it can have most 2 child nodes called left and right children.

- Binary search tree – sorted hierarchy of data. Small values on left and larger values are on right. Left most node contains the smallest value and right most node contains the largest value.

- Finding data – searching. Data ordering requirements make the binary search tree a really efficient structure for searching for data, as we don’t need to traverse all node to search the data.

- Traversals – to enumerate in well-defined order they are pre-order, in-order and post-order. Pre-order and post-order are used in mathematical expression evaluation, and evaluation of run time behaviour in a language like compilers use trees, dependency graph for which depends upon which operation.

- Hash Tables - Hash tables are fit into the broad category of structures knows as associative arrays. Associative arrays provide the storage of key/value pairs into an array or an array like collection. But unlike an array, the index can be any comparable type not just an integer, each key is unique. The key type is mapped to an index.

- This GetIndex() method hashed the string, hashing is a process that derives a fixed size result from an arbitrary input. Any string of any length when hashed would return a fixed size i.e. 32-bit integer hash value. The features of a hashing algorithm - stable (same input generates the same output every time), uniform (hash value should be uniformly distributed through available space), efficient and secure.

- String hashing - Naive implementation - summing of the ASCII value of character.

- Handling collisions – if two distinct items have same hash value, then we have collision as items are assigned to the same index in the has table. To handle this, we can follow two strategies – open addressing (moving to next index in table), chaining (storing item in a linked list)

- Counting words – real world example of hash table. Hash table shines in a scenario where key/value pairs we are updating the values and we have a stable key.

- Sorting means arranging data in a collection based on a comparison algorithm like any object with a notion of greater-than/less-than/equality. Two general families of sorting algorithms – linear sorting, divide and conquer. Linear algorithms treat the problem of sorting as a single large operation. Divide and conquer algorithms partition the data to be sorted into smaller sets that can be independently sorted. Measuring performance – number of comparisons, swaps operations.

- Bubble sort – simplest sorting algorithm. Consist of many passes until no swaps are performed in a pass. Performance is not good O(n2), not appropriate for large unsorted data sets. But for the best-case performance is very good i.e. O(n) also for the space requirement it is good i.e. O(n) as it directly operates on the input array and it is a candidate algorithm when minimizing space is paramount.

![ds-bubble-sort1](./images/ds-bubble-sort1.png)

![ds-bubble-sort2](./images/ds-bubble-sort2.png)

- Insertion sort – sorts each item in the array as they are encountered. It uses only simple pass, everything left of the item is known to be sorted and everything to the right is unsorted. Performance and space matrixes are same as bubble sort.

![ds-insertion-sort](./images/ds-insertion-sort.png)

- Selection sort – another linear algorithm, hybrid between bubble and insertion sort. It sorts the data by finding the smallest item and swapping it into the array in the first unsorted location. Performance is similar to bubble and insertion sort. Best case performance is O(n2). It Is not appropriate for large unsorted data set. For a system where comparison is cheap and swaps are costly then we can use this algorithm.

![ds-selection-sort1](./images/ds-selection-sort1.png)

![ds-selection-sort2](./images/ds-selection-sort2.png)

- Merge sort – it is a divide and conquer algorithm. They array is recursively split in half, and splitting continues until the array is in groups of 1, it is reconstructed in the sort order. Each reconstructed array is merged with the other half. Worst, average and best cases performance is O (n log n), data splitting means that the algorithm can be made parallel, that’s why it is appropriate for large datasets. Space required is O(n), merge can be, but is often not, performed in-place. These extra allocations increase the memory footprint required to sort data.

![ds-merge-sort](./images/ds-merge-sort.png)

- Quick sort – commonly used general purpose language and also based on divide and conquer. Pick a pivot value and partition the array.

![ds-quick-sort1](./images/ds-quick-sort1.png)

![ds-quick-sort2](./images/ds-quick-sort2.png)

![ds-quick-sort3](./images/ds-quick-sort3.png)

- Worst case is O (n2) not appropriate for large pathologically sorted (inverse sorted) data sets, average case performance is O (n log n) appropriate for large data sets, best case performance is O (n log n) very good best case performance and can efficiently sort small and nearly sorted data sets, space required O (n).

- AVL Tree - Binary tree is a collection that stores data in a tree structure. AVL tree are self-balancing binary tree invented by Adelson-velsky and landis (1942). Only insertion and deletion differ in running the balance algorithm from binary tree. AVL tree new concepts are self-balancing, height, balance factor, right/left heavy. An unbalance binary tree can cause performance issues like reduce the search time; it might become a linked list as below, like loading a English dictionary –

![ds-avl-unbalance-tree](./images/ds-avl-unbalance-tree.png)

- Balanced binary tree – the tree remains balanced as nodes are inserted or deleted, height or left and right tree differ by at most 1.

![ds-balance-tree](./images/ds-balance-tree.png)

- Balancing is done using node rotation. Rotation changes the physical structure of the tree within the constraints of the binary tree, smaller values on the left and larger or equal on the right. Rotation algorithms are right rotation, left rotation, right-left rotation, left-right rotation.

- AVL tree vs. Binary tree visualization – AVL tree won’t get much height and depth unlike binary tree. For bad 100 number, the binary tree will become the linked list like linear structure. Also, it is shows the difference between balanced tree and unbalanced trees.

![ds-avl-tree-visualization](./images/ds-avl-tree-visualization.png)

![ds-binary-tree-visualization](./images/ds-binary-tree-visualization.png)

- String Searching Algorithms - API Overview – by using interface we can implement algorithms in a uniform manner and this will allow us to use them interchangeably.

- Naïve Search - We can use run the loop till the string length minus the search string length to get some optimization. This algorithm is most appropriate when the string to search and find are both small.

![ds-naive-search1](./images/ds-naive-search1.png)

![ds-naive-search2](./images/ds-naive-search2.png)

- Boyer Moore Horspool Search – it minimizes the overall cost of search by skipping as many characters as possible. This is appropriate as a general-purpose string search algorithm. It will also improve the performance if search string is longer.

![ds-boyer-moore-horspool-search.png](./images/ds-boyer-moore-horspool-search.png)

- Data structures is a way of storing data. Data structures and algorithms are heavily linked. DS typically use some sort of algorithm to perform their inner organization, and algorithms typically uses data structure to store internal states.

- Ways of measuring performance – timing with stopwatch (but it depends on hardware, programming language, environment, etc.), counting instructions executed by machine, looking at execution curve, best case, worst case, average case.

- Asymptotic performance – In Asymptotic Analysis, we evaluate the performance of an algorithm in terms of input size (we don’t measure the actual running time). We calculate, how does the time (or space) taken by an algorithm increases with the input size.

- Big Theta – it can be used to express the complexity of a program.

- Big O – worst-case complexity of the program.

- Binary search – complexity in terms of Big O

![ds-binary-search-big-o](./images/ds-binary-search-big-o.png)

- Amortized complexity – it deals with the complexity of performing the same operation multiple times for varying inputs like inserting multiple elements in a data structure.

- Priority queues – internally elements are organized in a data structure called heap, types of heaps are min heap, max heap and min-max heap, interval heap. A heap is an binary balanced tree structure where each node has at most two children, in min-heap each element is smaller than its immediate children.

- Hash table – two flavours – first is a container that store the values that are added directly, just like arrays and linked lists, this container is often called a set or a hash set. The other flavour is a container that maps a setup of keys to a set of values, this is referred to as a map or a dictionary. Search operation is much faster in hash table.

- By hash table we can quickly lookup the name of a certain user id and this makes hash tables ideal data structure for caches, fast insertion, fast lookup and fast deletion, but elements order as per we receive them can’t be possible in hash table unlike arrays.

![ds-common-big-o-examples](./images/ds-common-big-o-examples.png)

- Brute force and greedy algorithm – problem solving strategy where all possible combinations or solution candidates are tried out blindly until a solution is found is called brute force.

![ds-brute-force-combinations](./images/ds-brute-force-combinations.png)

- Greedy algorithms work smarter than brute faster, they may speed up the search for a solution, but they come with a catch of stalling at a local maximum or minimum if we search for a small solution.

![ds-greedy-algorithms](./images/ds-greedy-algorithms.png)

- Divide and conquer – key ingredient is to discover how to divide the larger, original problem into sub-problems. Once divided, each of the smaller and easier-to-understand sub-problems are solved, leaving us with sub-solutions. Finally, find a way to combine, or deduce these sub-solutions into a solution to the original and larger problem, thereby conquering it. We can also apply it recursively. Example – quicksort

![ds-quick-sort-divide-and-conquer](./images/ds-quick-sort-divide-and-conquer.png)

- Dynamic programming – this is also built on the core idea of divide and conquer. If sub problems cannot be separated but overlaps, then overlapping part would need to be solved in both sub-problems. We can cache the solved result of sub-problem. It will improve the performance.

- The 0/1 Knapsack problem – using dynamic problem we can get the performance advantages as it has lower complexity.

![ds-knapsack-problem](./images/ds-knapsack-problem.png)

- Other examples – where to put line breaks to obtain a nice and even text justification, finding shortest paths, finding difference between two files, sequence alignment, various games

![ds-knapsack-problem-other-examples.png](./images/ds-knapsack-problem-other-examples.png)

- P vs. NP – exponential functions grow much faster than polynomials. The complexity category P covers problems that can be solved in polynomial time i.e. easy problems like sorting, traversing, lists, etc. But problems in NP category are decision problems (in which answer is yes or no) verifiable in polynomial time.

![ds-p-vs-np1](./images/ds-p-vs-np1.png)

![ds-p-vs-np2](./images/ds-p-vs-np2.png)

- NP hard – at least as hard as NP complete, they don’t need to be decision problem, and they do not need to be verifiable in polynomial time like knapsack problem, halting problem, traveling salesman problem.

![ds-np-hard](./images/ds-np-hard.png)

- Heuristics and approximation algorithms – they are general techniques for dealing with computationally hard problems. Heuristics – wanted speed, trade with accuracy.

- Cuckoo hashing to create hash table – it is an open addressing scheme, inspired by cuckoo bird.

- Prefix-querying Sequences Efficiently with Tries - Tries – represent a number of strings in a single tree structure where the root node represents the enter string with no letters added yet and with each subsequent level of the tree corresponding to a pending one more letter to a string.

![ds-tries](./images/ds-tries.png)

- Radix tree – a compressed tries structure, it improves the performance. We can use it if read-only or read-mostly operations. Tries is useful for autocompletion, prefix only scenario.

![ds-radix-trees](./images/ds-radix-trees.png)

- Suffix trees also allows to search a pattern anywhere in a string.

![ds-suffix-trees](./images/ds-suffix-trees.png)

- Data structure is a method of organizing information so that the information can be stored and retrieved efficiently.

- Big O notation – computer science defines performance by something called Big O notation. It shows how the data structure will perform as the data increase.

![ds-big-o-notation](./images/ds-big-o-notation.png)

![ds-big-o-notation2](./images/ds-big-o-notation2.png)

![ds-big-o-notation3](./images/ds-big-o-notation3.png)

- One of the problems with a hash structure is when we run into collisions when putting data into the hash. Collisions slow down the performance of the hash, which kind of defeats one of the main points of using the hash. We can reduce has collisions by increasing the has capacity or improve the hashCode() method quality to improve the uniqueness of hash value.

- The binary tree doesn’t need to always have two nodes per parent. the tree additions are based on comparisons rather than keeping the tree balanced. Because the tree data is dispersed based on comparison, it makes adding and finding the data quite efficient, so don’t have to traversed all the elements like array list due to which the Big O notation would be logarithmic which is one of the best access performance we can get out of a data structure. But implementing a tree data structure is a bit of complex in code.

- Safely Using Arrays - Arrays are used in examples like storing share prices of a company in different points of time, use arrays of pixels to store and process images. Arrays properties – contiguous memory locations as it is a very cache friendly data structure, same element type cannot have mixed up type of elements in a same array, direct fast element access by index, indexes are zero-based.

- Data transfer algorithms – physical vs. internet data transfer. We should pick the constant one because at some point it will be faster than linear complexity.

![ds-physical-vs-internet-data-transfer](./images/ds-physical-vs-internet-data-transfer.png)

![ds-physical-vs-internet-data-transfer2](./images/ds-physical-vs-internet-data-transfer2.png)

- Stack overflow – if internal array to store stack values gets full, then push operation will cause it outside of stack area which is not owned by stack. In this case, we should throw an exception from code.

- Arrays vs. linked lists – memory layout – direct fast element access by index not possible in linked list we have to traverse all the elements, also it is not cache friendly as it is not having continuous memory allocations. Linked list is good for inserting new item as all don’t have to shift. So, no reallocation overhead. The nodes of the linked list are stored in sparse memory locations. They are scattered all over computer’s memory.

![ds-array-vs-linked-list](./images/ds-array-vs-linked-list.png)
