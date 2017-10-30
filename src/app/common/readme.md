We no longer use a `common.module.ts` as we believe the dependencies must be explicitly required in the module they are used. This way, we have a clear overview of where something is used, and it also eases the testing process.
Nonetheless, this is the current approach of Angular 4.
