// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";

const jsonData = {
    jsonrpc: "2.0",
    id: "0",
    method: "marketplace_global_get_offers_ex",
    params: {
        filter: {
            amount_low_limit: 0,
            amount_up_limit: 0,
            bonus: false,
            category: "",
            fake: false,
            keyword: "",
            limit: 100,
            location_city: "",
            location_country: "",
            offer_type_mask: 0,
            offset: 0,
            order_by: 0,
            primary: "",
            rate_low_limit: "0.000000",
            rate_up_limit: "0.000000",
            reverse: false,
            target: "",
            timestamp_start: 0,
            timestamp_stop: 0,
        },
    },
};

export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "*",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (req.method === "POST") {
            const response = await fetch("http://127.0.0.1:11211/json_rpc", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            })

            let offers= await response.json();

       res.status(200).json(offers);
    }
}
