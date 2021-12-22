// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const webUrl = window.location.origin;
export const environment = {
  production: false,

  api_url: 'https://sso.core.api.xxx98qn.xyz',

  authority: 'https://sso.core.api.xxx98qn.xyz',
  redirect_uri: 'http://localhost:4300/auth-callback',
  post_logout_redirect_uri: 'http://localhost:4300/',
  response_type: 'code',
  scope: 'sso.api openid profile',
  silent_redirect_uri: 'http://localhost:4300/silent-renew.html',
  filterProtocolClaims: true,
  loadUserInfo: true,
  automaticSilentRenew: true,
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.