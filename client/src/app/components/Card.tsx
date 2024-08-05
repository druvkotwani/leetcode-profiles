import Circle from "./Circle";
import Profile from "./Profile";
import Questions from "./Questions";
import SocialLinks from "./SocialLinks";

const userData = {
  profileData: {
    image: "https://assets.leetcode.com/users/avatars/avatar_1672478903.png",
    fullName: "John Doe",
    username: "johndoe",
    badgeImg: "/assets/images/badges/1.png",
    rank: "203432",
  },
  aboutData: {
    github: { link: "https://github.com/druvkotwani", text: "druvkotwani" },
    twitter: { link: "https://twitter.com/druv_kotwani", text: "druv_kotwani" },
    linkedin: {
      link: "https://linkedin.com/in/dhruv-kotwani",
      text: "dhruv-kotwani",
    },
    website: {
      link: "https://dhruvkotwani.me",
      text: "dhruvkotwani.vercel.app",
    },
  },

  totalSolved: 100,

  easySolved: 50,
  easyTotal: 100,
  easyBeats: 50,
  mediumSolved: 30,
  mediumTotal: 50,
  mediumBeats: 20,
  hardSolved: 20,
  hardTotal: 50,
  hardBeats: 30,
};

export default function Card({ data, index }: any) {
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
