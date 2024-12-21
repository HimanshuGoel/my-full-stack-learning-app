# Interview Questions - Angular

- What is SPA and PWA?

- The @Injectable() providedIn property vs. @NgModule() providers array

- Why angular 2 and how is the author (Misko Hevery)?

- Angular key features with each version upgrade (angular 3 - version mismatch between @angular/core, @angular/compiler and @angular/router libraries, angular 4 - emphasis on making angular apps more faster, compact, faster compilation, better bug fixes alert, angular 5 - build optimizer, compiler improvements, internationalized number, date and currency pipes, @angular/http is deprecated and replaced with @angular/common/http, HttpModule replaced with HttpClientModule, angular 6 - angular elements, library support, tree shakable providers, angular 7 - cli prompts, virtual scrolling, drag and drops, bundle budgets in cli, angular 8 - differential loading by default where browser chooses between modern or legacy JS based on its own capabilities, dynamic imports for route configurations, web worker support, ng deploy added into cli, angular 9 - ivy compiler, new options for providedIn, component harnesses, youtube player and google maps components, angular 10 - date range picker component, optional stricter settings, angular 11 - fixed few popular bug fixes, automatic font inlining, hot module replacement, faster builds, TSLint deprecation, remove ie9, ie10 and ie mobile support, angular 12 - nullish coalescing support, deprecated support for IE11, angular 13 - dynamic components, accessibility improvements for angular material components)

- How do you do angular upgrade for your project

- Angular bootstrapping flow - When an Angular application is started, the main.ts file is loaded first, here we bootstrap the root module i.e. app.module.ts. In this module, we specify a component as the bootstrap component and tell angular to load this component and all its dependencies at start up and register it’s selector app-root. Now when browser loads the index.html file, it knows what is app-root and render all the contents of this component.

- Query decorator - @ViewChild, @ViewChildren, @ContentChild, @ContentChildren

- Difference between ng-container, div and span.

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

## Unit Testing

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

## Accessibility

- Have you considered Accessibility during your development?

- Web accessibility guidelines – WCAG (A, AA, AAA).

- aria attributes like aria-busy, aria-disabled, aria-grabbed, aria-hidden, aria-invalid.

## User Experience

- What is UX, some of its best practices or anti-patterns?

## Security

- Application security best practices or OWASP top 10? - CSP, Cross-site scripting, Broken Authentication, Sensitive data exposure, Security Misconfiguration
