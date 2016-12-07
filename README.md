# new-app3

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.1.1.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.


## Heroku
Because you're using mongoose, you must add mongoDB to your heroku app.
        from `/dist`: heroku addons:create mongolab

You will need to set environment variables for facebook auth. From `/dist`:
        heroku config:set FACEBOOK_ID=appId
        heroku config:set FACEBOOK_SECRET=secret

You will need to set environment variables for google auth. From `/dist`:
        heroku config:set GOOGLE_ID=appId
        heroku config:set GOOGLE_SECRET=secret

You will need to set environment variables for twitter auth. From `/dist`:
        heroku config:set TWITTER_ID=appId
        heroku config:set TWITTER_SECRET=secret


Your app should now be live. To view it run
        cd dist && heroku open

You may need to address the issues mentioned above and restart the server for the app to work correctly.
After app modification run
        grunt build
Then deploy with
        grunt buildcontrol:heroku
