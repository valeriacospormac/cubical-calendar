import { module } from 'angular';
import { AppModule } from '../app.module';
import './_mock.scss';

/**
 * This module contains all the mock data which creates a demo.
 * Notice how it adds its dependencies into appModule! This way, if we don't include this file, we won't have any mock code in production.
 *
 * Since the content of this folder won't be used in production, it doesn't necessarily adhere to any best practices.
 * However, this should not be a reason to just throw code in here.
 */
module(AppModule).requires.push(...[]);
