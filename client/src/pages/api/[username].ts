import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { username } = req.query;

  const url = "https://leetcode.com/graphql/";
  const headers = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.7",
    Authorization: "YourAuthorizationTokenHere", // Replace with your actual Authorization token
    "Content-Type": "application/json",
    Cookie: "568e64618f15ed106010276ef0ec7b16", // Replace with your actual Cookie value
    Origin: "https://leetcode.com",
    Referer: `https://leetcode.com/u/${username}/`, // Dynamically set referer based on username
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
    "X-Csrftoken":
      "irClyjQ7Qqcp8n65ZppYePQv6wo4mvzcuValmSaXlMeum9ZvYi0QYKmoVDieQKb7",
  };
  const payload1 = {
    operationName: "userSessionProgress",
    query: `
        query userSessionProgress($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
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
            }
        }
    `,
    variables: {
      username: username,
    },
  };
  const payload2 = {
    operationName: "userPublicProfile",
    query: `
        query userPublicProfile($username: String!) {
            matchedUser(username: $username) {
                contestBadge {
                    name
                    expired
                    hoverText
                    icon
                }
                username
                githubUrl
                twitterUrl
                linkedinUrl
                profile {
                    ranking
                    userAvatar
                    realName
                    aboutMe
                    school
                    websites
                    countryName
                    company
                    jobTitle
                    skillTags
                    postViewCount
                    postViewCountDiff
                    reputation
                    reputationDiff
                    solutionCount
                    solutionCountDiff
                    categoryDiscussCount
                    categoryDiscussCountDiff
                }
            }
        }
    `,
    variables: {
      username: username,
    },
  };
  const payload3 = {
    operationName: "userProfileCalendar",
    query: `
      query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            activeYears
            streak
            totalActiveDays
            dccBadges {
              timestamp
              badge {
                name
                icon
              }
            }
            submissionCalendar
          }
        }
      }
    `,
    variables: {
      username: username,
    },
  };

  try {
    const response1 = await axios.post(url, payload1, { headers });
    const response2 = await axios.post(url, payload2, { headers });
    const response3 = await axios.post(url, payload3, { headers });

    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;

    // Merge the data from both responses
    const combinedData = {
      userSessionProgress: data1.data,
      userPublicProfile: data2.data,
      userProfileCalendar: data3.data,
    };

    const total = combinedData.userSessionProgress.allQuestionsCount[0].count;
    const easyTotal =
      combinedData.userSessionProgress.allQuestionsCount[1].count;
    const mediumTotal =
      combinedData.userSessionProgress.allQuestionsCount[2].count;
    const hardTotal =
      combinedData.userSessionProgress.allQuestionsCount[3].count;

    const totalSolved =
      combinedData.userSessionProgress.matchedUser.submitStats
        .acSubmissionNum[0].count;
    const easySolved =
      combinedData.userSessionProgress.matchedUser.submitStats
        .acSubmissionNum[1].count;
    const mediumSolved =
      combinedData.userSessionProgress.matchedUser.submitStats
        .acSubmissionNum[2].count;
    const hardSolved =
      combinedData.userSessionProgress.matchedUser.submitStats
        .acSubmissionNum[3].count;

    const profileData = {
      username: combinedData.userPublicProfile.matchedUser.username,
      rank: combinedData.userPublicProfile.matchedUser.profile.ranking,
      image: combinedData.userPublicProfile.matchedUser.profile.userAvatar,
      fullName: combinedData.userPublicProfile.matchedUser.profile.realName,
    };
    const aboutData = {
      github: {
        link: combinedData.userPublicProfile.matchedUser.githubUrl,
        text: "Github",
      },
      website: {
        link: combinedData.userPublicProfile.matchedUser.profile.websites[0],
        text: "Website",
      },
      linkedin: {
        link: combinedData.userPublicProfile.matchedUser.linkedinUrl,
        text: "LinkedIn",
      },
      twitter: {
        link: combinedData.userPublicProfile.matchedUser.twitterUrl,
        text: "Twitter",
      },
    };

    const calendarData = combinedData.userProfileCalendar.matchedUser;
    const activeYears = calendarData.userCalendar.activeYears;
    const submissionCalendar = calendarData.userCalendar.submissionCalendar;

    res.status(200).json({
      profileData,
      aboutData,
      total,
      easyTotal,
      mediumTotal,
      hardTotal,
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      calendarData,
      activeYears,
      submissionCalendar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
