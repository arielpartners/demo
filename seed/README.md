# Angular 4 Seed Walkthrough

## Overview

Each new project that spins up typically has several weeks of overhead 
dedicated to infrastructure development and technology discussions.
As projects age they become increasingly difficult to understand,
as a result code becomes ever more costly to maintain and 
it becomes increasingly tempting for new teams to 
abandon legacy code and rewrite from scratch.

> Next slide

So why are we doing this?

Today most of the teams suffer from UX design inconsistencies,
while our common module will provide standard UI/UX design from DSS/DHS.

From inflexible monolithic archtecture
to separated client and server deployment units 
deployed on the targeted server
in order to facilitate multiple microservices.

From older platforms and MVC Architecture,
to Angular4 which is well-supported and rapidly growing platform.

Long start-up latency to instant-on low latency

Performance issues due to chattiness and large payloads,
to fewer ajax calls with smaller payloads,

Since previous server side view redering requires a lot of copy/paste,
component based developement provides much more reusability,
which means a lot less codes to build application.

Also lint is built-in to help developers from
writing inconsistent code quality and formatting.

Fully automated acceptance and unit tests.

Deployment is simple, automated,
Continuous Integration and Continuous delivery is built-in,
and easiley configurable using included bitbucket pipeline config file.

Also Rich state debugging tools are available online
such as Augury and Redux Dev Tools.

> Next slide

This is how `CAF Angular Client` built with `CAF Angular CLI` will look like.
Huge differece from default landing page created with Angular CLI.
All can be installed and serve on local machine with simple commands on terminal.

> Next slide

Let's take a look how CAF builds on top of Angular 4 application.

- Out of the box Redux is configured to store states in single place.
- JSON server is setup to serve mock web-api backend
- package.json is updated to add bulid script for production and development, as well as update dependencies
- CucumberJS is installed to provide rich readability through out E2E testing.
- Basic Layout such as Header and Sidebar.
- Example usage of `CAF Angular Common` library, routes, unit test, end-to-end test.
- Hot module reload for quicker compilation and persistant state while development.
- Continuous integration using Bitbucket Pipeline
- Import DSS/DHS standard UX design stylesheet
- Import `CAF Angular Common`

> Next slide

Now these are list of available common modules.

- First AjaxModule to handle http request and response using redux and redux observable,
- Pie, Donut, Stacked Area Charts are available and will add more(Bar, Line, Stacked Bar, etc...)
- AuthGuard for front-end routes and Login component.
- List and Menu which replace HTML <li> tag, Sidebar.
- Badge, Icon, Key Performance Indicators Tiles,
- Sortable and Searchable Data grid, which being refactor for more flexible and easier usage,
- Global error handler to handle run time error,
- Input controls for form including Textbox, Select, Radio, Checkbox, Datepicker, Range Slider
- Panels, Modal,
- Utility Pipes for string cases, highlighting, kilo, loading spinner and element resize service.
- Notfication module to push notifications like toastr and alert module for inline alert within panel.

Available `CAF Angular Common` modules are rapidly expanding and
as we use build new applications using common modules,
we are enhancing existing modules to facilitate new business requirements.

> Next slide

#### Environment comparison

> The major change between version 1 and version over 2 is that standard language has changed  from javascript to typescript.

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
It provides deep readability for tools through its optional static typing at compile time,
which allows us to make safe assumptions about state during execution. 
As a result we can avoid painful common bugs by type-checking the code,
reports issues even before you save files and leverage the type system to help you
write code even faster.

> Angular 4 application can easily scaffolded using Angular CLI, not only 

- it can be used to generated new applications and components
- it can serve the application on local machine or build application for production or dev mode with simple commands.
- Run testing interface on web driver or browser.
- compile typescript into javascript Ahead-of-time and Just-in-time using webpack.
- now a days modern frameworks use CLI: (`ASP`: dotnet.exe, `Ruby`: rake, `React`: create-react-app)

> While Angular 1 supports developers to use Jasmine and Karma for unit test
and protractor for end to end test, it is not configured out of the box, 
whereas in Angular 4 application created using Angular CLI and this seed, 
karma and protractor are configured from get go
with intanbul configured for coverage reports and CucumberJS for readable acceptance tests.
Also newly generated components, directives, and services will be 
created with test spec file along with template html and stylesheet by default.
(we will demonstrate this later when creating new component using Angular CLI)

> Next slide

#### Architecture comparison

> While Angular 1 is based on the Model-View-Controller archritecture,
version over 2 introduces component base structure.
Each component is javascript class object which contains properties as model, and template as view, methods as controller.
This allows developers to create highy reuseable components and services,
also group them into modular pieces, which can be injected on other components.


> Next slide

#### Git Submodules Separate Unit of Dev from Unit of deployment

> This is a diagram to show how git submodules are being developed in `separate unit` from `unit of deployment`.

- Parent project-repo combines git submodules into unit of development.
- Each submodules are developed separately by specialists.
- While Full-stack developer manages the `server-submodule` which communitcates to the server.
- front-end developer can develope `client-submodule` with JSON server.
- JSON server provides lightning-fast server-less development, allows to run acceptance tests on selenium webdriver with cucumber, and can be used as example payloads for swagger API documentation.
- When any changes are made to ANY submodule, build will trigger for automated deployment.
- Bitbucket pipeline and XL Deploy can be used to deploy bundled codes and nuget packages to dev server.


> This allows a team to make progress in parallel and minimize blocking each others tasks.

> Next slide

#### How do I get started?(migrate from monolithic to microservices)

> This diagram explains steps to covert monolithic architecture repository
into a parent repository with git submodules working as container.

> Next slide

#### Key CAF Features

- Sample usage of `CAF angular common`
- Builds script for production and development.
- Hot module reload to enhance development experience.
- State management using Redux.
- Sample unit test and end to end test.
- CI/CD using bitbucket pipeline.


# DEMO

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

> Next slide

**Installlation filler( while npm install )**

> while installing packages let's take a look at seed application archtecture.

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

> before we look into actual code let's take a quick glance at file structure: Open sublime editor.

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

> You can see that this command just created component typescript, html, less and test spec files.

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

**Component file structure filler( while creating new component )**

> Let's take a moment to look at Angular component file structure.

## Introduction to redux and redux dev tools.

This seed project uses redux for state management and it is configured out of the box.
The main concept behind Redux is that the entire state of an application is stored in one central location, but there are more than that.

**Why is Redux worth learning?( while intoroducing Redux )**

> This diagram shows how..

- User triggers dispatch action.
- Middlewares catches the action and make API request, then receive response as payload.
- Which gets passed down to Reducer where state is finally getting updated to store.

> This concept might be hard to grasp in the beginning, but it has a lot of benefits such as
- performance JSON data cached in store eliminates procedure of re-retrieving cached data on user navigation.
- Centralized state provides high maintainability and keeps code neat and clean.
- Significantly simplifies testability.
- Can increase flexibility by set eviction policies to decied when to flush cache.
- It also enables powerful use cases such as centralized error handler,
- and recreate production scenario via export-import state using Redux Dev Tool

> Let's open application on chrome browser and actually look at our Redux store using Redux Dev Tools

Redux observable allows developers to create middleware which streamlines multiple actions.
In this seed, you can see that our epic will stream following actions by dispatching single action.

- making http request
- recieve http response
- update response to state
- handles response error

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

