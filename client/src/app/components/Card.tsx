import Circle from "./Circle";
import Profile from "./Profile";
import Questions from "./Questions";
import SocialLinks from "./SocialLinks";

export const data = {
  profileData: {
    username: "druv_kotwani",
    rank: 263817,
    image: "https://assets.leetcode.com/users/avatars/avatar_1672478903.png",
    fullName: "Dhruv Kotwani",
  },
  aboutData: {
    github: {
      link: "https://github.com/druvkotwani",
      text: "Github",
    },
    website: {
      link: "https://dhruvkotwani.vercel.app",
      text: "Website",
    },
    linkedin: {
      link: "https://linkedin.com/in/dhruv-kotwani",
      text: "LinkedIn",
    },
    twitter: {
      link: "https://twitter.com/druv_kotwani",
      text: "Twitter",
    },
  },
  total: 3247,
  easyTotal: 817,
  mediumTotal: 1704,
  hardTotal: 726,
  totalSolved: 306,
  easySolved: 175,
  mediumSolved: 110,
  hardSolved: 21,
};

export default function Card({ userData = data, index }: any) {
  return (
    <div className="max-w-[400px] w-full px-8 pb-3 bg-[#0e0e0e] flex justify-center flex-col items-center rounded h-[280px] border-2 border-[#cecece]">
      <div>
        <div className="flex gap-1 xl:gap-4 items-center justify-between ">
          {/* Profile */}
          <Profile userData={userData?.profileData} index={index} />

          {/* About */}
          <SocialLinks result={userData?.aboutData} index={index} />
        </div>
        <div
          style={{ height: "0.5px", backgroundColor: "#E0E0E0" }}
          className="h-[0.5px] bg-white"
        />

        <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
          {/* Circle */}

          <Circle total={userData?.totalSolved} />

          <div className="flex flex-col gap-3">
            {/* Questions */}

            <Questions
              type={"Easy"}
              solved={userData?.easySolved}
              total={userData?.easyTotal}
              beats={userData?.easyBeats}
              line="bg-[#2db55d26]"
              line2="bg-[#01B8A2]"
            />

            <Questions
              type={"Medium"}
              solved={userData?.mediumSolved}
              total={userData?.mediumTotal}
              beats={userData?.mediumBeats}
              line="bg-[#ffb80026]"
              line2="bg-[#FFC11F]"
            />

            <Questions
              type={"Hard"}
              solved={userData?.hardSolved}
              total={userData?.hardTotal}
              beats={userData?.hardBeats}
              line="bg-[#ef474326]"
              line2="bg-[#EF4642]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
