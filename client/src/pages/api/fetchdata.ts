// pages/api/messages.js
import connectToDatabase from "../../lib/mongodb";
import UserData from "../../models/userdata";

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { search, page = 1, limit = 11, sortBy = "default" } = req.query;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const pageNumber = parseInt(page as string);
        const limitNumber = parseInt(limit as string);
        const skip = (pageNumber - 1) * limitNumber;

        // Build the query based on search parameter
        let query = {};
        if (search) {
          query = {
            "profileData.fullName": { $regex: search, $options: "i" },
          };
        }

        // Determine sort options based on sortBy parameter
        let sortOptions = {};
        switch (sortBy) {
          case "question-solved":
            sortOptions = { totalSolved: -1 }; // -1 for descending order
            break;
          case "default":
          default:
            sortOptions = { timeStamp: -1 }; // Sort by timestamp descending (newest first)
            break;
        }

        // Get total count for pagination
        const totalItems = await UserData.countDocuments(query);

        // Fetch data with pagination and sorting
        const messages = await UserData.find(query)
          .sort(sortOptions)
          .skip(skip)
          .limit(limitNumber);

        res.status(200).json({
          success: true,
          data: messages,
          pagination: {
            total: totalItems,
            page: pageNumber,
            limit: limitNumber,
            totalPages: Math.ceil(totalItems / limitNumber),
          },
        });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
