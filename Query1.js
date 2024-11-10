const { MongoClient } = require("mongodb");

async function totalRentCollected() {
    const client = new MongoClient("mongodb://localhost:27017");
    try {
        await client.connect();
        const db = client.db("Rentals");
        const result = await db.collection("LeaseAgreements").aggregate([
            { $unwind: "$payments" },
            {
                $group: {
                    _id: null,
                    totalRent: { $sum: "$payments.amount" }
                }
            }
        ]).toArray();
        console.log("Total Rent Collected:", result[0].totalRent);
    } finally {
        await client.close();
    }
}

totalRentCollected();
