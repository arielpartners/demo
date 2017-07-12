# demo
A place to keep notes and demonstrations

TODO for demonstration of DHS App Generation:
1. [x] Create Architectural Slides
2. [ ] Give an Architectural Overview for the canonical DHS App
3. [x] Generate a baseline Angular 4 App using the CLI
4. [x] Demonstrate "enhancing" the basline App with DHS Common Modules
5. [ ] Demonstrate making local changes to styles and modules/views
6. [ ] Demonstrate making local changes "global" by contributing changes back to common modules via npm linked cloned repos
7. [ ] Demonstrate how versioning allows individual projects to opt-in to the latest common modules, or not.


### 1\. Architectural Slides
[View slide pdf](https://github.com/arielpartners/demo/blob/master/dhs-demo-slide.pdf)

### 2\. Give an Architectural Overview for the canonical DHS App

```bash
git clone https://bitbucket.org/dhsit/dhs-scaffolding-ngclient.git
cd dhs-scaffolding-ngclient
npm install
npm run json-server
npm run hmr
```

### 3\. Generate a baseline Angular 4 App using the CLI

*commands*
```bash
ng new my-app
cd my-app
ng serve --open
```
show browser how new angular 4 application will be displayed


### 4\. Demonstrate "enhancing" the baseline App with DHS Common Modules

Let's install dhs-common-module in our new `my-app`

* Demo how postinstall prompt is working

*commands*
```bash
npm install --save-dev https://bitbucket.org/dhsit/dhs-common-module.git
```

### 5\. Demonstrate making local changes to styles and modules/views

Let's start from generating new app repeating the procedure of 3, 4 but without 4th prompt which will setup components on app module, so we can show how to manually make changes to local modules and views

* Make simple change on app.component.less and show applied effect.

* Start demo app of `dhs-common-module` to introduce our documentation and example.

* Add sidebar and kpi tile on local project following steps of demo app

*commands*
```bash
git clone https://bitbucket.org/dhsit/dhs-common-module.git
cd dhs-common-module
npm install
npm start
```

#### 1\. how to make changes on template stylesheets on component?
Follow instruction on Demo app documentation to implement sidebar

- make changes on app.component.html
- make changes on app.component.less
- make changes on app.component.ts


#### 2\. how to add new component(HomeComponent)?
[AngularCLI github README.md](https://github.com/angular/angular-cli)

  1\. generate home component
``` bash
ng generate component home
ng g component home
```

  2\. add home component to app.routes.ts
```javascript
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
export const AppRoutes = [
  { path: '', redirectTo: 'home' }
  { path: 'home', component: HomeComponent }
]
```

  3\. add kpi tiles to home component
Follow instruction on Demo app documentation to implement kpi tiles


### 6\. Demonstrate making local changes "global" by contributing changes back to common modules via npm linked cloned repos

* Demo how to use npm link and quick explanation
* Demo how to create own branch and make changes
   * should show if changes made in local branch of `dhs-common-module` had taken effect in `new-app`

* Demo PR workflow
   * how to add files
   * how to make commits
   * how to push commits
   * Add reviewer on bitbucket 
   * Merge approved PR


At this point, we should have cloned DHS Common Module and My App in same directory

*Link New App to DHS Common Module*
```bash
cd my-app
npm link ../dhs-common-module
```

Show how linking makes seeing changes in DHS Common Module easy

*Create your own branch in DHS Common Module*
```bash
git checkout -b milokang/sidebar-color
```
Make a change in DHS Common Module

See results in My App in browser and/or in node_modules/dhs-common-module

*Making a PR*
```bash
git add .
git commit -m 'change sidebar panel default background color scheme'
git push origin milokang/sidebar-color
```

Add reviewer on bitbucket

## 7\. Demonstrate how versioning allows individual projects to opt-in to the latest common modules, or not.

open my-app and install your branch

*commands*
```bash
npm install --save-dev https://bitbucket.org/dhsit/dhs-common-module.git#milokang/sidebar-style
```
