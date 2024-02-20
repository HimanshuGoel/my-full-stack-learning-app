# Console Commands

- [Firebase](#firebase)
- [Angular](#angular)
- [Regex](#regex)
- [Git](#git)
- [Node/NPM/NVM](#nodenpmnvm)
- [Chrome](#chrome)

## Firebase

- firebase login
- firebase init (hosting)
- firebase deploy

## Angular

- ng g c home --standalone
- ng add @angular-eslint/schematics
- ng update @angular-eslint/schematics

## Regex

- To search including next line - `\[[\s\S\n]+?"`

## Git

- git tag
- git config --list

## Node/NPM/NVM

- npm outdated, npm update
- node -v, node --version, npm version
- nvm install 6.9.2, nvm alias default 6.9.2, nvm use 6.9.1, nvm ls
- npm list -all, npm list --depth 1, npm list --parseable, npm list --json, npm list -g, npm audit fix --force
- npm install npm@latest -g, npm i -h, npm info package-name, npm repo package-name, npm i <package-name@1.x>, npm i package-name">2.1 < 2.3"
- update to trivial version package is pre-appended with `^` in package.json file - `npm update package-name`

## Chrome

- Angular DOM Debugging

```typescript
const component = ng.getComponent($0);
console.log(component);

const component = $0;
ng.applyChanges(component);


const context = ng.getContext($0);
console.log(context);

const metadata = ng.getDirectiveMetadata($0);
console.log(metadata);
```
