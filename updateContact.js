const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({"accessToken": "pat-na1-652f764b-69ae-4539-9177-f4b20c886d91"});

const properties = {
  "company": "Company",
  "email": "dbcooper@spaghet.net",
  "firstname": "DB",
  "lastname": "Cooper",
  "phone": "(877) 929-0687",
  "website": "website.net"
};
const SimplePublicObjectInput = { properties };
const contactId = "351";
hubspotClient.crm.contacts.basicApi.update(contactId, SimplePublicObjectInput).then(res => {
  console.log(res);
});
