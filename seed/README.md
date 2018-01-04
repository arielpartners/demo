# Installation

*Clone latest angular4 seed repository*
`git clone https://bitbucket.org/dhsit/caf-angular-client.git`

*Install dependencies*
`cd caf-angular-client`
`npm install`

*Serve application*
`npm start`
`npm run json-server`

> Open browser and go to `localhost:4200`

> Update package name according to your application name

# Introduction

As you see on the initial page, this seed will provide
- Basic layout including header and sidebar
- Basic routes
- Basic Authentication with login page and logout button
- Examples of caf-angular-common

# Demo using `caf-angular-common` module

KPI tiles and basic table are placed in dashboard page as an example of how to use `caf-angular-common` library.
There aren't sufficient examples and usages for all `caf-angular-common` library components in the seed yet.
However our team is looking to update them in short future.

# Introduction to redux and redux dev tools.

This seed project uses redux for state management and it is configured from getgo.
The main concept behind Redux is that the entire state of an application is stored in one central location.

Redux observable allows developers to create middleware which steamlines
- making http request
- recieve http response
- update response to state
- handles response error

We won't have time to cover all benefits of redux... but

Current KPI and table example on dashboard route is great example of
how to use redux action to make AJAX request and use the response body.

> Let's open application on chrome browser and show quick glance of Redux Dev Tools

# Demo making ajax request

Our seed will provide mock backend using JSON-server

#How to run test and coverage report

# Demonstrate CI with bitbucket pipeline
> Let's create bitbucket repository and push our application

#Demonstrate Alterative Installation with `caf-angular-cli`