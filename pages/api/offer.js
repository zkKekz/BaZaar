import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("marketplace");

    switch (req.method) {
        case "POST":
            const addOffer = await db
                .collection("vendors")
                .updateMany(
                    { _id: new ObjectId(req.body._id) },
                    { $push: { offers: req.body.tx } }
                );
            res.json({ status: 200, data: addOffer });
            break;

        // twitter: req.body.socials.twitter,

        case "GET":
            const allVendors = await db
                .collection("vendors")
                .find({})
                .toArray();
            console.log(allVendors);
            res.json({ status: 200, data: allVendors });
            break;
    }

    // let bodyObject = JSON.parse(req.body); // update object
    // const postResult = await db.collection("vendors").updateMany(
    //     { _id: new ObjectId(req.body._id) },
    //     {
    //         $set: {
    //             socials: {
    //                 twitter: req.body.socials.twitter,
    //                 discord: req.body.socials.discord,
    //                 telegram: req.body.socials.telegram,
    //                 github: req.body.socials.github,
    //                 email: req.body.socials.email,
    //             },
    //         },
    //     }
    // );
    // res.json("updated credentials");
    // break;

    // fetch data
}
