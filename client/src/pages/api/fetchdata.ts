// pages/api/messages.js
import connectToDatabase from "../../lib/mongodb";
import UserData from "../../models/userdata";

export default async function handler(req: any, res: any) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const messages = await UserData.find({});
        res.status(200).json({ success: true, data: messages });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
