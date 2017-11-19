import * as angular from 'angular';
import './app.scss';
import {ComponentsModule} from './components/components.module';
import {thisModuleName} from './config';
import 'angular-local-storage';

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
