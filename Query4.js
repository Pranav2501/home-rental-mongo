const { MongoClient } = require("mongodb");

async function updateMaintenanceRequest() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("Rentals");
        const result = await db.collection("MaintenanceRequests").updateOne(
            { _id: "request001" },
            { $set: { status: "Completed" } }
        );
        console.log("Maintenance Request Updated:", result.modifiedCount);
    } finally {
        await client.close();
    }
}

updateMaintenanceRequest();
