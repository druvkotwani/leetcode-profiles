import connectToDatabase from "../../lib/mongodb";
import UserData from "../../models/userdata";
import axios from "axios";

// Function to fetch updated data from LeetCode for a user
async function fetchLeetCodeData(username: string) {
  try {
    // LeetCode GraphQL API endpoint
    const endpoint = "https://leetcode.com/graphql";

    // GraphQL query to fetch user profile and stats
    const query = `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            realName
            userAvatar
            ranking
          }
          submissionCalendar
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          socialAccounts {
            provider
            profileUrl
          }
        }
      }
    `;

    // Make the request to LeetCode API
    const response = await axios.post(endpoint, {
      query,
      variables: { username },
    });

    const userData = response.data.data.matchedUser;

    if (!userData) {
      return null;
    }

    // Extract social accounts
    const github = userData.socialAccounts.find(
      (account: any) => account.provider === "GITHUB"
    );
    const twitter = userData.socialAccounts.find(
      (account: any) => account.provider === "TWITTER"
    );
    const linkedin = userData.socialAccounts.find(
      (account: any) => account.provider === "LINKEDIN"
    );
    const website = userData.socialAccounts.find(
      (account: any) => account.provider === "WEBSITE"
    );

    // Extract submission stats
    const totalSolved = userData.submitStats.acSubmissionNum.find(
      (stat: any) => stat.difficulty === "All"
    ).count;
    const easySolved = userData.submitStats.acSubmissionNum.find(
      (stat: any) => stat.difficulty === "Easy"
    ).count;
    const easyTotal = userData.submitStats.totalSubmissionNum.find(
      (stat: any) => stat.difficulty === "Easy"
    ).count;
    const mediumSolved = userData.submitStats.acSubmissionNum.find(
      (stat: any) => stat.difficulty === "Medium"
    ).count;
    const mediumTotal = userData.submitStats.totalSubmissionNum.find(
      (stat: any) => stat.difficulty === "Medium"
    ).count;
    const hardSolved = userData.submitStats.acSubmissionNum.find(
      (stat: any) => stat.difficulty === "Hard"
    ).count;
    const hardTotal = userData.submitStats.totalSubmissionNum.find(
      (stat: any) => stat.difficulty === "Hard"
    ).count;

    // Format the data to match our schema
    return {
      profileData: {
        image: userData.profile.userAvatar,
        fullName: userData.profile.realName,
        username: userData.username,
        rank: userData.profile.ranking.toString(),
      },
      aboutData: {
        github: {
          link: github ? github.profileUrl : "",
          text: github ? github.profileUrl.split("/").pop() : "",
        },
        twitter: {
          link: twitter ? twitter.profileUrl : "",
          text: twitter ? twitter.profileUrl.split("/").pop() : "",
        },
        linkedin: {
          link: linkedin ? linkedin.profileUrl : "",
          text: linkedin ? linkedin.profileUrl.split("/").pop() : "",
        },
        website: {
          link: website ? website.profileUrl : "",
          text: website ? website.profileUrl.split("/").pop() : "",
        },
      },
      totalSolved,
      easySolved,
      easyTotal,
      mediumSolved,
      mediumTotal,
      hardSolved,
      hardTotal,
      timeStamp: new Date(),
    };
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return null;
  }
}

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { username, secretKey } = req.query;

  // Add a simple secret key check to prevent unauthorized access
  const expectedSecretKey =
    process.env.SYNC_SECRET_KEY || "your-default-secret-key";
  if (secretKey !== expectedSecretKey) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        // If username is provided, sync only that user
        if (username) {
          const user = await UserData.findOne({
            "profileData.username": username,
          });

          if (!user) {
            return res
              .status(404)
              .json({ success: false, message: "User not found" });
          }

          const updatedData = await fetchLeetCodeData(username);

          if (!updatedData) {
            return res.status(400).json({
              success: false,
              message: "Failed to fetch updated data",
            });
          }

          // Update the user data
          await UserData.findOneAndUpdate(
            { "profileData.username": username },
            updatedData,
            { new: true }
          );

          return res.status(200).json({
            success: true,
            message: `Successfully synced profile for ${username}`,
          });
        }
        // If no username is provided, return error
        else {
          return res
            .status(400)
            .json({ success: false, message: "Username is required" });
        }
      } catch (error) {
        console.error("Error syncing profile:", error);
        return res
          .status(500)
          .json({ success: false, error: "Internal server error" });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
