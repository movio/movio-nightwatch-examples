# Movio Nightwatch Examples

This is an example setup and tests using NightwatchJS (http://nightwatchjs.org/) and Selenium Web Driver.

## Summary

This is a example project that can either be copied or cloned as a starting point for any
E2E UI Test Automation duties that you would like to run against your web project.

It is a JavaScript based framework and uses Nightwatch for the heavy lifting.

This Repo has most of the items that you will need out of the box:

* Page Objects
* Example tests, using both raw selectors and page object references.

Notes have been made throughout the repo to help explain the specific areas that the notes are attached to. 

## First Steps

**Requirements**
Make sure that you have following correctly setup on your computer"
* Java - preferable Java 8 
* Node version 6.x.x (this will include npm 3.x.x)
* Chrome broswer
* Firefox broswser - you will only Firefox if you want to run the tests with Firefox.

After downloading the Repo, run the following to set it up correctly:

```npm install```

To confirm that it has correctly installed and configured properly run the following command:

```npm test```

To run the tests with a Firefox browser (if installed on your computer), run the following command:

```npm run test:firefox```
