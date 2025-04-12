const { MongoClient } = require('mongodb');

const URI="mongodb+srv://namastedev:joD0C4osLbgcGzKr@namastenode.qyxpw.mongodb.net/";

const client = new MongoClient(URI);
const dbName = 'HelloWorld';
async function main() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  //Insert the document Using insertOne
  // const data={
  //   firstname:"virat",
  //   lastname:"kohli",
  //   city:"delhi",
  //   mobileno:"9032160357"
  // };
  // const insertResult=await collection.insertOne(data);
  // console.log("Inserted documents=>",insertResult);

  //Insert the document using insertMany
  const data=[{
    firstname:"Rohit",
    lastname:"Sharma",
    city:"AP",
    mobileno:"9032160357"
  },
  {
    firstname:"Shubman",
    lastname:"Gill",
    city:"Gujarat",
    mobileno:"9032160357"
  }];
  const insert=await collection.insertMany(data);
  console.log("Inserted documents=>",insert);
  //Find the documents
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  //Find the document with certain query
  // const filteredDocs = await collection.find({firstname:"varshith" }).toArray();
  // console.log('Found documents filtered by { firstname:"varshith" } =>', filteredDocs);
  
  //Update the document
  // const updateResult = await collection.updateOne({firstname:"varshith" }, { $set: {firstname:"sai" }});
  // console.log('Updated documents =>', updateResult);

  //Find the document with certain query
  const filteredDocs = await collection.find({lastname:"padukone" }).toArray();
  console.log('Found documents filtered by { lastname:"padukone" } =>', filteredDocs);

  //count the documents in User collection
  const countdocuments=await collection.countDocuments({});
  console.log("count of the documents in User collection=>",countdocuments);
  
  //count the docs with certain filter
  const countdocs=await collection.countDocuments({city:"mumbai"});
  console.log("Count of documents with city as mumbai=>",countdocs);

  //Find the count of documents with certain query
  const countofDocs = await collection.count({});
  console.log('Count of documents  =>', countofDocs);
  
  //Count using Estimated Document count
  const count=await collection.estimatedDocumentCount({});
  console.log("Estimated Document count=>",count);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

