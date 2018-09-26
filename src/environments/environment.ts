// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
let fireBaseConfig = {
    apiKey: "AIzaSyALHdjufpTuwLNc6x3r1riiBcq3P5LGnE4",
    authDomain: "resume-4cb3d.firebaseapp.com",
    databaseURL: "https://resume-4cb3d.firebaseio.com",
    projectId: "resume-4cb3d",
    storageBucket: "resume-4cb3d.appspot.com",
    messagingSenderId: "282908447778"
};

export const environment = {
    production: false,
    fireBaseConfig: fireBaseConfig,
};
