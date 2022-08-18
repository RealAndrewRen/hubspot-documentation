/* const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  accessToken: "pat-na1-652f764b-69ae-4539-9177-f4b20c886d91",
});
*/
const axios = require('axios');
axios.get(
  "https://api.hubapi.com/crm/v3/objects/contacts",
  {
    headers: {
      Authorization: `Bearer ${"pat-na1-652f764b-69ae-4539-9177-f4b20c886d91"}`,
      "Content-Type": "application/json",
    },
  }).then(res => {console.log(res.data.results[0].properties)}
);
