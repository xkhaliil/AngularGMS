# AngularGMS

Angular single-page app for managing a video game catalog, with login-guarded routes for adding, updating, and searching games by name or genre.

![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)

## What it does

AngularGMS provides components to list, add, and update games (`game`, `add-game`, `update-game`), search games by name or genre (`nomrechercher`, `recherche-par-genre`, `liste-genre`, `update-genre`), and a login flow (`login`) whose routes are protected by an Angular route guard (`game.guard.ts`), with a `forbidden` component shown on unauthorized access. Authentication is handled with JWT via `@auth0/angular-jwt`. The UI is styled with Bootstrap, and SweetAlert2 is used for alert/confirmation dialogs.

<!-- TODO: describe what data a "game" and "genre" record contains, and which backend API the app calls -->

## Tech stack

- [Angular](https://angular.io/) 13 (`@angular/core`, `@angular/router`, `@angular/forms`, `@angular/common/http`)
- `@auth0/angular-jwt` for JWT-based authentication
- Bootstrap for styling
- SweetAlert2 for alert dialogs
- RxJS
- Karma + Jasmine for unit tests

## Getting started

```bash
npm install
npm start      # ng serve, then open http://localhost:4200/
```

Other available scripts (from `package.json`):

```bash
npm run build   # ng build, output to dist/
npm run watch   # ng build --watch --configuration development
npm test        # ng test, runs unit tests via Karma
```

<!-- TODO: add a screenshot -->

## License

No license file is present in this repository.
