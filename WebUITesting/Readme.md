# Web UI Testing

## Tools to be installed:
 - Pyton 2.7
 - Java 8 JRE
 - NodeJS 14+
 - download / install vs build tools from here
   https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=buildtools&rel=16&utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=offline+install&utm_content=download+vs2019
 - execute npm install --global --production windows-build-tools
 - execute npm install in current folder
 - execute npm install -g allure-commandline --save-dev
 - execute npm install -g chromedriver@latest
## Command to run tests
  npx wdio wdio.conf.js

## Command to open Allure test results
  > allure generate allure-results --clean -o allure-report && allure open
