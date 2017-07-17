# demo

## Agenda
* [Overview(Charles)]()
* [Slides(Craeg)]()
* [Demo(Graig & Milo)]()

### 1. Overview

Each new project that spins up typically has several weeks of overhead dedicated to infrastructure development and technology discussions.
As projects age they become increasingly difficult to understand, as a result code becomes ever more costly to maintain and it becomes increasingly tempting for new teams to abandon legacy code and rewrite from scratch.

Our goals are simple; Make it trivial to adopt a consistent set of styles, and best practices that have stood the test of time, enterprise wide.
These best practices include:
-  Component based development
-  State management that is easy to reason about
-  Performance
-  Testing/Documentation
-  Linting
-  Package management and versioning
-  Providing a clear upgrade path
-  Maintainability through all of the above

### 2\. Slides
[View slide pdf](https://github.com/arielpartners/demo/blob/master/dhs-demo-slide.pdf)

### 3\. Demo

#### 1\) Generate a baseline Angular 4 App using the CLI

##### Initialize new project with angular-cli

```bash
ng new my-app --style less
```

> Use option `--style` to set default style extension, in our case we want it to be less.
  By running `ng new` command angular-cli will install essential packages to run angular project

##### Serve new project

```bash
cd my-app
ng serve --open
```

> Use option `--open` to open application on default browser
If 'App works' displays on browser, we are good to go.

#### 2\) Demonstrate "enhancing" the baseline App with DHS Common Modules

##### Installation

```bash
npm install --save-dev https://bitbucket.org/dhsit/dhs-common-module.git
```

> Now begins fun part.
 Let's install dhs-common-module in our new `my-app`

##### Senario 1: Only essentials

```bash
npm run hmr
```

> User can set up essentials to new angular application
  After common module is installed we can run our own npm scripts

Show that bootstrap has taken effect an changed font and background color


##### Senario 2: Full monte

Let's enter 'Y' to all four prompts and show how DHS-common-module initialize application UI

```bash
npm run hmr
npm run json-server
```
> User can initialize application with authentication, header menu and sidebar

#### 3\. Demonstrate making local changes to styles and modules/views

> First we will make change to local Header Component,
  We will simply demonstrate changing color scheme of header menu background color

```css
#header {
  background-color: #115322;
}
```

SHOW BROWSER

#### 4\. Demonstrate making local changes "global" by contributing changes back to common modules via npm linked cloned repos

> If we compare sidebar and header in `app.component.html`.  We can see those two components are using different prefix.
  While components with 'ds' prefix are part of DHS common module. ones with 'app' is local components.
  Now we will demonstrate how we will make this `<app-header>` as part of DHS common module.

> Let's start with creating new branch

```bash
git checkout -b milokang/header-menu-demo
```

COPY header dir from my-app to dhs-common-module/src/lib

* change prefix from 'app' to 'ds'
* add header.module.ts(PREPARE SNIPPET)
* add module dependency

```bash
git add .
git commit -m 'add header module to common module'
git push origin milokang/header-menu-demo
```

NOTE: Demo with PR / branch?

## 5\. Demonstrate how versioning allows individual projects to opt-in to the latest common modules, or not.

open my-app and install your branch

*commands*
```bash
npm install --save-dev https://bitbucket.org/dhsit/dhs-common-module.git#milokang/sidebar-style
```


