# Extracted Notes - Part 1

## Table of Contents

- [HTML](#html)
- [CSS](#css)
- [Angular JS](#angular-js)
- [Angular](#angular)
- [TypeScript](#typescript)
- [Node JS](#node-js)
- [Unit Testing](#unit-testing)

## HTML

- HyperText Markup Language – HTML is the language that we use to create document that we want to share across the world wide we or more appropriately across the internet. HTML was created to share research documents which includes text, data, images, and all linked together.

- We should not have plan text into HTML it should be enclosed in some element like div or span.

- The doctype declaration let the client know which standards we are following.

- To enable the proper parsing, use doctype tag on first line of the HTML page. Specify the lang attribute for main language of the page it is important for screen reader. For proper parsing and rendering use http-equiv and content attributes.

- `<head>` tag is used for metadata information which includes title, meta elements, script, style, link, base. The link specifies the related documents and base specify base address for all relative links on the page.

- Block vs. Inline – Block elements are container for elements for grouping they can contain other block elements and in-line element example – paragraph. Block level element will start from new a new line.

- Use `&nbsp;` for telling browser, do not break at this particular point. So, when we resize the browser it will not break that words in between but it show it as a whole in any line.

- We used links to linking within a document or another document. Likes can be absolute or relative. If files on the server use absolute path, or if they in our local site content folder then use relative path.

- History of HTML5 – WHATWG accounted that it will no longer work on named versions of HTML so there will be no HTML6, HTML7, but the HTML spec is now a living standard. So HTML 5 no longer exists as new features are found in living standard.

![html-history](./src/assets/images/html-history.png)

- Standard Bodies for HTML – W3C, WHATWG, ECMASCRIPT

- Inbuilt APIs - Elements with API – canvas, audio, video, Forms element – meter, progress, math, data-list, New JavaScript APIs – canvas, web animations, Interaction, events and messaging APIs - battery status, clipboard API and events, cross document messaging, device and screen orientation, full screen, geo-location, media capture, notifications, touch events, vibration, Storage and files APIs – Blob URL’s File API, File Reader, IndexedDB, Local Storage, Real time communication APIs – Push API, server sent events, web sockets

- Fallbacks and Polyfills – fall back is to provide similar functionality as a native feature but maybe just with a different API. A Polyfills, on the other hand, is meant to replicate the exact same interface as well as functionality as how the native implementation would be built in the browser. For this use <www.html5please.com> website.

- Types of images

  - Vector – used for displaying simple images, and we can enlarge them without losing pixels. The image is made of a set of instructions of how to draw an image. It is rendered on fly when image is displayed.

  - Raster image – jpeg, png or gif. These are images with a set dimension where every pixel within the defined space of the image has a designated color. These are great for pictures but will lose pixels when enlarge. HTML5 canvas works upon raster images.

  - Canvas - it is just a drawing surface. We can draw shapes, apply colors and even manipulate images on the canvas. Due to rasterize nature of the canvas gives us a pixel by pixel control of that drawing surface. It uses underline grid system.

- Semantic HTML – mark-up that conveys meaning about its contents. It is mostly beneficial for the machines and also helps human too. Tags – small, footer, address. HTML mark-up is also used by search engines and screen readers and machine are not smart enough to understand the meaning of content.

- We should avoid using generic elements, inconsistent structure, presentational (CSS) mark-up into HTML. Like we should not use `<strong/>` tag just to bold a text, we should use it if we wanted to give text more important to other text. It should not use just for presentational purpose.

- Sectioning elements – elements whose intended use in to divide content up into logical sections like div, aside, article, section, figure, main, address, header, nav, footer

- To avoid CSS styles and JavaScript scripts to override our DOM subtree, The shadow DOM seeks to solve these systemic problems by creating an encapsulate spot to define our mark-up in CSS by creating a hidden and encapsulate subtree that is separate from the light DOM. Shadow DOM in native HTML like video, date, input type range tag. To see the shadow DOM, we need to enable setting `show user agent shadow DOM` in browser. Native elements already using shadow DOM.

- Shadow DOM alternatives – we have iframe but it is clunky to read, nondescriptive, excessive encapsulation, no clean API. We also have canvas but has accessibility issues, seo issues, can not easily compose, cannot extent existing elements.
  Shadow DOM encapsulates DOM subtrees and styles. Shadow DOM is like an iframe without all the baggage in a friendlier API

- Web real time communication lets us incorporate peer to peer video, audio and data communication in the browser without any plug-ins. Use cases and inspiration of WebRTC

![html-webrtc-use-cases](./src/assets/images/html-webrtc-use-cases.png)

- History of web

![html-history-of-web](./src/assets/images/html-history-of-web.png)

- What is WWW – is an information space where documents and other web resources are identified by URL in linked by hypertext links and can be accessed via the internet. The internet has been around since the 80s and the web has been around since the 90s.

![html-history-of-html](./src/assets/images/html-history-of-html.png)

- History of css

![html-history-of-css](./src/assets/images/html-history-of-css.png)

CSS is the styling mechanism for the web. It is a standard of selectors, properties and attributes. As it is just a standard so it doesn’t do anything, it just tells the people of created the web browsers how to interpret the CSS language and how to style HTML with it.

- History of JavaScript

![html-history-of-javascript](./src/assets/images/html-history-of-javascript.png)

- Html file naming conventions – always start with a lowercase letter, no special characters, no spaces, hyphens, underscores, or camel case can be used for file names with multiple word. Index.html is the standard name for a home page, browser looks for this name page to display as your lading or home page.

- HTML is made up of tags, tags tell the browser where an element should start and end. Tags should be lowercase, and each tag and its content is an HTML element.

- For checkbox and radio box, wrapped them into `<legend>` and `<fieldset>` tags

- Disabled field doesn’t get included into form data submit, but read-only field will be included. Generally, we use read-only if that user has filled its value in previous page and we don't allow to edit it on current page.

- ID vs Class attributes – use class attribute for styling instead of id.

![html-id-vs-class-attribute](./src/assets/images/html-id-vs-class-attribute.png)

- If images are deemed as part of the content, we should add it as HTML. If its is there for presentation and style, it should be added using CSS.

- The full form of SASS is syntactically awesome stylesheets.

- SASS has two different syntax, the original SASS syntax a bit different from CSS. It essentially removes the curly braces and semicolons from CSS, and it relies on white space. Because of this we can’t take a CSS spreadsheet and change the extension and treat it as SASS. So, for exiting projects with large CSS stylesheet porting to SASS is problematic. Due to this an alternative syntax has been developed by name SCSS. SASS is built on Ruby, LESS and Stylus built on Node.

- Responsive Page - text, images, buttons size become large/small, also page layout changes based on screen size changes. We can use media queries for it
- Cookies are just additional pieces of information that the server asks the browser to store and send back to the server with every request. But now local storage is preferred. These generally stores authentication and configuration related information which server needs to see in any request. In JavaScript object we can define properties that are functions, in JSON functions are not a legal property.

- Page request lifecycle: when we request a webpage in our browser, either by clicking a link to a new page or typing a URL in the browser. The server sends down the HTML to our page in the body of the response. Now after this browser has received the HTML it begins processing it. And part of that processing is to look four kind of different directions in the HTML i.e. CSS links, scripts tags of the source attributes, image tags, and font face directives in CSS rules. New requests were made based on these and response included their assets.

- App shell architecture – cached shell loads instantly on repeat visits, it is a main u ser interface for our application without any content. by this we can avoid showing black page while loading which frustrates users.

- We will use the service worker to cache the app shell. The cache API is a cache storage for requests and responses, it is a pre-requisite for service workers. It stores values in key value pairs, and available from window scope and service worker scope. Like below it will cache the entire request and response.

- Web worker – a script running int the background. It initiated from the main document, runs separately from main document and doesn’t have access to the DOM. It is often used as a programmable network proxy which lets you control incoming and outgoing network request. We can combine it with the cache API to serve requests from the cache. Specially if network request fails from server, it can handle it

![html-service-worker-life-cycle](./src/assets/images/html-service-worker-life-cycle.png)

- Web workers – it brings background threading as a first-class citizen to web browsers. We can splice an intensive process logic into a worker and it will run independent of the UI thread.

- Workbox caching strategies –

![html-workbox-cache-strategies](./src/assets/images/html-workbox-cache-strategies.png)

- Browser cache, if files are already in browser cache then it will not make request to sever for them. In application, all the cache files will be in grouped to a single manifest file. We should not mix browser caching and application caching. In browser, we can specify when a file will be expired, but in application cache we can only send updated files if we change the manifest file.

- Web storage comes in two flavour in local storage and session base. Security is per session and per domain. Capacity is between 2 to 10 MB. Web storage is client only (don’t need to send every time to the server) and larger capacity unlike cookies. It has simple API, key/value pair and widespread availability.

- Two types – dedicated (linked to browser that spawned the worker so it has a very tight relationship), shared (runs in the background and basically any script that’s running within that domain can send messages to that worker. It is largely unimplemented in browser currently.).

- The data which is stored in a sandbox so if website A creates it then it cannot be access by website B. local storage will work as session storage if working in private mode. Data is serialized to file system in a hard drive outside of the browser. It is synchronous.
- Browser represent a web page in memory is through the document object model.

- Using javascript we cannot set a class using .class, we need to use classList as class is a reserved word.
- To indicate emphasis use italic tag in the text, we can use `<em>` for meaning purpose and `<i>` for just styling purpose. So, use `<em>` not `<i>`, same with use `<strong>` not `<b>`.
- HTML is derived from SGML.

- Why should we structure our text – users can get to information quickly, enables accessibility tools to understand information, enables browsers to style the content, helps search engines to understand content.
- The term progressive enhancement refers to the use of newer features that add to the experience in modern browsers that support those features, but doesn’t detract from the experience in older browsers.
- URL part composition

![html-url-parts-composition](./src/assets/images/html-url-parts-composition.png)

- ARIA full form - Accessible rich internet applications

## CSS

- types of selectors - The pseudo classes are just something that the browser will implicitly apply.

![css-types-of-selectors](./src/assets/images/css-types-of-selectors.png)

- The 1.0em; states for the size which is default to the page. If we say width: 50%; then it will be half of its parent width.

- We also have a star selector which matches everything on the page:

```css
* {
  color: White;
}
```

- Ordering rules – if two conflicting rules are coming from the same source it just uses the last rule.

- CSS Reset – it is a stylesheet that effectively override the default styles given by a web browser for all HTML elements. Because every browser has slightly different default styles, it will remove this different in style by making it all to reset. There are many available like from yahoo, meyerweb.com. we need to just give the reference of that stylesheet to our main page.

- Specificity – the higher is the specificity number the more important the rule is. It contains 3 parts ABC like below:

![css-specificity](./src/assets/images/css-specificity.png)

- Inheritance – some property values of an element will be inherited form the elements parents. Like text in div which is inside paragraph will inherit paragraph font size. But border, margin, paddings will not inherited form the parents. So, border set on paragraph will not have border on div or em or other tags inside it.

- Vertical margins collapse – when top and bottom margins meet they will overlap or collapse, technically the will overlap until one of the margins touches the border. But horizontal margins do not collapse.

- Width – when we specify the exact width it will specify of the content area. Any border, margin, or padding that we add will add to the width and require more space.

![css-width](./src/assets/images/css-width.png)

- Layout with CSS - default position value is static. it stacked up elements one after the other down the page. relative position moves an element from its default position in some direction. we can set the top and left properties values. fixed and absolute removes the elements from the flow of documents. Absolute position moves an element to a specific position relative to the body of the document the top and left will be consider from the body element. while fixed position is relative to the window itself. When we apply relative position, we can set top or left kind of properties on it, it is unlike the padding and margin. It will sit on top on the element instead of just pushing them around.

![css-position](./src/assets/images/css-position.png)

- Fixed positioning – it fixes the position of an element relative to the browser window. The element always stays fixed in place, even when scrolling. Generally, we use this in menu bar or navigation.

- Absolute positioning – it will not scroll with the browser window unlike fixed positioning. It takes an element out of the document flow, meaning the browser acts as if the element has no width and height, and the other elements on the page move up as if it was never there.

- By default, if the element is inside a container and we apply absolute on the element then it will relative to the body top left corner, but if we apply absolute on the container as well then it will be relative to that container.

- Relative Positioning - in this, other elements do not ignore its width and height. It doesn’t take out from the document flow. The original space will be maintained. The bottom: 0 value will make it to stay as it is because the bottom will be the same bottom of the element unlike absolute which will move it to the bottom of the window. And setting the position of the container element as relative does nothing at all unlike absolute positioning. If we have container with relative positioning and element as absolute, then the element will be relative to the container.

- Z-index – it allows us to control the stacking order of the elements. It will start from the negative value -1 and all the way up to highest z-index value.

- We should not have an orphan character on a new line, we can use typography module to make last two letters with “no break space” on every line.

- Instead of putting money to make UI better for older browser which market is going down, we should put it in the modern browser to make it better for future.

- Visual break points in Bootstrap

![css-bootstrap-visual-break-points](./src/assets/images/css-bootstrap-visual-break-points.png)

- types of selectors - relational, attribute, structural

- Relational selectors

![css-relational-selectors](./src/assets/images/css-relational-selectors.png)

- Other selectors

![css-other-selectors](./src/assets/images/css-other-selectors.png)

- Earlier we use table-based layout, then fluid-based layout came, now flexbox is the latest layout technique.

- The full name of flexbox is flexible box module, it is an extension of display property. It is a set of CSS properties to create flexible layouts and distributing extra space and aligning content. Because in CSS block, inline, table and positioning properties do not provide enough control for flexible layout, it becomes hacky and awkward to layout some more complex web applications which is why flexbox has been created.

- Flexbox is all about the relationship between a parent container and its direct descendant child items named by flex-container and flex-items. Flexbox was made for layout, float was not.

- Flexbox controls how items flow in one dimension, where the grid controls how items flow in two dimensions. Flexbox is great in handling alignment, distribution and order of content in space. CSS grid on the other hand is suited to lay items out in both dimensions. CSS grid, like flexbox, is all about the relationship between parent container and child items, grid-container, grid-items. It establishes a grid context for its children.

![css-flex-layout-vs-grid](./src/assets/images/css-flex-layout-vs-grid.png)

- Responsive web design is a technique for creating a website that adapts to accommodate various device widths. It involves Fluid Grid, media queries, flexible images.

- raster vs. vector images

![css-raster-vs-vector-images](./src/assets/images/css-raster-vs-vector-images.png)

- JPEG format usage: progressive JPEG means it will render with the lowest quality first then get improved over time, unlike normal JPEG which gets render line by line paint with full quality. It is a best format for photos, lossy compression and progressive.

- Other formats - GIF (now a days use in animation only), PNG (lossy compression not as much as JPEG, mainly used to allow transparency scenario), WEBP (created by google, animation and transparency, limited browser support), SVG (XML vector image format, points, lines, shapes, resolution independent).

- We use use SVG images wherever possible.

- Lossy optimizer and lossless optimizer: the lossless compression will remove lots of metadata/properties information from the file without affecting its visual quality unlike lossy which don’t remove the metadata info but other data related to visual looks.

- Use radio buttons for less than 5 options, use dropdown for more than 5 options.

- CSS is crafted to be simple, but scaling simplicity is difficult. It is Sass not SASS, full form is syntactically awesome stylesheets. Its extension is “.scss”.

- We should follow mobile first approach, then add media queries rules medium and large screen as required. So, we don’t have to add media queries in CSS reset and small screen. Due to this maximum CSS style rules will in small.css, then fewer in medium.css and few in large.css:

![css-mobile-first-approach-style-files](./src/assets/images/css-mobile-first-approach-style-files.png)

- In progressive enhancement we first apply rule for small screen then by media query apply rules for medium screen and then finally for large screen.

- Icons are vector based not pixel-based like the sprites, this means icons are very smooth specially on screens with high resolutions.

- Flexbox is a collection of CSS properties used to align content and distribute space. It includes concepts such as flex containers, flex items and flex lines. Flex containers control layout of child items.

- The flexbox model provides an efficient way to layout a line and distribute space among elements within our document. By this we can control the layout of children in a parent container. We can tell the children to line up left to right or right to left, or top to bottom or bottom to top, we can tell them fit on one line or wrapped to multiple lines. We can control the spacing around images and text and align the items either top or bottom. By this we can make responsive design much easier. We can use flexbox for creating an image gallery website.

- When not to use flexbox – they are good for simple layout where we can control over the components. But they are not meant for complex application grid systems. Better suited for individual components. So, should use more CSS grids instead of flexbox on entire page. Flexbox provide limited control over order. CSS grids provides better control over text layouts.

- The Origins of Styling Scroll - 1920’s cartoons are the earlier example of scrolling effect, often used when character was walking. In 1980’s video games used the same technique as cartoons but added triggers which increase interest. Web designers began using parallax scrolling in 2011, Early design used only 2 layers.

- Responsive design got started when Steve Jobs launched iPhone in 2007 with web browser. Four mobile strategy - ignore them, build a seperate mobile web site, build an app for the apple store, build a responsive site

- In 2007 iPhone release a phone in which he made the browser tell a lie to the website that it is having desktop size browser and then it shrinking the size to fit on the mobile, in other mobile on those days were not able to render complete website and making the website unusable. But as a responsive design now a days we want to know the actual size of browser on mobile not a lie, so we need to add below tag.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0. maximum-scale=1.0. user-scalable=0" />
```

- Pseudo classes allow us to conditionally select an element based on state or position, they start with a colon `(:)`.

- 12 column grid layout – it has history in newspaper because when we had multiple editions coming out in a single day, we need to lay them out quickly and 12 columns can easily be divided into halves, quarters or thirds. So, it is an easy layout to achieve.

- The `data-*` attributes on HTML allows us to store extra information on standard, semantic HTML elements without other hacks, such as non-standard attributes, extra properties on DOM, or Node.setUserData(). So, they are allows us to target javascript.

- By using forkJoin we can make two calls simultaneously, it is like q.all() functionality in promises, these calls will happen in parallel.

- Popover – It is like tooltip but gives us additional features like title. Tooltips are usually smalls, quick hints, and appear on hover. Popovers have an explicit title area and get additional related content. They are generally bigger and typically dismiss with click rather than hover status, popovers are more like a modal.

- Fonts of a typeface –

![css-fonts-of-a-typeface](./src/assets/images/css-fonts-of-a-typeface.png)

- Anatomy of typeface –

![css-anatomy-of-a-typeface](./src/assets/images/css-anatomy-of-a-typeface.png)

- Hyphenation – dividing words at the end of a line. Doesn’t look clean. No clear advantage. On digital application do not hyphenate.

![css-hyphenation](./src/assets/images/css-hyphenation.png)

- Don’t put indent first paragraph in digital world –

![css-indent](./src/assets/images/css-indent.png)

- Use all caps sparingly – instead of this try to use title cases

- Pull quotes – it should not be a copy of original text.

![css-pull-quotes](./src/assets/images/css-pull-quotes.png)

- Use maximum two different typefaces in the application like serif and sans-serif. Like one for header and another for content. We can use website fontjoy.com and fontinuse.com for font pairing.

- Font file types –TrueType (.TTF), OpenType (.OTF), Web Open Font Format (.WOFF), Embedded Open Type (.EOT)

- Pseudo-classes - :hover, :nth-of-type, :first-of-type, :last-of-type, :nth-child, :first-child, :last-child

- CSS grid properties –

![css-grid-properties](./src/assets/images/css-grid-properties.png)

- Building colors in RGB

![css-rgb-colors](./src/assets/images/css-rgb-colors.png)

- Different ways to represent colors – RGB, CYMK, HSL, HSV and Pantone. RGB rules the world.

- Choosing an image format (bitmap, tiff, compressed TIFF, gif, jpeg) only gif and jpeg can be used over the internet. Use gif for illustrations, logs and backgrounds and jpeg for photographs. We don’t use gif for photos because the compression would be lousy and if we use jpeg for illustration then its compression will be lousy.

- Portable network graphics (PiNG) because GIF compression was patented. PiNG (PNG) provides lossless compression means we can save it over and over again without losing information. JPEG still have smaller size than PNG. But PNGs don’t do animation. GIF and PNG can do transparency, JPEG cannot. Transparency allows the color of the parent layer to shine through. So, use PNG unless we are sure you need JPEG, JPEG compression is lossy, don’t use for working copies.

- Rater vs. vector based images – for vector we use .svg files -

![css-raster-vs-vector-images2](./src/assets/images/css-raster-vs-vector-images2.png)

- CSS filters – we can apply effects on images or other elements. Supported filters – blur, brightness, contrast, drop-shadow, gray-scale, hue-rotate, invert, opacity, saturate, sepie

- What is missing in CSS – no CSS constant and no cross browser supports, for this we should use SASS. SASS is the technology platform and SCSS is syntax. It has more features like nested style as below second one is more cleaner with SASS. SASS modules – color, list, map, math, meta, selector, string.

- Difference between without and with fluid container in flexbox – The grid will take all unused horizontal space.

- Theme colors –

![css-theme-colors](./src/assets/images/css-theme-colors.png)

## Angular JS

- Binding expression {{}}

- Modules provide some sort of container for the code that we write so that it will not leak-out to some other code.

- Modules provide some sort of container for the code that we write so that it will not leak-out to some other code.

- The ngCloak directive allows us to hide portions or all of our page and tell angular a chance to run to go though and parse the HTML and replace the directives or bindings with the actual values which it wants to display to avoid the flashes of unbound HTML on slower computer.

- HTML doesn’t allow forms to be nested but using ngForm directive we can have nested forms to allow creating the smaller sections of the form.

- $compile service – is used heavily internally by angular whenever a page is loaded it uses to look through the directive and process them. We can also generally used them inside directives. $compile return a ‘link’ function in which we passed the scope.

- Using $parse service – it is also similar with the $compile service and used by angular internally. It is used to evaluate and expression and turn that expression into function that can be evaluated against a given context.

- $rootScope – one $rootScope per application. When we create a new scope it is created from $rootScope getting prototypal inheritance. We can inject global data on it. Avoid using it as a best practice.

- Keyboard shortcut: hold down mouse click on history button on browser to see history. Angular will take care of managing history in the browser as we are not actually loading pages but just loading the angular templates.

- If we use ‘&’ means that we will execute this function into the parent scope instead in the isolate scope. ‘=’ means we are expecting an object. The ‘@’ sign indicates that we are going expect a string to be passed in, so we pass a string or an expression using evaluation {{}} operator.

- Understanding Transclusion – it typically refers to taking a portion of a document and embedding it inside a document. In angular we take an HTML and embedded it inside a directive.

- Transclusion - It is like a picture frame. Like frame is completely separate from the picture inside of it. Just set the transclude property to true, and use the ng-transclude attribute inside the template html.

![angular-js-transclusion](./src/assets/images/angular-js-transclusion.png)

- If we have some HTML content side a directive like below angular will not show it because it is replacing the `<collapsible>` tag with the HTML inside the template, so we need to use transude to true and in template need to specify where it needs to be shown

- We can return from the compile function a link function then that link function will be executed for each element. So compile function runs once and affects all the instances of the directive the same way then the link function runs individually for each directive. Most often when we create a directive we will not create a compile function, typically we can take care of kinds of things that we need to do using the linking function and the template to manipulate the HTML. The angular ng-repeat directive uses the compile function in order to do its work.

- We can achieve the same functionality using link and inside it using compile but it will be expensive because compile will run many times as per ‘for’ loop value.

- Previously Karma called testacular and it is independent of angular, it can used to test other javascript code as well.

- Angular is an opinionated software. It extends HTML vocabulary using the concept of directive.

- It is helpful in creating single page application. Gmail website is an example of single page application. Routing is a key part in writing single page application.

- Angular was originally written by Misko Hevery. Why angular – it is a complete solution and easy to learn. Abstract away complexity and open source backed by google. Highly testable. Benefits – code reduction. Makes forms more interactive using 2 way bindings. Poor API hiding like using directly ng-click. It supports accessibility using ngAria for screen readers and internationalization. Publicly released as version 0.9.0 in October 2010.

- Angular auto do the change detection unlike in other technologies like in asp.net using component.render() where user has to do it which cause many problems.

- Angular use dirty checking as in javascript comparing two objects is very fast operation. Angular watch all events which can change the data like ng-click or service call then run digest cycle, do dirty check and re-render the page.

- Because angular utilize the client side rendering technique, means most of our HTML isn’t sent directly with the page but instead it comes later on. Due to this most search engines almost see nothing of our site because without the javascript rendering the HTML our site has almost nothing to display. If SEO is important to you then need to use some technique like rely on google only, render portions of site of server, or use a pre-renderer.

- React suffer from Frankenstein framework syndrome, means React by itself is really only a rendering engine, it doesn’t do other things like routing or server communication so we need to look around and piece together the different libraries and parts that we ne need to make a complete solution. So need a good architect person to decide which piece will work best. But angular is a complete solution.

- In angular 2 the angular team has completely revamped the framework to move it forward in a way that really wouldn’t be possible without major changes, due to this angular 2 doesn’t have backwards compatibility with angular 1 framework.

- Angular 2 is created keeping performance in mind so it is much faster than angular 1 which is like 5 to 10 times faster. It has simplified the conceptual model and removed the idea of controllers and modules and simplified how services works and removed much of the configuration overhead. Angular 2 is designed to be more mobile friendly and web standards in mind.

- Angular uses dependency injection to make it easy to get a hold of components, or services that can hold encapsulated functionality and data that we can use to build complex application out of small and simple pieces.

- JQuery – Angular included jQuery in its core library for basic selection and manipulation functions. If we give reference of jQuery then it will use its full version. When a directive does need to manipulate the DOM directly, jQuery is a tool used to do it.

- 5 types of services - provider(), factory(), service(), value(), constant()

- The $q service makes it easy to implement async patterns in our app. It is an object which represent the pending result of an async operation. It provides and API to work with promises and deferred objects that return promises to the calling code. when first client make request to server, the server will first create the deferred object using $q, which is used to communicate the status of the async work back to the client. This deferred object will immediately return a promise back to the client. Then client can use promise API to configure a callback function to execute when the work and the service is complete.

- Client side routing doesn’t replace the server side routing. But while using client side routing the call to server is for getting the little bit of information rather than complete webpages and all of it related resources. SPA need client side routing as a means of referring to different locations with the SPA. There still be interaction with server but for partial data.

![angular-js-server-side-routing](./src/assets/images/angular-js-server-side-routing.png)
![angular-js-client-side-routing](./src/assets/images/angular-js-client-side-routing.png)

- Hashbang versus HTML5 Mode – this is the default mode. There will be “#” character after the domain name in the URL. All the text on URL after this character will be for client side routing and angular will handle it. The alternate to this mode is HTML mode

- When angular is configured to run in HTML5 mode it attempts to use the browser’s HTML5 history API.

![angular-js-hashbang-vs-html5mode](./src/assets/images/angular-js-hashbang-vs-html5mode.png)

- Jasmine is a behaviour driven development framework, it gives us mechanism to write and then execute the unit tests in javascript. The describe function provides the logical grouping of the multiple test cases, and the ‘it’ function state the name of the test cases.

- The main ability karma gives us to execute our unit tests via the command line, so instead of every time do switching between browser and text editor we can easily run it in the command line. Phantom JS will allow us to use the headless browser for even faster test feedback.

- Whenever we construct a new date its base value will always be in UTC, it is a time standard by which the world regulates clocks and time. If we specify a date without an offset, UTC is assumed. A date instance has two states the UTC time and a local time based on the system settings. These two states cause problems in unit tests.

- TzDate is a wrapper for the native javascript date type to construct date with time zone information. We can setup a time zone that will not change according to the local machine. It is not a complete implementation of date type object. Its main purposeis to create Date-like instances with timezone fixed to the specified timezone offset, so that we can test code that depends on local timezone settings without dependency on the time zone settings of the machine where the code is running.

- Creating directive by using attribute or element are only recommended because other two are easy to overlook while reading HTML. By using attribute it means we are modifying an existing element while if we use it like element then it means we are adding a new object on the page.

- Because HTML is case insensitive so we need to use dasherization or snake casing while using directive name in HTML. We can also use colon or underscore.

- Structural Directive - These types of directives are complex and rarely created. These are also template directives. It modifies the overall HTML structure. Like ng-if it removes the entire element from the DOM unlike ng-hide which only use simple css display rule to none and ng-repeat, ng-switch. They all use transclusion and control where and when the transclusion will be available in the node.

- Types of directives:

  - Component type – it represents some data and its associated HTML and related functionality, and always implemented as a custom element or also called widget. Like buttons
  - Decorator type – most commonly used. It adds additional functionality to an existing tag or modifies that tag’s display. Like ng-click. These are always implemented as an attribute never have template.
  - Structural/Templating type – like ng-repeat. These type of directive manipulates the DOM structurally to produce a display.

- Best Practice: do not use the replace attribute. And always prefix your directive name with some custom project specific text.

- There are three ways by which we can set the relationship among the directive’s scope and containing controller scope, the default is or the directive to share the scope with the containing controller.

  - Shared type

  - Inherited directive scope – if we create new item on the directive then it will be internal to that directive only. To implement this just create a scope property on directive and set it as true. Its parent and proto property will be containing controller scope. False value will be shared scope.

  - Isolated scope – isolated scope can’t see everything on the parent scope, but it can see specific items that we make visible to the isolated scope. Its parent scope will still have the containing container but the proto property would not have the containing controller scope. By using this we will be able to create a directive that is truly reusable.

- We should break a component/directive into multiple small directives. It is just like not to putting all your code in main class but break into multiple classes as per object orientation.

- If we use the '^' then it will look the directive on the parent node, for '?' sign means that directive may not be present then in that case it will give is as null. If we use the '^^' then we only looking on the parent node not on the current node.

- Key factors in building a line of business application – data is an asset, amount of data is significant, number of input/output data fields is significant, data integrity is critical, data visualization

![angular-js-line-of-business-application-structure](./src/assets/images/angular-js-line-of-business-application-structure.png)

- Bootstrap is a framework for prettifying the web pages, help you build responsive web applications means responsive to changes in layout, it scales to multiple form factors – phones, tablets, laptops and desktops and handle browser differences. It is developed by twitter.

- For routing angular use fragment identifier because it gets processed on client side and doesn’t get submitted on server, so we assign a unique fragment identifier to each view. The ngRoute is based on fragment identifies while uiRouter is based on application states URL fragment identifier is optional in it. Nester routing can provide the navigation for a tab-based set of edit pages.

- Controller should not have more than 5 collaborators means dependency. We can also use the façade class to arrogate the interaction with several collaborator sin to a single collaborator. Value provider can be used to create global data. Controller should be testable by following the guidelines like too many used collaborators will make it difficult, like manipulating the DOM or too many business logic, too much work it will be tough to test.

- Avoid FOUC (flash of un-styled or un-compiled content) – we can avoid that by using ngCloak, ngBind or waiting image. The ng-bind gives us ability to do the same thing as {{}}.

- For bootstrap logic which is required to start the app, should be in app.run().

- We can organize our app using by feature or type. For large project ‘by feature’ would be better or mix with both types. The LIFT principle (locating our code is easy, identify code at a glance, flat structure as long as we can, try to stay DRY). Have below format while writing controller to have ‘above the fold’ concept, and should not have more than 3 level for folder, it should be flat.

![angular-js-lift-principle](./src/assets/images/angular-js-lift-principle.png)

- 3 categories of modules – angular js modules, 3rd party modules, custom modules (which we create our self).

- Exceptions cannot be avoided entirely but they can be handled gracefully.

- Why to use Angular? Expressive HTML, modularity, Rule based navigation, powerful data binding, testable, popular so better support and help.

- Bower is a NPM for the web components, to get the dependency files.

- Lifecycle - When the page loads it loads our static DOM. Angular JS is then loaded then we have our ‘on content ready’ event that’s fired. Which kicks off, that’s what Angular is listening for. That is the entry point. Then angular looks for the application within the HTML, so that is our ng-app. From there it goes through and compile all of our services, and controller and everything that we have declared on our model basically gets compiled. It then goes through the DOM and says what directives do I have, what are the angular js pieces within the HTML and generate the template. This is the compilation phase. Then it goes back through and it links it together says this template gets this scope, binds it together and we have our view.

![angular-js-lifecycle](./src/assets/images/angular-js-lifecycle.png)

- $digest() processes all of the watchers of the current scope, $apply() is used to notify that something has happened outside of the Angular JS domain, $apply forces a $digest cycle.

![angular-js-digest-loop](./src/assets/images/angular-js-digest-loop.png)

- If we use factory then it works on revealing module pattern, and service is worked with ‘.’ dot syntax pattern, in this we are attaching methods and properties to a ‘this’ object. Prefer to use factory.

- Treating HTML as a DSL (domain specific language) – by using directive we can create HTML like DSL which will specify our page functionality.

- DSL – directives allows HTML to be extended into DSL. By creating custom tags in HTML, we can start to show what we are doing and convey it in a way that makes sense for domain experts. HTML becomes very expressive and self-documented. People find DSLs valuable because a well-designed DSL can be much easier to program with than a traditional library. This improves programmer productivity, which is always valuable. In particular it may also improve communication with domain experts which is an important tool for tackling one of the hardest problem in software development.

- Using compile function – it is used to manipulate the DOM prior the link function executing. Angular team choose to break out the compile and link function due to performance reason because in compile angular need to traverse the whole DOM to find the directive that need to be processed. When we use the compile function scope will not be available to us as it is mainly used for DOM manipulation not finding the scope or adding watches.

- Use the compiler function for template manipulation before the directive was actually attached to the DOM. The compile function takes our HTML and scope and put them together. The compile function gets broke into two functions pre and post. What we get from post link, in the compile function, is what we look in the linker which is our scope and HTML together.

- Use Green Sock for javascript HTML5 animations.

- Cookies present problems today, because the browser sends a cookie on every request, even on requests that do not need a cookie to authenticate the user, and sometimes on requests that have been put together as part of a malicious cross-site request forgery, a CSRF. Cookies do not work well with web API that works on a different domain as they are limited to a specific domain. We have more control over token.

- When we use an ng-repeat and you repeat over something like ‘star in stars’ collection from the scope, angular really wants to see distinct values inside of there, so distinct object references, or distinct number values, or distinct strings. So in case like we have an array with empty elements, in order to work with ng-repeat, we need to tell angular to track these elements by index, instead of the values that are inside of the elements.

- Creating stars ratings functionality:

![angular-js-creating-starts-review1](./src/assets/images/angular-js-creating-starts-review1.png)

![angular-js-creating-starts-review2](./src/assets/images/angular-js-creating-starts-review2.png)

- Forms are always start off simple, but then the business wants to add rounded corners and cute icons to make the form look friendly and inviting, and the real complexity starts when the business starts adding validation rules to a form.

- Function binding to isolate scope: whenever we use the ‘&’ binding, we are essentially creating a proxy function on our isolated scope, when we invoke this proxy function, angular goes out and looks at the expression here and it figures out how to invoke that expression to get it to work. We have to understand that angular actually understands expressions like this at a very deep level. If we look thorough the angular source code, we will see lots of regular expression to parse things out, and angular even knows the name of this parameter that of this parameter that we want to pass to the method on objects. Angular understands that it needs a value to pass into this function. So when want to invoke these proxy function, we do not want to just pass parameters along, we to want to pass essentially, a hash that tells angular in the expression being used, if there is something with this name value, then pass along what is inside of this variable for that function argument. So we need to use an object literal syntax like below to get a parameter into an expression that is bound to a proxy function on our isolated scope.

- The first version of angular known as Angular JS. Angular 2.0 or above known as just Angular.

## Angular

- Angular is a tool to help you build interactive websites, you can call it a framework. It provides tools to communicate with the server and to improve the performance, package application, maintain state, organize code/logic, ease display of data, synchronize state as it changes.

- Angular 2 is more standard based (modern web standards), modern (state management, change detection, etc.), more performant.

- Angular releases major version every 6 months, 6 months of active support and 12 months of LTS support (only security and bug fixes, no new features unlike active support).

- Universal benefits – reduction of cost, standards compliance, extremely performance, open source, use typescript, backed by Google, very uniformity (make onboarding new developers cheaper and simpler), amazing documentation.

- It indirectly provides environment for router, HTTP, forms, RxJS, etc. Already configured with Typescript no need extra to configure, opinionated means fewer decisions to take. Provides support for progressive web apps, lazy-loading, fully reactive forms library support, fully featured router, animations library, supports strictly typed forms.

- Angular also supports server-side rendering, mobile friendly, angular language service (Intellisense and better debugging in templates).

- Components – building blocks of modularity. It breaks up display of application in manageable chunks. It has display and logic.

- Services are a place to put logic which is not related with the display like checking more than article reading limit has been crossed or not.

- Directives are a way to give existing tag a new functionality like making elements or appear on hove, control the visibility, etc.

- Pipes is used, to format the data to display like uppercase.

- Modules are not optional in angular 14. It is a grouping of other features like services, components, pipe and directives, it can also include other modules.

- Application state gets changes on user interaction, http service response or by timer execution.

- Efficient change detection – first the state gets change then cascading changes occurs and finally re-render of page.

- Inefficient change detection – the system is not smart enough to identify the cascading changes and re-render the UI multiple times.

- Zone.js is a wrapper on the things which can change the state change like user interactions, http and timers, it knows when these things gets completed. Angular then subscribed to notification from zone.js so that it can run the change detection and re-render the display.

![Angular Zone](./src/assets/images/angular-zone.png)

- Rendering targets provided by angular – browser/DOM, server-side, native mobile apps, native desktop apps.

- Angular CLI solves JS fatigue problem which setting up the JS environment to build an application.

- Server side rendering – increase performance as initial download size gets reduced, increase render time, search engine optimization. Modes – full pre-render, dynamic pre-render, client-side switch.

- To build the native mobile apps with angular, there are two common tools ionic and NativeScript. For Native desktop, we need to use Electron.

- Angular testing utilities – TestBed – helpful in testing component with templates. It helps to constructs component in small, live, angular environment and gives us handles to wrapper around component and DOM created by its model. Async and fakeAsync, MockBackend.

- AOT – browser needs to compile the templates into DOM Functions i.e. the actual views. The AOT does it during the compile time itself.

- In chrome browser, Elements, console, sources tabs are called panel and windows inside each of them are called pane.

- In chrome browser, Use $0, $1, $2, $3, $4 to evaluate currently or previous selected elements from console.

- Angular 1 is an MVC pattern, but Angular 2 is component-based pattern, it is like a directive in angular 1 but smoother.

- The interpolation {{}} represents one-way binding.

- Using template reference variable to interact with child components – this variable allows us to specify a variable name that points to a component and then we can access any public properties and method on that component using that variable.

- Angular need to know the exact URL where our app is hosted, so that it can knows what its routes are relative to so that it can parse the URL. For this we need to provide the base tag in our index.html.

- Content project is an ability to change the content inside of a component based on the needs of the application. Like a dialog box and reuse it with different pieces of content for save and cancel button or re-posting logic. This is called transclusion in angular JS. In multiple slot projection we have more than one slot into which the variable content can go. We need to use ng-content tag which will tell angular whatever content exists inside of my component, put it inside of it.

- Mutability – objects and arrays in JavaScript are mutable; they can change any time without changing their identity. By default, angular only runs a pipe when the identity of the source has changed. Using impure pipes, it runs on every cycle of the change detection engine, this method of executing the filtering or sorting code every time change detection runs is how angular JS filter worked. Pipes are no longer recommended as the way to filter and sort our data. We should do it ourselves using component so that we can filter and sort the data when source gets changed by ourselves.

- We should not use global objects of third party services inside the application, if we do this then we won’t be able to use concepts ES6 modules, tree shaking, and also it is bad practice.

- Angular dependency injection lookup – whenever we provide a class into providers, angular takes it and provide an instance for that class using constructor function. In angular 1 we use strings to register the dependencies, in angular 2 we are using classes or types, that is our keys or in other words our token.

- Using OpaqueToken for dependency injection, angular 2 provide a mechanism for us to create a key or token that we can use in the dependency injector without creating a class. Its job is simply to create a token used for the DI registry in order to find the instance of the object we want.

- The useExisting and useFactory Providers – whenever somebody will ask for the MinimalLogger they will get the instance of the Logger, but they will see only those methods that are on minimal logger API that you actually want to use. useFactory allows us to parameterize the creation of an object. We use this when we need to have a very complex way to construct an instance of a class to use as a service.

- Angular HTTP testing utilities – HttpClientTestingModule, HttpTestingController. TestBed utility configures the environmental to run our unit tests, it also implements angular inject interface due to which we can inject the classes which we need in our test.

- For integration test angular use TestBed utility to construct the component, unlike unit test where we ourselves construct the component, in integration test angular does that using TestBed. It also constructs a module for us to be used in the test run for the component to operate in a realistic environment.

- Using a Testbed – Using fixture gives us a hold on the component, but not just its class with its method and properties but also its template, the actual HTML template. We can inspect the template, change it, ask angular to run change detection and expect, this is also a main benefit of testbed to able to get a hold of this fixture. Also using Testbed, we can setup the dependencies in a bit of an easier way. Testbed is also just an angular module.

- Using debug element – debugEl has a query method which we can use to select from the root node using “By” predicate.

![angular-debug-element](./src/assets/images/angular-debug-element.png)

- Tree shaking removes the properties and functions from production build code that is never called.

- Enable production mode by calling enableProdMode(), the development runs an extra step though angular 2 change detection process. When it’s all done running change detection, it runs it one more time to make sure that nothing has changed. So, in production mode we want to disable this feature.

- Ahead of time compiler (AOT) benefits – in this precompiling our application like compiling template. We need to install compiler itself from platform-server. With AOT we cannot use full path but relative path. It provides faster rendering, fewer requests, detect template errors, better security.

- Optimistic bundle download – eager lazy loading of the module. It will download it as soon as there is available download. We do not want to wait to render the application until it is downloaded.

![angular-preload-all-modules](./src/assets/images/angular-preload-all-modules.png)

- If we set schemas: [NO_ERRORS_SCHEMA], it means we are testing shallow components, so angular won’t give error any error as it won’t render the child components. In provider if we use useClass or useValue then while doing dependency injection it will pass the instance of that class or value.

- For change detection angular is used zone library, zone listen all the asynchronous activity in a zone. It has a queue of asynchronous activity that it listens for and it waits until it finishes. So we can utilize this concepts using testbed to be able to know when these asynchronous activity is finished versus doing a “done” call-back as in traditional approach.

- The nativeElement property exposes the regular old browser’s DOM API to work with template. There is an another property called debugElement() it is like nativeElement() and it has a way to access to root element of our template. It has some different set of functionalities that is very similar to nativeElement.

- To make the ngOnInit() method to get called as a lifecycle event we need to raise changeDetect() event. We can manually call ngOnInit() but it is not recommended approach.

- Using the fakeAsync helper function to avoid slowness and increase readability. We can use tick() function to call any code that should be called inside of that time-frame, then we can call our expect() statement. The reason we can do this is because angular itself runs inside of zone.js and fakeAsync function makes this code run in a special kind of zone, that zone.js will create that allows us to essentially control the clock inside of that zone. So, we can tell it to tick forward.

- Fake Async in the tests – we need to wrap the test in fakeAsync method, it allows us to fake time. Using tick() method to fake time while using fakeAsync. Working with Async – it helps us to wait for while selecting any DOM to do test deep / child component as integrated test. We use a method fixture.whenStable() for this type of testing.

- If we don’t know the actual tick times then use flush() it will make zone.js to run all the pending tasks in its queue.

- Using the async helper function – it works with promises. Promises are also asynchronous. It also utilizes the same concept of zone.js. it is also a part of angular core testing module. It will ask our component to wait until it has stabilized. The component understands when it sees a promise inside of itself that hasn’t yet been stabilized until that promise resolves. But async() doesn’t deal well with setTimeouts.

- fakeAsync can work with both a promise and a setTimeout and with all other asynchronous types of code. But async is only works well with promises. We should prefer using fakeAsync approach.

- Interceptors allows us to write a small bit of code figure in a single place and apply to all of the HTTP request and responses. They are like services and implement the HttpInterceptor interface. They manipulate HTTP requests before they are sent to the server. They also manipulate the responses before they are returned to our app. Uses for interceptors – adding headers to all requests, logging, reporting progress events, client-side caching.

- Types of directives – component, attribute directive, structural directive. An attribute directive changes the appearance or behaviour of a DOM element. It makes DOM more dynamic, responding to run-time environments and quick & easy to reuse.

- structural directives - `*ngIf`

- Pipes modify data for display only. types - async, currency, date, decimal, json, lowercase, percent, slice, titlecase, uppercase

- Query decorator - if template is inside view then use @ViewChild otherwise @ContentChild if template is inside component

![angular-query-decorator](./src/assets/images/angular-query-decorator.png)

- Directive selectors

![angular-directive-selectors](./src/assets/images/angular-directive-selectors.png)

- Native element using cautions – it tight couple our back-end code with front-end presentation, it is unavailable in angular universal, and we cannot move any logic directly using nativeElement into a web worker. So, if we use it property then these problems will not arise. For this we should use Renderer2 class.

- Building templates with ngTemplate – by default it’s just add an empty element as comment <!----> on DOM. We can also use it with ngIf-then-else condition:

![angular-ng-template](./src/assets/images/angular-ng-template.png)

- NgTempalteOutlet – by this we can decide the position of template to display on the DOM, other use-cases can be alternate UI, repeated UI elements, dynamic UI placement:

![angular-ng-template-outlet](./src/assets/images/angular-ng-template-outlet.png)

- ngTemplateOutlet Context: we can pass some JSON which will alter the templateOutlet, it is useful for simple template modification scenarios:

![angular-ng-template-outlet-context](./src/assets/images/angular-ng-template-outlet-context.png)

- Dynamic component creation - `*ngComponentOutlet`, `ComponentFactoryResolver`, `resolveComponentFactory`

- Use ng-container wherever possible instead of div or span.

![angular-ng-container](./src/assets/images/angular-ng-container.png)

- ngSwitch Bloat – instead of this use NgTemplateOutlet:

![angular-avoid-switch-bloat](./src/assets/images/angualr-avoid-switch-bloat.png)

- A pipe shouldn’t do a lot, for this a component will be a better choice. All built-in pipe are pure, except - splice, json, async

- A better ngFor while iterating collections using trackBy function so that while manipulating the collection angular don’t have to re-create it on the DOM

- Angular lifecycle hooks – the blue blocks hooks don’t available in directives only in components:

![angular-lifecycle-hooks](./src/assets/images/angular-lifecycle-hooks.png)

![angular-lifecycle-hooks-playground](./src/assets/images/angular-lifecycle-hooks-playground.png)

![angular-lifecycle-hooks-playground2](./src/assets/images/angular-lifecycle-hooks-playground2.png)

- Angular treats the UI as a DMZ, accessible to anyone untrusted and un-trustable. Angular treats all values as untrusted by default. Angular only trusts template HTML, binding expressions, and attributes. It will sanitize or cleanse any content it doesn’t trust before adding it to the DOM. It will still display it like a script by converting first into simple string text so that browser doesn’t parse it.

- View child - it is like getElementById() method.

- We can create three types of services to share the data – property bag, basic statement management of entities, and state management with notification. For advance we can use redux.

- For change detection we can use the timer pool if the property is not binding by angular expression:

```typescript
onOnInit() {
    timer(0, 1000).subscribe(t => {
        console.log(this.prod);
    }
}
```

- angular communication approaches

![angular-communication-approaches](./src/assets/images/angular-communication-approaches.png)

- Angular Material is a reference implementation of Google’s material design specification. It provides a set of reusables, well tested, and accessible UI components based on Material Design. It supports Asymmetric acceleration and deceleration which create more natural and delightful motion than symmetric motion:

![angular-asymmetric-acceleration-and-deceleration](./src/assets/images/angular-asymmetric-acceleration-and-deceleration.png)

- The goal of angular CDK is to give developers more tools to build awesome components for the web. This will be especially useful for projects that want to take advantage of the features of Angular Material without adopting the material design visual language.

![angular-flex-layout-model](./src/assets/images/angular-flex-layout-model.png)

- AOT Compiler – improve performance, earlier JIT process compile the functions in DOM functions it takes time. But now using AOT it directly sends the DOM function without compiler.

![angular-jit-process](./src/assets/images/angular-jit-process.png)

![angular-jit-process](./src/assets/images/angular-aot-process.png)

- We get the below CORS error unless the URL’s match, including the ports themselves:

![angular-cors-error](./src/assets/images/angular-cors-error.png)

- Pure and impure pipe performance – pipes are pure by default means they do not work with data mutation, they only get re-evaluated if the object reference got changes that the pipes is applied to. We can resolve this by making the pipe impure but it will impact the performance. Like even initial loading of page this sorting pipe will be called many times due to object changes

- While doing interpolation we can’t use assignments, it only allows read-only data.

- If we don’t want to use brackets () for event binding then we can prefix it by “on”, like on-click.

- Content projection is same as transclusion in angular 1.x, now we use term ng-content tag for it

- Lifecycle hooks - Constructor() – only dependency injection will happen in this step, ngOnChanges() – anytime an input property changes this lifecycle hook gets called, ngOnInit() – input properties have been initialized, ngDoCheck() – when we are working with change detection, when input property gets changes if we want to perform our own change detection, ngAfterContentInit() – when the components or directives content has been initialized, ngAfterContentChecked() – content has been checked out and we are being notified that the checking is complete, ngAfterViewInit() – when the components view has been initialized, ngAfterViewChecked() when view gets checked, ngOnDestroy() – gets called right before the instance gets destroyed and we can free up any resources we have.

- Module organization – Core module should contain single use classes or singleton for the entire application, it should be imported only once in app module. We should have one more module i.e. AppRoutingModule for containing routing related information. Shared module should contain modules which are re-exported and shared throughout the app.

![angular-module-organization](./src/assets/images/angular-module-organization.png)

- Unit Test – jasmine is main testing framework, and karma is the framework that executes our tests.

- If we want to take up the control while newing up the instance of the recipe class, we need to create a factory that will be executed to create a new service instance. By this we will have more control for how it is created:

![angular-use-factory](./src/assets/images/angular-use-factory.png)

![angular-use-factory2](./src/assets/images/angular-use-factory2.png)

- SkipSelf decorators to make sure it is properly checking for a separate input of the core.module. SkipSelf tells the injection system to begin looking for an existing instance of the module in the parent injector. Optional instructs the injector to pass in null if no other instance is found.

- The execution will become pause at the await keyword, so we need to use async keyword in function method name so that it will not block the caller of this function.

- RxJS is a library for building asynchronous applications with observable sequences. It provides an API layer which abstraction different implementation of synchronous, async, single value or multiple value responses. RxJS is written in TypeScript.

- Subscribe method returns a subscription object, by this object we can cancel the execution of the observable. When we cancel an observable by unsubscribing from it, we won’t get a completion message that can be handled by the completion handler we write, but tear down code will still runs when we unsubscribe to prevent the memory leaks in the code.

- Subjects and multicast, they enable multiple observers to receive values from the single execution of an observable.

- Subjects – they are observables. They are implemented as a child class of the observable class. They can also act as observers. They have a state and maintain a list of observers. Due to which they can push values to more than one observer at a time. This makes them multicast instead of unicast.

- Subjects are similar to observables but have a few important additional features. Observables can only produce values for a single observer, so they are unicast. Since subject can produce the same value for multiple observers, they known as multicast.

- Multi-casting operators – multicast() it takes subject as a parameter, it returns a connectableObservable type on which we need to call method connect(). The refCount() operator can be used with other multi-casting operators to automatically trigger execution of the source observable when the number of observers is greater than 0. The publish() operator is thin wrapper around multicast that doesn’t require us to pass it a subject. It will create one for us behind the scene. The share() operator is similar to using publish and refCount together.

- A scheduler controls when a subscription starts and when notifications are delivered. Observables can be configured with schedulers to control the execution context for the observable. Types – queueScheduler (for sync operations), asyncScheduler, asapScheduler (micro tasking).

- Schedulers give us control on how our observables are executing. queueScheduler, asyncScheduler, asapScheduler, animationFrameScheduler, TestScheduler.

- Understanding Schedulers and the Event loop: microtask queue has high priority than async task queue.

![angular-scheduler-and-event-loop1](./src/assets/images/angular-scheduler-and-event-loop1.png)
![angular-scheduler-and-event-loop](./src/assets/images/angular-scheduler-and-event-loop.png)

- Using flatMap to process inner observables – flatMap operator is more sophisticated than map operation, it will also subscribe to the returning observable and deliver it throughout the rest of the pipeline.

- In decorator we pass configuration objects that basically stores metadata, all this metadata is used to describe some object that follows like in below Class, Decorator is a feature of Javascript.

- RxJS is the reactive implementations of the Reactive Extensions API. The ReactiveX API is meant to help us to manage the flow of data in our app. RX is a combination of the best ideas from the observer pattern and the iterator pattern. The observer pattern – key things are subject and observer or observables and observers.

- Benefits of RxJS - It has a better asynchronous API, it has both readability and capability of handing multiple values. Callbacks, promises and async-await are only better for handing a single value.

- Libraries are supplemental pieces of functionality, they help us solve specific problems, but don’t dictate the overall architecture of our app. Ideally, they avoid conflicts with other libraries and let us selectively use their features as we see fit. Examples are RxJS, lodash, jQuery. Framework on the other hand are much larger and prescriptive. We typically only use choose a single framework to use when starting work on a new application, however we might supplement that framework with several libraries to help us with specific problems we are trying to solve. Example – angular, react, Vue.

- RXJS operators

![angular-rxjs-operators](./src/assets/images/angular-rxjs-operators.png)

- Types of observables – cold (Netflix / movie @ home) and hot (movie theatre)

- observeOn – use different scheduler as javascript has multiple queues. This operator explicitly let us specify which queue on observable will processed on, means it let us specify a priority for the new values coming out of an observable.

- subscribeOn – it is similar to observerOn, it changes observable scheduler used by source observable.

- Multi-casting - Taking values from source and sharing or passing them along to multiple subscribers, typically placing some type of control or limit on how the subscribers receive values or the values they receive.

- Core and shared module – core or common module is designed for singleton type of services, which will be shared throughout the service like logging service, error service and data service. Service that are specific to a feature can go in the feature’s folder. Shared folder should contain reusable components, pipes and directives like calendar component, auto complete component. Shared module will be imported many times in different modules, but core module should be imported only one time into root module.

![angular-module-organization2](./src/assets/images/angular-module-organization2.png)

- Change detection strategies – in case of container presentation pattern, we don’t want the child component changing the state of the data at all, because that is the job of the parent or container component. When using OnPush detectors, then the framework will check an OnPush component when any of its input properties changes, when it fires and event, or when an observable fire an event.

- Reference vs. Value types – if our container component passing a value type it would update the child because change detection mechanism would catch, but when we do changes in some object property i.e. referenced type because object itself didn’t change and change detection won’t get fire, so to handle this we need to use cloning techniques.

- State management options – angular service, NgRx, ngrx-data, observable store, Akita, Ngxs, MobX

- A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

- HttpClient and RxJS operators – use forkJoin when we want to call two HTTP service and know when both of them come back and completed, it is like promises.all.

- General architecture of application with libraries

![angular-general-architecture-with-libraries](./src/assets/images/angular-general-architecture-with-libraries.png)

- The best way to test our angular library is to use npm pack command which is used to change directory into the library dist folder. We need to type command cd my-folder/dist then npm pack. It will create a tarball file (`*.tgz`) then we can install it using npm install my-folder/dist/package.tgz. other alternatives to test the library on local are npm install, npm link, but npm pack is best approach.

- Push based architecture using RxJS and Facades. Traditional pull based – we call them once, they respond, they are done. They are not going to return values over the future. Push based services – we construct a stream like user stream using another stream that will extract our users out whenever that state changes. Our views react to that change of data from that stream.

- For a state management we need single source of truth, immutable state that is needed for things like ngOnChanges so it can fire properly as it will only get fires when the reference will change, state change notification and track state change history and simple to implement and maintain, works with any front-end framework. To satisfy all of these things we can use observable store. It provides a simple way to manage state ina front-end application while achieving many of the key goals offered by more complex sate management options

- NgRX selectors - allow us to query our store for data, recompute when their input change, full leverage memoization for performance, selectors are fully composable, selectors are extensible

- Jest is built on jasmine, it uses snapshot which reduce test code and compares results with snapshot. By this the snapshot gets checked-in into the PR which reviewer can see and take decision whether it is make sense for which we are making against take PR.

- Effects are about controlling asynchronous operations and allow us to dispatch action based on this asynchronous operations.

- NgRx is a library, it is not a framework or another platform. NgRx supercharges the redux pattern with RxJs.Redux pattern is a state management container, it came from React community. The reducer will take the slice of state from action and create a new state. We don’t put HTTP service in the reducer as HTTP service call is not a pure function, it is a side-effect as it can return anything. We use effect for this situation, this effect is listening for all actions that are being dispatched in our application.

- Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. Three core principles – single source of truth by one big store, state is read only, pure functions drive state changes

- For communication between components, we need to action and selectors. As one component raise the action then reducer update the store and both components subscribe to that select which will make the components re-render.

- Now we can use `changeDetectionStrategy` onPush, it will optimize our view performance. It means that the change detector’s mode will be initially set to CheckOnce. Any asynchronous API events like XHR or promise based events will not trigger change detection once we change to this strategy of OnPush and the components template will not get updated. In default strategy it will every time changes in our application as a result of any user events, timers, XHR requests, promises, etc change detection will run on all components.

![angular-without-change-detection-on-push-approach](./src/assets/images/angular-without-change-detection-on-push-approach.png)

![angular-without-change-detection-on-push-approach](./src/assets/images/angular-without-change-detection-on-push-approach.png)

- Now above component will be changed only if new input reference is passed or a dom event is raised in our component or its children otherwise the view will not get updated.

- Angular language service main features – hover tooltip (quick info), go to definition, code completion Intellisense, diagnostics, syntax highlighting. It will automatically shows the properties which are available if we type [], and available events if we type () on a `<div>` element. Angular language service is built on top of Language Server Protocol (LSP) which makes is editor agnostic.

- Benefits of rendering the application on server-side using Angular universal – show the first page quickly, improve performance, facilitate web crawlers (SEO).

- On console if we type ‘ng’ it will give us below methods –

![angular-ng-console-functions](./src/assets/images/angular-ng-console-functions.png)

- Angular CLI Builders - Builder are wrongly given name, they just know that they are just given a set of options, run a function and return the results.

- The term ‘state’ is kind of fancy term for saying the data in your application that changes like list of movies. A side-effect is a term that we use to describe code that has to talk to the outside world like making REST calls, handling a web socket connection or dealing with time, these side-effects generally triggered by like ‘search’ button call. The term state change is the act of after we subscribe and get the movie list result, we update that component is managing to the results that came back from the API request.

- Selectors are consumers of action, but their responsibility is to help you bind your state to your components, it helps to bind state to our components. We have actions as some kind of indirection that allows a component to talk to the store without actually having to directly inject the store. Selectors are just functions. Selectors are like Global @input() for our application. Components don’t know how that state is derived or where that state comes from, their only responsibility is to subscribe to those selectors to be notified when that data changes, using async pipe in template which will automatically subscribe to that observable and then unsubscribe when the component is destroyed.

- Actions are unified interface to describe events, it just have data, no functionality, has a minimum a type property, strongly typed using classes and enums. This is the main communication layer between so many independent pieces of the application. It is how components are going to be describing events, and it is what reducers and effects are going to be using to trigger state changes and to trigger side effects. Unique events get unique actions, actions are grouped by their source, actions are never reused. Mention what caused it to happen, and who produced it.

- Optimistic UI is where we remove the records from the UI at once by assigning some temporary ID and then after getting call from server we update it, it makes UI more user friendly.

- If a user goes away from the desk for couple of hour, to avoid the stale data we can use web-sockets which will dispatch method in our backend that can notify clients when changes to our data model occur, and then using NgRx effects connect to that web socket and map notifications coming out of that web socket connection into actions that can then go update state by this we are always getting a live UI.

- To implement session expire functionality that to show message like ‘this is going to expire after certain minutes of time’ we can do it by setting up an effect that on enter could run like every minute of five minute or every hour to re-trigger that HTTP request and rehydrate the store if we don’t want to go the web socket method.

- To clear the data if user logs out, we can trigger the logout action and trigger state change that could pass undefined to our reducer and have them all clear.

- Effects are where all our side effect producing code happens like showing alerts, starting timers, opening connections to web socket, making http calls.

- Instead of having one heavy reducer function, we should have smaller reducer functions to update just slices of our state.

- Actions are like gluten of the NgRx loaf. We use unified interface to describe events. The ‘type’ property is the name of that event and it needs to be unique across all the actions in our application.

- Selectors allows us to query our store for data, they are almost like our SQL statements from a database.

- Anyone below we can use in effects. Exhaust map will discard any additional emission until one that is currently working on is complete, it is like going to postoffice and the front person is taking too much time and leave in-between. switchMap is opposite of exhaustMap, it will cancel the current work if new effect comes up. mergeMap, exhaustMap and switchMap can lead to raise condition as they are either cancelling the requests or discarding the new runs so concatMap is the safest operator but there is risk of back pressure and it will keep the emissions in order, it will lead to bad user experience of waiting. It is like waiting in a queue to get food, and we will only get the food when priors persons received the food.

![angular-map-use-case2](./src/assets/images/angular-map-use-case2.png)

- Usage of RxJS operators in different scenario –

![angular-rxjs-operators-different-scenarios](./src/assets/images/angular-rxjs-operators-different-scenarios.png)

- takeUntil is like throwing a person out of lunch line but everyone else will just continue. exhaustMap is like no line will ever perform, if someone is buying a lunch the other will just went away from there and never comes back.

- We can use interval operators in scenario where we want to refresh a page within some duration. Also instead using the web-sockets we can use this to rehydrate our models.

- Monorepos – everything that belongs to a system should get in there and it should have one version for all of these libraries not different version for different libraries by this we won’t have version conflicts, no burden with distributing lists

![angular-monorepos](./src/assets/images/angular-monorepos.png)

- Earlier compiler used to build the packages also if someone changes something in a project file, but now ngcc compiler will compile the package separately to make the build process faster. No more JSON conversion of typescript components.

- Faster tests – smarter recompilation model, earlier using view engine it will compile all of the components between every single test execution, but with Ivy unless we use some override method it won’t compile all of the components.

- HttpBackend will be last interceptor –

![angular-interceptor-sequence](./src/assets/images/angular-interceptor-sequence.png)

- Firebase was initial created to integrate online chat functionality. Google acquired it into 2014. Cloud functions can be triggered from different firebase services, google cloud services or even third parties through web hooks.

- Types of errors – external (HttpErrorResponse), business side and internal (Javascript error).

- When an Angular application is started, the main.ts file is loaded first, here we bootstrap the root module i.e. app.module.ts. In this module, we specify a component as the bootstrap component and tell angular to load this component and all its dependencies at start up and register it’s selector app-root. Now when browser loads the index.html file, it knows what is app-root and render all the contents of this component.

- The Bazel compiler is a build system used for nearly all software build at Google. When you compile the code with Bazel Compiler, you will recompile the entire code base, it compiles only with necessary code. It uses advanced local and distributed caching, optimized dependency analysis and parallel execution. In short, it only rebuilds what is necessary.

- @Inject is a manual way of specifying this lookup token.

- Injector tree – an angular application is a tree of components. Each component instance has its own injector. The tree of components parallels the tree of injectors.

- How angular router works – runs the guards that are defined, resolves the required data, activate the angular components, manages navigation and repeats the steps

- Three types of data bindings – interpolation, event binding, property binding. Interpolation is a one way data binding.

- Angular does not have built-in two way data binding, however, by combining property binding and event binding we can achieve two way data binding.

- Inbuilt structural directives are `*ngFor`,`*ngIf` and attribute directives are `NgStyle` and `NgModel`

- The main.js file contains all the code in our application, the polyfills.js file loads all the polyfill script to make sure it can be compatible with all the modern browsers. The runtime.js loads all the other files. The syltes.js file loads the styles as the name suggests and vendor.js file loads all the imported libraries.

- The canLoad guards always blocks preloading, so if the canLoad guard is executed, preloading will not work. We can replace the canLoad guard with the canActivate guard, and the it works perfectly fine.

- React vs. angular - Are you type of developer who prefers guided path where everything is kind of inside of a box and works out of box then choose angular. If you like to deviate from certain patterns and build things your own way like routing and other things then react is suitable for you. So, it is more of the type of developer you are than technology.

- By using `ng serve` it run the application locally in memory by using web pack server. This server is not ideal for the production.

- Instead of using the nested subscriber we should use maps like switchMap, exhaustMap, mergeMap and concatMap they all internal use map operator it has a project function which will return whatever we return whichever we return from it. These above operators use flattening operators like mergeAll, concatAll, switchAll and exhaust so that they don’t return observable of observables but just a normal observable.

- We shouldn’t mock which we don’t own. For the external libraries we should write an adaptor and while writing the external integration tests, use that adapter along with external library.

- We can also store full page and resources locally by using application cache but it is deprecated now, we should now use the service workers and cache API to cache resources. The cache API is a cache object where request objects act as keys to their responses.

- Service workers are scripts that run separately from our web page, intercept network request so web developers can treat the network as an enhancement and contains certain events such as fetch, push and sync. It basically works as a proxy between the network and the browser and a work when we are offline or in the background even when our site is closed, so we can trigger events when our site is closed as-well. Alternative is application cache but it is complicated and has strict rules, inefficient with versioning, cannot update small areas. Due to this the web workers have been introduced in combination with Cache API.

- Service worker expands on web worker, this means that it has no access to the DOM, isn’t tied to a particular page and run on its own global script context, works only with HTTPS, run without a page and is event-driven, it also triggered again even when in inactive state.

![angular-service-worker-lifecycle](./src/assets/images/angular-service-worker-lifecycle.png)

- What Is an "App"? - Application Richness and Reachability evolution, native app like IOS has increased the richness but reduced the availability.

- Expectations from an app - findable on app store, icon on home screen, touch controls, works offline, receives notifications, background processing, access to hardware feature and sensors.

- The progressive web app is a thing that will give us both richness and reach without compromise.

- Attributes of progressive web app – responsive, work offline, native app-like feeling, fresh and safe, discoverable, re-engageable (push notification), installable, linkable (URL based).

- Baseline requirement for progressive web apps – site is served over HTTPS, pages are responsive on tablets and mobile devices, metadata is provided for add to home screen, the start URL loads while offline, first load fast even on 3g, site works cross browser, page transition don’t feel like they block on the network, each page has a URL.

- The smart component will pass the updated data towards the dumb components

![angular-smart-component-data-passing](./src/assets/images/angular-smart-component-data-passing.png)

- We should only use behaviors like logging in the tap operator, we should not use side-effects in it.

- It is safest default for flattening, hard to create leaks like mergeMap. We should use it for HTTP request that can be cancelled (GET) and great for reset, pause and resume functionality. We should avoid it with POST request while saving the data.

- Catch errors on observables with catchError – we can either throw an error or return a new observable based on some condition. We can also return the EMPTY observable.

- Difference between [] and {{}} bindings - We can’t mix [] and {{}} together on the same attribute. Angular will complain.. Property bindings are actually manipulating the DOM and they get to preserve data types. Curly brace binding is string interpolation of the HTML and always results in strings.

- It comes down to how they function. {{}} is basically a form of string interpolation. You should think of it as simply replacing the HTML string with the results of the binding, and then the HTML gets evaluated.

- Property binding, [], on the other hand, works differently. You should think of this as manipulating the DOM after the HTML has been processed by the browser.

- So the [src] binding actually manipulates the src property of the image object, and NOT the src attribute of the img tag.

- The difference between ElementRef, TemplateRef, and viewContainerRef with examples.

![angular-element-ref-template-ref-vs-view-container-ref](./src/assets/images/angular-element-ref-template-ref-vs-view-container-ref.png)

![angular-ng-content-ng-template-ng-container](./src/assets/images/angular-ng-content-ng-template-ng-container.png)

![angular-ng-content-ng-template-outlet](./src/assets/images/angular-ng-content-ng-template-outlet.png)

- Angular 2 we have structural directive which are indicated by the prefix `*` because it is changing the structure of our DOM.

- No more $apply, repeated digest cycles, no more watches, no more performance issues with digest cycle and watcher limits.

- @Injectable() is similar to angular 1’s $inject. Now in new case we are using a decorator.

- When we inject a service, angular searches the appropriate injectors for it. Angular 2 has a hierarchical DI system with a tree of injectors that parallel an application’s component tree.

- The great thing about the http object, the service that angular gives us, is when it gives us back the observable it will automatically unsubscribe when it is done. So we do not have to worry about cleaning up that particular one. If we create a manual observable and subscription, then we are going to have to clean up our own subscription.

- Types of guards – resolve, can activate, can activate child, can deactivate, and can load (can load is like can activate but it will not even go get the contents, html and the javascript until it get satisfied it is used in lazy loading).

- We can use tools like AOT, which is an angular tool to do ahead of time compilation that will use the angular compiler on the server to compile the template here and then send across the wire those compile templates. We will use things like tree shaking to shake out some of the dead code that we are not using. Use code splitting so we can split our bundles up in case we use eager or lazy loaded modules. Use bundling and minification. Angular CLI.

- RxJS subjects are like an observable, but they can multicast to many observers, they are like event emitters and they maintain a registry of many listeners or observers.

- Angular universal is a concept that because we are no longer tightly coupled to the browser, because we have this compiler, we can actually build our application, and then render it entirely in a server side. Render it without the browser context at all. In this angular give us single method within what’s called platform server that renders our application to a string. So, we import our root module, and then angular say render to string. We give it the context of the URL the user’s trying to load. Then we can cache, serve or sent the string to the other user.

- A decorator is a JavaScript language feature, the scope of the decorator is limited to the feature it decorates.it is always prefixed by @ sign. It needs to be define above the class signature with no semi-colon afterwards, it is like an attribute feature in other programming languages.

- Observables help us to manage asynchronous data; they treat events as collections. We can think it as an array whose items arrive asynchronously over time. As of now observables are not supported by ES6, angular currently use Reactive Extensions (RxJS) as a third party library for this.

- Observables allow us to manipulate sets of events with operators. Operators are methods on observables that compose new observables. Each operator transforms the source observable in some way. Operators do not wait for all of the values and process them at once. Rather, operators on observables process each value as it is emitted. Operator examples – map, filter, take, and merge.

- Bootstrap array - Every angular application should have one app module, and one app component, it should have one bootstrap component which will be loaded while opening of index.html main file. So, every application must bootstrap at least one component, the root application component. The bootstrap array should only be used in the root application module, AppModule.

- Declaration array – we use this to define the components, directives, and pipes that belong to this angular module. Every component, directive, pipe that we create must belong to one and only one angular module. Do not add other classes, services, or modules to the declarations array. All declared components, directives, and pipes are private by default. They are only accessible to other things in declared in the same module.

- Exports array – allows us to share angular module’s components, directives, and pipes with other modules. Never export a service.

- Import array – an angular module can be extended by importing capabilities from other angular modules. It allows us to import supporting modules that exports components, directives, or pipes. We should only import what this module needs. Importing a module does not provide access to its imported modules.

- Providers array – it can register service providers for our application. It allows us to register service providers at the module level. It is like the provider array of component, which register the service at component level. Any service provider added to the provider array is registered at the root of the application and is available to the any class, even classes in other feature modules. Do not add services to the providers array of a shared module. Instead of this we should build a core module for services and importing it once in the AppModule. Routing guards must be added to the providers array of an angular module so that router can use these services during the navigation process.

- If you have set of services that you want to ensure are loaded when the application is loaded, consider defining a core modules for those services. It should be imported once into the root module.

- Different types of modules which we can have: root application module (AppModule), feature modules, shared modules, core module, routing modules

![angular-for-root-vs-for-child](./src/assets/images/angular-for-root-vs-for-child.png)

- We need to use query parameters to retain the user setting when navigating to the different navigation. To define parameters that work across multiple routes. Like on product list user has some search data, then navigated to the details page then coming to the product list page. Just like optional parameter we use query parameters to pass optimal or complex information. Unlike optional parameters they can be retained across routing paths. Like optional parameters, query parameters are not part of the route configuration and are not involved with matching route paths.

- We can use child routes to display routes within other routes for better route hierarchy, encapsulate and navigate through our application. Also makes easier to lazy load routes.

![angular-lazy-loading-vs-preloading](./src/assets/images/angular-lazy-loading-vs-preloading.png)

- A form model is the data structure that represents the HTML form – it retains the form state, form value, child controls.

- Creates a FormArray – we can call above created method to create multiple instances of that FromGroup, but we need somewhere to hold these multiple instances, that is the purpose of a FormArray. This array is simply a group of FormControls or FormGroups that are conceptualized as an array. These arrays are great for sets that are dynamic, or of unknown length.

- Building angular – during development time we are more focused on development speed and debugging and efficiency. In production we want to make sure the code is rock solid and secure and as fast as we can get it, even into the bundles/chunks.

- Ejecting – the angular CLI uses web pack under the covers and there is a configuration file to change the web pack configuration using command ng eject. By this we can eject our application and put proper web pack configuration so that we can run thing on our own, we would not be able to use ng build command anymore. Now a new file will be visible by name webpack.config.js. Now we can use npm start.

- When we use a form tag in an angular template, angular 2 is going to add a directive automatically to this form. We access a directive with a template reference variable. We need to have name property on an input field to make it register into angular with ngModel. We should also turn off browser validation to avoid inconsistency while handling error in browser validation using novalidate attribute in form tag.

- There is no guarantee that our model is set up when the blur or change event gets fire, so model might not be updated at that time. So instead of passing the $event model, we should use template reference variable.

- In earlier days while using cookie, another website open in different tab can also access the cookies for first tab. But using token-based protocol like OpenID connect or OAuth 2 it will require to put the token into the authorization header.

- For authenticating the user, we should use a separate server i.e. identity provider. Identity provider are also called SSO server.

- The OAuth access tokens have a fixed expiration time. If they got expired then calling a protected API result in 401 unauthorized. In this case we need to obtain a new token from STS to continue calling API’s. we can’t use OAuth 2 refresh tokens with Implicit Flow.

- Because all browsers do not support the newest version of javascript due to which we will use typescript. It transpile and change into javascript. We can let the browser let the transpile or we can transpile on server.

- Portal CDK – portal outlet - a portal is a piece of ui that can be dynamically rendered to an open slot on the page. this ui can be a component or templateRef. the open slot is a portalHost. tabs, dialog and snack bar uses the portal components. use domPortalHost to attach for an arbitrary DOM element outside of angular application context.

- Reactive extensions were originally developed by Microsoft as Rx.NET. It is a way to observe and react to data as it flows through time. Reactive development is a declarative programming paradigm concerned with data streams and the propagation of changes.

- For data caching we can use shareReplay and share operators.

![angular-life-cycle-steps](./src/assets/images/angular-life-cycle-steps.png)

- Angular is a tool to help you build interactive websites, you can call it a framework. It provides tools to communicate with the server and to improve the performance, package application, maintain state, organize code/logic, ease display of data, synchronize state as it changes.

- Angular 2 is more standard based (modern web standards), modern (state management, change detection, etc.), more performant.

- Angular releases major version every 6 months, 6 months of active support and 12 months of LTS support (only security and bug fixes, no new features unlike active support).

- Universal benefits – reduction of cost, standards compliance, extremely performance, open source, use typescript, backed by Google, very uniformity (make onboarding new developers cheaper and simpler), amazing documentation.

- It indirectly provides environment for router, HTTP, forms, RxJS, etc. Already configured with Typescript no need extra to configure, opinionated means fewer decisions to take. Provides support for progressive web apps, lazy-loading, fully reactive forms library support, fully featured router, animations library, supports strictly typed forms.

- Angular also supports server-side rendering, mobile friendly, angular language service (Intellisense and better debugging in templates).

- Standalone component doesn’t reduce work, but just reduce the learning curve for the new person learning angular, need to see what emerges further (new use cases).

- Tools provided by the Nx – ESLint, Cypress, Jest, Storybook, Prettier.

- Note that if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().

- ngDoCheck - This hook can be interpreted as an “extension” of ngOnChanges. You can use this method to detect changes that Angular can’t or won’t detect. It is called in every change detection, immediately after the ngOnChanges and ngOnInit hooks. This hook is costly since it is called with enormous frequency; after every change detection cycle no matter where the change occurred. Therefore, its usage should be careful to not affect the user experience. Well, since Angular tracks object reference and we mutate the object without changing the reference Angular won’t pick up the changes and it will not run change detection for the component. Thus the new name property value will not be re-rendered in DOM. Luckily, we can use the ngDoCheck lifecycle hook to check for object mutation and notify Angular.

- ngAfterContentInit - This method is called only once during the component’s lifecycle, after the first ngDoCheck. Within this hook, we have access for the first time to the ElementRef of the ContentChild after the component’s creation; after Angular has already projected the external content into the component’s view.

- ngAfterContentChecked - This method is called once during the component’s lifecycle after ngAfterContentInit and then after every subsequent ngDoCheck. It is called after Angular has already checked the content projected into the component in the current digest loop.

- ngAfterViewInit - This method is called only once during the component’s lifecycle, after ngAfterContentChecked. Within this hook, we have access for the first time to the ElementRef of the ViewChildren after the component’s creation; after Angular has already composed the component’s views and its child views. This hook is useful when you need to load content on your view that depends on its view’s components; for instance when you need to set a video player or create a chart from a canvas element

- ngAfterViewChecked - This method is called once after ngAfterViewInit and then after every subsequent ngAfterContentChecked. It is called after Angular has already checked the component’s views and its child views in the current digest loop. If we continue clicking on the Update button many times, the ngAfterViewChecked will be triggered each time, as well as, ngDoCheck and ngAfterContentChecked.

- Note that the ngOnDestroy is not called when the user refreshes the page or closes the browser. So, in case you need to handle some cleanup logic on those occasions as well, you can use the HostListener decorator

```typescript
@HostListener('window:beforeunload')
ngOnDestroy() {}
```

- We can understand the lifecycle hooks by splitting the process into two steps,” first-time hooks”, and “in every change detection cycle hooks”. “first-time hooks”, the triggered hooks are: onChanges, onInit, doCheck, afterContentInit, afterContentChecked, afterViewInit, afterViewChecked. “in every change detection cycle hooks”, the triggered hooks are: onChanges, doCheck, afterContentChecked, afterViewChecked.

![angular-lifecycle-hooks-workflow](./src/assets/images/angular-lifecycle-hooks-workflow.png)

- How the Angular Compiler Works - The Angular Compiler (which we call ngc) is the tool used to compile Angular applications and libraries. ngc is built on the TypeScript compiler (called tsc) and extends the process of compiling TypeScript code to add additional code generation related to Angular’s capabilities.

- Angular’s compiler serves as a bridge between developer experience and run time performance: Angular users author applications against an ergonomic, decorator-based API, and ngc translates this code into more efficient runtime instructions. In this way, ngc can be considered an extended TypeScript compiler which also knows how to “execute” Angular decorators, applying their effects to the decorated classes at build time (as opposed to run time).

- The ngc has several important goals: Compile Angular decorators, including components and their templates. Apply TypeScript’s type-checking rules to component templates. Re-compile quickly when the developer makes a change.

- TypeScript by itself has no understanding of Angular template syntax and cannot type-check it directly. To perform this checking, the Angular compiler converts Angular templates into TypeScript code (known as a “Type Check Block”, or TCB) that expresses equivalent operations at the type level, and feeds this code to TypeScript for semantic checking. Any generated diagnostics are then mapped back and reported to the user in the context of the original template.

- Angular CLI works fine with either one: kebab case or came case. For my part, in the future we should try to stick to kebab-case because that is what the Angular CLI --help output uses.

```shell
ng new my-app --create-application=false | ng new my-app --createApplication=false
```

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

## TypeScript

- The overall computer system doesn’t care for the source code, but the compile or interpreter does. It only understands the binary instructions. Source code is for us to understand and for developers.

- Alert pop-up box is given by the browser not by the JavaScript.

- In JavaScript, the variable does not have types but value has types. So, any variable can have any type of values. It is different behavior from the static languages.

- While passing the values to a function called arguments, and in function declaration they are called parameters. These two terminology cannot be used interchangeably.

- JavaScript has nothing to do with Java, similar names for marketing reasons. Developed by Netscape in 1995 to create products and applications that run in the browser. It is primarily client side. It was originally designed as a scripting language, it is actually a fully featured language.

- The ‘new’ keyword – this is the fourth rule – when we put new keyword in front of any function call, it magical turns that function call into what we might call a constructor call. It will do four things, a brand new empty object will be created, this new object will get linked to a different object, this new object also gets bound as the this keyword for the purposes of that function call, and if that function doesn’t return anything then it will return “this”, so this new object will be return for us. Below code will print undefined undefined

- The ‘this’ keyword refers to an object. That object is whatever object is executing the current bit of code. By default it is global object in browser it is window object. The new keyword creates a new empty JavaScript object, sets the context of ‘this’ to that new object and then calls the function. So if we do not use ‘new’ keyword it will be undefined, because that function does not return anything. Object literal and object constructor are syntactic sugar for object.create() function.

- Even if the property is marked for the writable as false, we can change the value of a property of the object that name property was pointing to. But we cannot change the value if it is not pointing to an object. We can prevent the object from being changed by using object.freeze() method

- The for-in loop can be used to loop through the property on an object. If we set enumerable false we cannot loop through that property. Also that property will not be JSON serialized.

- If we set the configurable as false then we cannot change the attribute of that object except the writable attribute, also we cannot delete the property.

- The alternate name for `__proto__` is dunder proto. It is a getter function, which is actually resides only at main object prototype object. This getter function returns the internal prototype linkage. IE11 above supports it, we can use Object.getPrototypeOf() function in IE9.

- Prototype linkages – it will go one level up to the prototype if that property / function doesn’t get found on the current instance. If we have same property on the object same as prototype then object property will over shadow the prototype ones. Need to use foo.prototype.identify.

- A prototype is an object that exists on every function in JavaScript. Initially it is just empty object for new created function. New object do not have prototype property but `__proto__`. If current object do not have required asked property then JavaScript will search in its prototype. Functions also behave in the same way because functions are also a property in JavaScript. Object prototype is null.

- The jQuery is the best example of Facade pattern on over complicated object interface like DOM. It provides common vocabulary while discussing the problem.

- Types of patterns

  - Creational – deals with creation of new objects. Example – constructor, module, factory, singleton
  - Structural – making up the actual objects themselves. Example - decorator, facade, flyweight
  - Behavioral – how objects are relates to each other and operates. Example – command, mediator and observer.

- Facade pattern – it is used to provide a simplified interface to a complicated system. It is like seeing a building from outside, which looks very clean but inside there might be chaos. So, it hides the chaos form us. It is different from decorator, as we are not adding any functionality to it.

- Observer Pattern – it allows a collection of objects to watch an object and be notified of changes. It allows for loosely coupled system. One object is the focal point and group of objects watch for changes. There are three vocabulary subject, notification and observers. Subject has ObserverList {} and Notify () function.

- Flyweight pattern – conserves memory by sharing portions of an object between objects. Like I have created 5000 tasks and for the name property the data will be the same and repeated. Flyweight shares data across objects. So, my name string will be shared among other object data. It is like creating prototype instead of creating function on an object for reuse. It is only useful if it has large numbers of objects.

- Mediator pattern – it controls communication between objects so neither object has been to be coupled to the others. It allows loosely couple system. One object manages all communication. It allows many too many relationships.

- Command pattern – encapsulates the calling of a method as an object as it is own individual thing. By this it allows fully decouples the execution from the implementation. Allows for less fragile implementations. It also allows undo operations. Supports audition and logging of operations. It is like USB which provides a generic interface for implementation.

- The apply() let us use a parameter name args which has all the arguments, unlike call() method in which we need to specify the each parameter separately.

- The smallest timeout delay period will be 4 milliseconds, even 0 will be bumped to 4 milliseconds. Timers will not start until the outer most function is finished.

- Browsers are typically single threaded, either do update UI or executing JavaScript a piece of time. Unless we use web workers concept to avoid this. Long running process make UI unresponsive. To avoid this use timeout for realize the thread to go back to the UI process quickly to avoid this unresponsiveness.

- Promises are like pub/sub but more designed for asynchronous operations.

- Ways in which we can define JavaScript function, last one is preferred and myObject name should be like a namespace name for your application. Function 2 and function 5 will be available on the global scope.

![typescript-function-defining-ways](./src/assets/images/typescript-function-defining-ways.png)

- Event handlers are not supposed to return any value at all. But if we return false it will tell browser to stop any subsequent processing associated with that event. But we should use a JavaScript function by name preventDefault() to cancel and event because all browser do not support to cancel the event if we return as false. Example scenario if we apply double click event on div which contains text then it will by default also select the text.

- jQuery has two methods for this stopPropagation() and stopImmediatePropagation(). And also preventDefault().

- URI stands for Uniform Resource Identifier, this is used to reference web pages, images, videos, files and pretty much any resource available to a computer, tablet, or smart phone, the browser processes in terms of URI. jQuery use term of URL for web pages.

- The promise returns just a subset of the deferred that let us attach handlers like we have been doing, but doesn’t allow the state of the deferred to be changed by us.

- Asynquence – promise are very low level implementation, in future we use a abstraction on it, to have more complex flow control. Asynquence and queue are some of the third party abstraction library. It creates automatically chain promise for us.

- A deferred object is really just a wrapper that can be placed around asynchronous processing. Instead of trying to manage multiple success and failure callbacks for a series of async calls, the deferred object can wrap them all together in to a single process that will work regardless of the sequence. Once a deferred is rejected or resolved, it cannot change state again. The jQuery deferred object can only have one failure as soon as that happened, all subsequent failures were ignored.

- Hoisting is JavaScript’s default behavior of moving all declarations to the top of the current scope.

- Hoisting – there is no such thing hoisting in JavaScript specification. It is a mental construct that we have invented to explain the behaviors of JavaScript. The variable declaration will moved top of the code. Functions will also work in same way, function declaration will get hoisted, but function declaration will not get hoisted.

- Function has a ‘function’ type in JavaScript. In JavaScript functions are first class object we can assign them to a variable.

- Avoid call-back hell or Christmas tree code in your program by using named function. Do not use anonymous functions. In our final callback call we should return it by ‘return’ keyword to specify that everything is done.

- Using callbacks – we can take something that is fundamentally asynchronous like a timer, and express it in such a fashion that we can reason about that asynchronously code in a synchronous fashion.

- Callback hell: it is not about the indentation, there is a trust issue with callbacks, in this we can giving our piece of code to many some 3rd party library to execute, which call it many times like in a credit card transaction scenario. So we are giving the control of this program code to untrusted library, which is also called inversion of control. Callback hell is giving over control of your program.

- Arrow functions are used to make ‘this’ easier to understand. Below code will return the window object, not the document object which would be the case if we do not use arrow function. So, we are no more limited to have access only object which called the function means context of the function:

![typescript-arrow-function-issue](./src/assets/images/typescript-arrow-function-issue.png)

- Below code as well will return the window object not the invoice object:

![typescript-arrow-function-issue2](./src/assets/images/typescript-arrow-function-issue2.png)

- Symbols is a concept in ES6 to provide some unique string. It is a unique and immutable data type and may be used as an identifier for object properties. There is no way to access its unique ID value. Well-known symbols used in meta programming, meta programming involves looking more deeply in objects or functions even how JavaScript operates.

- Iterator is an object that let us iterate through an array, an object, a string, or even our custom objects.

- Generators is a special kind of function that function can yield right in the middle of execution and return to the calling function example if we want to create a function that will return a dataset row by row we can create generator for that.

- Map and Weak Map – ES5 to create map like functionality we use object with key and value pair. But we cannot make key as an object, that’s why map is created in ES6. And weak map let that object to be garbage collected it is no longer referenced.

- Set and Weak set – they are similar to map but deals with single value or single object. There is no mapping from key to value as in map. The purpose of set is to guarantee of uniqueness of its item. It will simply ignore the duplicate object.

- JavaScript is also a complied language, not interpreter. Because in interpreter while executing line 3 it has no idea what it is on line 4. In JIT just in time compilation, it won’t compile the function at instance, but when it was force to, means when we will call that function.

- Undefined means the variable was declared, but it has a special empty value that we mistakenly called undefined. It is uninitialized. It doesn’t mean undeclared, it is like vacuum. Undefined is a proper value.

- Lexical scope and dynamic scope: Perl and bash languages only have dynamic scope. Lexical scope means compile time scope, when it is parsing our code. Lexical scope is like building going from first floor to top floor to find, or nested scope bubbles.

- Let keyword will implicitly hijack the scope of whichever block we happened to be in, and will add that variable to that block, rather than attaching it to that function. So, like in below it will attach the baz variable to “if” statement block, not with the function level scope, i.e. with the two pairs of curly braces. This also has performance benefits as value of variable will be garbage collected earlier. Let keyword doesn’t get hoist.

- Dynamic scope – The decision of how scoping works in dynamic scoping, is a runtime decision as opposed to, in lexical scoping it is an author time decision. In dynamic scope inside the function of foo, when we reference a variable bar, it will not look where the code was written but it instead would look at the call stack.it will look for the code which called this foo function, so it will go one level up to the call stack.

- Mutual recursion refers to two or more functions calling each other until a some terminating condition. To support mutual recursion hoisting feature is required, as one of the function will be declared too late. Interpreted language couldn’t handle this mutual recursion. It is like manually hoisting the head files in C language.

- Temporal dead zone: if we try to reference the variable before it has been declared with a let, it is a reference error.

- Call site of “this” keyword – four rules – default binding rule , this rules says that if we are in strict mode, default ‘this’ keyword to the undefined value, if we are not strict mode, then default the ‘this’ keyword to global value. Example for this rule is foo(); call. Third rule is implicit binding rule, the call site binding object will become the “this” keyword value. Example is o2.foo().

- Explicit binding – if we use .call() or .apply() at the call site, both of those utilities take as their first parameter a “this” binding.

- Closure – function is called in the scope in which it was declared, not in the scope in which it is invoked. The way closure works is that a function is going to scope its variable at the time it is declared, not at the time it is run.

- Closure is a mathematical concepts, it comes from lambda calculus, it is when a function ‘remembers’ its lexical scope even when the function is executed outside that lexical scope. That lexical scope stayed attached to that function, no matter where he got transported.

- Closure is a necessary mechanism for a language with first-class function as values to be useful. If functions could be passed around with their values, but they couldn’t remember anything about their lexical scope then nobody would pass functions around. Closure gets created when inner function is transported outside of the outer function.

- In JavaScript if we keep a reference to an object around, that object doesn’t get garbage collected until it is not referenced any variable. Same behavior works with closure, when we execute a function, it creates a scope object. If there is anybody that gets a reference to that scope object via closure, that scope doesn’t get garbage collected when the function ends.

- Module pattern – this is useful ness of closure mechanism. Classic module pattern has two characteristics, first there must be wrapping function that’s gets executed, secondly there must be one or more functions that get returned from that function call, so one or more inner function that have colure over the inner private scope. So by this it can access the internal state that makes it a module. It implements encapsulation and principle of least exposure. It is like a module factory.

- Prototype – every single “object” is built by a constructor function. Each time a constructor is called, a new object is created. A constructor makes an object linked to its own prototype. [[prototype]] are called internal linkage with its constructor call function’s prototype.

- JavaScript and Lua are only two languages which are object oriented; others like C# are just class oriented languages. Only in these languages we can create object without a class.

- Using same method name at multiple levels in an object is called shadowing.

- The [[prototype]] points to the prototype of the constructor used to create the object. It is a linkage from one object to another object. By this we can call a property or a method on an object reference , and it can’t handle that object or property, if it can’t handle that, it delegates up to prototype chain to a different object. We can find out where an object’s [[protogype]] points to using dunder proto, Object.getPrototypeOf, and “.constructor.prototype“.

- Inheritance vs. prototypical inheritance – they are opposite to each other, one of them is copy down, one of them is a delegation up the chain. We should say JavaScript has behavior delegation not inheritance.

- Arrow Func – it is used to deal with the issue with scope in callback function in which anonymous function passed as callback to other function create their own scope. Arrow function bind the scope of where they are defined, not where they are used which is also known is lexical binding. We get rid off the function name and use arrow for it.

- We should use map if keys are unknown until runtime, if keys are predefined then we can use normal javascript object as a map
- Typo squatting – it is like uploading vulnerable package by changing some characters in spelling to make them look like some famous package and people might download it after getting confuse.

- Braces are used to create blocks in JavaScript.

- Nested functions are in scope of outer function, braces do not create scope. Variables declared inside a function would not be accessible outside of that function.

- Recursion – it means a function that we define, it is going to perform some action and we want for that function to stop calling itself, it is going to call itself as a part of solution, but we want for it to stop calling itself when it reaches what we call it as a base case. Mutual recursion is two or more functions calling each other until they reach a base case. But recursion is not good for memory, when one function calls another function, even if that function is itself, the first function call allocates in memory what we call a stack frame. Stack frame is a place in memory where all the variables and state are held, and program counter as its walking through. When it finishes with that stack frame, it throws stack frame away means on finishing of that function, it throws away that memory and reclaims it and reuses it. In earlier IE the limitation of call stack was 13 deep only, but for now for modern browser it is more than 10K. It is worst for memory if device ran out of memory it will restart the device i.e. worst UX. In new browser engine there is new thing TCO (tail calls optimization), and if we done the recursion with proper tail calls, then we can do arbitrary deep recursion with O (1) memory (constant memory) usage. Virtually all recursion can be rewritten to use proper tail calls, but that technique is difficult.

- In ES6 there is proper tail calls, so the compiler will turn that into a jump instead of a call return. It will go a little faster, take less memory in getting there. It enables continuation passing style, by this JS become finally become the real functional programming language.

- Retursion - it is when we have a function that returns itself. In recursion a function calls itself.

- Recursion example of conversion of normal function into recursion, anything we can write recursively, we can also write iteratively. The recursive version is smaller, more elegant but one danger is that they are building up one after another on the stack, we can run out of memory if we put a very large number, but with modern computers, that is not much a problem.

- As a developer we don’t assign undefined to variables, we let the JavaScript to do that, we should use null assignment in that case. The null is an object type and type of undefined is undefined itself.

- We can use IFFE, revealing module pattern to create encapsulation for module and to avoid global scope pollution. IFFE gets invoked when declared, it won’t be callable from another code, but they are not for dependency management.

- Module formats are just a syntax which is used to define a module, module loaders are generally JS library which we can include in our project that understand the module format we have decided to use and how to load and execute the modules we define in that format. This relationship is similar to JS and browser and itself.

![typescript-module-type-format](./src/assets/images/typescript-module-type-format.png)

- Common JS format is used mostly with server side, Universal module definition (UMD) is a single format that attempts to be compatible with both the AMD and Common JS formats. We might consider using this format if we need to same module on the server in a node application and as part of a browser application. It would be supported by the CommonJS module loader in Node, as well as an AMD loader in the browser like RequireJS.

- Module formats – non-native – AMD, common js, UMD, system.register. Native format – ES2015.

- Module loaders – for different types of module formats we need different module loaders. AMD for require JS, for AMD, common JS, UMD and system.register we need SystemJS.

- The AMD format gives us all of the encapsulation benefits with private members and a clean public API we got with the revealing module pattern but it doesn’t add new objects to the global scope and it does support dependency management between modules.

- Using the AMD format with RequireJS – we just need to give the main file and it will load the dependency accordingly.

- It is better to have only one function defined globally than perhaps dozens of modules, so in below unlike revealing module pattern, every module will be inside require function. The AMD module format is great option for building browser based JavaScript applications.

- Common JS format – like the require function, the exports object is a special object that a common js module loader will use when creating the structure of the module and the API it will expose to other modules in the application.

- AMD modules are the first choice for doing client-side development, because they are optimized to load modules asynchronously in a browser, common JS format is most often used in server-side code. Node js code natively uses the common js format, which makes it the perfect format to use in that environment.

- These are native modules and built-in into the language. We don’t need any helper libraries or packages in order to write them, but we need to transpile them to earlier version of JS to use them in a browser as browser still don’t support them largely.

- Babel – it is a transpiler, it is tool which helps bridge the gap between what is possible in the latest versions of JS and code that can actually be executed in modern browsers. Because browsers takes years to implement new features. Babel converts all of the newer ES2015 features into equivalent code in an earlier version of JavaScript.

- They can replace module loaders in a browser, as they can be used in build steps rather than run time. A bundler follows the chain of module dependencies in an application, just like a loader, but instead of downloading a dependency when it’s needed, it just adds it to the bundle in the proper order. The result of the bundling process is that we are left with far fewer files that the browser has to download. Browserify and webpack are famous bundlers.

- Webpack support many module formats, code splitting, it can bundles more than just JS modules, also use loaders feature for transformation before bundling.

- We can use function for creating encapsulation, functions are objects that does something. We can have higher order function which we can pass around within other function as a parameter. Functions have scope.

- Arguments is a special keyword that lives inside a function and it gets a value of the arguments that we pass in the form of an array-like object. It is an array like object as it won’t have many array methods like slice on it.

- Scope is created dynamically whenever we call a function. Whenever we call a function we create a new scope, using the same function we can have different values based on the parameters.

- Higher order function either takes a function as an argument or it returns a function as an output.

- Underscore library - Difference between map and each function – from each we cannot return anything, use map if we want to return something like array. For returning an object then wrap each into map. We need to use return in map otherwise we will get an array of undefined.

- Function expression also called functions on the fly, also it gets builds only when we call that function. A variable that holds a function can be passed into other functions. Function expression can give flexibility in choosing which functionality to build. Function expression are never hoisted, they are treated as assignments.

- Using inheritance, we can create new objects with our existing objects as prototypes

- hasOwnProperty() methods helps identify property location, searching prototype chains for potential overridden properties becomes easy with this function, it helps us in finding the owner of a particular property. Use `__proto__` to move up the prototype chain to find that property.

- Pure Functions - List transformation (map), list exclusion (filter), list composition (reduce), list iteration (forEach).

- An impure function is a function that produces side-effects, it changes the state of the programs by indirect means. The console.log() is also side-effect, or a function is returning value on each time. Below is the example of impure function. We should not leave something impure publicly exposed. To make a impure function pure, we should wrap a another function on it to contain all of those side effects within that function and from outside world that function itself the outer function becomes pure, it has be pure on highest most level not all the deep nested level. Impure functions make the code harder to reason about

- A pure function is a function that has no side-effects, it operates entirely on its own variables, its own state or any of the things that are passed into it like arguments. It can access the outside variables but don’t change them.

- Composition is about taking the output of one function and putting it directly in as the input to another function. So, instead of calling the once function and then calling another function, we are going to call one function, and its output is going to become at least part of the input for another function and then the output of that could become part of the input for another function.

- Object.freeze utility, it reaches into an object and at a shallow level i.e. is the top level of all of its properties, it makes all of those read-only. So, it will only do shallow immutability. Changing of binding is not that much of problem, but changing the values underneath us. Because bindings are always localized, they are always within the program that we can see immediately in front of us. But values are portable and can be shipped elsewhere, and over there somebody can change that value, this is much bigger problem. It helps in a situation where you give someone an object in function parameter and they modified it and misunderstood as they are using a local copy of it. Arrays are also passed by reference. Browser consoles don’t work like real JavaScript environments.

- Closure is when a function “remembers” the variables around it even when that function is executed elsewhere.

- The number type in JS is IEEE-754 format, this format is prone to rounding errors, but by this we can represent integers and floating point numbers.

- Crude computation bug – below will make the infinite loop. JavaScript only has 1 number type and it is IEEE 754 double-precision floating point, by this we can represent wide range of values but downside is that some of the precession can be lost in the process.

![typescript-number-type](./src/assets/images/typescript-number-type.png)

![javascript-number-type-2](./src/assets/images/typescript-number-type-2.png)

- To make overloading work in javascript, instead of creating different methods, we should handle it manually in same method by taking consideration of arguments length or types

- The call() and apply() methods allows us to call a function and change the ‘this’ value, but sometimes we need to make a copy of the function and also change the this value, we can do this by ‘bind()’ method.

- Value of ‘this’ in function for different cases invocation. We need to use call, bind or prototype to control this context –

![typescript-value-of-this-based-on-context](./src/assets/images/typescript-value-of-this-based-on-context.png)

![typescript-value-of-this-based-on-context2](./src/assets/images/typescript-value-of-this-based-on-context2.png)

- We cannot compare NaN with NaN, it will give false. So we need to call isNaN(NaN) function instead

- Pregnable property bug – for-in works with arrays and other types, however, it is most valuable when iterating over an object, but it will also iterate the prototype properties as-well, to avoid this use hasOwnProperty() method

- JSON is a subset of the object literal notation of JavaScript – JSON keys need to be double quotes and JSON strings are also need to be double quoted. But object literals are much more flexible, they can have single quote or double quoted, or keys can have without quote. There is no such thing as JSON object, JSON is a string, it is not an object but it is serialized data which comes from server which gets formed with some kind of special library.

- The for-of loop iterates over property values, and it is a better way to loop over arrays and other iterable objects.

- The for-of statement cannot be used to iterate over properties in plan JS object out of the box. In order to work with for-of, objects need a special function assigned to the Symbol.Iterator property. The presence of this property allows us to know whether an object is iterable

- Issues with using Objects as Maps – when using objects as maps, its key are always converted to strings. We should stop using the object, but use Map objects which is a simple key/value data structure. Any value may be used as either a key or a value, and the objects are not converted to strings. Also, we can use maps when keys are unknown until runtime, use objects if keys are predefined. We should also use maps when keys are of same type and all values are of same type. Maps are iterable, so they can be used in a for-of loop. Each run of the loops returns a [key, value] pair for an entry in the Map.

![typescript-using-maps-instead-of-objects](./src/assets/images/typescript-using-maps-instead-of-objects.png)

- The WeakMap is a type of Map where only objects can be passed as keys, primitive data types such as strings, numbers, Booleans, etc. are not allowed. WeekMaps are not iterable, so they can’t be used with for-of loop. Weakmaps are better with memory, they can be garbage collected. Individual entries in a weakmap can be garbage collected, while the weakmap itself still exists.

- Limitations with arrays, they don’t enforce uniqueness of items, duplicate entries are allowed. But the set object stores unique values of any type, whether primitive values or object references, it will ignore the duplicate entries. Sets objects are iterable so we can use them for-of and destructuring.

- Weaksets is a type of set where only objects are allowed to be stored. But we cannot use for-of loop with them. Good use case of weaksets, we want to add a different background color to posts that have not yet been read. One way to ‘tag’ unread posts is to change a property on each post objects once they are read, but we can use weaksets to create special groups from existing objects without mutating them. Favouring immutable objects allows for much simpler code with no unexpected side effects.

- A common approach to encapsulation in JS is using a constructor function. But adding functions to prototype required quite a bit coding and some repetition. Using class we can write it into much simpler way. The class syntax is not introducing a new object model to javascript. It is just syntactical sugar over the existing prototype-based inheritance.

- ES2017 is unofficially called ES8. JS was created by Brendan Eich, he was told to create java like language for Netscape browser. ES is a standard that guides the path of JS.

- The exponentiation operator can be use by `**`, earlier we used to use Math.pow() method.

- A web-worker is another option to run tasks in parallel in JS. They are designed for browsers. They are started by main thread and every worker gets his own isolated global environment, nothing is shared between main thread and worker thread. SharedArrayBuffer supports a scenario where many worker thread need to share same data. Normal arrays are not optimized for this kind of work, due to which ArrayBuffer and TypedArrays have been introduced, they reduces memory footprint and optimize data transfer.

- By using Object.values we can get the values of all keys, it is the same way in which we get all the keys from Object.keys method. By using Object.entries we can get both the keys and values in one go, it produces array of arrays.

- JS is interpreted, in C# compilation includes verification of syntactically correctness of code and creating intermediate language (IL) code packages. But in JS we can use JSLint to check for correctness and minification for packaging.

- Functional programming has main terms like pure functions, higher order functions, immutability, and side effects.

- Pure functions – similar to math functions, they don’t depend on data other than what is passed in, and don’t alter data other than what they returned, but math.random() is not a pure function.

- Module Pattern - This is the pattern Douglas Crockford came up initially. The main pros is that it expose only public members which hiding private members. So, unlike prototype pattern we can define variables or functions as public or private. Main con is that function will get duplicated because we are not using prototype, also it is very hard to extend, so we want to create a library that can be extend by consumer then this is not a good pattern, we should choose prototype pattern in this case.

- Revealing Prototype Pattern - It combines prototype and revealing module pattern to get the best from both of them. Functions loaded into memory once, also it is extensible.

- Webpack process –

![typescript-webpack-process](./src/assets/images/typescript-webpack-process.png)

- In JS constructor functions are used to create new objects. When we use the new keyword the function gets a branch new empty context, here we store the properties and functions for this object on ‘this’. By using prototype property we can create a function directly on function without having duplicate copies on every object. Prototype also helps us to extend an objects to add new functionalities to the instance of that object. Polyfills also uses prototypes for their working.

- BOM refers to the browser object model and that lets us access functionality in the browser. We can change the URL we are pointing at, get information on the URL. DOM is document object model we use this to change the actual web page.

- Window is a global object in JS, we can access it from anywhere. Important key things are below –

![typescript-important-document-api](./src/assets/images/typescript-important-document-api.png)

- By using eval() keyword, it will open our application for injection attacks. Like the string is coming from database or web api which might be compromised, then eval will execute then string as a javascript script.

- We can use webpack web server for local development environment, it serves the bundle file in-memory which makes our debugging and application fast on localhost. It will keep all JS files into one bundle file

- But when our application is complete we need to build it for a production environment, so we need a package file that we can send off to store on the server, we need to minimize the code for production. For production, webpack will create a dist folder and files like below, it will also have a map file, this file is useful in some tools for getting the exact line numbers, it maps the minimize code to the original code. Webpack do all of these for us. Three main files one is html, another is JS file and finally one is a map file

- Single threaded means a bank with one teller or a bar with only one bathroom. This behaviour is unlike with multithreaded environment more than one piece of code can execute at the same time.

- The event queue – if at a time only person can go to the teller, then there has to be a queue to hold the other people, this queue is a part of event loop in JS. This is where work is stored until the current operation or task is done executing.

![typescript-event-queue](./src/assets/images/typescript-event-queue.png)

- The javascript engine will only execute one piece of JS code at a time, behind the scenes there are a pool of threads that are used for things like making web requests. This pool of threads can have multiple connections open to multiple different servers to request data for multiple different requests at the same time. This is all hidden behind the scenes, this is how we can still achieve parallelism within JS. We still have behind the scenes the ability for multithreading, it is not just applied to our JS code itself.

- So, JS supports concurrency by not blocking for I/O, the non-blocking nature of code in JS allows us to still have performant programs because we don’t have to wait for results of long running operations to complete like a web requests or opening a file. It is like a person forget the ID or paperwork, then the teller can serve the next person in queue, and once that person come back then the teller can pick up where they left off.

- Run to completion – for a blocking operation it will run for completion, until that code runs completely like a ‘for’ loop, then only next code will rung. It is like satisfy customer before next by a teller. If we need to avoid this then we need to use web workers, it would be lot like opening up another line at the bank if somebody is taking a long time. This run to completion approach in JS is in stark contrast to multithreaded language where it is possible that a chunk of code could be pre-emptied, means essentially interrupting our code wherever it is executing, to give the thread to somebody else. It is like if a person is taking more time, then moving him back at the bottom of line and serving next customer.

- Cooperative concurrency – the person servicing the queue usually has control over the queue like the teller can eject someone from the queue, but in JavaScript that is not the case, in JS it is much more like bar/bathroom situation. The person who is using the bar has control over the rest of the line means he use read newspaper while others are waiting outside. Cooperative concurrency means customers play nice to each other. As long as our program doesn’t abuse and hold up the rest of the queue, our programs will appear to have the ability to execute multiple things at the same time. So, each program should execute itself in smaller pieces of chunks.

- The JS engine and the browser tab that we are working has a separate event loop dedicated just to our application, this event loop contains a queue, inside of this queue work can be placed that will be eventually executed when whatever is running is complete. In addition to this queue, there is a call stack it contains whatever is executing at this current time, a call stack is like a todo list while performing a task. Work will be pushed on call stack and then once it is done it will vanish. A todo item can also have sub-task like to create a hamburger we might need to find many items to look for same with the work, it will be further pushed to the stack only, as usual after completion of that subtask, it will be removed from the stack and controls get back to the earlier item on the stack.

![typescript-event-loop2](./src/assets/images/typescript-event-loop2.png)

- The black box items will be handle by browser behind the scenes for us, and a mechanism in browser will also listen for the their responses as-well, after getting the response it will push those response inside the queue. Behind the scene the browser is handling these requests not the JS engine, so that multiple threads handling multiple request at the same time. So it is possible while our single-
  threaded JS engine is doing work that behind the scenes other things can be happening, we just don’t have those things happening inside of our JS engine –

![typescript-event-loop3](./src/assets/images/typescript-event-loop3.png)

- In setTimeout() function there is not guarantee that our function will be called at exactly at the mentioned time, at that time elapse the function will be pushed in the queue, but it will called once all other prior work in the queue gets completed. Also when we say 0 milliseconds the browser is putting in as 4.

- In the browser the call stack pane is real life stack of JS event queue.

- Nodejs nextTick and setImmediate – these are like timers. In Nodejs 0 milliseconds will be default to 1 milliseconds.

- The process.nextTick take precedence over setTimeout. In nextTick() all the callbacks that we register will be run at the end of the current event loop turn. Means whatever is running right now once it is done, the registered nextTick() will be called. nextTick() is like a bouncer that lets people cut in line, lets the VIP people get in ahead of everybody else.

- Event listeners are synchronous like below – it is because to avoid race condition which happens with the order of operations in the queue with async requests. Then if the data coming from events are not in sync order then it could jumble up the form or operation, and the order of the events won’t be persevered. But there would be asynchronicity between an event and another event of the same type being raised.

- Key terms of functional programming – pure functions, composition, higher order functions, currying, immutable data, closure. We can use libraries like – immutable.js, ramda, folktale, skit, sanctuary, monet.

- The console.log() is not pure function as it change the state of console. We should never return null or undefined from a pure function.

- Higher order functions – a function which takes a function as a parameter or return a function as a value.

- Currying function – the process of taking a function with multiple arguments and turning into multiple arguments and turning into multiple functions that take a single argument is called currying. It is named after Haskell Curry who is a mathematician. By normalizing all functions to take only one argument, it made a lot of operations easier to think about.

- Currying is the act of taking a function which accepts 1 to n parameters, and producing a collection of 1 to n function, which each take 1 parameter.

- Immutability helps in performance, if we have an object that needs to be change the value stored in one of its properties, it may take a long time for JS to recognize that that properties has been changed, basically every property on that object has to be checked to see if its changed in order to determine that our data has changed. By enforcing immutability all JS has to do is check the object reference to see if that’s changed. If it has changed then that some property value is changed, checking for object reference changes in very fast. So in this case immutability is performance enhancer. It is mainly for objects/arrays other data types are already immutable.

- Human head has two systems – head and gut. Head is the higher level one, its analytic, its algorithm, it is where we do mathematics and reasoning and logic, it requires tremendous amount of effort and a bit slow, most of the time we need to turn it off, due to its slowness only we needed to invent computer. Another part is gut, it is intuitive, heuristic, associative and very, very fast, requires no effort and we cannot turn it off, it is on all the time. Head gets its assumptions from gut and it is not aware of that connection, its think it is getting results from vault of deep truth, but as it is getting from gut, sometimes head can get wrong input.

- The computer programs are most complicated things that people make, there is nothing else in human experience which is composed of as many tiny little pieces which all have to go together perfectly that have to work in real time with changing states and changing inputs in a dynamic situation.

- Initially the goal of the AI originally was to figure out a way to have the computer write their own programs because it was just too hard to have humans writing them.

- There is no test for the perfection of a program, we have tests for imperfection. None of our programs are perfect.

- Programming uses head and gut both. But we don’t understand how we write program, we just write instruction to create a program and hand it over to someone else those instructions, we cannot tell someone else how to do it and that’s why we can’t tell the machines how to do it. We look at a problem and we will look at top-down and bottom-up and take a macro view and a micro view, we keep constantly shifting our point of view until eventually a program emerges and we don’t know how we do that.

- JSLint defines a professional subset of JS, it will hurt our feelings as we get really emotional about how we write our programs.

- JS was designed as a language for beginners, that was the original goal.

- Switch statement is having fall-through hazards, so we should use ‘break’ keywords.

- A good style can help produce better programs, it should not be about personal preference and self-expression but to reduce the error rates.

- In English language itself lowercase, word breaks, and punctuation into their manuscripts to helped reduce their error rates and easier to read, earlier it was all caps letter with no space.

- Unfortunately, in the browser the use of global variables is required because there is no kind of linkage mechanism that allows one compilation unit to find another. They just share a common global scope. So, in browser use very minimum global variables and named the as UPPER_CASE.

- The ‘++’ operator was used to do pointer arithmetic, now it is used to add 1 to variable, we should not use this operator. Instead of this use compound operators like ‘+=’.

- History of JS – at the national centre for super computing applications at the university of Illinois, there were couple of kids who were developing a client program for internet for number of protocols like WAIS, Archie, Gopher, FTB, Finger and WWW, they called this program MOSAIC. Finally, out of these protocols the WWW won, this format can also display image tag. A bunch of the people from that project were lured to California where they become part of a company called Netscape. Netscape made the first commercial web browser called Netscape navigator and it was a huge hit. For the new release of this navigator they also wanted to make it easy for end-user programming, they remembered something that had been on Macintosh called HyperCard, that was a simple application program based on a simple metaphor of stacks of cards and it was an event driven script thing and remarkably easy to use and they wanted something like that in the web browser. So, they gave this job to Brendan Eich, his idea was he would write a scheme interpreter to do this like he was told to do in a language like java or visual basic which people like and popular at that time, this if for the kids. He was given 10 days to create a prototype of this new interactive browser and in those 10 days he designed and implemented a new programming language which is an amazing achievement. So, from java he took syntax another language was scheme which is a dialect of LISP, scheme has lambdas i.e. functions, there is a dialect of small talk called Self it was having better performance and expressive, from Self he didn’t took the feature of classes, by removing classes they could make it much faster and much better to program. Netscape called this initial language as LiveScript. While this is going on another language that was being developed by a guy at Sun named Jim Gosling, they wrote a web browser in this language the browser called hot java, the language name was Java and become wildly successful. These both companies were working against Microsoft, so they form an alliance the first thing they agreed upon that Netscape adds java to the web browser in-exchange for that Sun will drop their hot java browser. Another thing is that they have to kill LiveScript as they were saying to the world that Java is the last programming language world ever need, but Netscape denied that because Java was not for beginners and they also wanted to launch the new browser right away and so the way they put Java in was they had Java talk to LiveScript through an interface called Live Connect. So, LiveScript could talk to the browser and java could talk to LiveScript through Live Connect. And if they took LiveScript out, Java wouldn’t work, so to save the alliance they change the name of language from LiveScript to javascript, and to showcase not a new language but as a subset to javas, interpreted java and they lied about the relationships of these two languages.

- Meanwhile after seeing this Microsoft had completely missed the web and the internet, they thought the future of telecommunications was going to be fax and cable TV. So they bought out a browser company, it was another spinoff out of Illinois called spyglass, took their thing and relabelled it as IE and decided that they also need one more thing related to JS. So, they reverse engineering the first JS engine. MS also noticed all the blunders, bugs, errors, design defects, MS carefully documents all of them and replicates them, they called it JScript. Then Netscape went to w3c to make the standard of their language, but w3c denied then they went to ISO, and then European computer manufactures association (ECMA), MS also joined this committee and dominates the committee. Also, MS told that all the bugs will remain in the standard, those standards where published by name ECMAScript.

- Other OO programming language has inheritance is classical where objects are instance of classes and classes inherit from other classes, but in JS it is based on prototypes where objects inherit from objects and that’s it. There are no classes, this idea it got from Self language.

- Javascript provides concept of delegations i.e. differential inheritance, where an object can only do what it can do and if its asked to do something that it can’t do, it will designate another object to do that work on its behalf.

- By using Object.create(null) we can create an object that inherits nothing, not even from object.prototype. It will act much more like hash table.

- Everything in JS are objects like from number, Boolean, string, array, date, regexp, function, etc. In JS there is only one number type, no integer types, it is based on 64-bit binary floating point which is also call double based on IEEE-754. But binary floating point and a binary floating point cannot accurately represent most of the decimal fractions. It can only approximate them, but it approximates them with infinite repeating bit patterns

- We also get NaN as a confusing thing from IEEE format; it is the result of confusing or erroneous operations.

- Array is a contiguous series or span of memory divided into equal size slots where each slot is indexed by a number; very fast, very efficient. One advantage is that we don’t need to provide length or type when creating an array. We don’t have to worry about out of bound array, as it is not an actual array but an hash table, so every value is in bounds, in first version of javascript they forget to add the concept of array.

- The Date function is based on Java’s Date class and due to this it was no Y2K ready.

- RegExp are not readable and understandable easily if they are long, there is tool regulex (<http://jex.im/regulex/>) which we can use to see it in a diagrammatic form to understand it better.

- In JS all values are objects, except null and undefined, they are bottom values in JS. So, we should only choose one bottom values that is undefined.

- Closure are good parts of JS. Closure – the context of an inner function includes the scope of the outer function. An inner function enjoys that context even after the parent functions have returned. Function scope works like a block scope. To the value of a retain while executing the inner function for this the solution was don’t allocate the activation records on the stack, allocate them on the heap, get a good garbage collection. JS was the first language to bring this concept then python, ruby, C#, C++, then java followed it

- In a function object there is basically an object with two extra pointers in it, one for the pointer to the code and one for the pointer to the activation of the creating function. There will also be a link to the prototype object which is a waste because we are not going to use it. So, no much memory in these things, not a lot of work to initialize them, so it is very light weight.

- The Metamorphosis of AJAX - The web comes from word processing and word processing historically comes in two very distinct schools – binary proprietary and textual open. For this the first program was runoff then GML (general mark-up language then html comes from GML). The angular brackets for tabs from Brian Reid’s scribe to distinguish between format and content.

- Initially HTML was intended for simple document viewers, it wasn’t intended to be an application platform. The DOM is the API that the browser presents to JS and it is one of the worst APIs ever invented. The inventory tried to implement the HyperCard like system as DOM.

- When those kids then move to Netscape, their goal was to kill Mosaic, they wanted to create a monster that kills Mosaic so they make a Mozilla. In this instead of waiting for the images to get downloaded they put a placeholder at that point and continue resume parsing, it improved the user experience.

- W3C was not happy about JS surviving in the web after they rejected it. There was a lot more sympathy for Java at W3C then JS, so over these years they have been trying to replace the API with something that would be more friendly for Java than for JS, even though the Java has never lived in browsers in this way. So, they added methods like getAttribute() and setAttribute().

- CSS and DOM were both designed about the same time and each project was aware of the other. The guy who designed CSS was aware that someday programming language were going to manipulate style sheets, he thought that was a certainty, and yet he choose to use the minus sign as a hyphen, knowing that most of our programming languages want to do subtraction with it and this creates syntactic difficulty for all of us.

- The W3C standard doesn’t provide access to the HTML parser, all browsers implement MS innerHTML property but it is a security hazard.

- Browsers are really good at is parsing HTML and they can do that really quickly and they can get the whole thing done in one transaction whereas messing with the DOM, every time we touch the DOM we are going to pay a big time penalty.

- Netscape 2 version introduced the Events, the browser has an even-driven, single threaded programming model. Events are targeted to particular nodes; events cause the invocation of event handler functions. The target is the topmost (z-index) node containing the cursor.

- Trickling and Bubbling – MS choose the bubbling approach which was correct way to do it.

- The reason that JSON requires quotes around its names was because of this deign problem in ES3 which got fixed in ES5 in which we can use the reserved word on property names

- The Object.create() is a primitive which makes a new object that inherits from another object. It gives us a direct way of doing prototypal inheritance.

- Meta object API – a property is a named collection of attributes, earlier this api wasn’t exposed for outside world.

![typescript-meta-object-api](./src/assets/images/typescript-meta-object-api.png)

- We can stop object extensibility by using preventExtensions() method, the object won’t accept new property assignment. The freeze() stop its extension and also make all property as read-only and immutable. By this we can pass this object to third party and be confident that third party can’t be able to corrupt this object

- Object.toString() doesn’t show you anything about what it is in the object so it is useless, so we need to use JSON.stringify()

- We have two distinct kind of objects, we have objects which just contain data, only data, and objects contain only functions, which are frozen, and those objects are very strong and very reliable, they cannot be tempered with, they provide the interface for dealing with the objects which are containing the data. By this we can create good API which can defend themselves, which can remain robust in the face of all the confusion happening inside our system. So, in above image put data in member variables.

- Event driven model was inspired by HyperCard

![typescript-hyper-card](./src/assets/images/typescript-hyper-card.png)

- In node.js we got non-blocking file i/o which is the main advantage. Node.js implements a web server in a JS event loop. It is a high-performance event pump.

- Servers are significantly different than browsers, in a server, we are not dealing with events, we are dealing with messages like messages coming from network, we will do something, we will send another message out.

- It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to subtract.

- Danger driven development – where we are doing crazy reckless stuff in the code just to keep in interesting. Always take the time to code well.

- Everything takes at least generation, is because we don’t change minds, we have to wait for a generation to retire or die before we can get critical mass on the next new idea. And that’s the way progress goes.

- The big advantage in prototypal systems is we eliminate or reduce coupling between classes unlike classification inheritance.

- In 40s when the first Von Neumann machines start coming online they are integer-only machines, but most of the programmers are mathematicians and they are trying to figure out how to do read computation and it is hard, they were trying to do stuff with scaled integers and it is lot of work, and it is error prone. And someone figures out floating point, that we will have two numbers per number, one is the number itself and other is a scale factor, which tells us how many positions to move the decimal point. Then we can just give it to a subroutine, and subroutine will figure out how to add these things. And it worked and it made programming much easier to do. Unfortunately, those libraries were really slow. So, when we get to the 50s, there is now interest in putting floating point into hardware, but we were making out stuff of tubes, and it is hard to do. Someone has figured it out that if we use binary floating pinot instead of decimal floating point, we don’t have to implement a dive by 10 in order to do a scaling, we can just shift 1 bit, which is free. That worked great for scientific computing because in scientific computing, our lower digits are probably wrong anyway, but it doesn’t work for business processing because they are adding up money and they need to be exact. They have to give the cents exact. So, even successor like java is not good with business types, that is the tragedy we are in now. The solution might be below, this might be only 1 number system which a future language needs to be adopt –

![typescript-dec-64](./src/assets/images/typescript-dec-64.png)

- If we are adding integers in a software implementation, it can add two integers and five instructions, in a hardware implementation adding integers should happen in once cycle, which means we don’t need to have int as a separate type in order to get performance. We can get performance and range of values that we need in one number type.

- CSS was designed to format technical document, that was its purpose of life, but that is not what we use it for. We use it for all kinds of stuff that it is very badly suited for. We use it as it is only option.

- Using Glob we can specify which files should be compiled. It lets us specify a file named patter for the compiler to match. `.` Is for the current directory, `**` for the searching recursively inside the child directories.

- Basic typescript types – Boolean, Number, String, Arrays, Enum, Void, Null, Undefined, Never – it’s the type assigned to values that will never occur like function that will never return because it throws exception or kicks off an infinite loop, Any – use when we effectively want to opt out of type checking of the compiler like while using third party javascript library .

- Type assertions – if we do not know the type of a variable, then we can assign it a specific using type assertion. (`<number>` value) or use “as” keyword

- Traditional functions are still easier to read when we are writing function that will be called from multiple places, however arrow functions are nice when we need to pass an anonymous function to another function.

- TypeScript implements structural type system, so in below the object developer can be directly treated as interface as it has all the interface properties. As long as the structure match, we can treat the object as the type with that structure event if it wasn’t explicitly declared with that type. This is also called duck typing:

![typescript-duck-typing](./src/assets/images/typescript-duck-typing.png)

- Static members are a nice way to add utility or helper methods that are related to the purpose of class but aren’t dependent on any data that might be stored in instances of the class.

- Constructors – special type of function gets executed when new instance of the class are created. Using super() we call constructor of parent class from child class, if child class has constructor method then we need to call super()

- There is different module syntax like AMD, Common JS, TS has adapted ES2015 module syntax by default. Benefits – encapsulation, reusability, create higher-level abstraction. We will also need module loader/bundler to run our code. Webpack will prepare our modules to execute in a browser as part of a build step.

![typescript-supported-technologies](./src/assets/images/typescript-supported-technologies.png)

- Relative vs. non-relative imports – ‘./’, ‘/’, ‘../’ all are same for current directive. We should give relative reference when giving our own modules and non-relative paths when referring third party modules.

- Type Declaration Files - They are also called type definition types or type libraries, these are just wrapper for existing javascript libraries. The goal of type declaration file is to declare types for the variables, functions, objects and other constructs in the library that match the intended use of those items. This allows the typescript compiler to make sure that we are using the library correctly. We can find the problems at compile time. They are just development-time tool to assist the compiler. They end with “d.ts” extensions.

- Generics – as below we can create collection of T, it is being to known when we create the instance of the class. Behind the scene the typescript will create a hidden class of that type and will be present in the transpiled code. We can also create generic interfaces and functions not just classes.

- Generics are not supported in Javascript, due to this it is a feature of Typescript. It is a reusable code that works with multiple types. It may be function, interfaces or classes, it uses a type (`<T>`) parameter. Generic constraints increase practicality and generic function type add flexibility. We can’t use generic with static functions or classes as generic gets applied on the instances. Generic classes offer type-safe versatility (with or without implementing an interface).

- It is like a JavaScript, with guard rails.

- Static and Dynamic typing – typescript is static typing and have type safety is a compile time feature.

- Modules - By this we can have separation in our code, we are able to separate out in different units of work that we have in different module like one for Animation, UI integration, Data Access. It improves testability, reusability and maintainability.

- Creating an internal module – if we don’t wrap our class in module keyword then that class name will be added to global namespace on widow object. It is an internal module that gets added and extended to the global namespace.

- Duck Typing – in below we don’t need to specify the probablyADuck variable as a Duck type, it is considered automatically as it has all its methods.

![typescript-duck-typing2](./src/assets/images/typescript-duck-typing2.png)

- Abstract class are created with the abstract keyword, we cannot directly instantiate this class but they can contain the implementation details but also can have abstract methods which are not implemented but these methods must be implemented in derived classes.

- Module loaders – Node has inbuilt module loaders capability means it understands the Common JS format and how to retrieve all of the necessary dependencies when running code written in or compiled to that format. As of now browsers don’t provide that capability natively. However, there are couple of very good libraries that give us the ability to load and use modules in browser apps like Require.js, it understands AMD format, System JS understands AMD, Common JS, ES2015 and its own system format.

- Default Exports – they are useful when we only want to export one item from a module. Once we have specified that item as the default export, other modules can import it without even knowing its name. assigning a name to a default export is optional since the importing module doesn’t need to know its name.

- Generic Constraints – they describe the types that may be passed as a type parameter. Constraints are most often implemented as interfaces that describe the shape of types that may be used as a type parameter. We need to use the extend keyword.

- Ambient modules – large JS libraries could potentially have lots of modules in them. Each module in a large library would have its own d.ts file and that would quickly become unwieldy and inconvenient. The solution is to declare ambient modules inside a single d.ts file. Ambient modules don’t provide any implementation details. In type definition files they are just the wrapper aournd an implementing that defined in the actual library. Since there aren’t any top-level exports, it can’t be imported directly. We first need to add a triple slash reference to the d.ts file, then we can write the import statement, we don’t need to define the path for the module to import but just the name of the module in the double quote exactly it was defined in d.ts file.

![typescript-ambient-modules](./src/assets/images/typescript-ambient-modules.png)

- Babel is a second stage transpiler and provides a handy backup plan just in case Typescript doesn’t transpile something as we expected.

![typescript-babel-working](./src/assets/images/typescript-babel-working.png)

- Nested arrow functions share the same ‘this’ instance, the ‘this’ value is always the containing code which is also called Lexical Binding.

- There is no built-in arguments object in arrow function, if we need to iterate over arguments the use ES6 rest parameter instead. Also arrow functions aren’t new-able as they use lexical scope. Always use a standard function as the constructor of a function style class.

- UMD module format – at runtime scripts in the UMD format check for global variables that are distinctive between AMD and CommonJS and depending upon which globals are found the module will be initialized in the appropriate manner. If we writing a module that is appropriate to use in both CommonJS and AMD environments we can consider using the UMD format.

- Declaration merging - The compiler merges two seperate declarations declared with the same same into a single definition. allowed merges - interfaces, enums, namespaces with classes/functions/enums. disallowed - classes with classes. We can use declaration merging to implement module augmentation. It is a technique that allows us to extend existing modules with new members. It is a nice way to extend modules that we might not maintain or to extend the 3rd party code that we may not be responsible for maintaining.

![typescript-declaration-merging](./src/assets/images/typescript-declaration-merging.png)

- Type Guards – they are a way for us to check the type of a variable. They are a way for the compiler to narrow a variable to a specific type. By this the compiler can check more error based on type. The typeof type guard, instanceof guard, user-defined type guards

- Symbols – they are new primitive data type, they are unique and immutable. Every symbol we create is different from every other symbol. Once we created them we can’t change them. Use case for them – to make good unique constants, enum like behaviour, computer property declarations to avoid name collisions, customize internal language behaviour. The string passed below in symbol is just for debugging purpose.

![typescript-symbol1](./src/assets/images/typescript-symbol1.png)

![typescript-symbol2](./src/assets/images/typescript-symbol2.png)

- Decorators - They are like annotations in java and attributes in c#. In JS they are implemented as functions.

- Promises – much cleaner code than callbacks. Simple API – then and catch methods, chain together as then function also returns promise.

- An interface defines the shape of data. It is like a mold used to create baked goods such as muffins. It drives consistency across the objects. Unlike Interface, Type can also be used to represent primary types not just object like data structure.

![typescript-interface-vs-types](./src/assets/images/typescript-interface-vs-types.png)

- The ‘typeof null’ will return generic ‘object’ value.

- By using an immediately-invoked function, we can call returning function instantly instead of variable storage.

- A closure wraps up an entire environment, binding necessary variable from other scope. It is unlike a function’s local variables as they aren’t available once the function’s scope is closed. Closures are very useful in creating function ‘construction zones’, a closure can make the creation of very similar functions ultra-efficient. We should aware that bound variables won’t be evident in the stored function, examining the contents of our new variables doesn’t reveal closures.

![typescript-closure](./src/assets/images/typescript-closure.png)

- Order of operations – PEMDAS.

- Arrow function have lexical binding scope, it means they get bind to the scope where they are defined, not where there are run.

- By using Object.assign, the source object remain unchanged, the target object is modified and used as return value. In case of duplicate properties on source objects, the value from the last object on the chain always prevails.

- Iterables return an iterator object. This object knows how to access items from a collection 1 at a time, while keeping track of its current position within the same sequence.

![typescript-iterables](./src/assets/images/typescript-iterables.png)

- Proxies and reflection are both forms of meta programming generally to know information about itself or for a program to control how is executing while it is executing other programs. Reflection is getting information about the program and proxy is changing how the program execute during execution. Proxy object sits between other code and target object. Proxies are slower than regular object. Revocable proxies allow the system to recover resources – use in very large applications with lots of data.

![typescript-proxy-and-reflection](./src/assets/images/typescript-proxy-and-reflection.png)

- Typescript also support new features of ECMAScript and other features which even didn’t introduced yet in ECMAScript like interface.

- When using the typescript types we should not use the uppercase javascript types, we should be using the typescript types i.e. lowercase versions of them – like number instead of the Number.

- The void type is not exist in javascript language.

- We can use ‘never’ type when a function is not going to return any value like if that function throw an error.

- To define different types of data in a array we can use tuple to enforce king of fixed structure instead of a loosely one. So, if use type as [string, number, boolean] then the values should match the same order type unlike union type.

- We cannot add a property to interface declaration if it is private or protected. Only public properties can be added to the interface signature.

- Module formats – es2015 syntax is in-built one which TypeScript adapted from JavaScript. Earlier ones were CommonJS, AMD (for browser), UMD, System JS formats.

- JavaScript was originally called Live Script, Netscape changed its name to JavaScript, and it is believed that this was because of the hype of Java within the industry.

- Types of errors – compile time errors, runtime errors, syntax error, logic error

- Types of runtime error – SyntaxError, TypeError, ReferenceError, URIError, RangeError, EvalError, InternalError.

- We can use String.raw() method if we don’t want special character to get render on the UI like ‘\t’, ‘\n’, etc, they will get printed as a raw string.

- The length of the emoji is not 1 unlike normal string characters, it can vary from 1 to 7, etc. String a Unicode character can get fit into 16-bit unit, but not emoji.

- The for and for-of are the constructs of the language itself, whereas the for-each is the method on the array, map and set objects and can access it on the interables.

- The for-each loop skips absent values for absent value which got created while doing like below, these are not undefined or null values. The array will be called Sparse Array.

- With for or for-each loops, we can’ use the “continue” or “break” keywords. For this, we should use “filter()” method then further chain the “forEach()” method. To convert and transform a value, we need to use the map() method.

- The for-in loop produces indices instead of values unlike for-of loop. The for-in loop present from the start of the language but for-of has been introduced in ES6 version.

- Also, with for-in loop the order of the iteration is not guaranteed also it will enumerated the inherited properties. We should not use for-in loop to iterate arrays or other iterables but use for-of loop. We should use for-in only to iterate the properties on a object, with for-of we will get an error that object is not iterable. To still make the use of for-of we can use Object.entries() or Object.keys() methods to iterate. So, we should use for-in only if we also want to iterate the inherited properties.

- When ES6 was released, it was not able to run directly in browsers. To run it into the browser, this process is called transpilling to convert ES6 into ES5 before getting served to browser.

- Unlike compiler transpilers transform the code of a language into another form of the same language. They are also referred to as source to source compilers. This process converts one higher level language to another higher level language.

- Modern web browsers have good support for the latest versions of JS, including features that were introduced in newer versions of the language. But we still need transpiling for few advanced language feature that are not yet supported by all modern browsers might need transpiling.

- Polyfills handles the cross browser feature gaps. It is a technique to add missing features to older browsers, allowing them to support newer features that are only available in modern browsers. It ensures that websites can run correctly across all browsers. It also support for deprecated features on newer browsers for older applications. The famous library for polyfills is core-js which includes methods like includes(), find(), findIndex(), flatMap(), sort(), padStart(), padEnd(), assign(), entries(), sing(), trunc(), promises, etc.

- The “void 0” is a primitive value of undefined.

- In top 15 languages, only assembly language doesn’t support regular expression.

![typescript-regex-basic-syntax](./src/assets/images/typescript-regex-basic-syntax.png)

![typescript-regex-short-codes](./src/assets/images/typescript-regex-short-codes.png)

## Node JS

- What is REST - REST means representational state transfer (ReST). If we are storing information about the request or about the client, then we are not writing a truly a restful service. We also need to tell the client of caching, means caching timeout so that next time client doesn’t to call server to fetch data. One more constraint is the uniform interface, we need to deal with resources those are nouns not actions so don’t name authorize or login but like books and authors. HTTP verbs defines actions, also use PUT for update the object.

- Mongoose is an ORM for MongoDB. We don’t have to deal with MongoDB directly, mongoose is going to do that for us.

- Updating data - PUT verb replaces and item but PATCH only changes a piece.

- Implementing PATCH – Need to use the Object.entries() method to out an array of key-value pairs from req.body and run for-each on it to modify only those properties on object which got change, so need to check every property manually

```typescript
const { book } = req;
if (req.body._id) {
  delete req.body._id;
}

Object.entries(req.body).forEach((item) => {
  const key = item[0];
  const value = item[1];
  book[key] = value;
});

req.book.save((err) => {
  if (err) {
    return res.send(err);
  }
  return res.json(book);
});
```

- Middleware – It is going to inject itself in between the calls and this route.

![node-js-middleware](./src/assets/images/node-js-middleware.png)

- HATEOAS - Using hypermedia to building self-documenting API, it is very easy for someone to navigate and understand what options are available to them anytime while they are using our API. HATEOAS means that list of links available to us that help us navigate the API.

- Node.js provides a wrapper around V8 JS Runtime engine to provide additional functionalities for building network applications. It is fast because all written in C language. We can build WebSocket server, fast file uploading client, Ad Server, Any real-time data apps. Node.js is not a multi-threaded application. Benefits of non-blocking code – files will be read in parallel

![node-js-blocking-vs-non-blocking](./src/assets/images/node-js-blocking-vs-non-blocking.png)

- We use javascript with Node.js because javascript makes easy to do event programming using the event loop and makes the code non-blocking.

- Node register the event whenever request comes in, whenever it is done registering the script, it starts the event loop when finished means it checking for events continuously, whenever a request comes it trigger its call-back. Known events are request, connection, close, timeout these events further more events, one event at a time will get processed in event queue, other will be queued in event queue.

- Node is generally deployed on Linux machines in production.

- Execution of javascript on the server is not done by Node, but it is done with a virtual machine, VM like V8 or Chakra. Node is just the coordinator, it is the one who instructs a VM like V8 to execute our javascript. So Node.js is a wrapper around a VM like V8. V8 will tell the results to Node and Node will tell this result to us. Node comes with built-in modules providing rich features through easy-to-use asynchronous API’s. this works great because V8 itself is single threaded, this is also true for browser.

![node-js-event-loop](./src/assets/images/node-js-event-loop.png)

![node-js-event-loop-extra](./src/assets/images/node-js-event-loop-extra.png)

- REST is not a framework nor HTTP pattern or protocol. Its full name is representational state transfer. The request should be stateless, it should not pass around the information about previous requests or next one. It should transfer data in JSON or XML. We should design the routes to access the resource like business modal.

- Blueprint of a restful service -

![node-js-restful-services-blueprint](./src/assets/images/node-js-restful-services-blueprint.png)

- Use express.static to serve everything within client as a static resource, and it will serve the index.html on the root of that directly on a GET to `/`

![node-js-express-static](./src/assets/images/node-js-express-static.png)

- We should run our node process under PM2 tool, it will automatically use all the available cores in our server and it will automatically create a new process every time an active process crashes and exits. It will also reload our application without any downtime. This tool is must in production.

- Node's architecture – V8 and libuv

![node-js-architecture](./src/assets/images/node-js-architecture.png)

- Javascript Event loop – Javascript is a single threaded due to which we can execute only one chunk of code at a time i.e. a function. It executes a synchronous task in “Sync Task Queue” this is a callstack for our application. The callback functions which needs to be executed in asynchronously, they needs to be added in the “Async Task Queue” by “Sync Task Queue” and when “Sync Task Queue” is done with execution the Synchronous task, it will pick the async task from the “Async Task Queue. There is also a “Async Micro Task Queue”, it will contains asynchronous micro-task which will have higher priority than normal asynchronous tasks resides in “Async Task Queue”. We should not block the event loop, so wherever possible we should write the asynchronous code using async and await keywords.

![node-js-javascript-event-loop](./src/assets/images/node-js-javascript-event-loop.png)

- NPM is not really part of node, it is just come packaged with node since it is the default and most popular package manager.

- Chrome’s V8 often called an engine, is a package deal containing an interpreter, compiler, runtime implementation compatible with the runtime interface demanded by the ECMA standard JavaScript conventions.

- Nodejs is not a framework(or a language) but a JavaScript runtime built on Chrome’s V8 JavaScript engine. It extends the power of handling file and network I/O with a preference for asynchronous patterns after including everything that is Javascript.

- Node.js expands the JavaScript language by providing a larger set of runtime environment primitives — those which are outside the scope of ECMA’s standards. These include things like file handling, network I/O, etc. Javascript does not come equipped with these because for security reasons, javascript originally did not include file I/O for use in the browser. And, it did not need to do networking tasks, because the browser does them.

- Node.js is Single-threaded( actually hybrid, more on this later) and Asynchronous. JavaScript executes all operations on a single thread, but using a few smart data structures, gives us the illusion of multi-threading. There is an event queue that uses a queue data structure that is responsible for sending new functions to the track for processing.

- You can take any number of examples like the `setTimeout` method, Axios methods, or any other method that run asynchronously. let’s take the setTimeout operation and look into its lifecycle. When a `setTimeout` is called, it is processed in the stack and then sent to the corresponding API which waits till the specified time to send this operation back in for processing.

- Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.

- The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

![node-js-event-loop](./src/assets/images/node-js-event-loop.png)

- If you call setTimeOut with 0ms and resolve a promise immediately, which would console log first? The answer is Promises and the reason is that Job queue gets more priority than Event Queue.

- So, How does Nodejs handle multiple requests concurrently despite being Single-threaded? - There is one process, multiple threads, but only one thread dedicated to parsing and executing javascript code. the other threads are started from C++ bindings called from the JS.

- Node isn’t the best choice for applications that mostly deal with CPU-intensive computing(but worker threads are a choice here). On the other hand, it excels at handling multiple I/O requests.

- Think of NodeJS as a waiter taking the customer's orders while the I/O chefs prepare them in the kitchen. Other systems have multiple chefs, who take a customer's order, prepare the meal, clear the table and only then attend to the next customer.

![node-js-event-loop2](./src/assets/images/node-js-event-loop2.png)

- Sample Node JS architecture -

![node-js-sample-architecture](./src/assets/images/node-js-sample-architecture.png)

- Node js shines in I/O intensive uses that is in network applications. In order for event loop to function properly, our code can’t spend too much time doing anything of its own, this includes works that requires heavy use of CPU.

- In node js event loop at a time only one function will be executing, all the async request like network, file i/o or timer is listened by the event loop for a callback function.

- The event loop – the entity that handles external events and converts them into callback invocations. It is a loop that picks events from the event queue and pushes their callbacks to the call stack.

- How call stack actually works: event queue will only send the callbacks to call stack once call stack is empty otherwise it will wait until it gets empty.

![node-js-callstack-working](./src/assets/images/node-js-callstack-working.png)

- Node JS server can simultaneously handle uploading of two files, one of main reason of Node JS creation is to handle the file upload. Other web apps try to load entire file into memory before writing it to the disk which can cause all sorts of issue at server side, also tricky to provide the progress of file uploads, but in Node JS we can do it very simply.

- Express is Sinatra inspired web development for Node.js, i.e. insanely fast, flexible, and simple.

- Node offers async API’s that we can use and not worry about threads, to do things in parallel without needing to deal with threads this is the biggest benefits of using a runtime like node. We can also create addons using C++.

- NPM is basically the world’s largest of free and reusable code.

- Node has a reliable module dependency manager usually referred to as CommonJS. This is basically the “require” function in Node combined with the “module” object.

- Node.js is like the kitchen itself, it allows you to execute lines in our recipes by using built-in modules like our oven and sink.

- REPL stands for Read, Eval, Print and Loop. Use the ctrl + l to break the REPL session.

- use Async/Await – it is easier to read.

- Event emitters -

```typescript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
```

- By using Electron, we can create cross platform desktop applications.

- Instead of using console.log() use debug(), it will only log when we are running in development mode not in production mode.

- For callbacks, use arrow function instead of normal function.

- Middleware – we can use router.all() for using middleware.

![node-js-router-all-middleware](./src/assets/images/node-js-router-all-middleware.png)

- Using passport for user authentication and authorization, this is a default option for express library, and a simple way to implement. It manages user object in the session. It also deals with dropping it in a cookie, and pulling it out of a cookie and applying it to the session. We also need to use cookie-parser and express-session package for this

- Node has inbuilt HTTP module to create http server and connection. But due to some limitation and code needs to write, we generally prefer express web framework it has routes and middleware.

- Always send back the data which has been created or modified on POST request itself so that we don’t have to call it back by using another REST service.

- While using PUT request to update the object, use assign / extend function like below -

![node-js-update-data-put-request](./src/assets/images/node-js-update-data-put-request.png)

- If we are building API for our application then don’t return all other unnecessary details from API, but if we are building API as a service then we can return all the information.

- Middleware is kind of like setting utility classes to help express to do the dirty work. Middleware is just a function that has access to the request object, the response object and the next function to go to the next middleware. Type of middleware – 3rd party, router level, application level, error-handling, built-in

- We should group our folder based on feature not types, also contain config and utils folder

![node-js-folder-structure-group-by-feature](./src/assets/images/node-js-folder-structure-group-by-feature.png)

- Middleware is more tied to routes, validations are more tied to models, so we should bake the validation logic into the model itself using mongoose.

- Promises are invented for JS for single threaded environment.

- Authentication - There are many ways to protect our API like JSON Web Tokens (JWT) is popular one. It is a token approach due to this we don’t need to keep track of who is signed in with a session store or have cookies. The JWT will be sent on every request because REST is stateless and we not know of the previous request. The token has to be stored on the client at the is requesting resources.

- Mongoose, like express, has support for middleware. Middleware is perfect for validating, changing, notifying, input sanitization etc. we will use middleware to hash our passwords before a user is created. Middleware will attach to lifecycle events around our documents like before save, before validations, after save, etc.

- Understanding CORS – if we are on localhost:4500, and we are trying to get access a route on localhost:3000, the browsers aren’t going to let me in due to security concern. To work around this we need to enable CORS on our server. By this the browser makes two requests, the first request is called pre-flight check by using verbs OPTIONS to check if it is allowed to make request to that server, server responds like yes or no like 200.

- Before deploying checklist -

![node-js-pre-deployment-checklist](./src/assets/images/node-js-pre-deployment-checklist.png)

- Factors we can use for two-factor authentication - something you know (password), something you have (badge, id card, token), something you are (biometric)

- We can ship a software update if we have added value without removing any existing value even though the new value feature is not complete, so user can’t still use it from UI, it is called dark release.

- The setImmediate will take preference over setTimeout. So, use setImmediate if we want to execute it on next tick of the event loop, node has similar api called process.nextTick.

- Parsing URLs and query strings – components of a parsed URL. Use url.parse for parsing an URL and other helper methods -

![node-js-url-components](./src/assets/images/node-js-url-components.png)

- Working with big amounts of data in node js means working with streams. Streams are simple collection of data that might not be available all at once and don’t have to fit in memory. Types of streams – readable, writable, duplex, transform.

- Duplex and transform streams – with duplex streams we can implement both a readable and writeable stream with the same object. It is like if we are inheriting from both interfaces. In transform stream its output is computed from its input like converting small caps into upper case or file conversion into different format.

- Using multiple processes is the only way to scale a node js application. Node JS is designed for building distributed applications with many nodes. To increase the scalability, we have strategies like cloning, decomposing (micro services), splitting into multiple instances (horizontal partitioning or sharding).

- The cluster module can be used to enable load balancing over an environment multiple CPU core. It is based on form function, it basically allows us to fork our main application process as many times as we have CPU cores, and then it will take over and load balance all request to the main process across all forked processes. This module is a helper for implementing cloning strategies but only on one machine. We can use process manager like PM2.

![node-js-load-balancing](./src/assets/images/node-js-load-balancing.png)

- Load balancing and HTTP server – if a machine has 8 cores, it will start the 8 processes. These are completely different node js processes, each worker process will have its own even loop and memory space. The loaded will be distribute among different worker process.

- Availability and zero-downtime restarts – with multiple instances the availability of the system will get increased in-case of any instance gets down. When we want to restart all of the processes like for a deployment of new code, in this instead of restarting them together we can simply restart them on at a time to allow other workers to continue to serve requests while on worker is being restarted. It is called zero-downtime restart

- Node works well on windows, but it is much safer option to host production Node applications on Linux platform, many other production tools are more stable on Linux.

- Shared state and sticky load balancing – due to load balancing we had problem of thread safety which is sharing data between threads or worker processes. So, with a cluster setup we can no longer cache things in memory because every worker process has its own memory space, so if we cache something in one worker’s memory, other worker’s will not have access to it. If we need cache thing with a cluster setup, we have to use a separate entity and read write to that entity’s API from all workers, this entity can be a database server or in-memory cache service like Redis.

- In cluster setup stateful communication also become a problem. Since the communication is not guaranteed to be with the same worker, creating a stateful channel on any one worker is not an option, like problem in authentication to one worker and next time sending its request to another worker which doesn’t know its authentication status. This problem can be solved by simply share the state across the many workers we have by storing these session’s information in a shared database or a Redis node, or better way is using sticky load balancing in this we send the same user request to same worker process but by this we don’t really get the full benefits of load balancing for authenticated users -

![node-js-state-share](./src/assets/images/node-js-state-share.png)

- Pruning – to remove unused package from the project, it gives extraneous error if package is installed but not mentioned in package.json file. We can use npm prune, npm prune grunt it will match the installed the package with package.json file and remove the non-specified ones. We can use npm prune –production to remove dev dependencies package before going to production.

- Gulp is in-memory streams, fast and code over configuration by more declarative, and has large plugin ecosystem. Instead of using Grunt or Gulp, we should use NPM directly which has simpler debugging, better docs, easy to learn, simple and no need for separate plugins.

- Transpilers - Babel, TypeScript, Elm

![node-js-transpilers-typescript-vs-babel](./src/assets/images/node-js-transpilers-typescript-vs-babel.png)

- ECMAScript versions -

![node-js-ecmascript-versions](./src/assets/images/node-js-ecmascript-versions.png)

- Module formats - IIFE, Asynchronous Module Definition (AMD), CommonJS (CJS), Universal Module Definition (UMD), ES6 Modules

- Cache busting – by default we set the cache expiration to 1 year, and if JavaScript file changes then change the bundle name to force request for latest version. For this we need to hash the bundle filename, and generate that name into HTML dynamically.

- Package vs. module – a module is a single javascript file that has some reasonable functionality, a package is a directory with one or more models inside of it and package.json file which has metadata about the package. It can be from simpler like from lodash to complex one like express. While working with NPM we are working with packages, which is why it is called node package manager.

- The package-lock.json files gets created when we installed some packages, it specify the exact versions of every package that got installed. By this it will be sure that everybody in the team using the same exact versions of all packages even if that team member join after a while to the team.

- Semantic versioning – 1.8.3 where 1 is major version, 8 is minor version and 3 is the revision or the patch number. Patch will be used when some bug fix or performance improvement, that doesn’t change the functionality. Minor means new feature is introduced but no breaking changes, major is when breaking changes like changing the function signature.

- Tilde (~) operator will get the latest patch version, carrot (^) will get the latest minor version, use \* or ‘x’ if we even okay to get the latest major version

- The package-lock.json file overrides the package.json file, so while installing a package it will take the version from package-lock.json file instead of from package.json file, if we don’t want this then we need to delete it temporary for avoiding this.

- Generators enabled the functionality for async-await keywords because of pause-resume feature. Generator functions can be paused and resumed unlike normal functions. They also stored the state of the function while paused. They return generators object which implement the iterator protocol by this they provide a method name ‘next()’, this method restarts a paused generator function. They works upon concept of lazy execution by which they compute the values on demand.

- Async-await let us write the asynchronous code more like the way we write the synchronous code. Data returned from async func is automatically wrapped in a promise. Using the await keyword will automatically extract data from a promise. Also, we need to use try-catch while using async-await because await will only return value when it gets success result.

- We can write event-driven code with EventEmitters classes. The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps to avoid race conditions and logic errors. But we can made them async for a particular case by using setImmediate(), it will push the code execution into the next cycle of the event loop.

- Worker threads helps us to write CPU intensive tasks by running events in parallel. It will create a new thread by making main thread available for new user request. This is similar to web workers. Using worker thread is like creating a new event loop. We can pass messages between main and worker thread. Worker threads should be used only with CPU intensive tasks. For IO bound code like disk access or network calls, it is more efficient to use the async API’s.

![node-js-worker-threads](./src/assets/images/node-js-worker-threads.png)

- Underneath all the http calls uses XML HTTP Request (XHR) object which is a javascript API to create AJAX requests. Its methods provide the ability to send network requests between the browser and a server.

- When we read a file, node open that file and put that content into the memory become making it available in the code. In-case of a large file, it may throw an error, to avoid this, we should use steam to read file through stream.

- Use omitBy() function from lodash to send only the changed property with a PATCH request –

![node-js-using-omitby-with-patch-request](./src/assets/images/node-js-using-omitby-with-patch-request.png)

- In case of wrong entity/data send from frontend and it fails the validation of server, then we should return 422 – Unprocessable entity status code. We should not send status 200 if the data is not valid.

- In case of cookie scenario, if server sends a cookie to the browser, then for further requests the browser automatically sends the cookie to the server for that same domain, so we don’t to write any specific code in client side unlike token approach in auth header. If our token contains sensitive information then we should use JSON web encryption (JWE).

- Lifecycle scripts – pre-start, start and test. Custom scripts – debug, predebug-compile, debug-compile, pre-build, build, etc. If we are running lifecycle script then we don’t have to specify ‘run’ while running that script like “npm start”.

- Sample REST API

![node-js-sample-rest-api](./src/assets/images/node-js-sample-rest-api.png)

- We need to set the form attribute enctype as multipart/form-data for and input type as file.

- There is no server required to run node js, it is itself a server. Node js is also gets used for building command line applications like webpack, gulp, eslint and yeoman. Node uses libuv library for asynchronous I/O and event loop.

- History of Node JS - New major versions gets released every 6 months of Node js.

![node-js-history](./src/assets/images/node-js-history.png)

- For the https communication, the default port is 443 and for http the default port is 8080.

- Cookie gets deleted whenever user closes the browser.

- HTML 5 storage API – session (per origin and per instance, tied to domain origin) storage, local storage.

- Local storage is also attached to per origin but available across all browser instances.

- Storage API issues – function are synchronous, no access from web workers, vulnerable to XSS attacks.

- We should not store any sensitive data in storage. The storage API is designed for simple key-value storage. We can save the complex object as-well but we need to stringy if before saving, but it causes the performance overhead.

- We can create polling request for an API on some specific intervals by using setInterval() method.

- HTTPS is called TLS (transport layer security), it encrypts payloads over the network using certificates.

- The history of distributed APIs

![node-js-history-of-distributed-api](./src/assets/images/node-js-history-of-distributed-api.png)

- Common formats of data - JSON, XML, JSONP, RSS, ATOM

- Association – design API’s like “api/regions/africa/sites/123/locations/1” but it still be okay “api/sites?country=usa” if it going too deeply nested

- The response code status 304 means it is served from cache and not modified.

- We can cache the request using ETags. We can send this ETag which we receive from server by setting a header key “if-none-match” (in-case of GET) and if-match (in-case of update the resource).

- Functional APIs – they are not RESTful but sometimes we need to handle these operation like calculate premium or start a machine, etc. For these APIs we should use OPTIONS or LINK verbs.

![node-js-functional-apis](./src/assets/images/node-js-functional-apis.png)

- If users rely on the API not changing, then we should use versioning. Types of design – URI path, Query String, with Headers, Accept header and versioning with Content Type. For simple APIs the query string is the recommended one, but for complex APIs the versioning with Content Type is recommended.

- Authentication types for APIs – Cookies, Basic Auth, Token Auth and OAuth.

- OAuth - It uses trusted third-party to identify users. So the application which uses OAuth, never gets the credentials. User authenticates with third party and use token to confirm identity, it is safer for the application (don’t have to dealt with the user credential and authentication) and the user.

![node-js-how-oauth-works](./src/assets/images/node-js-how-oauth-works.png)

- CSRF support is indirectly inbuilt in angular which will check any XSRF-TOKEN from the server response headers and set it to the request header automatically so that it will get match on the server side. We can override this behavior to provide a different token by using XSRF strategy service

- Mocha is a testing framework and Chai is an assertion library. Sinon is a mocking library.

- Require() Vs. Import statements –

![node-js-require-vs-import-statements](./src/assets/images/node-js-require-vs-import-statements.png)

- Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.

- As per below diagram, much of the work done by Node JS and libuv not by the javascript –

![node-js-behind-the-scene](./src/assets/images/node-js-behind-the-scene.png)

## Unit Testing

- In constructor method we should only build objects and prepares them for use. Don’t construct other dependencies, talk to external resources, execute initialization logic or application logic. Don’t write any logic in constructor. Just use assignments. We should inject dependencies assign to the private variables inside constructor.

- Actually, legacy code is the one which doesn’t have automated test for it. It makes the code more brittle and harder to maintain and extend.

- ![TDD History](./src/assets/images/unit-testing-tdd-history.png)

- Types of testing - unit testing, integration testing, acceptance testing (user interface).

- Immutability – an object can’t change its state. Anytime a method would change the state of the object like pushing an item on a stack, it needs to return a new copy of the object with the change. The previous instant remains unchanged. It helps us in writing concurrent code more easily

- Test doubles - it is a generic term for any kind of pretend object used in place of a real object for testing purpose.

- Fake – building on a stub and adding a bit more sophistication is the idea of fake. It contains a bit more complex implementation by having state but not functional implementation. Like below we actually add and delete the list.

![unit-testing-fake](./src/assets/images/unit-testing-fake.png)

- Spy – it records the information about the interaction that it has with the SUT. This information can be available for assertion purpose by the test itself.

![unit-testing-spy](./src/assets/images/unit-testing-spy.png)

- Mock – can be used to simulate complex behavior. We should not develop mock our self, we should use mock libraries which allows us to configure mock behavior. Libraries example – type mock, rhino mock and MOQ.

- Test doubles – dummies like a placeholder, stubs objects that return predefined data, fakes slightly more realistic, mocks objects pre-programmed with expected outputs for given inputs and also able to verify their calls, spies real object and verify interactions like mocks it is an hybrid of stubs, fakes and mocks.

- Unit tests are less brittle that’s why they are preferred a lot. It tests smallest behaviour.

- What is pragmatism? A reasonable and logical way of doing thing. that is based on dealing with specific situations instead of ideas and theories.

- Testing structure types - AAA (Act, Arrange, assert), Behavioral (Given, When, Then)

- Anti-patterns – we should test the overall behavior details instead of implementation details. So, don’t overuse of mock, prefer stub. Focus of return of the function instead of inner details. Tests should be short and to the point.

- Static method should be used only for pure functions like those methods which returns same value for same input, and in future there would be not change needed for those method implementations like math library inbuilt function.

- When adding code to a fixture setup or teardown is that only code that is 100 percent common to all methods should go over there. If a lot not all methods have some common code then use helper method.

- In unit testing don’t use random number to generate random number to test some value, it can generate random failures. So, we should not have random logic.

- Naming convention of the test method – choose any naming convention for unit tests that works for you and only try to stick with it consistently throughout the project.
- Instead of using the manual mock we should use automatic mock like MOQ library.

- We should avoid loops and branching instruction in tests, they may lead to bugs in testing code. It also reduces the cyclomatic complexity.

- Precondition and post-conditions of a method pattern, like passing an empty array to an method. In this case the caller function should check the param input before calling to the function, in preconditions a Boolean condition which must be satisfied before a method is invoked, in post-condition a Boolean condition which must be satisfied after a method completes

  - Method pre-condition - condition which must be satisfied before method is invoked.
  - Method post-condition - condition which must be satisfied by the invoked method after it executes.

- If a method does not want to accept null parameter then it should not throw an exception as it would be meaningless to the caller function.

- We should handle exceptions like below -

![handling-of-exceptions](./src/assets/images/unit-testing-how-to-handle-exceptions.png)

- Styles of unit testing – output verification or functional verification, state verification, collaboration verification.

- Writing the test is easier then running the application. Testing is not like frosting on the cake, but it is sugar or flour which needs to bake when we are preparing the cake not in the end. This is also same issue with automation testing.

- We should break into code into two type of classes, one which have business logic and others which make stuffs. Don’t combine both classes.

- Benefits of unit testing – higher quality, fewer defects, living documentation, well-crafted code, automatic regression harness. A unit test confirms functionality of a small unit of functionality or component in a larger system.

- Code refactoring should not change the functionality of the application, in the same way the unit test case should not be fail. Refactoring is like cleaning the kitchen after serving food to customer. It improves readability, maintainability and scalability of code. We should refactor the code after fixing a failing test, before adding a new feature or after identifying a quality problem. Simple refactoring – rename, introduce parameter, extract method.

- Isolating code - Dummy, stubs, Fake, Spy, Mock

- Dummy – it is the simplest and most primitive type of test double and will contain no implementation.

  ```typescript
  var person = new Person();
  person.first = 'John';
  person.last = 'Snow';
  Assert.IsNotNull(person.fullName);
  ```

- Stubs – it is a minimal implementation of a class that likely implements a given interface or some abstract base class. It doesn’t maintain state and leaves method unimplemented like it just return some hard-code value directly:

  ```typescript
  public class StubRepo: IOwnerRepository
  {
  public IOwner FindById(int id){}
  public IOwner save(IOwner owner)
  {
  return new Owner();
  }
  public void Delete(IOwner owner){}
  }
  ```

- We can have separate build environment for acceptance test running and can trigger once a day. We can also share it reports to business for progress:

![unit-testing-acceptance-testing-progress-report](./src/assets/images/unit-testing-acceptance-testing-progress-report.png)

- Prudent code coverage – 100% code coverage doesn’t mean no defects. Use code coverage as a developer tool not a performance metric. Let the code coverage find things that are important enough to add test, but realize that it is only contextually important and it is very rare that we need to strive for any sort of code coverage numbers up around 90 and 100%.

- Devi’s advocate, Gollum style and Ping Pong technique to write unit test case:

![unit-testing-devils-advocate](./src/assets/images/unit-testing-devils-advocate.png)

![unit-testing-ping-pong](./src/assets/images/unit-testing-ping-pong.png)

- While creating an interface it should either contains all properties or all functions not both.

- It is not creation of millions of objects that keep application from being efficient but it is rather the efficiency of methods that we are executing that may make it slow. So, we can create many objects using immutable objects without causing any performance issue.

- We should only throw exception if there is no way for the application to continue working under circumstances, otherwise implement different use case as-well. Also, don’t handle the exception in immediate caller but at the top most caller, the one which initiated the whole operation, by this the lower parts of the code will be clean from complicated error handling code, they will focus on normal control flow. We can handle this by showing a pop-up to user, retry the function or simply ignoring the error and moving forward. While using the immutable objects try to keep them small.

- While designing a class it should contains operations which naturally belongs to the class, if operation doesn’t belong to a class the move it out to a dependency and use the dependency to complete the operation.

- Marble testing is a technique where we draw marble diagrams using ACSII characters while writing unit test to visualize asynchronous observables behavior in a synchronous way. Benefits of marble testing – readable code, test synchronously and helps to find out race condition in our code. Marble syntax - -, |, #, ^, !, a, ()

- For empty observable use |, for never use \_ or ----.

- Hot observables start emitting the values before any subscribe method is called on. Any subscribers can subscribe at any time and they can get the latest values at the time of subscription. They are multicast means more than one subscriber can subscribe to this observable however they will listen to the same producer. Publish and share are used to make a hot observable like tune radio channel, cinema theater, mouse clicks, live movies, live cricket match, stock tickers, live life events.

![unit-testing-jasmine-marble-hot-observable](./src/assets/images/unit-testing-jasmine-marble-hot-observable.png)

- Cold Observable – In RxJs the observables are cold by nature. Cold is when the producer is owned by the observable. Observable creates and activates the producer at the time of subscription only. The data is created from the observable itself. Will produce data only when subscribe method has been called. Subscriber get their own copy of values and they are unicast i.e. one subscriber per producer like of, from, interval, timers. Real life example – watching downloaded movies, recorded podcast or song, snapshot movies in which each have their own copy.

![unit-testing-jasmine-marble-cold-observable1](./src/assets/images/unit-testing-jasmine-marble-cold-observable1.png)
![unit-testing-jasmine-marble-cold-observable2](./src/assets/images/unit-testing-jasmine-marble-cold-observable2.png)

- Frame – Jasmine-marbles convers observable sequence into frames. Frame is a JSON that consists of RxJs notification object that wraps the actual delivered value with additional metadata and message type.

![unit-testing-jasmine-marble-frame](./src/assets/images/unit-testing-jasmine-marble-frame.png)

- RxJS schedulers are centre to control the time for any operator or observables in our project. Also, RxJS has made this schedulers injectable so that we can mock these schedulers and control the time in our test cases.

- Scheduler is a primitive inside RxJS, RxJS operators take scheduler as the second optional parameter. It is async by default. Marble testing uses virtual time so that we can test these async function synchronously.

- Race condition scenario – in a scenario where we are searching a string, and first search return the value with a delay than second one, then in the result we will get the first result as a final response by overriding the second one. To avoid this we can use the switchMap operator, it will cancel the previous Http request in-case of second has been triggered and always return the latest result.

- In integration test we test component and its template together. In integration if we only test parent component then it becomes shallow integration test otherwise if we also test its working with its child or directive component then it becomes deep integration test.

- To write the integration test to test the template along with component, we need to use the ‘Testbed’.

- A component fixture is a wrapper for component that also has few extra properties for testing, we can use its one of the properties called componentInstance to get the instance of the component itself.

- Use fixture.detectChanges() on component spec files to tell the component to run change detection and update any binding that may exist on the component. It will also cause to ngOnInit() lifecycle to run.

- The flush() method lets us decide what data to send back when the call is made.
