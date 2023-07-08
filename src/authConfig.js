export const msalConfig = {
  auth: {
    clientId: "75276a4e-0c3b-4758-a78c-33904576243b",
    authority: "https://login.microsoftonline.com/b511dfbf-cb79-4dcf-b4a5-f88702c4a412", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://wbwcrmLab070723a.azurewebsites.net",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: tru, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read", "Calendars.Read", "Calendars.ReadWrite", "Calendars.Read.Shared", "Contacts.Read", "Contacts.ReadWrite", "Group.ReadWrite.All", "Directory.ReadWrite.All"]
};
// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};