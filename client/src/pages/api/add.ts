// pages/api/messages.js
import connectToDatabase from "../../lib/mongodb";
import UserData from "../../models/userdata";

export default async function handler(req: any, res: any) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "POST":
      try {
        const timeStamp = new Date();
        const { username } = req.body.profileData;

        // Check if the user already exists
        const existingUser = await UserData.findOne({
          "profileData.username": username,
        });

        if (existingUser) {
          return res
            .status(400)
            .json({ success: false, message: "Username already exists" });
        }

        // Create new user if username doesn't exist
        const message = await UserData.create({ ...req.body, timeStamp });
        res.status(201).json({ success: true, data: message });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
