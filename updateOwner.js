const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({"accessToken": "pat-na1-652f764b-69ae-4539-9177-f4b20c886d91"});

const properties = {
  hubspot_owner_id: "219132229",
};
const SimplePublicObjectInput = { properties };
const contactId = "1";
hubspotClient.crm.contacts.basicApi.update(contactId, SimplePublicObjectInput).then(res => {
  console.log(res);
});
