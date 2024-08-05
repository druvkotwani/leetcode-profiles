import Circle from "./Circle";
import Profile from "./Profile";
import Questions from "./Questions";
import SocialLinks from "./SocialLinks";

const userData = {
  profileData: {
    image: "/assets/images/avatars/avatar.png",
    fullName: "John Doe",
    username: "johndoe",
    badgeImg: "/assets/images/badges/1.png",
    rank: "Intermediate",
  },
  aboutData: {
    github: {
      link: " ",
      text: " ",
    },
    twitter: {
      link: " ",
      text: " ",
    },
    linkedin: {
      link: " ",
      text: " ",
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
    <div className="flex justify-center flex-col items-center rounded-lg h-[280px] border border-[#cecece]">
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

          <Circle total={data?.totalSolved} />

          <div className="flex flex-col gap-3">
            {/* Questions */}

            <Questions
              type={"Easy"}
              solved={data?.easySolved}
              total={data?.easyTotal}
              beats={data?.easyBeats}
              line="bg-[#2db55d26]"
              line2="bg-[#01B8A2]"
            />

            <Questions
              type={"Medium"}
              solved={data?.mediumSolved}
              total={data?.mediumTotal}
              beats={data?.mediumBeats}
              line="bg-[#ffb80026]"
              line2="bg-[#FFC11F]"
            />

            <Questions
              type={"Hard"}
              solved={data?.hardSolved}
              total={data?.hardTotal}
              beats={data?.hardBeats}
              line="bg-[#ef474326]"
              line2="bg-[#EF4642]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
