// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  api_url: 'https://sso.core.api.xxx98qn.xyz',

  client_id: "single.sign.on.client",
  authority: 'https://sso.core.api.xxx98qn.xyz',
  redirect_uri: 'http://sso.core.user.xxx98qn.xyz/auth-callback',
  post_logout_redirect_uri: 'http://sso.core.user.xxx98qn.xyz',
  scope: 'sso.api openid profile',
  silent_redirect_uri: 'http://sso.core.user.xxx98qn.xyz/silent-renew.html',
  response_type: 'code',
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