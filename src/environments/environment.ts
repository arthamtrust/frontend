// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APP_ENDPOINT: "https://db.vinoth.info/v1",
  APP_PROJECT: "638c3341b5b5e96ee679",

  DATABASE: {
    ID: "638d5f9812e6f6db7e31",
    GALLERY: "638d8b08b234f83ba2fd",
    POSTS: "638d87a8dbe4fea9e4f5",
    CONTRIBUTORS: "638dffe30a7b2c47ab42",
    STUDENTS: "638dff375ee6f37fecd7",
  },
};

export const API_URL = "https://db.vinoth.info/v1";

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
