import * as angular from 'angular';
import './app.scss';
import {ComponentsModule} from './components/components.module';
import {thisModuleName} from './config';
import 'angular-local-storage';
// Performance tips:
// TODO don't forget to use one-time binding wherever possible: https://docs.angularjs.org/guide/expression#one-time-binding
//      As a good rule of thumb, start with everything as one-time binding, and change it when you actually need it.
//      Just like `const` vs `let`. Always start with `const`, and only change it when needed.
// TODO don't forget to use track by whenever you use a ngRepeat

// General tips:
// TODO Prefix all html classes with a standard prefix. This is useful to avoid collision with other projects.
// TODO Use the same prefix for all your AngularJS components, directives, services, etc.
//      Basically, anything your register on the IModule interface.
//      AngularJS, even to this day, doesn't handle namespace collisions and your risk encountering some very weird behaviour.
// TODO Please read the "Architecture" section: https://sass-guidelin.es/#architecture

// New AngularJS
// TODO never use .value or .constant. Use native JS for this!
//      If you want to go a step further, you can use angularjs-es6 to allow the use of Promises and fetch inside angular's context.

// Bugs
// TODO when bootstrap.html changes, webpack doesn't reload the page
// TODO webpack now reloads even for changes which don't need a reload, like adding a comment.

// Convention wise
// TODO decide: we have some inconsistencies with the controllers name. In .ts files they are named as SomethingController whereas in .html they are named somethingCtrl

// Awesome ideas
// TODO to have a templating tool. When we create a new folder with the name, say "encounter",
//      to automatically create the appropriated files: controller, module, component, html, scss.
//      These file should also contain some code to connect them together.

export const AppModule = angular
  .module(thisModuleName,
    [
      ComponentsModule,
      'LocalStorageModule'
    ])
  .config((localStorageServiceProvider) => {
    localStorageServiceProvider
      .setPrefix('cubic-calendar')
      .setStorageType('localStorage');
  })
  .name;

export {thisModuleName as moduleName} from './config';
