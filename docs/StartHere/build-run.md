---
id: build-run
sidebar_position: 3
---

# Build and Run

## Quick Steps


**iOS**

**Android**

The following code snippet is a basic example on how to do CRUD operations and optionally running bi-directional sync with Sync Gateway in Typescript.

```typescript
import {
	Database,
	DatabaseConfiguiration,
	FileSystem,
	Collection,
	Query,
	MutableDocument,
	BasicAuthenticator,
	Replicator,
	ReplicatorActivityLevel,
	ReplicatorConfiguration,
	ReplicatorType,
	URLEndpoint
} from 'cbl-reactnative';


async function runDbSample() : Promise<void> {
 try {
 //get a file path that you can write the database file to for each platform
 const fileSystem = new FileSystem();
 const directoryPath = await fileSystem.getDefaultPath();

 const dc = new DatabaseConfiguration();
 dc.setDirectory(directoryPath);
 const database = new Database('travel', dc);

 await database.open();
 const collection = database.getDefaultCollection();

 //create a document
 const mutableDoc = new MutableDocument('doc-1');
 mutableDoc.setFloat('version', 3.1);
 mutableDoc.setString('type', 'SDK');

 //save it to the database
 await collection.save(mutableDoc);

 //update the document
 const mutableDoc2 = await collection.document('doc-1');
 mutableDoc2.setString('language', 'Typescript');
 await collection.save(mutableDoc2);

 //create a query to get the documents of type SDK
 const query = database.createQuery('SELECT * FROM _default._default WHERE type = "SDK"');

 //run the query
 const results = await query.execute();

 console.log('Number of documents of type SDK: ' + results.length);

 //loop through the results and do something with them
 for (const item of results) {
 	//to something with the data
	const doc = item['_default'];	
	console.log(doc.type);
	console.log(doc.language);
 }

 //assumes you are running sync gateway locally, if you are 
 //running app services, replace enpoint with proper url and creditentials
 const target = new URLEndpoint('ws://localhost:4984/projects');
 const auth = new BasicAuthenticator('demo@example.com', 'P@ssw0rd12');
 const config = new ReplicatorConfiguration(target);
 config.addCollection(this.collection);
 config.setAuthenticator(auth);

 const replicator = await Replicator.create(config);

 //listen to the replicator change events
 const token = await replicator.addChangeListener((change) => {
	//check to see if there was an error
   	const error = change.status.getError();
  	if (error !== undefined) {
		//do something with the error
   	}
   	//get the status of the replicator using ReplicatorActivityLevel enum
  	if (change.status.getActivityLevel() ===  ReplicatorActivityLevel.IDLE) {
   		//do something because the replicator is now IDLE
   	}
 });

 // start the replicator without making a new checkpoint
 await replicator.start(false);

 //remember you must clean up the replicator when done with it by 
 //doing the following lines

 //await replicator.removeChangeListener(token);
 //await replicator.stop();

 } catch (e) {
	console.error(e);
 }
}
```
