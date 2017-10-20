## Required tools
- [NodeJS](https://nodejs.org/)
- [Gulp](http://gulpjs.com) (```$ npm install -g gulp-cli``` and ```npm install --save-dev gulp```) (only for development)

## Install dependencies
First you have to install the dependencies, you can use both [YARN](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com/):
- `yarn install`
- `npm install`

## Commands
Here a list of available commands:

`yarn build`
> Start the build task.

`yarn bump`
> Bump the library version. You can pass some arguments: `--minor`, `--major`. Default: `--patch`

`yarn changelog`
> Generate the changelog based on semantic-commits tags


## Test / Demo
Run an `http-server` inside the demo folder.
- Navigate to `/` path to check the icon font demo
- Navigate to `/svg` to check che svg sprite demo
- Navigate to `/webcomponent` to check che iron-iconset-svg sprite demo
