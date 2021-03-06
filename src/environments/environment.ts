// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gapiClientConfig: {
    client_id: "7@#24@#5@#@###@#89#6@@@##7###63@#@###@#@26-#8rubm###@@@u@#@#s###e26cc@#@#@9e9hcu5s4##@@@#@nf@@@a#ehp3d57h.a@#@#pps@#@.g@#@#oo@#@#@gl@#eu@@#@#@ser@#@#con@#@t#en#t#.#c##o###m",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.readonly"
    ].join(" ")
  }
};