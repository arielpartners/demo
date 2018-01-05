# Angular 4 Seed Walkthrough

## Overview

Each new project that spins up typically has several weeks of overhead 
dedicated to infrastructure development and technology discussions.
As projects age they become increasingly difficult to understand,
as a result code becomes ever more costly to maintain and 
it becomes increasingly tempting for new teams to 
abandon legacy code and rewrite from scratch.

> Next slide

Our goals are simple; Make it trivial to adopt a consistent set of styles, and best practices that have stood the test of time, enterprise wide.
These best practices include:

-  Component based development
-  State management that is easy to reason about
-  Performance
-  Testing/Documentation
-  Linting
-  Package management and versioning
-  Maintainability through all of the above

> Next slide

Seed will provide variety of useful features as starter such as;

- Sample usage of `CAF Angular Common` library
- Production and Development builds
- Hot module reload
- State management using Redux
- Sample unit test with Jasmin and Karma
- Sample end-to-end test using CucumberJS
- Continuous integration using Bitbucket Pipeline

Within this demo we will cover

- Installation
- Available npm scripts
- File structures
- How to create new component
- Brief introduction to Redux and Redux dev tool
- How to run test and open report
- Alternative installation using generator


## Installation

> Let's open terminal and begin installation.

**Clone latest angular 4 seed repository**
> First you will need to clone bitbucket repository with git command
```bash
git clone https://bitbucket.org/dhsit/caf-angular-client.git
```

**Install dependencies**

> Then open cloned repository

```bash
cd caf-angular-client
```

> and install npm packages

```bash
npm install
```

> while installing packages let's take a look at seed application archtecture

- components and directives are working as controllers and exported as modules
- components and containers renders view
- redux dispatches action to call ajax request
- after response is received reducer updates state
- `caf-angular-common` and `caf-styles` provides common modules and stylesheets

**Serve the application**

```bash
npm start
npm run json-server
```
> Open browser and go to `localhost:4200`
Once application is served on browser you can see that this seed provides

- Basic layout including header and sidebar
- Basic routes
- Basic Authentication
- Examples of caf-angular-common(KPI tiles and grid)

**Set application name**
> Open package.json and update package name according to your application name from `caf-angular-client` to your application name

## File structure

> before we look into actual code let's take a quick glance at file structure

**directories**
- json-server: Seed will provide mock backend using JSON-server, which allows a team to work in front-end and back-end in parallel to support `Agile development` and minimize creating blockers while development.
- files in `src` directory will get compiled to `dist` on build.
- `app` directory contains application codes
- `assets` directory is for images and files
- `components` are for reusable components
- `containers` are for route containers.
- `store` contains redux files
- `styles` is for LESS stylesheets

**redux files**

- `action.types.ts` contains all redux actions for dispatching.
- `root.epics.ts` contains all redux middleware for actions.
- `root.reducer.ts` contains all redux reducers for actions.
- `store.module.ts` is singleton to create redux store.


**core files**

- `index.html`
- `.angular-cli.json` for angular compile configure
- `app.module.ts` is main module
- `app.routes.ts` is for application routes

> Other than redux file structure is very similar to Angular application created with Angular CLI.


## Examples of `caf-angular-common` module

KPI tiles and basic table are placed in dashboard page as an example of how to use `caf-angular-common` library.
There aren't sufficient examples and usages for all `caf-angular-common` modules in the seed yet.
However our team is looking to update them in short future.

## Create new component with Angular CLI
> Let's try to create new component in fact we will create a container which will be used for route.

**Using Angular CLI(when cli is installed globally)**
```bash
ng generate component containers/sample
```

**Update app routes**

```javascript
import { SampleComponent } from './containers/sample/sample.component';

{
  path: 'sample',
  component: SampleComponent,
  canActivate: [ProtectedGuard]
  pathMatch: 'full'
}
```

**Update sidebar for navigation(sidebar.data.ts)**

```javascript
{
  icon: 'book',
  text: 'Sample',
  link: 'sample'
}
```

> open browser after rendered and navigate to new component "sample works!"

## Introduction to redux and redux dev tools.

> Let's open application on chrome browser and take a look at Redux Dev Tools

This seed project uses redux for state management and it is configured out of the box.
The main concept behind Redux is that the entire state of an application is stored in one central location.

Redux observable allows developers to create middleware which streamlines multiple actions.
In this seed, you can see that our epic will stream following actions by dispatching single action.

- making http request
- recieve http response
- update response to state
- handles response error

We won't have time to cover all benefits of redux...
so let's move on

## Demo making ajax request

Current KPI and table example on dashboard route is great example of
how to use redux action to make AJAX request and receive response body as Observable.

To create api call to backend you can simply follow the steps.

1. create action type
2. add new reducer to root reducer
3. add new epics for action type
4. use store to dispatch
5. use @select to receive response as Observable

```json
{
	"samples": [
    {
      "label": "Sample 1",
      "data": [
        {
          "label": "Sample data 1",
          "currentValue": 1123,
          "previousValue": 987
        },
        {
          "label": "Sample data 2",
          "currentValue": 123,
          "previousValue": 234
        },
        {
          "label": "Sample data 3",
          "currentValue": 356,
          "previousValue": 547
        }
      ]
    },
    {
      "label": "Sample 2",
      "data": [
        {
          "label": "Sample data 1",
          "currentValue": 3456,
          "previousValue": 3456
        },
        {
          "label": "Sample data 2",
          "currentValue": 1511,
          "previousValue": 1324
        },
        {
          "label": "Sample data 3",
          "currentValue": 5433,
          "previousValue": 4092
        }
      ]
    },
    {
      "label": "Sample 3",
      "data": [
        {
          "label": "Sample data 1",
          "currentValue": 123,
          "previousValue": 453
        },
        {
          "label": "Sample data 2",
          "currentValue": 453,
          "previousValue": 234
        },
        {
          "label": "Sample data 3",
          "currentValue": 43,
          "previousValue": 12
        }
      ]
    }
  ],
}
```

> open browser localhost:3000/api/samples

server.js line 62, 82
`req.url.includes('api/sample')`

> open browser localhost:3000/api/samples

add LIST_ACTION_TYPES `SAMPLES: 'SAMPLES',`
add LIST_API_ROUTES `SAMPLES: '/api/samples',`

add state on reducer `samples: createListReducer(LIST_ACTION_TYPES.SAMPLES),`
add epic `this.listEpics.createEpic(LIST_ACTION_TYPES.SAMPLES),`

> open redux dev tool check initial state exist

```javascript
	constructor(
    private store: NgRedux<IAppState>,
    private ajaxList: AjaxListActions
  ) { }

  ngOnInit() {
    this.store.dispatch(this.ajaxList.loadList(LIST_ACTION_TYPES.SAMPLES));
  }
```

> open redux dev tool check initial state changes

## How to run test and coverage report

```bash
npm run coverage
npm run coverage-open
```
> end to end test has error and will be fixed in short future

## Demonstrate CI with bitbucket pipeline
> Let's create bitbucket repository and push our application

```bash
git remote add origin https://bitbucket.org/dhsit/{repository-name}.git
git push -u origin master
```

## if there is time
Demonstrate alternative Installation with `caf-angular-cli`

## Alternative Installation(using CLI)
**Install generator `caf-angular-cli` globally**

```bash
npm install -g https://bitbucket.org/dhsit/caf-angular-cli
```

**Check if installed**

```bash
caf version
```

**Create new application**

```bash
caf new test-app
```

**Serve the application**

```bash
cd test-app
npm start
npm run json-server
```

