# Extracted Notes - Part 2

These notes have been pulled out from various learnings acquired from various trainings, articles, books, etc. These can be considered as a quick reference notes in case of a brush up on a particular topic.

## Table of Contents

- [Cypress](#cypress)
- [Mongo DB](#mongo-db)
- [Security](#security)
- [Accessibility](#accessibility)
- [User Experience](#user-experience)
- [Git](#git)
- [VS Code](#vs-code)
- [Markdown](#markdown)
- [Architectural](#architectural)
- [Data Structures](#data-structures)

## Cypress

- We can use Cypress to test any web application built on any type of technology.

- It has four key folders – fixtures, integrations, support and plugins.

- Best practices – we should avoid using id’s or css classes to select element from the DOM, it will make the test brittle, because those things are likely to change. We should either use data attribute or actual component name itself.

- With Cypress, all related things are available out of the box –

![cypress-things-available](./src/assets/images/cypress-things-available.png)

- Cypress command API – it is a chained API where subject is passed through the chain.

![cypress-chained-api](./src/assets/images/cypress-chained-api.png)

- Test commands are executed in a deterministic manner, resulting in flake-free testing. Cypress will automatically wait for this assertion “.should” (4 seconds by default). So we don’t need to write code for wait and sleep until element is ready

- In cypress we can also stub network response with fixtures by using cy.server() command.

- Whereas selenium executes remote commands through the network, Cypress runs in the same run-loop as our application. Other tools like protector uses selenium under the hood unlike Cypress. It provides features like real time loading, time travel, consistent results.

- Selenium and similar tools were designed to test applications that require a full-page refresh. Supporting SPAs with Ajax data fetching was an afterthought. This lead to many issues with timing and flakey tests. Tests would sometimes fail due to slow API requests or network latency. Fixing these flakey tests typically required adding sleep statements and increasing timeouts. This made the test code more brittle. Not to mention extremely slow.

- It’s worth mentioning Google’s Puppeteer has inner access to web browser events, allowing us to wait on things like Ajax calls. However, writing tests with Puppeteer requires more initial setup work and more effort to write each test than it should.

- Cypress.io is a relatively new framework. It overcomes many shortcomings found in Selenium, Phantom.js, and others before them. It uses an event-based architecture that hooks into Google Chrome’s lifecycle events. This enables it to wait for things like Ajax requests to complete without using a polling/timeout mechanism. This leads to reliable and fast tests. In short, it is truly the future of E2E testing and how it should have been in the first place.

- You can run Cypress in two modes: full-mode and headless-mode. The former lets you see your app’s UI and tests performed one step at a time. This mode is excellent for building up your test suite and debugging. The latter is great for a Continuous Integration (CI) environment. Another use case for headless-mode: you just want to make sure you haven’t broken anything with new changes but don’t care about the detailed steps.

- Headless-mode is useful for running on a Continuous Integration (CI) server like CircleCI. Once you start writing tests more regularly as part of your development, you should invest time in getting a CI server configured so that every git commit runs the entire test suite.

- Cypress is an end-to-end framework that was created by Brian Mann, who wanted to solve some pain points that a lot of developers face when writing integration tests: hard to write, unreliable and too slow. Similar to TestCafe, it was built on top of Node, with no dependencies on Selenium, and is a standalone testing framework that supports Javascript.

- You can have a 100% code coverage with unit-tests that test all your components in isolation, but your application might still fail when components start to communicate with each other.

- The real important tests are the ones that test functionalities that your users use every day. These are things like: “Can a user buy a product?” and “Will my order be shipped to the right address if I change the address later?” These kinds of things are impossible to test with unit tests, as they use all components of your application.

- Cypress additional events -

- .click(), .click({force: true}), .click(5, 10), .click('topLeft'), .type('text'), .type('text', {delay: 10}), .type({backspace}), .select('value'), .select('val', {log: false}), .select([val1, val2]),

- Cypress commands do not return their subjects. They yield them. Cypress commands are asynchronous.

- Cypress uses retry-ability for the commands automatically to avoid hard code waits. Below if the assertion is failed then it will go back to the command and wait for a certain period of time

- It only retries commands that query the DOM like get(), find() or contains(). Commands that are not retried are the ones that could potentially change the state of the application. Also, it will only retry the last command before the expression like in below it will do the several retry for the .find() but no retry for the get().

![cypress-querying](./src/assets/images/cypress-querying.png)

- Types of commands – parent command start a new change and ignore previously yielded subject, child command cannot be directly used and need to apply on parent command or another child command. The dual commands can do both.

![cypress-types-of-commands](./src/assets/images/cypress-types-of-commands.png)

- It is suggested to do the clean-up before and not after tests.

- There are two design pattern while writing the E2E to make it more maintainable and free from future breakage – Page Object Model and App Actions.

- App Actions is an approach where tests directly access the internal implementation of the application under test. It enable changing application’s state without interacting with the application through the UI.

- Page Object model is a wrapper over a web page and a design pattern where web pages are represented as classes. Encapsulates the mechanics required to interact with the user interface. Second one, is the example for page object. By creating page object classes, it will increase the maintainability, code reusability and readability of our code.

- We should identify steps to automate through the UI and then use the App Actions for supporting steps. Like for login workflow use it once by browser interaction and then for other dependent tests use via App Actions. Also, we should use precise and future proof selectors.

- Before and After Cypress –

![cypress-before-and-after](./src/assets/images/cypress-before-and-after.png)

- While writing the plugins, they run in Cypress background tasks in Node, since they executed in Node not in the browser, we can’t use Cypress syntax while writing plugins code.

- By using plugins, we can modify or extend the internal behavior of Cypress. We can write our own custom code that executes during different Cypress stages. By this we can also tap into node process running outside the browser. We can also alter the configuration and environment variables or customize how test code is transpired and sent to browser or to manipulate the database.

- Javascript mouse events are easy but CSS mouse events are hard. Cypress can’t easily trigger pseudo-classes like :hover. There are docs and options for this, but it is difficult.

- We should not select element by using text. We should use consistent selectors like id, class. Even better, use test-specific attributes like `<div data-cy="myElement"/>`

- Benefits of automated tests vs. manual human –

![cypress-automation-vs-manual-tests](./src/assets/images/cypress-automation-vs-manual-tests.png)

- Subcutaneous tests – a level above than the unit and integration tests and just below the surface of the UI. In this we can test all the non-UI components working together.

![cypress-functional-ui-tests](./src/assets/images/cypress-functional-ui-tests.png)

- We should write the smallest number of tests possible to reach the required level of quality or confidence in the system being developed.

- Characteristics of good automated tests – isolated (no side effects on other tests), independent (can be run in any order), repeatable (always pass or fail), maintainable, valuable.

- When a bug is found, a failing automated test can be written to reproduce it. When the bug is fixed the test will pass. In some future change, if the bug reoccurs it will be caught by the automated test.

## Mongo DB

- BSON - MongoDB represents JSON documents in binary form called BSON internally. It enriches JSON with additional data types that Mongo uses like Object Id, date, etc.

- Mongo DB is schema-less. Mongo does not enforces a schema, but documents inside the same collection should have a similar structure for consistency.

- The find() method returns a cursor to the documents that match the query criteria. In projection, 1 means inclusion and 0 for exclusion.

```shell
db.aircraft.find({}, {model: 1, range:1, _id: 0})
```

- Cursor - A virtual object where MongoDB stores the documents returned by the find method. It can have any methods like below -

```shell
db.aircraft.find().pretty()
db.aircraft.find().count()
db.aircraft.find().skip(3)
db.aircraft.find().limit(5)
db.aircraft.find().sort({model: 1})

```

- Mongo DB does not guarantee the order of the returned documents unless sort() method is used. 1 for the ascending order and -1 for descending order.

- The find() method returns a cursor, however the findOne() method returns an actual document. If no document match the criteria, the method returns null.

- Best Practice - We should pass an empty object to find() method when we want to return all the documents instead of using blank find() method -

```shell
db.aircraft.find({})
```

- Comparison query operations - $eq, $ne, $in, $nin, $lt, $lte, $gt, $gte

```shell
db.aircraft.find({model: 'Boeing'})
db.aircraft.findOne({model: 'Boeing'})
db.aircraft.findOne({model: {$ne: 'Boeing'}})
db.aircraft.findOne({model: {$in: ['Boeing', 'Airbus]}})
db.aircraft.findOne({model: {$in: [/^A/]}}) // using regular expression

```

- Logical Query Operators - $and and $or.

```shell
db.aircraft.find({$and:[{capacity: 124}, {range: {$gt: 6000}}]})
db.aircraft.find({range: {$lt: 600, $gt: 6000}}) // short-hand syntax if same field
```

- CAP Theorem - consistency, availability, partition tolerance (system won't fail). MongoDB supports consistency and partition tolerance.

- Types of NoSQL databases - relational database, document database, key-value databases (Redis DB), white-column stores (Cassandra DB), Graph Database

- MongoDB is a document database.

- Why use MongoDB - open source, document database, high performance, rich query language, high availability, horizon scalability.

- JSON is a UTF-8 String but BSON is a Binary. JSON is human and machine readable but BSON is a machine readable only.

- We cannot replace the `_id` value with another value.

- MongoDB is a case-sensitive language. It supports MongoDB query language (MQL). It has dynamic JSON based schema unlike predefined in MySQL. It has no foreign keys or joins or triggers. It follows CAP theorem not ACID properties. It is horizontal scalable unlike SQL which have vertical scalable.

- Which is best database - is your data structured or unstructured? preferred scalability strategy? No need for ORM (object relational mappings) with MongoDB.

- There is no schema enforcement from MongoDB, it is a application responsibility.

- Replicate sets - Minimum replica sets in MongoDB - primary db (only writable instance), secondary db (read-only instances, data is replicated from primary db) and arbiter db (no data, provides additional vote to elect the db in-case if primary gets failed).

- By using the BSON and memory mapped files concept to store the data, makes the MongoDB very fast and efficient.

- The `_id` can contains any type of data except array.

- The ObjectId() will return a new object id and it also contains a timestamp ObjectId().getTimestamp() in ISODate format. We can use it for sorting in created by format.

- MongoDB uses a cursor to support the efficient retrieval of the document as documents might be in huge number which might support the memory to load. By this, it will give you a batch of documents and close the connection.

- We can use index to speed up the queries. The scanning of each location on the disk is bad for performance which finding a record, the solution is to use an index, it basically holds mapping to those locations from field values. By this, we can jump directly to the disk location where document is stored is good for performance and less i/o operations. It also good for sorting performance purpose as-well. Without index it will show n number of objects has been scanned, after index it will show 1 number od object has been scanned. Index on the `_id` field can not be dropped.

- Index types - Regular (B-tree), Geo (sort nearby locations), Text, Hashed, TTL (expiration date for documents)

- To know about how MongoDB will find the document, we can use explain() method -

```shell
db.animals.find({name: 'cat}).explain()
```

- Covering index - we use query using index and all the information is with index itself then there is no need to go to the dist to get the actual document, we can use the index itself to the actual result. In the explain() it will say indexOnly as true. Suppose we have applied index on name field and returning only the name field, not even `_id`, then the covering index will be used.

- When our database is large, we can create index in the background so that read and write action won't get blocked.

## Security

- Content Security Policies (CSP) Reporting - It is regarding the policies send alongside with website says where can this page load images, scripts and styles from, and where the form can post the requests and the browser will restrict the page accordingly. We can send it either in http header or meta-tags. We can also mention the report-uri where those reports will be sent. It was originally design to stop cross side scripting.

```typescript
Content-Security-Policy: upgrade-insecure-requests
Content-Security-Policy-Report-Only: default-src https:;report-uri https://demo.report-uri.com/r/default/csp/reportOnly
```

- Certificate Authority Authorization (CAA) Reporting - CAA is much safer than HPKP, by which we can say whom we want to authorize some particular CAs to be able to issue certificates for us.

- Cross-site Scripting (XSS) Reporting - Now, the browser has built-in an XSS auditor, in XSS attack we generally have kind of get parameter they sent to the server, rendered into the DOM and then reflected back to the browser.

```typescript
x-xss-protection: 1; report=https://report.uri.com/xss/enforce
```

- Cross-site scripting (XSS) – latest frameworks are helping to prevent this vulnerability.

- Broken Authentication – passwords are very vulnerable and very in-secure. We can refer `haveibeenpwned.com` and avoid user to choose the password which were breached in history. The password rotation was never a good policy and it works against us as humans are terrible at passwords.

- Sensitive data exposure – SSN, credit cards information, addresses, religion, health records, political affiliation, birthday. Combination of these information can become dangerous.

- XML external entities (XXE) – SAST static source code analysis (manual code reviews), we can also use DAST tool for testing.

- Broken access control – IDOR, indirect object references, where we can twiddle a value in the URL to get someone else’s data. We should test access control so that we can’t do things outside of our privilege level.

- Security Misconfiguration – weak ciphers, SSL problems, we can use tools to check them.

- Insecure deserialization – remote command execution (RCA) running command on other server, and another thing is changing the serialized objects to elevate our privileges to do something interested, tempering of objects. To avoid this, we can use HMAC and check the validity of object type on server to check its integrity.

- Using components with knows vulnerabilities – we should break our build if any vulnerable component is found. Latest package manager automatically detects such problem with 3rd party libraries and CICD we should break the build. We can use CSP to avoid such issues.

- Insufficient logging and monitoring – we should have some sort of audit trails in place.

- HSTS helps us ensure that connections are always made securely and they never drop back to HTTP.

- What Is Serialization and Deserialization? - When we want to store an object to disk then we need to represent the multi-dimensional object into a flattened format. So, serialization is converting an object into a byte stream. A byte stream can be a file or a data stream over a network.

- Insecure deserialization – (serialized) data abusing the security of an application when being deserialized. Abuse of logic, corrupt data, denial of service, remote code execution. It is possible to execute arbitrary code merely by deserializing a corrupted or untrusted file. It affects confidentiality, integrity and availability.

- We should not use equal sign to compare the two strings as it is not cryptographically secure, as it will lead to timing attach, so always use built-in functions to compare hashes with each other.

- The dangers of logging too much – legislation, confidentiality (credentials, payment details, sensitive information), information overload, cost of processing information. Information exposure through and error message – the dangers of showing users, or non-privileged accounts error messages.

- Certificate authorities – it is an entity that issues digital certificates. Our machine needs to trust a CA. The CA signs the certificate; and when it is returned to the browser from the website, our machine validates that the certificate is legitimate by referring to our local list of trusted authorities. To check this list use certmgr.msc from run command, this list is used by windows, ie and chrome.

- SSL vs. TLS – we should ideally use term TSL not SSL as SSL is dead already:

- HTTP strict transport security (HSTS) – now redirect will give 307 status instead of 301, also the size would be 0. The browser will perform 307 internal redirect. Once our browser sees the STS response header, for the period of time, specified in that max age value, it will not make an insecure request to that domain.

```typescript
strict-transport-security: max-age=2592000
```

```typescript
Status Code: 307 Internal Redirect
Non-Authoritative-Reason: HSTS
```

- Using HSTS (HTTP Strict Transport Security) – it will tell the browser you may not make an insecure request. Internally within the browser, you need to redirect or effectively go and make that request securely. That’s it also took only fraction of millisecond for first request with 307 status code, so by this the man in the middle won’t see this first request but the second request only.

```typescript
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
```

- Secure cookies – capturing someone cookie will lead to session hijacking. Secure cookie will not get send over insecure connection. So, always use secure cookies flag as default setting:

![secure cookie settings](./src/assets/images/security-secure-cookie-settings.png)

- Using HTTPS will reduce the load on client and server both sides. As HTTP uses 1.1 protocol but HTTPS uses h2 protocol i.e. HTTP2, and HTTP2 allows for a binary stream of content, so lots of data coming down to the parallel. HTTP2 is only supported over TLS.

- Getting new certificate and renewing it has very less cost involved. We can use letsencrypt.org for free certificate authority. We can use `cerbot.eff.org` for automatically renewal of the certificates.

- To avoid enumeration risk, show below message when login failed, like a generic message, don’t say that user doesn’t exist:

![security-avoid-enumeration-risk](./src/assets/images/security-avoid-enumeration-risk.png)

- Even in below case, if user type unavailable password then don’t show that it doesn’t exist, as we don’t want to show presence of a user on our system:

![security-avoid-enumeration-risk2](./src/assets/images/security-avoid-enumeration-risk2.png)

- To solve an issue where account is already exist, sent an email to their registered email, so do not show message like "Username already taken".

- Brute force attack is to guess someone else password again and again, hackers use botnet for this which provides thousands of different IP addresses, so we cannot verify the request per address. If someone try to do failed login with many attempts, we can simply lock his account or can have a buffer for some minutes to let them retry. Or use OAuth with google or Facebook to delegate this problem to them.

- Brute force attacks – an attacker trying over and over again to execute some sort of online process like trying to login into someone account with different password.

- In password strength do not put maximum limit threshold, as user want to use pass phrase.

- With anti-automation aka Captcha is bad for user experience, it is used to avoid bot to create spam registrations. Using Captcha on registration/sign-up is okay as it will be one-time activity for a user, but we should not use it on login.

- Using CAPTCHA for anti-automation – suppose someone made a automation tool and in make thousands to call for sign-up then that email person will get those many emails which will lead to spamming. To avoid this, we use re-captcha.

- Protecting the logon against brute force – degrade the service means for each time failed logon take some more time for re-login and sending the response back by using thread sleep, and we can return a message that maximum retry has been exceeded, please try after sometime. So, each request will take longer time, server can track number of hits against the account.

- Multiple simultaneous logins – it depends upon business needs, like for bank website we should not allow it, but for website like stackoverflow.com we might allow it as user wants to open that website from multiple of devices. It is also not feasible on server to know whether a user is logged-in or not, as the cookie is based on client interaction.

- Broken authentication and session management – to protect the cookie from session hijacking, we can secure it by setting it as HTTP only by this cookie cannot be read by client script to avoid XHR attach to read that cookie, if we also set the secure flag to true then it can only be sent over HTTPS connection.

- X-Frame-Options – if we use deny value then it means this page cannot be framed, means cannot be put inside iframe of any other page. This helps in prevent click checking.

```typescript
X-Frame-Options: Deny
```

- The frame-ancestors – to avoid click jacking attacks. Attacker would embed the targeting website in his website into an iframe, then making that target website transparent putting content the attacker provides under the target website and enticing the user to click what they think is a button the attacker’s website but instead clicking a button on the target website. We can avoid this by this header so that our websites won’t be framed into some other website.

```typescript
frame-ancestors: 'none';
```

- Security threats on server side - SQL injection, insufficient authorization, weak credential storage

- Security threats on client side - Cross site scripting, insufficient transport layer security, click jacking.

- Non-standard and browser prefixed headers – headers started with X was browser specific and has been deprecated now – X-Content-Security-Policy, X-WebKit-CSP, X-Frame-Options, X-XSS-Protection.

- HTTP Public Key Pinning (HPKP) - This is progression over HSTS, which tells the website must also serve a particular certificate that the browser expects, not just on that’s valid but one that adheres to a very specific set of criteria, to avoid a scenario where certificate authority itself gets compromised.

```typescript
Public-Key-Pins: pin-sha256=[pin 1]; pin-sha256=[pin 2]; max-age=2592000; report-uri=[uri];includeSubdomains
```

- Cross site request forgery – changing the password or account details using context of hacker. Use anti-forgery token to avoid this.

- Encryption is also not secure, because as soon as the encrypted key is found, entire system can be decrypted back. Instead of this we should use cryptography using hash so that no one can decrypt them back.

- We need to use hashing with a salt to avoid getting same output with same input, it also protects with rainbow table problems, but we need to use hash algorithm properly:

![security-hash-with-salt](./src/assets/images/security-hash-with-salt.png)

- Email as username vs. free text for username for uniqueness – we should prefer email as username. Email as username is easier to remember, one less field to capture at sign-up, it is already unique per user, must be able to change in future. Free text for username can be displayed to user with less privacy risk, enable multiple accounts against one email, requires a "retrieve my username feature".

- Password strength criteria – don’t limit the max entry criteria, also don’t put any condition for not having special characters, don’t discriminate with some character, allow user to pass any character. Pass phrases are stronger. We can use utility like 1password to generate password and saving it into centralize place.

- We can also make backend call to check whether password is very simple to crack, then show as invalid like below, we can check it with bad list of passwords.

- Don’t disable the password paste option on the field. People disable it to avoid brute force attack, but disabling the paste option, make the other worst problems like bad UX. To solve a problem, if that solution makes the problem worse than it is called as cobra effect.

- Verifying accounts via Email to avoid entering fake and corrupted emails, as user can use any random or someone else email’s id.

- Don’t lock an account out as it will lead to DoS (denial of service) attack. We should degrade the service and log everything. Don't lock an account out, restrict logon by IP and limit attempts with a cookie.

- Remember Me - This feature frequently implemented insecurely, by using user name and password in cookie and using it for re-login. It is a feature which requires trade-offs: security versus usability. It can disclose the credential of a user. It reduces the fiction of return visits for frequently used services like stackoverflow.com. It allows long-running sessions. But it increases numerous risks – someone else using the PC, a CSRF risk being exploited, if someone has access to unlocked machine. To make available this feature, it depends upon the nature of the application. We can give this option just for remembering the Client ID not password for sensitive websites, but this is not a remember me feature completely as it won’t do the auto login when user comes back to the website

- If we have expiry as ‘session’, then if we close the browser and reopen it, we won’t be able to logged on, the cookie will go away. If we use remember me feature, then it will have one more cookie for expiry of 1 year, it will not go away and reauthenticate the user again automatically. To implement it securely, don’t create remember me cookie, just change the auth token cookie from session scope to sometime duration scope like for a week, also mark http and secure flag as true. Additional security controls – like ebay we can choose an approach where we are breaking the cookie into two parts, first for user identity for long expiration time, and another cookie which requires for financial activity for short duration and re-authenticate user for the financial activity only.

- How attackers change account details – direct browser access, credential theft, CSRF, session hijacking (sending session on HTTP connection on in query strings), social engineering.

- Account attributes attackers want to change – password, email, identity, credit card, attackers can chain together these many information and processes in order to gain access to a victim’s account.

- To change the password or email, we should also ask the current password as-well, also keep change password feature on its own page

- Account change notification – to cater a scenario where attacker already got the access for legitimate password, we need to notify the changes on different channel as-well like email or SMS. We should not allow to change the email address without first confirming via the original email address on the account. But if user not have access to original email then it will be a problem, then we can solve this by directing to manual human interaction at support desk.

- The risk of password hints – don’t use password hint in any circumstances.

- Why logging off is important – due to remember me we can have a long running session – also in browser if we choose below feature, then browser won’t delete the cookie after browser gets closed browser even if we don’t use remember me feature, so to avoid this we need to provide explicitly logoff functionality.

- What constitutes of logging off – it removes the authentication token, by setting remember me token as empty and setting cookie expiry one day ago already.

- Web application firewalls (WAF) – we can get it by using Cloudflare service, it will look request pattern and reject it if it found malicious before allowing it to hit the actual web server:

![security-web-application-firewalls](./src/assets/images/security-web-application-firewalls.png)

- We humans are the weakest link in the security chain.

- In symmetric cryptography same key is used to decrypt and encrypt the message, but asymmetric cryptography uses different keys to avoid man in the middle attack

- Types of cryptograph algorithms – symmetric, asymmetric and hash functions.

- Asymmetric algorithms – public and private keys, the RSA algorithm.

- Big O notation allows us to express in terms of the size of the input, the amount of work takes to solve the problem -

![security-big-o-notation-types](./src/assets/images/security-big-o-notation-types.png)

- Public key can identify somebody, and their private key can prove their identity.

- OpenID Connect – it allows users to log in to 3rd party sites using their Facebook or twitter or google credentials. It is built on top of OAuth.

- The role of OpenID Connect and OAuth – OpenID Connect is a simple identity layer on top of the OAuth protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner. OpenID is for authentication and OAuth is for Authorization

- OAuth2 is about requesting access tokens from an authorization serve, then we can use this token to talk with backend service. OAuth is an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. OAuth is about delegating authorization; means we want to authorize a client to access our resources on our behalf.

![security-oauth-architecture](./src/assets/images/security-oauth-architecture.png)

- OpenID connect means the application doesn’t need to connect with back-end service, but it needs to know who the user is. It is for authentication.

- OpenID Connect - It is built on top of OAuth2, and sometime we just need authentication at least to begin with to identify user in an application. OAuth2 is regularly abused for that.

- OpenID connects adds some new concepts like ID token and UserInfo endpoint. OpenID code flow – identity provider, authorization endpoint, token endpoint, user info endpoint.

- OAuth2 Concerns - Specification bloat, bearer tokens, security theatre, attack surface.

- Evolution of software ecosystem -

![security-evolution-of-software-ecosystem](./src/assets/images/security-evolution-of-software-ecosystem.png)

- Types of versioning – calendar based, sequence based and semantic based versioning. Recommended is semantic based versioning.

- Common sources of untrusted data – in the URL via a query string or route, posted via a form, in cookies, in the request headers, external services, our own database.

- We should sanitize the data right after receiving from the user. So, if user trying to search like `<i>enzo</i>` then the text should display on the screen in encoding form of it i.e.`&lt;i&gt;enzo&lt;/i&gt;`

- We should trim down all the header from HTTP response which might disclose the framework or the server underline technologies details. We can also change the header properties sort order and default bad request or default response format which was specific to some server format to avoid attacker guessing the server details.

- HTTP fingerprinting of servers – it is to identifying various attributes of a particular website which might lead it to disclose what is running underneath.

- Fuzz testing – it is the process for searching for vulnerabilities does commonly adhere to a very regular pattern like in XSS to avoid laborious manual testing, and we bombarding an application with random data with those patterns. We can use third party tool like intruder21 or fuzzdb for doing fuzz testing.

- Mounting a click jacking attack – in this the attacker will also get the access of anti-forgery token by rendering the website into iframe and setting as opacity to 0, and below to that page will render the corrupted website. In below the I “Wanna win!” button is overlay on “Change Password” button

- We should store password using hashed approach while saving the database. If we store it into plain text then there is cryptography, everything is immediately exposed if the password storage is breached. If we use encrypted approach, then it can also get decrypted which makes is less secure. Only if we use hashed approach, it would become one-way, deterministic algorithm which means that password can't be un-hashed.

- We should re-authenticate the user before key actions, like asking current password on change password screen.

- Unlike browser, mobile app doesn’t have secure paddle lock icon, as mobile app doesn’t run in browser. The mobile app, company itself handle the client communication, so we should not always trust the mobile apps.

- We can have two types of certificates DV and AV. Below is an AV certificate, it requires a business name also need to be registered.

![security-padlock](./src/assets/images/security-padlock.png)

- We can connect fiddler for the remote machine-like android device from our computer. By this we can intercept mobile app data in fiddler. By we can get a sense for how device is communicating with backend servers.

- Instead of using the .png format we should use .jpeg format as it has better compression and can reduce the data size 75%.

- By using Wi-Fi Pineapple and LAN Tap, we can monitor the traffic even for those devices which makes hard to proxy traffic like IOT devices.

- Discovering leaky API’s – we should not return sensitive data from the web API in normal text form, also don’t return the data which is not need or non-essentials data on client side

- Configuring fiddler to decrypt encrypted connections – it will install its root certificate on our windows machine, by this we just compromised our system (PC) only.

- LDAP kept our user directory together, assign roles and query information about the user.

- The idea of OAuth2 is how we can create valet parking key, not the master key. By which a resource owner gives the client a key to access the resources on the resource’s behalf, without giving the client master key aka the password.

- Security tokens are protected data structures, contain information about issuer and subject, signed and typically contain an expiration time. A client requests a token, an issuer issues a token and a resource like API consumes a token, that resource has a trust relationship with the issuer.

- History of token - SAML (XML based, very expression, many encryption & signature options), Simple Web Token (SWT), JSON web tokens (JWT).

- JWT structure and format - headers (metadata, algorithms & keys used), claims (issuer, audience, issue at, expiration, subject, other application defined claims)

![security-jwt-token-format](./src/assets/images/security-jwt-token-format.png)

- There are two type of tokens access tokens (short lived) and refresh token (long lived).

## Accessibility

- History of accessibility

![accessibility-history](./src/assets/images/accessibility-history.png)

- Who needs accessibility –

![accessibility-who-needs-it.png](./src/assets/images/accessibility-who-needs-it.png)

- Create accessible forms – each control should have label or aria-labelled-by, use grouping of controls, provide clear notifications, break up long forms. We should avoid placeholder text in your forms. It is often low contrast and difficult to see.

- Assistive technology – screen readers, screen magnification software, speech input software, head pointers, eye tracking, single switch entry devices.
- Web accessibility guidelines – WCAG (A, AA, AAA).

- 4 types of disability – physical, vision-related, cognitive and hearing-related.

- Focusable elements – links, buttons, form elements – text input, text area, select, checkboxes, radio buttons.

- On the website load, the first tab should go to the ‘skip link’, it generally skips the site navigation or repetitive contents.

- In radio button, if a radio is selected then we need to use the arrows to move around other options, but if none is selected then we can use tab key to move around other options. It is called widget navigation where too many focusable elements on a control, it provides skip links functionality.

- Interactive form controls are activated with SPACE key. For links to activate use enter key.

- For low vision user, the content should be zoomable, it should not lead to any loss of functionality and content.

- Too much use of the animation can cause distractions among users, the website should also provide pause, stop and hide the animation. We can use chrome emulation for testing
- We should have language, charset=utf-8, title tags on the HTML page. The title bar of browser should also include company name.

- HTML landmarks such as header, nav, main, footer, aside, form and section should have accessible name by providing aria-label attribute.

- Links are for navigation or change of context, buttons are for action.

- The email field should have autocomplete attribute as `email`.
- The WCAG (web content accessibility guidelines) measure to accessibility of a website. Level A, Level AA, Level AAA. Who benefits – who only has one arm so can’t operate mouse, only the keyboard, a person who is blind so uses a screen reader, a person who has dexterity problem, can’t click on a small item, uses keyboard if she is struggling with the mouse.

- Basic commands on form which can be interacted with like button, link and input controls, they are called focusable elements, pressing enter on that link or button should activate it. Space bar is used to toggle a checkbox and open a select control. Up and down arrows are used to scrolling the page or scroll through select component.

- Mouse should be required only for drawing in an art program, some games, but drag and drop and resizing and rotating can be handled through the keyboard.

- If we set tab index as -1 then we cannot tab to it with keyboard, but can set focus programmatically. If we set 0 then we can tab to element and focus order determined by the HTML.
- ARIA is a technical specification for improving the accessibility of web pages, it allows us to update the accessibility tree.

- Common navigation patterns are navigation bars, sidenavs, breadcrumb and hamburger menus.
- It will be hard and require more money to support accessibility if we try to implement it after project has been complete, if we start the project with accessibility in mind then it will become easy and without any additional budget.
- Typography – choosing right typeface and hierarchy of font sizes it should be in rage of 16px to 20px.
- Every transition or animation should have purpose. When everything is just flashing and sliding around all over the page, it is not good for anyone, it makes user sick. We should provide an option to the user to disable animations.
- Images are inaccessible so we need to use alt attribute to provide description of content of the image.
- Aria roles is about filing the gap between what is available and the semantics of the code that we are using and what’s actually occurring in our rich internet applications.

- ARIA states – describe dynamic states and changed with JavaScript: aria-busy, aria-disabled, aria-grabbed, aria-hidden, aria-invalid.
- For forms the spacebar should activates controls and the enter key should submit the default action of the form.

- We should only use custom elements, widgets and ARIA when we either do not have an HTML equivalent control or when we absolutely cannot use the existing control because it doesn’t have the functionality that we need.

## User Experience

- Software has to work and be easy and enjoyable to work. User can easily and quickly accomplish their tasks.

- Wireframe types - Low-fidelity, High-fidelity.

- Principles - Alignment, Contrast, Visual hierarchy, Proximity, Layouts, Whitespace, Consistency.

- UX Testability

  - Visibility of System Status - the system should always keep users informed about what is going on, through appropriate feedback within reasonable time. Like showing username on login, showing copy/delete progress windows OS.
  - Match between system and the real world - the system should speak the user's language, with words, phrases and concepts familiar to user. Like not using words like `Accept/Decline` but `Save password/Nope`.
  - Error prevention - like showing auto-complete, showing confirm dialog before deleting the record.
  - Recognition rather than recall - showing dropdown, intellisense

- The good user experience has 3 desired results – happy, satisfied and productive. Our ultimate results should be delighted, contented, and empowered.

- Avoid common pitfalls - throwing data on the screen, exposing tech to the user, forcing the user to think like DBA, Messy UI, coding for expert user.

- Low friction clicks are okay, vertical scrolling is okay.

- Leading hack - making the user brain work less by leading them to their goal. Showing steps (wizard) on the screen.

- Limit the number of colors used should be 5 or less.

- Reading in upper case takes 10% more time than lower case, so avoid using them.

- A UX developer can bring efficiency, logic, relevance, user advocacy, research, communication, effectiveness, interaction, elegance, simplicity.

- Types of industry - Finance, Education, Retail, Healthcare, Business & IT Services, Research & Development, Government and Defense.

- In natural world there is no monochrome except blue sky overhead on a clear day, even sky is a gradient. So, while creating UI component use gradient from light to dark as top down lighting bias to makes the screen appear as more natural not as artificial monochrome. And the gradient shouldn’t be noticeable and flashy

- Instead of rectangle design, we should use curves. Humans usually prefer curved things over sharp-edged things – curved connotes safety, sharp-edged connotes danger. Curve soften the design and less stressful.

- We should bring the UI element on screen on more gradual way and move that from one place to another in gradual way too or changing the size. Using animation as it feels more natural and don’t surprise or confuse user. While changing the screen from one to another also try to implement a subtle animation. Animation also help in maintaining context.

- When an action is not appropriate, prevent the user from doing it, provide a visual signal that the action is not available, like disabling a button instead of allowing it to click and showing error message or any popup.

- Sliders component are good for numbers with large increments of numbers where the user is not quite so interested in precision.

- Reserve confirmation for very exceptional circumstances, otherwise it will dilute its value like in windows vista. Instead of this we can provide some undo like functionality or show a countdown before making the commit to the database, this is called forgiveness

- Web fonts recommendations

  - ![web-fonts-recommendations1](./src/assets/images/ux-web-fonts-recommendations1.png)
  - ![web-fonts-recommendations2](./src/assets/images/ux-web-fonts-recommendations2.png)

- Color meanings

  - ![ux-color-meaning-blue](./src/assets/images/ux-color-meaning-blue.png)
  - ![ux-color-meaning-brown](./src/assets/images/ux-color-meaning-brown.png)
  - ![ux-color-meaning-green](./src/assets/images/ux-color-meaning-green.png)
  - ![ux-color-meaning-orange](./src/assets/images/ux-color-meaning-orange.png)
  - ![ux-color-meaning-red](./src/assets/images/ux-color-meaning-red.png)
  - ![ux-color-meaning-violet](./src/assets/images/ux-color-meaning-violet.png)
  - ![ux-color-meaning-white-black](./src/assets/images/ux-color-meaning-white-black.png)
  - ![ux-color-meaning-yellow](./src/assets/images/ux-color-meaning-yellow.png)

- Color preferences

  - ![ux-color-preference-blue](./src/assets/images/ux-color-preference-blue.png)
  - ![ux-color-preference-green](./src/assets/images/ux-color-preference-green.png)
  - ![ux-color-preference-orange](./src/assets/images/ux-color-preference-orange.png)
  - ![ux-color-preference-red](./src/assets/images/ux-color-preference-red.png)
  - ![ux-color-preference-yellow](./src/assets/images/ux-color-preference-yellow.png)

- Try to avoid the horizontal arrangement of radio buttons. Horizontal radio buttons can be difficult to scan — it can be challenging for users to tell which label the radio button corresponds to.

- Toggle switch control is easier for the thumb. This property makes it suitable for mobile devices.

- Dropdowns should be the last resort. Whenever possible, instead of dropdown, try to use alternative controls that help the user to complete the task but have better usability.

- Interaction Design (IxD) – the process of designing interactive products, focusing on how users will interact with them. sometimes called “conversations design”. Interaction design dimensions – words, visual representations, physical objects or space, time, behavior.

## Git

- Code review serves as an exchange of best practices and experiences. Code reviews should be classless, it should provide an opportunity for mentorship and collaboration. Means a junior can also review the pull request raised by senior member.

- The PR should be small, it can contains changed lines from 100 to 500 and 5 to 10 files changed.

- We should have a self-review, before submitting the pull request. Also, We should reply to all comments, whether we fixed them as suggested, or fixed the way we preferred or push back the comment.

- We should have at least 2 code reviewers and one of them should know the business logic behind the code and customer requirement.

- Praise the author in the comment if work exceeds expectations, new team member picks up quickly, high quality code, reinforces good practices.

- If we found a nitpick and still want to approve it then we can comment like “nitpick: several types in comments. Approving anyway”. We should not be doing pre-approving frivolously.

- Git was developed by Linus Torvalds for managing the Linux kernel. It can be used offline and online for doing all the related operations. We can push or pull our changes after connecting with the network. Git is actually a bunch of individual scripts, most of which are written in Perl.

- Other source code control system works with files, but Git works with content. When we say add to a file, it takes a snapshot of that, adds that to the index and then that’s what gets committed. We can fake this file based thing by saying Git commit –a, this commands stage any changes that are in the whole project right now, add those and do commits.

- The Git commands are called porcelain commands. At core Git is simply a map (a table with keys and values), a simple structure that maps keys to values. This structure is persistent and stored on our disk. Values are content of file, when we give values Git will calculate a key for us i.e. a SHA1 hash.

- Git Branches - Another layer will make it a revision control system which includes features like branches and merges. When we do our first commit, Git creates a default branch the name is master branch. Git save its details in heads folder in refs folder of .git folder, it is the SHA1 of the last commit, the branch is nothing else but a simple reference to a commit. Branches are just references to the commit.

- Detached Head – it is a situation when we checkout a commit. Then the head will refer to that commit, not the current branch. Git also runs a garbage collection like in below scenario, if we wanted to avoid that then we must create a branch which will refer to these isolated commits.

- By using tags, we can tag a commit with a tag name. The command can be git tag –a dinner. The tag information saved into tags folder inside ref folder. Tag is also just a reference to an object just like branch but it doesn’t move. On a new commit, the current branch will move not the tag.

- Git Fork – it is kind of like clone, but it is a remote clone. By this we are cloning the project from someone else account to our GitHub account, and then we clone it from out account to our local machine. Upstream – to track the changes to the original project, then we need to add another remote point at it. It is called upstream. We can pull and push the changes to our account project, but only do pull from the upstream original account. We can send a pull request to this original account maintainer to pull our changes.

- Git is a source control system used by GitHub. GitHub is a Git Repository for open source. Along with Bitbucket they provide a great user experience for Git users in the cloud. Git uses snapshots instead of deltas like other source control system. Atlassian Source Tree is a famous GUI toll for Git.

- Stashing – it means if things go messy, save changes for later and then apply when needed. It is like shelve set in TFS; they will no longer be present in working area.

- Recovering deleted commits – we can recover this dangling commit, we need to get back the value of SHA1 using commands reflog, and fsck.

- Reverting commits – use command git revert #commit SHA1. Be careful while reverting the reverting a merge. Revert doesn’t mean undo operation.

- Peer to Peer Model -

![git-peer-to-peer-model](./src/assets/images/git-peer-to-peer-model.png)

- Centralize Model -

![git-centralized-model](./src/assets/images/git-centralized-model.png)

- Pull request model -

![git-pull-request-model](./src/assets/images/git-pull-request-model.png)

- Dictator and Lieutenants model

![git-dictator-and-lieutenants-model](./src/assets/images/git-dictator-and-lieutenants-model.png)

- In general, we have integration, release, feature and hotfix branches.

- Constraints – we can use Git Hooks feature to raise some notification on different Events before committing like checking if build is red on server then showing warning while doing another commit.

- Evil merge – we should never introduce changes in the merge commit.

- Disadvantages of doing all work in main branch instead of multiple feature branches - difficult to track, difficult to manage merges, difficult to back out, difficult to experiment

- Creating a Hotfix - If we spot something wrong in release production code to fix these issues are called hot fixes by creating hot fixes branch. In this we create this branch from master and then merge the code back into master and development.

- Version control system: it is a time travel machine for our project.

- Evolution of version control - Local computer -> local version control systems -> centralized version control systems -> distributed version control system

![git-short-history](./src/assets/images/git-short-history.png)

![git-history](./src/assets/images/git-history.png)

- Git maintained integrity using check-summed generated by SHA1 hashing algorithm.

- The three stages of a git project - working directory, staging area (index), .git Directory (repository)

- Rewriting History - Rebase – it replays a set of commits on top of a specific base commits. D*and E* are new commits but with same messages:

![git-visualizing-a-rebase](./src/assets/images/git-visualizing-a-rebase.png)

- Difference between collaborators (key people) and contributors (everyone outside from the core team and have lower permissions).

  - Maintainers - key decision makers within your company who are responsible for driving a project's vision and for managing day-to-day contributions.
  - Contributors - Members within the company that help drive the software forward. Contributors are no necessarily part of the direct project team but help build software by contributing code, submitting bug fixes, and more.
  - Community members - people who use the project or software within the company.

- Creating GitHub pages – to share information, it can be a static site hosting website without server-side code.

- Label can be applied on issues and PR. Labels are used to organize and also prioritize items such as issues. Built-in labels - bug, duplicate, enchancements, help-wanted, question, wont-fix, good-first-issue, invalid.

- GitHub calls it pull request instead of merge request because it let you tell others about the changes you pushed to a branch the action they would do is pull those changes in once that merged. Repo permissions related to pull requests.

![git-repo-permissions](./src/assets/images/git-repo-permissions.png)

- By using cherry pick we can copy specific commit to another branch. It creates duplicate commit in each branch and can cause confusion. Just use command git cherry-pick `<commit>` by specify the commit sha.
- Popular open source licenses – apache 2.0, bsd 2-caluse, bsd 3 clause, gnu gpl, gnu lgpl, mit (or expat license), Mozilla public license, cddl, eclipse public license version 2.0.

- License file deals with the legal side, Contribution Guidelines file deals with the technical side, Code of Conduct file deals with the ethical side.

## VS Code

- Fast, cross platform, intellisense and auto complete, debugging, rich refactoring, sits perfectly between editor and IDE.

- What is Editor - lightweight/fast, file/folders, many languages, many workflows, keyboard centered

- What is IDE - project systems, code understanding, debug, integrated build, file->new, wizards, designers, ALM integration, platform tools

- Electron is a native shell for widows, mac, and Linux that hosts JavaScript-based app like Monaco. Visual studio code is a combination of Monaco and Electron.

- Installing extension locally – copy your extension to the VS code extension directory. (windows - `%USERPROFILE%\.vscode\extensions`)

## Markdown

- We can use fence block of code syntax by using 3 back ticks like ```html

- Two of the most popular of the lightweight variety are Markdown and reStructuredText.

- Use `_` for italics, `**` for bold, ` `` ` for code words. Use `_` for unordered list and `#` for numeric list.

- Artifact are the result of the build, if this process of creating artifacts doesn’t require any person to do anything for it to happen, other than make the change to source control, the you have continuous integration. If it also gets deployed automatically then I become continuous deployment as well.

![markdown-cd-ci](./src/assets/images/markdown-cd-ci.png)

- For technical document writing reStructuredText is better than Markdown.

- Purpose of technical writing: Developers (Get information out of the heads of the creators), users (into the heads of users in a way they can use it).

- Writing process - plan -> research -> write -> review/edit -> launch

- Don’t be vague but be simple and user friendly. Don’t use passive sentence but use active sentences:

![markdown-writing-tips1](./src/assets/images/markdown-writing-tips1.png)

- But sometimes we should use passive voice, which makes a sentence a bit soft -

![markdown-writing-tips1](./src/assets/images/markdown-writing-tips2.png)

![markdown-writing-tips1](./src/assets/images/markdown-writing-tips3.png)

![markdown-writing-tips1](./src/assets/images/markdown-writing-tips4.png)

- Layout and Design

  - Serif fonts are considered classic, traditional, and embellished.
  - Sans is French for Without, Sans Serif fonts are considered modern, minimalist and clean.
  - Script fonts are more fluid in their stroke and they resemble handwriting particularly cursive handwriting. They are considered as handwritten, calligraphic and fancy.
  - Decorative fonts are also known as ornamental or display fonts. They should be used sparingly and for a very distinct purpose. They are fun, unique and expressive.

- Recommendation of uses -

![markdown-recommendation-of-uses](./src/assets/images/markdown-recommendation-of-uses.png)

- If document is more than 10 pages then use table of contents. It will allow readers to locate information and pages quickly and easily.

- Use visuals – screenshots, icons, tables, graphs and flow charts.

- Create story stories as per below format -

![markdown-user-story-format](./src/assets/images/markdown-user-story-format.png)

- Software design document (SDD) - A written description of a software product that gives a development team overall guidance to the architecture of the software project.

![markdown-software-design-document-format](./src/assets/images/markdown-software-design-document-format.png)

- README Files – a file that helps users/other developers know how to do things with your software. Even we should write README file before we code.

- Release notes – documents the differences between two versions of the same software.

## Architectural

- We should use arrows one way and two accordingly and shapes doesn’t represent any meaning, we just need to be consistent in shapes.

- We should have a key section to define the meaning of different attributes used in the diagrams

- We describe the following levels and diagram names:

  - Level 0 — Business Capabilities Diagram: The key audience is business executives and non-technical stakeholders.
  - Level 1 — Technology Capabilities Diagram: The key audience is CIOs, CTOs, CISOs and Strategy & Planning managers.
  - Level 2 — Architecture Diagram: The key audience is Designers and Project Managers.
  - Level 3 — Design Diagram: The key audience is coders, testers and architects.

- Five architecture diagrams types

  - Application Architecture Diagram
  - Integration Architecture Diagram
  - Deployment Architecture Diagram
  - DevOps Architecture Diagram
  - Data Architecture Diagram

- The Flow Diagram - This diagram illustrates the moving parts in a business process.

![architectural-flow-diagram](./src/assets/images/architectural-flow-diagram.png)

- The Persona Diagram - It is important to show that your architecture solves the business problem. A persona diagram describes a chronological view and actors in a particular workflow. This is your best tool for proving that you’ve taken the business into consideration when developing your solution.

![architectural-personal-diagram](./src/assets/images/architectural-personal-diagram.png)

- The Infrastructure Diagram - The purpose of this diagram is to show what has been built and how the system currently works. Consider this a blueprint of the application you built.

![architectural-infrastructural-diagram](./src/assets/images/architectural-infrastructural-diagram.png)

![architectural-infrastructural-diagram2](./src/assets/images/architectural-infrastructural-diagram2.png)

![architectural-technology-diagram](./src/assets/images/architectural-technology-diagram.png)

![architectural-application-diagram](./src/assets/images/architectural-application-diagram.png)

- Software Architect - Make high-level design decisions and document them, Mentor more junior engineers, Do code reviews, Develop the most critical part of the codebase, Refactoring to get rid of technical debt, Drink coffee.

- Types of architecture - classic three-layer database-centric, domain centric, application layer, CQRS.

- Software architect role - how to design software and works, functional architecture,

- Technical architect role - microservices, how pieces are connected with each other, design how software hangs together, cloud aws learning

## Data Structures

- Node chains –

![ds-node-chains](./src/assets/images/ds-node-chains.png)

- Linked list – single chain of nodes, head pointer, tail pointer, operations – add, remove, find, enumerate.

- Doubly linked list – singly linked list works great when we need only forward access to the nodes, but for backwards compatibility as-well we need to use doubly linked list.

![ds-doubly-linked-list](./src/assets/images/ds-doubly-linked-list.png)

- Stack - It is based on LIFO concept. Each pop reduces the stack depth.

- Stack using linked list – pros with linked list approach – no hard size limit, easy to implement – no bounds checking, empty list means empty stack, cons – memory allocation on push, per node memory overhead, potential performance issues.

- Stack using arrays – cons with arrays approach – over-allocation of array. While enumerating we need to iterate it backwards.

- Postfix calculator – postfix notation also known as reverse polish notation in this approach operator follows the operands by this, we can avoid the ambiguity in operation order.

![ds-postfix-calculator](./src/assets/images/ds-postfix-calculator.png)

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

![ds-bubble-sort1](./src/assets/images/ds-bubble-sort1.png)

![ds-bubble-sort2](./src/assets/images/ds-bubble-sort2.png)

- Insertion sort – sorts each item in the array as they are encountered. It uses only simple pass, everything left of the item is known to be sorted and everything to the right is unsorted. Performance and space matrixes are same as bubble sort.

![ds-insertion-sort](./src/assets/images/ds-insertion-sort.png)

- Selection sort – another linear algorithm, hybrid between bubble and insertion sort. It sorts the data by finding the smallest item and swapping it into the array in the first unsorted location. Performance is similar to bubble and insertion sort. Best case performance is O(n2). It Is not appropriate for large unsorted data set. For a system where comparison is cheap and swaps are costly then we can use this algorithm.

![ds-selection-sort1](./src/assets/images/ds-selection-sort1.png)

![ds-selection-sort2](./src/assets/images/ds-selection-sort2.png)

- Merge sort – it is a divide and conquer algorithm. They array is recursively split in half, and splitting continues until the array is in groups of 1, it is reconstructed in the sort order. Each reconstructed array is merged with the other half. Worst, average and best cases performance is O (n log n), data splitting means that the algorithm can be made parallel, that’s why it is appropriate for large datasets. Space required is O(n), merge can be, but is often not, performed in-place. These extra allocations increase the memory footprint required to sort data.

![ds-merge-sort](./src/assets/images/ds-merge-sort.png)

- Quick sort – commonly used general purpose language and also based on divide and conquer. Pick a pivot value and partition the array.

![ds-quick-sort1](./src/assets/images/ds-quick-sort1.png)

![ds-quick-sort2](./src/assets/images/ds-quick-sort2.png)

![ds-quick-sort3](./src/assets/images/ds-quick-sort3.png)

- Worst case is O (n2) not appropriate for large pathologically sorted (inverse sorted) data sets, average case performance is O (n log n) appropriate for large data sets, best case performance is O (n log n) very good best case performance and can efficiently sort small and nearly sorted data sets, space required O (n).

- AVL Tree - Binary tree is a collection that stores data in a tree structure. AVL tree are self-balancing binary tree invented by Adelson-velsky and landis (1942). Only insertion and deletion differ in running the balance algorithm from binary tree. AVL tree new concepts are self-balancing, height, balance factor, right/left heavy. An unbalance binary tree can cause performance issues like reduce the search time; it might become a linked list as below, like loading a English dictionary –

![ds-avl-unbalance-tree](./src/assets/images/ds-avl-unbalance-tree.png)

- Balanced binary tree – the tree remains balanced as nodes are inserted or deleted, height or left and right tree differ by at most 1.

![ds-balance-tree](./src/assets/images/ds-balance-tree.png)

- Balancing is done using node rotation. Rotation changes the physical structure of the tree within the constraints of the binary tree, smaller values on the left and larger or equal on the right. Rotation algorithms are right rotation, left rotation, right-left rotation, left-right rotation.

- AVL tree vs. Binary tree visualization – AVL tree won’t get much height and depth unlike binary tree. For bad 100 number, the binary tree will become the linked list like linear structure. Also, it is shows the difference between balanced tree and unbalanced trees.

![ds-avl-tree-visualization](./src/assets/images/ds-avl-tree-visualization.png)

![ds-binary-tree-visualization](./src/assets/images/ds-binary-tree-visualization.png)

- String Searching Algorithms - API Overview – by using interface we can implement algorithms in a uniform manner and this will allow us to use them interchangeably.

- Naïve Search - We can use run the loop till the string length minus the search string length to get some optimization. This algorithm is most appropriate when the string to search and find are both small.

![ds-naive-search1](./src/assets/images/ds-naive-search1.png)

![ds-naive-search2](./src/assets/images/ds-naive-search2.png)

- Boyer Moore Horspool Search – it minimizes the overall cost of search by skipping as many characters as possible. This is appropriate as a general-purpose string search algorithm. It will also improve the performance if search string is longer.

![ds-boyer-moore-horspool-search.png](./src/assets/images/ds-boyer-moore-horspool-search.png)

- Data structures is a way of storing data. Data structures and algorithms are heavily linked. DS typically use some sort of algorithm to perform their inner organization, and algorithms typically uses data structure to store internal states.

- Ways of measuring performance – timing with stopwatch (but it depends on hardware, programming language, environment, etc.), counting instructions executed by machine, looking at execution curve, best case, worst case, average case.

- Asymptotic performance – In Asymptotic Analysis, we evaluate the performance of an algorithm in terms of input size (we don’t measure the actual running time). We calculate, how does the time (or space) taken by an algorithm increases with the input size.

- Big Theta – it can be used to express the complexity of a program.

- Big O – worst-case complexity of the program.

- Binary search – complexity in terms of Big O

![ds-binary-search-big-o](./src/assets/images/ds-binary-search-big-o.png)

- Amortized complexity – it deals with the complexity of performing the same operation multiple times for varying inputs like inserting multiple elements in a data structure.

- Priority queues – internally elements are organized in a data structure called heap, types of heaps are min heap, max heap and min-max heap, interval heap. A heap is an binary balanced tree structure where each node has at most two children, in min-heap each element is smaller than its immediate children.

- Hash table – two flavours – first is a container that store the values that are added directly, just like arrays and linked lists, this container is often called a set or a hash set. The other flavour is a container that maps a setup of keys to a set of values, this is referred to as a map or a dictionary. Search operation is much faster in hash table.

- By hash table we can quickly lookup the name of a certain user id and this makes hash tables ideal data structure for caches, fast insertion, fast lookup and fast deletion, but elements order as per we receive them can’t be possible in hash table unlike arrays.

![ds-common-big-o-examples](./src/assets/images/ds-common-big-o-examples.png)

- Brute force and greedy algorithm – problem solving strategy where all possible combinations or solution candidates are tried out blindly until a solution is found is called brute force.

![ds-brute-force-combinations](./src/assets/images/ds-brute-force-combinations.png)

- Greedy algorithms work smarter than brute faster, they may speed up the search for a solution, but they come with a catch of stalling at a local maximum or minimum if we search for a small solution.

![ds-greedy-algorithms](./src/assets/images/ds-greedy-algorithms.png)

- Divide and conquer – key ingredient is to discover how to divide the larger, original problem into sub-problems. Once divided, each of the smaller and easier-to-understand sub-problems are solved, leaving us with sub-solutions. Finally, find a way to combine, or deduce these sub-solutions into a solution to the original and larger problem, thereby conquering it. We can also apply it recursively. Example – quicksort

![ds-quick-sort-divide-and-conquer](./src/assets/images/ds-quick-sort-divide-and-conquer.png)

- Dynamic programming – this is also built on the core idea of divide and conquer. If sub problems cannot be separated but overlaps, then overlapping part would need to be solved in both sub-problems. We can cache the solved result of sub-problem. It will improve the performance.

- The 0/1 Knapsack problem – using dynamic problem we can get the performance advantages as it has lower complexity.

![ds-knapsack-problem](./src/assets/images/ds-knapsack-problem.png)

- Other examples – where to put line breaks to obtain a nice and even text justification, finding shortest paths, finding difference between two files, sequence alignment, various games

![ds-knapsack-problem-other-examples.png](./src/assets/images/ds-knapsack-problem-other-examples.png)

- P vs. NP – exponential functions grow much faster than polynomials. The complexity category P covers problems that can be solved in polynomial time i.e. easy problems like sorting, traversing, lists, etc. But problems in NP category are decision problems (in which answer is yes or no) verifiable in polynomial time.

![ds-p-vs-np1](./src/assets/images/ds-p-vs-np1.png)

![ds-p-vs-np2](./src/assets/images/ds-p-vs-np2.png)

- NP hard – at least as hard as NP complete, they don’t need to be decision problem, and they do not need to be verifiable in polynomial time like knapsack problem, halting problem, traveling salesman problem.

![ds-np-hard](./src/assets/images/ds-np-hard.png)

- Heuristics and approximation algorithms – they are general techniques for dealing with computationally hard problems. Heuristics – wanted speed, trade with accuracy.

- Cuckoo hashing to create hash table – it is an open addressing scheme, inspired by cuckoo bird.

- Prefix-querying Sequences Efficiently with Tries - Tries – represent a number of strings in a single tree structure where the root node represents the enter string with no letters added yet and with each subsequent level of the tree corresponding to a pending one more letter to a string.

![ds-tries](./src/assets/images/ds-tries.png)

- Radix tree – a compressed tries structure, it improves the performance. We can use it if read-only or read-mostly operations. Tries is useful for autocompletion, prefix only scenario.

![ds-radix-trees](./src/assets/images/ds-radix-trees.png)

- Suffix trees also allows to search a pattern anywhere in a string.

![ds-suffix-trees](./src/assets/images/ds-suffix-trees.png)

- Data structure is a method of organizing information so that the information can be stored and retrieved efficiently.

- Big O notation – computer science defines performance by something called Big O notation. It shows how the data structure will perform as the data increase.

![ds-big-o-notation](./src/assets/images/ds-big-o-notation.png)

![ds-big-o-notation2](./src/assets/images/ds-big-o-notation2.png)

![ds-big-o-notation3](./src/assets/images/ds-big-o-notation3.png)

- One of the problems with a hash structure is when we run into collisions when putting data into the hash. Collisions slow down the performance of the hash, which kind of defeats one of the main points of using the hash. We can reduce has collisions by increasing the has capacity or improve the hashCode() method quality to improve the uniqueness of hash value.

- The binary tree doesn’t need to always have two nodes per parent. the tree additions are based on comparisons rather than keeping the tree balanced. Because the tree data is dispersed based on comparison, it makes adding and finding the data quite efficient, so don’t have to traversed all the elements like array list due to which the Big O notation would be logarithmic which is one of the best access performance we can get out of a data structure. But implementing a tree data structure is a bit of complex in code.

- Safely Using Arrays - Arrays are used in examples like storing share prices of a company in different points of time, use arrays of pixels to store and process images. Arrays properties – contiguous memory locations as it is a very cache friendly data structure, same element type cannot have mixed up type of elements in a same array, direct fast element access by index, indexes are zero-based.

- Data transfer algorithms – physical vs. internet data transfer. We should pick the constant one because at some point it will be faster than linear complexity.

![ds-physical-vs-internet-data-transfer](./src/assets/images/ds-physical-vs-internet-data-transfer.png)

![ds-physical-vs-internet-data-transfer2](./src/assets/images/ds-physical-vs-internet-data-transfer2.png)

- Stack overflow – if internal array to store stack values gets full, then push operation will cause it outside of stack area which is not owned by stack. In this case, we should throw an exception from code.

- Arrays vs. linked lists – memory layout – direct fast element access by index not possible in linked list we have to traverse all the elements, also it is not cache friendly as it is not having continuous memory allocations. Linked list is good for inserting new item as all don’t have to shift. So, no reallocation overhead. The nodes of the linked list are stored in sparse memory locations. They are scattered all over computer’s memory.

![ds-array-vs-linked-list](./src/assets/images/ds-array-vs-linked-list.png)
