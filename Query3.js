const { MongoClient } = require("mongodb");

async function countMaintenanceRequests() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("Rentals");
        const count = await db.collection("MaintenanceRequests").countDocuments({ tenantID: "tenant009" });
        console.log(`Number of Maintenance Requests for tenant009: ${count}`);
    } finally {
        await client.close();
    }
}

countMaintenanceRequests();
