const axios = require('axios');
axios.delete(
  "https://api.hubapi.com/crm/v3/objects/contacts/301",
  {
    headers: {
      Authorization: `Bearer ${"pat-na1-652f764b-69ae-4539-9177-f4b20c886d91"}`,
      "Content-Type": "application/json",
    },
  }).then(res => {console.log(res.data)}
);