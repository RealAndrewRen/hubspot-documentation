const axios = require("axios");
axios
  .post(
    "https://api.hubapi.com/crm/v3/objects/contacts",
    {
      properties: {
        company: "Test.com",
        hubspot_owner_id: "219132229",
        email: "test1234@testing.org",
        firstname: "Test",
        lastname: "Test",
        phone: "(877) 929-0555",
        website: "test.com",
        address: "25 First Street",
        city: "Cambridge",
        state: "MA",
        zip: "02139",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${"pat-na1-652f764b-69ae-4539-9177-f4b20c886d91"}`,
        "Content-Type": "application/json",
      },
    }
  )
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });
