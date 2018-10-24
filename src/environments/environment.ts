// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: "http://localhost:3000/api/",
  gapiClientConfig: {
    client_id: "7$24$58@@@@@$96$@@7$6$3$26-8$rub$m$u$se$2$$$6c$c$9$@@@e9h$$$$cu@@@5s4@@@n$$$$fae$$$$hp3@@@d57h.app@@s$$$.$$$$googl@@eu$$$$$$@@@@$s$$$$$$$erc@@@@onte@@@@nt.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets.readonly"
    ].join(" ")
  }
};