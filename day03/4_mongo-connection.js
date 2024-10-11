const { MongoClient } = require("mongodb");
// mongodb+srv://root:<db_password>@cluster0.mej9l.mongodb.net/
const uri = "mongodb+srv://root:0000@cluster0.mej9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());