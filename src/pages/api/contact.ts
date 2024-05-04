// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

type Data = {
  name?: string;
  message?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(402).json({ error: "Please fill in all fields" });
    }

    // Process the contact form submission
    // (e.g., save the data to a database, send an email, etc.)
    const contactData = { name, email, message };

    const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    const mongoClient = await MongoClient.connect(dbURL);
    try {
      const db = mongoClient.db();
      await db.collection("messages").insertOne(contactData);
    } catch (error) {
      mongoClient.close();
      return res.status(500).json({
        error:
          "An error occurred while processing your request. Please try again later.",
      });
    }

    mongoClient.close();
    // Return a success response
    return res.status(201).json({ message: "Thank you for your message!" });
  }

  res.status(500).json({ name: "Not allowed" });
}
