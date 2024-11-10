const { MongoClient } = require("mongodb");

async function findTenants() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("Rentals");
        const result = await db.collection("Tenants").find({
            $or: [
                { "applications.status": "Pending" },
                { activeLeaseID: { $ne: null } }
            ]
        }).toArray();
        console.log("Matching Tenants:", result);
    } finally {
        await client.close();
    }
}

findTenants();
