## Health

- No treatment in the world will have even as remotely similar results as regular exercise. This is the silver bullet for your health. Your construction crew will repair everything in your body from injuries, sicknesses, inflammation to cancer cells. In fact, the "crew" will keep your body in such good shape that it will prevent 99% of afflictions.

- Unfortunately, the least healthy foods usually offer the most comfort.

## Architectural

- Software Architect - Make high-level design decisions and document them, Mentor more junior engineers, Do code reviews, Develop the most critical part of the codebase, Refactoring to get rid of technical debt, Drink coffee.

- Types of architecture - classic three-layer database-centric, domain centric, application layer, CQRS.

- Software architect role - how to design software and works, functional architecture,

- Technical architect role - microservices, how pieces are connected with each other, design how software hangs together, cloud aws learning

## User Experience

- Try to avoid the horizontal arrangement of radio buttons. Horizontal radio buttons can be difficult to scan — it can be challenging for users to tell which label the radio button corresponds to.

- Toggle switch control is easier for the thumb. This property makes it suitable for mobile devices.

- Dropdowns should be the last resort. Whenever possible, instead of dropdown, try to use alternative controls that help the user to complete the task but have better usability.

Interaction Design (IxD) – the process of designing interactive products, focusing on how users will interact with them. sometimes called “conversations design”. Interaction design dimensions – words, visual representations, physical objects or space, time, behavior.

## Regular Expression

- In top 15 languages, only assembly language doesn’t support regular expression.

![typescript-regex-basic-syntax](./src/assets/images/typescript-regex-basic-syntax.png)

![typescript-regex-short-codes](./src/assets/images/typescript-regex-short-codes.png)

## Soft Skills

- During presentation instead of saying word um… just use silence.

- Update in a stand-up meeting is to talk about what you did yesterday, what you will do today, and if there are any blockers. Even if you don’t have any PR or documentation ready, don’t be afraid to discuss what you did yesterday. It includes telling the team that you are spending time trying to understand the new architecture or the product definition for the entire day. The manager wants to know whether or not you are blocked during this status update. However, most importantly, they want to hear the delta of what you did yesterday compared to today. A status update is a good environment to reiterate your efforts on the project and set timeline expectations, such as any delays in the project delivery. Create a short summary list before the status update.
  1. What did I do? - Research on System X and Product Spec Y. Found out that System X requires IT approval.
  2. What will I do? - Look into the codebase of architecture X. Does anyone know which repository I should start with or who the owner of system X is?
  3. Blockers - No Blockers for now

## HTML

- ARIA full form - Accessible rich internet applications

## Life

- The cow does not give milk. "What are you saying?" Asked the boy incredulously. As you hear it, son: The cow does not give milk, you have to milk it. You have to get up at 4 in the morning, go to the field, walk through the corral full of manure, tie the tail, hobble the legs of the cow, sit on the stool, place the bucket and do the work yourself. That is the secret of life, the cow does not give milk. You milk her or you don't get milk. There is this generation that thinks that cows GIVE milk. That things are automatic and free: their mentality is that if "I wish, I ask..... I obtain." 'They have been accustomed to get whatever they want the easy way...But no, life is not a matter of wishing, asking and obtaining. The things that one receives are the effort of what one does. Happiness is the result of effort. Lack of effort creates frustration." "Cows don't give milk; you have to work for it."

- Indians are very touchy about their place in history and world. Instead of working hard to better their country, most people prefer to belittle others achievement and have false delusions to feel good about themselves.

- Most Indian ideas about history and current affairs does not come from books or university, but rather from jingoistic TV news, silly Bollywood movies and fake WhatsApp forwards.

- RDR2 - Revenge is a luxury we can't afford.

- Animal rewarded for good behavior will learn much more rapidly and retain what it learns far more effectively than an animal punished for bad behavior. Later studies have shown that the same applies to humans.

- A dog is the only animal that doesn’t have to work for a living? A hen has to lay eggs, a cow has to give milk, and a canary has to sing. But a dog makes his living by giving you nothing but love.

- A man without a smiling face must not open a shop.

- You can’t win an argument. You can’t because if you lose it, you lose it and if you win it, you lose it. What about him? You have made him feel inferior. You have hurt his pride.

- If you want enemies, excel your friends; but if you want friends, let your friends excel you.

- When we have some time to chat, I ask them to share their joys with me, and I only mention my achievements when they ask.

- The truth has to be made vivid, interesting, dramatic. You have to use showmanship. The movies do it. Television does it. And you will have to do it if you want attention.

- I have no right to say or do anything that diminishes a man in his own eyes. What matters is not what I think of him, but what he thinks of himself. Hurting a man in his dignity is a crime.

- A sick person only has one wish, and a healthy person has a ten thousand wishes.

- Great programmers maintain their humbleness and are looking for knowledge. teaching others allows us to gain a greater view of specific topics/situations that might otherwise appear foreign (or intimidating) if we only watch via text/video.

## JavaScript

- JavaScript was originally called Live Script, Netscape changed its name to JavaScript, and it is believed that this was because of the hype of Java within the industry.

Types of errors – compile time errors, runtime errors, syntax error, logic error

Types of runtime error – SyntaxError, TypeError, ReferenceError, URIError, RangeError, EvalError, InternalError.

We can use String.raw() method if we don’t want special character to get render on the UI like ‘\t’, ‘\n’, etc, they will get printed as a raw string.

The length of the emoji is not 1 unlike normal string characters, it can vary from 1 to 7, etc. String a Unicode character can get fit into 16-bit unit, but not emoji.

The for and for-of are the constructs of the language itself, whereas the for-each is the method on the array, map and set objects and can access it on the interables.

The for-each loop skips absent values for absent value which got created while doing like below, these are not undefined or null values. The array will be called Sparse Array.

With for or for-each loops, we can’ use the “continue” or “break” keywords. For this, we should use “filter()” method then further chain the “forEach()” method. To convert and transform a value, we need to use the map() method.

The for-in loop produces indices instead of values unlike for-of loop. The for-in loop present from the start of the language but for-of has been introduced in ES6 version.

Also, with for-in loop the order of the iteration is not guaranteed also it will enumerated the inherited properties. We should not use for-in loop to iterate arrays or other iterables but use for-of loop. We should use for-in only to iterate the properties on a object, with for-of we will get an error that object is not iterable. To still make the use of for-of we can use Object.entries() or Object.keys() methods to iterate. So, we should use for-in only if we also want to iterate the inherited properties.

When ES6 was released, it was not able to run directly in browsers. To run it into the browser, this process is called transpilling to convert ES6 into ES5 before getting served to browser.

Unlike compiler transpilers transform the code of a language into another form of the same language. They are also referred to as source to source compilers. This process converts one higher level language to another higher level language.

Modern web browsers have good support for the latest versions of JS, including features that were introduced in newer versions of the language. But we still need transpiling for few advanced language feature that are not yet supported by all modern browsers might need transpiling.

Polyfills handles the cross browser feature gaps. It is a technique to add missing features to older browsers, allowing them to support newer features that are only available in modern browsers. It ensures that websites can run correctly across all browsers. It also support for deprecated features on newer browsers for older applications. The famous library for polyfills is core-js which includes methods like includes(), find(), findIndex(), flatMap(), sort(), padStart(), padEnd(), assign(), entries(), sing(), trunc(), promises, etc.

The “void 0” is a primitive value of undefined.

## Others

- Cloud learning path - docker -> kubernetes -> helm -> istio

- Video game evaluation - game watch -> gameboy -> gameboy colour -> gameboy advance -> gameboy advance sp -> nintendo ds -> dsi -> 3ds -> switch

- Low-code no-code (LCNC)

- We should not create any features of functionality when we are carrying out the refactoring process.

- Event based learnings (like office training) vs continuous learnings (like from pluralsight).

- Young bright minds ready to snipe every job opportunity that comes their way.

- Foley artists give life to shapes like footsteps, actors walking in leg chains. They reproduce every day sounds like waves crashing, rain coming down, cars passing by, punches, kicks, wind blowing, doors slamming. Three major kinds – feet, movement, specifies. Like roaring of a tiger in a scene or helicopters flying over the heads of the actors in a scene are produced by artists working on specifics.

- Freemium – providing a free, basic version of the app with the option to upgrade to a premium, paid version.

- SNES 8-bit games.

- There is no need to defragment the SSD as they do not work the same way as traditional hard drives. In fact, defragmenting an SSD can cause unnecessary wear and tear on the drive.

- To prevent screen burn-in, avoid displaying static images or leaving the monitor on for long periods of time. Use a screensaver or power-saving mode when monitor is not in use.

- A good song will develop as it goes along, taking us on a familiar path sprinkled with surprises along the way to make sure we are listening. A bad song, on the other hand, will remain stagnant throughout its entirety.

- Overclocking will make your phone run hotter and shorten your battery life, but I can squeeze every drop of power out of your device.

- Stable diffusion is a latent text-to-image diffusion model capable of generating photo realistic images given any text input. The model employes a technique called diffusion modelling, which works by incrementally reducing the noise in a sample over several iterations, eventually producing a final output. Diffusion model is a type of model that generates a chain of increasingly noisy images by adding Gaussian noise to an image and then training a model to predict the noise added to an image from one step to following one. It uses a fixed and finite number of steps to generate images, resulting in a stable repeatable image generation.

- Experience is the name everyone gives to their mistakes. Oscan Wilde.

## Writing

- Gobbledygook – intentionally meaningless language – we deliberately use unclear language so that general people don’t understand it and won’t raise any counter question.

- Email should have amplification structure – beginning with a declared main idea, followed by supporting details and elaborations, and ending with logistics.

- Email is asynchronous communication and instant messaging is synchronous communication.

- Fast is fine, but accuracy is everything.

- We should different visuals like screenshots, icons, symbols, table, graphs and charts, flowcharts to make it easy to understand and engaging.

## Podman

- The early 2000s was the era of the virtual machine. We are now firmly in the container era. They have much smaller footprint, quicker to download and a lot less resource needed to run them.

- Container image – a file system bundle containing all files, packages, dependencies, and kernel needed to run a service. To the host this is a single process. Container run isolated from other containers so software and dependencies installed on one container do not affect other containers. It has small footprint because there is no complete operating system with a container making them are much less resource hungry than running virtual machines.

## Angular

- Signals - Either change everything or keep a track which values have been changed which will cause internal housekeeping problems. It is better to tell angular by us which things have been changed for a better performance and predictability. A signal represents a value of some kind either a simple primitive value or something as complex as a list of objects. It will let the angular know if something is changed and what has changed.

- Angular is a single page application which means that the main JS bundle is downloaded from the server, and then the browser handles rendering the different views within the application. Without routing, we can manage changing views programmatically but navigating without changing the URL means that the native browser navigation will not work for our application. By bootstrapping the angular router module we can connect our application to the browser URL, which allows users to move between views using built-in browser functionality. Since angular is a single-page application, changing in the routing are not requesting new views from the server. Instead, route changes will replace portions of the current view.

- Declaring child routes with forChild() as we want to reuses the existing singleton router service instance but want to separate out routes into separate modules to keep our route declarations closer to the components that they route to.

- Path segment prefixing – we should use relative paths whenever possible to avoid large refactors if the parent URL structure changes. Also, we should define constant route tokens instead of using static strings across the application.

![angular-path-route-prefixing](./src/assets/images/angular-path-route-prefixing.png)

- The navigateByUrl() method is not able to handle the query params or setting the relative URL, the navigate method is more versatile. The navigate() method is default to absolute route.

- The canMatch route guard is very useful for feature flagged routes.

- We should avoid using the route resolvers as they blocks navigation until the function returns, it is not a great solution for prefetching data from slow endpoints and we should avoid to use it.

- In angular 15, we can use RouterTestingHarness to test router links with ease

- Angular’s compiler serves as a bridge between developer experience and run time performance: Angular users author applications against an ergonomic, decorator-based API, and ngc translates this code into more efficient runtime instructions.

- In this way, ngc can be considered an extended TypeScript compiler which also knows how to “execute” Angular decorators, applying their effects to the decorated classes at build time (as opposed to run time).

- ngc has several important goals: Compile Angular decorators, including components and their templates. Apply TypeScript’s type-checking rules to component templates. Re-compile quickly when the developer makes a change.

- TypeScript by itself has no understanding of Angular template syntax and cannot type-check it directly. To perform this checking, the Angular compiler converts Angular templates into TypeScript code (known as a “Type Check Block”, or TCB) that expresses equivalent operations at the type level, and feeds this code to TypeScript for semantic checking. Any generated diagnostics are then mapped back and reported to the user in the context of the original template.

![angular-life-cycle-steps-details](./src/assets/images/angular-life-cycle-steps-details.png)

Innovation is more like a system or network not a single moment.

- Angular inspirations –

![angular-inspirations](./src/assets/images/angular-inspirations.png)

![angular-angular-inspired-by](./src/assets/images/angular-angular-inspired-by.png)

- FormControl is an entity that tracks the value and validation status of an individual form control. A FormControl is always created regardless of whether you use template driven or reactive forms. Instead of a native form control like input, any custom form control can interact with a formControl. The number of native form controls is limited, but the variety of custom form controls can be potentially infinite. So, Angular needs a generic mechanism to stand between Angular’s formControl and a native/custom form control. This is where the ControlValueAccessor object comes into play. This is the object that stands between the Angular formControl and a native form control and synchronizes values between the two. A ControlValueAccessor acts as a bridge between the Angular forms API and a native element in the DOM.

- Default value accessors - DefaultValueAccessor, CheckboxControlValueAccessor, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor

- If we try to mutate the state in ngOnChanges() or ngAfterViewChecked() or ngAfterContentChecked(), it will give ExpressionChangedAfterItHasBeenCheckedError.

- View encapsulation modes – none, emulated and shadowDom.

- In the default emulated mode - It will add the random **ngHost and**ngContent attributes on the components if we have define some style properties on the component. Otherwise it won’t generate them. By this, these styles will be out from the global scope, this mode is handled by the angular.

- The none and ShadowDom modes will be handled by the browser not by the angular. With none mode, it won’t generate any attributes and the styling given at the component level will be applied on the whole DOM. We can use this mode in the root app component so that all the styles which we apply in here will be applied on all page content globally. With ShadowDom, it will create the actual shadow root element will be created which will separate the marker and CSS outside of the scope of the parent document. This approach will cause problem in older versions of browser.

- We should stick with the default Emulated mode.

- We can apply all the styles globally by externally link the style.scss into angular.json file or by turning off the view encapsulation to none and referring the style.scss into the app component. We should prefer linking them into the styles.scss file

- We should not apply all the styles globally except browser resets, colors, typography, layout, media queries and utilities as no all styles need to encapsulated.

- We have two system to apply global styles – class based system, mixing & variable based system.

- We should name the global class with prefixed like l-container or layout-container or lt-container to avoid collision, but it is not needed for local scoped class like navbar.

- Naming design for CSS – SMACSS, OOCSS, Atomic Design, B.E.M.

- B.E.M. is an acronym for block\_\_element--modifier. A modifier would be any variabtion on a block or element within a block.

- Single responsibility principle - Let’s say you have a component called Order that displays information about a customer’s order, including the customer’s name, order date, and order items. This component has two responsibilities: displaying the customer’s information and displaying the order information. According to the SRP, these two responsibilities should be separated into two separate components. By following the SRP, you can create a well-organized codebase that is easy to maintain and modify. This, in turn, makes your applications more scalable, flexible, and adaptable to changing requirements.

- Open/Closed Principle (OCP) - The Open/Closed Principle (OCP) is a software design principle that states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that the implementation of a software entity should be written in such a way that it can be extended to meet new requirements without having to modify the original code.

- The OCP helps to make the code maintainable, extendable, and scalable. By following this principle, you can avoid having to make changes to the existing code base every time new requirements are introduced, which can save time and effort and reduce the risk of introducing new bugs.

- One way to implement the OCP is through inheritance. You can create a base class that implements the common functionality and then extend it with subclasses that add additional functionality. For example, if you want to offer discounts based on customer loyalty, you can create a new class that extends the DiscountService class and overrides the calculateDiscount method to include the customer loyalty factor.

- Liskov Substitution Principle (LSP) - The Liskov Substitution Principle (LSP) states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program. This means that subclasses should be able to extend the functionality of their superclasses while preserving their behavior.

- A violation of the LSP can result in unexpected behaviors and bugs in the program. For example, consider a Rectangle class that has width and height properties. If a subclass of Rectangle called Square overrides the setters for width and height so that changing one also changes the other, then a client that depends on the Rectangle class may not work correctly when it is given a Square object.

- To ensure that the LSP is not violated, it is important to design classes and their hierarchies in such a way that subclasses inherit the behavior of their superclasses, but do not change it in any way that would affect the client code. This can be achieved through proper inheritance and polymorphism, as well as by defining clear contracts for each class.

- Interface Segregation Principle (ISP) - The Interface Segregation Principle (ISP) states that a client should not be forced to depend on methods it does not use. In other words, it is better to have many small and specialized interfaces than a few large and general ones. This principle helps to reduce coupling between classes and improves the maintainability and flexibility of the code.

- A violation of the ISP can result in large, complex interfaces that are difficult to implement and maintain. For example, consider a Document class with a large set of methods, some of which may only be relevant to certain types of documents (e.g. text documents, image documents, etc.). If a client only needs to work with text documents, it will still be forced to depend on the entire Document class and all of its methods, even if it only needs a small subset of those methods.

- To ensure that the ISP is not violated, it is important to design interfaces and classes in such a way that they are small, focused, and specific to the needs of the client. This can be achieved by breaking down large interfaces into smaller, more specialized ones, and by only defining the methods that are actually needed by the client.

- Dependency Inversion Principle (DIP) - The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules, but both should depend on abstractions. This principle helps to reduce coupling between classes and improve the maintainability and flexibility of the code.

- A violation of the DIP can result in tightly-coupled code that is difficult to maintain and change. For example, consider a class WeatherMonitor that directly depends on a class WeatherService to retrieve weather information. If the implementation of the WeatherService class changes, the WeatherMonitor class would also have to change, even if the changes are not relevant to the WeatherMonitor.

- To ensure that the DIP is not violated, it is important to design classes and modules in such a way that they depend on abstractions, not on concrete implementations. This can be achieved by defining interfaces that define the required behavior, and by implementing the concrete classes that provide the actual functionality.

- Javascript based web applications, like angular, can’t maintain secrets, everything is public. A user can view page source, network requests and their payloads, and look at browser storage, nothing is secret to the user.

- For queuing promise we can use Promise.all(), it is like Array.every().

- Settling all promise by using Promise.allSettled(), for this we don’t need catch() as when it will be resolved it will have a specific key to specify which promise has been succeed or rejected. It is like Promise.some().

- We can listen any of the first resolved promise by using Promise.any(). We can use Promise.any() if we want fastest response from any of the promise, it will return and resolved the Promise.any() immediately.

- Promise.race() will also get settled even if any of the promise gets fails as-well. So, we need both .then() and .catch() block functions to make it work properly.

- Async-await is a syntactic sugar for promises to make thing easier to read or to express.

- UMD Modules – it check if it is AMD then use this format, otherwise check if Common JS then expose as CommonJS format otherwise it will export as Browser global. It doesn’t support standard ES Module as it was written before to it and ES module doesn’t work properly with this dynamic module detection approach.

- Sometimes we want to write library which supports multiple module formats, there is a standard for this called UMD (Universal Module definition). I will support AMD, common js and Global.

- The **proto** property has been deprecated to get the prototype of an object, instead of this we should use getPrototypeOf() function. Also, by using setPrototypeOf() function we can set a object with prototype inheritance with a parent object

- Dates are represented in JS in epoch manner, it stores it in milliseconds from the epoc. This epoc is in someway a arbitrary date chosen in past January 1st 1970. JavaScript tracks the number of milliseconds from that point midnight until the date we have. If we have earlier time, then it would be a negative number, after that it would be a positive number. We can get this number by calling getTime() on our date object.

- Instead of using the for loop, we should use for-in or for-of loop. It is better to use forEach also it handles sparse array value by ignoring the undefined values, however in forEach there is no support for handling the continue or break statements

- Function throttling – common scenarios for using a proxy to apply on a function to avoid being executed again and again. It can protect execution to avoid bugging down the system or prevent to hammering an API.

- A scope is called ‘lexical’ because it is linked to the to place where the function is written in the code.

## Node.js

- As per below diagram, much of the work done by Node JS and libuv not by the javascript –

![node-js-behind-the-scene](./src/assets/images/node-js-behind-the-scene.png)

## Chrome

- HTML is a parser language or abstract layer for C++ to parse on the browser. The browser are very good at networking and timers capabilities.

![browser-behind-the-scene](./src/assets/images/browser-behind-the-scene.png)

- Browser works on simple working concept to display the data and provide interaction to the user. It converts the token into scattered objects which gets constructed into the Document Object Model.

![browser-html-node-list](./src/assets/images/browser-html-node-list.png)

- Afterwards, to create the relations between them, it creates node list which is given by rendering engine.

![browser-html-node-list-afterwards](./src/assets/images/browser-html-node-list-afterwards.png)

- Browser engine is very good at math to create render tree as per client screen size and components size based on CSS then it starts painting to actually showing elements on the UI.
  Whenever browser sees a script tag it will stop executing the DOM or whatever works it is doing, the first preference always goes to JS as JS has the capability to modify DOM or CSS so no point to painting before evaluating all the JS. That is why we should not first send the JS but the HTML and CSS so that browser will show the page without any delay on first load, then send the JS for interactivity. However in case of CSSOM, JS execution will be halted until CSSOM is ready.

![browser-html-render-tree](./src/assets/images/browser-html-render-tree.png)

## Database

- ORM makes life easier. Various different database varieties focus on or good at different part of the database like cache (Reddis), utility, storage engine, etc.

![database-behind-the-scene](./src/assets/images/database-behind-the-scene.png)

- History of database -

![database-history](./src/assets/images/database-history.png)

>templates
:git - goals and other updates for august 2023
:ms word - no extractable content.

=======================================================================================================================================================

>life tips
:unhealthiest habits for your brain? - sleep little, skip breakfast, consume a lot of sugar, smoking, overreacting, speak rarely, do not stimulate thoughts, working the brain while sick
:working after hours a good idea if it must be urgent, important, and clearly defined. Then, it should also be an area of expertise, learning, or relationship building.
:some trees flourish, others die. some cattle grow strong, others are taken by wolves. some men are born rich enough and dumb enough to enjoy their lives. ain't nothing fair.
:when you’re young and a summer lasts forever, and the school year lasts eternity to the 10th, it’s because your perception of time is marked by new events….almost everything is new, so your brain is constantly marking events as passages of time. we cram a lot of events into short passages of time. when we’re youth challenged, there just aren’t that many new events… it’s not new to go to work, come home, clean, go to bed, go shopping and talk to the cashier… we’ve done this thousands of times. so the event markers are spaced farther and farther apart. we need to mark new events… do new things. the more often we do them, the more our perception of time slows down.
:a jack of all trades is a master of none, but often-times better than a master of one.
:be a modern renaissance man. jacked, intellectual, romantic, artistic and ambitious.
:it’s not the strongest or smartest who survive, it’s the ones who are most adaptable to the changing environment.
:old age came a lot faster than i expected! now to answer when i started to feel old. i think it was when my body started to break down. first it was high blood pressure, and then knee replacements, hearing loss, a-fib, more heart problems, and weight gain. it became more and more difficult to go places and do things. if i were given the opportunity to live the last 10–15 years over, i would not allow myself to put on extra weight and i would not stop exercising, something i stopped doing when i retired. i am sure i would feel a lot younger even with my health problems.
:europeans appreciate healthier and tastier food, better choices of shopping and travelling, higher quality of education and healthcare, etc.
:Only those who become “spreadsheet managers” become redundant. Everyone should exercise (and I don’t just mean physical exercise). Always ask the following questions to yourself: Am I expensive? Is there anyone junior and cheaper who can do my job equally well? Do I bring value for the salary paid to me? Am I ready to take up a new role? Does the company believe that I can take up a new role? If you have positive responses to the above, you can last way beyong 45. Else you will not even last that long.
:pretentiousness doesn't impress me, being genuine does.
:those who have a why to live, can bear with almost any how. if you don’t have a why, game over.
:rich people educate themselves about money, investing. — poor people escape into entertainment. rich people live within their budget — poor people make impulsive buys to impress others. rich people focus on creating an upward spiral in their life — poor people stay in a misery loop. rich people know wealth is built long-term — poor people want the money tomorrow. rich people plan their expenses — poor people have no clue.
albendazole tablet
:life is just a series of upper brain and lower brain fighting
:improve your mood: exercise, think more clearly: meditate, understand the world better: read, understand yourself: write, enjoy the process: have fun, grow faster: consistency, love others: love yourself

=======================================================================================================================================================

>health tips
:during periods have warm foods - seaseme seeds, drid coconut and jaggery (should not use cold or fried food), don't have head bath, add epson salt in water, change pad every 4 to 8 hours.

=======================================================================================================================================================

>parenting tips
:don't give whole fruits but cut them into small pieces to avoid choking, don't give honey untill 1 year age
:no scolding children on minor things, create memories together and use camera for special events, focus on their creative development through games or activities, take child opionion into consideration, educate them about money by giving them pocket money, hug children often
:dim the lights in night, swaddling clams newborns because it feels like being in the womb, play soothing sound in night, we can put diaper in night but not in the day, do massage by yourself not by some lady, do tummy time after 2 months to make proper neck support
:children need healthy parents.
:वीनिंग अपनी निगरानी में करनी चाहिए. भले ही प्यूरी न बनाएं मगर खाने को मसलकर नरम करके बच्चे को परोसा जा सकता है ताकि वह आराम से ख़ुद उसे खा सके. बच्चों को गिरियां (nuts), पॉपकॉर्न या अनार के दाने जैसी चीज़ें सीधे नहीं देनी हैं क्योंकि ये गले में अटक सकती हैं. बच्चे पर जल्दी-जल्दी खाने का दबाव भी नहीं बनाना है और अगर वह इनकार कर रहा हो तो उसे जबरन भी नहीं खिलाना है.
:limit the toys so that she can explore the toy first withoiut getting confusion, maximum 4 toys. keep rotate their toys
:don't give screen time before 2 years old, let baby eat his own food by own hand

=======================================================================================================================================================

>techical tips
:"Debuggers don’t remove bugs. They only show them in slow motion." Using a debugger doesn’t scale. Types and tools and tests do.

=======================================================================================================================================================

>writing tips - journal
:gratitude, affirmation (i am kind/loyal/hardworking/honest, writing forgiveness), put pictures, clips or news cuttings, stress or any conflicts, write after a negative experiance or before to a big event like an exam, book in a day like in morning and night before day with gratitude, progress and challenges and what have you done throughout the day and what to do next, recap your day, give day a review starts, what i did today i am proud of, i can work on, help others in a immediate way, what can i do to help me grow, things looking forward to, how can i achieve my goals

-------------------------------------------------------------------------------------------------------------------------------------------------------

>writing tips - microsoft teams
:introduce yourself on the first contact, go straight to the point (don't just say hi), divide long message into semantic parts, tag people (talking more than one person and need an answer from a particular person), nothing good is sent after 9 pm.

=======================================================================================================================================================

>writing tips - ai bots - chat samples
:write error message for "no internet connection"
:write a sample usablity testing script for a landing page
:suggest me a youtube thumbnail idea for title "elon musk ending twitter"
:write a humorous introduction for a course about ChatGPT. Use two sentences.
:generate the data model in mermaid script in html, generate a sequence diagram
:write [topic] in the style of an expert in [field] with 10+ years of experience.
:generate 10 ideas for blog titles about the importance of using source control in software development.
:how would you describe user experiance term to my grandma that doesn't know what is a website or a computer
:i want you to act as the best bookseller and i will ask you questions. you have to give me unique and world-class answers.

-------------------------------------------------------------------------------------------------------------------------------------------------------

>writing tips - ai bots - images generation samples
:an oil panting of a cat in space with a cup of coffee
:a photo of a man wearing a t-shirt walking in a city looking at his phone

=======================================================================================================================================================

>use cases - ai bots
:solves anything - chatgpt
:writes anything - copy.ai
:create art - midjourney
:create ppts - tome.app
:create music - soundraw.io
:create video - kaiber
:create 3d gif - leiapix converter
:create reels - fliki
:notetaking - fireflies
:edit videos - runway
:create avatars - anime ai

=======================================================================================================================================================

>essential references - miscellaneous
:beer is the worst drink to have.
:do not drink any type of juice, always have whole fruit or vegetable.
:to prevent cancer, simply avoid stress, tobacco and opt for a clean diet.
:do not use dark bedsheet, 8-fit size and minimum 400 thread counts.
:avoid travelling and stay indoors during month of january to avoid severe winter conditions and thick fog-related issues.
:it is not the finances that should scare you, it is the loneliness and illness during your sunset years
:bertrand russell: “the fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.”
:don’t interrupt the other person while they are speaking - by your interruption, you’re insinuating that your thoughts and ideas are more important than theirs.”
:be tough on the process, but gentle on the output - you need to set aside time to write and that is where you cannot be easy on yourself. you need to follow the process. if you plan to write for two hours every day, do that. if you wake up at 5 and your process is to be at your desk by 5:30 and you feel like sleeping in, that’s the time to be tough on yourself. protect the process of writing every day.
:you can go fast or go far. not both.
:mind is made for processing of things not for remind them. so note down everything which are important to you.
:we should never ask our children, instead we should tell them what they will be eating for dinner – a steady, simple and nutritious meal.
:ayurveda rejects the stale, easy, ready-in-a-minute choices in the urban world and encourages all things natural.
:the nature of water is dry and sharp. it slowly pulls natural oils from our skin, which is naturally unctuous in its healthy state. that is why ayurveda advises us to oil our bodies before rinsing with water.
:we should have seven inner small bowls with one lid – mustard, jeera, kalonji, ajwain, turmeric, panchaparan and fennel.
:life is very short and anxious for those who forget the past, neglect the present, and fear the future.
:what would have happened, doctor if you died first, and your wife would have had to survive without you?
:don’t try to see god. act in such a way that god will see you.
:many japanese people never really retire – they keep doing what they love for as long as their health allows.
:the greater the stress, the greater the degenerative effect on cells.
:if you keep moving with your fingers working, 100 years will come to you.
:put your hand on a hot stove for a minute and it seems like an hour. sit with a pretty girl for an hour, and it seems like a minute. that is relativity.
:flow state is when pleasure, delight, creativity, and process when we are completely immersed in life.
:we often think that combining tasks will save us time, but scientific evidence shows that it has the opposite effect.
:food won’t help you live longer. the secret is smiling and having a good time. to live a long time you need to do three things: exercise to stay healthy, eat well and spend time with people.
:the things we love are like the leaves of a tree: they can fall at any moment with a gust of wind.
:surround yourself with good friends.
:we should never forget what a privilege it is to be in the here and now in a world so full of possibilities.
:the being john malkovich movie is based on body-mind problem
:consciousness is a terrible curse. i think. i feel. i suffer
:when you have power without responsiblity, that is a recipe for a bad governance
:movies have time pressure as essense just like water and sky have blue as essense
:walk (create manufacturing assembly line) -> run (create components) -> sprint (create own branding)
:it's weird, i wouldn't recommend this movie to anyone but at the same time i would love that every single person watches this masterpiece.
:india loves thrown body at problems - classic poor management strategy. engineering is quite the opposite.
:avoid referring to colleagues or friends as family members; maintain the relationship as it is without altering it. for instance, let a father remain a father and not become a friend
:those who are genuine and focused are not affected by the evil eye, whereas individuals who are insecure, show off, and lack authenticity may attract it.
:the degree to which other people want to work with you is a direct indication of how successful you’ll be in your career as an engineer. be the engineer that everyone wants to work with.
:i protect my weekends. i don’t engage in work-related stuff during those two days. i removed any work-related stuff from my smartphone. i try to reduce my computer screen time after work.
:play long-term games with long-term people. all returns in life, whether in wealth, relationships, or knowledge, come from compound interest.
:discipline may be necessary, as without discipline, there can be no order in society and no social progress would be possible. however, too much discipline tends to reduce human rationality and kills creativity, innovation, humanity, love and compassion. the best course is, therefore, to educate and develop rational thinking in the people to cultivate self-discipline so that they are driven to do the right things due to their inner conviction rather than due to the fear of authority.
:i don't want heaven if it going to arrive into my life, if that heaven does not contain your soul - ramayana
:don't compare with others like if you driving alto and someone land rover crosses you then you don't give that much importance.
:consciousness and time are worlds biggest mistery.
:atheletes have no taste buds.
:when a company lays off individual workers, it doesn’t pick them at random. it lays off the least productive, least knowledgeable, and most senior (expensive, but also old) workers. these are workers which the company has unfortunate experience with, whose absence won’t be felt.
:now a day, the technology and hardware are not the bottlenecks but the people skill sets.
:many developers still behave like unskilled, unmotivated workers, providing very poor service to their employers and clients.
:companies are demanding professional software developers and not just cheap coders who do whatever they are told to do.
:software development should be qualified as art, craft, trade, engineering, or science.
:well-crafted software means that , regardless of how old the application is, developers can understand it easily. the side effects are well known and controlled. it has high and reliable test coverage, clear and simple design, and business language well expressed in the code.
:software craftsmanship is a mindset – a lifestyle that many professional developers adopt. software craftsmen live and breathe software. they see software as a craft and are committed to do whatever they can to master their craft.
:when we say yes, people take that into account and make plans based on it. our bosses will make promises to their bosses, other teams, customers, or partners based on what we said. not being honest and transparent may cause huge damage to the entire team company.
:always saying no is also not a professional attitude. every no, ideally, should be followed by a list of alternatives. remember the story of getting orange by two different persons with different approach.
:craftsmen are gardeners. they are constantly looking after the code base, quickly refactoring it without fear – they are backed by a good battery of automated tests that can test the entire application in just few minutes.
:use job description template provided at page #127. (software craftsman)
:when a software craftsman makes recommendation, it is implied that the recommended developer is also a software craftsman, and that he or she shares the same passion, values, principles, and dedication.
:a good interview is like a good and informal chat between passionate developers. it is an exchange of information: a good debate about techniques, tools, challenges, and approaches to software development.
:clients may decide not to pay for quality and ask for a quick and cheap solution, but deep inside, they will always be expected quality and won’t be happy if they don’t get it.
:well-crafted code is simple, small, testable, easy to understand, and most important, does the job.
:software craftsmen are humble, always ready to learn from more-experienced developers and eager to help the less experienced.
:if you act without thinking, you are wasting the very edge that you have over machines. you are a candidate to being replaced in the near future (either by a thoughtful human or for a cheaper dumb machine). always try to understand what’s the purpose of the task you’ve been assigned to. unless, of course, you want to become a bad developer.

========================================================================================================================================================================================

For me a good employee is one that is consistent. In other words they produce the same quality and quantity of work/results every day consistently. They are set and forget with little to no effort required from me or their supervisor. I don't need them to be a superstar. I am happy with them giving me 80% of what a superstar could give me in theory because I know I am always going to get it from them and I can more easily predict business/job outcomes as a result. The above employee tends to arrive on time and have less than average personal/sick leave too in my experience. By contrast, the mediocre employee is brilliant one day and off with the fairies for the next three days, then rounds out the week with a day off for a sprained eyelash! Mediocre employees work output is up and down and hard to predict resulting in far more time spent supervising them. This adds cost and complexity to the business as a result. So if you want to impress a boss - work consistently. Produce at the same level everyday and try and find ways to gradually improve or become more efficient.
