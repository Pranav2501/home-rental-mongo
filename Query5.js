const { MongoClient } = require("mongodb");

async function getPropertiesByOwner() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("Rentals");
        const owner = await db.collection("PropertyOwners").findOne(
            { _id: "owner003" },
            { projection: { properties: 1 } }
        );
        console.log("Properties for owner003:", owner.properties);
    } finally {
        await client.close();
    }
}

getPropertiesByOwner();
