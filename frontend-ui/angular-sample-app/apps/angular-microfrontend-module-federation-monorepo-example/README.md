# Angular Micro-frontend Example

Start the app by running

```shell
npm run run:all
```

### Recreate this starter

```shell
npx @angular/cli@18 new angular-microfrontend-example --create-application false --minimal
cd angular-microfrontend-example
ng generate application shell --routing --style css --inline-style
ng generate component products --project shell
ng generate component products/product --project shell --flat
ng generate library shared
ng generate interface product --project shared
ng generate service products --project shared
ng generate service basket --project shared

ng generate application mfe-basket --routing --style css --inline-style
ng generate component home --project mfe-basket
ng generate module basket --project mfe-basket --routing --route basket --module app

ng add @angular-architects/module-federation --project shell --port 4200
ng add @angular-architects/module-federation --project mfe-basket --port 4201
```


## License

Apache 2.0, see [LICENSE](LICENSE).
