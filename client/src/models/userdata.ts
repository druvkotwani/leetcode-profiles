import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
  profileData: {
    image: String,
    fullName: String,
    username: String,
    rank: String,
  },
  aboutData: {
    github: {
      link: String,
      text: String,
    },
    twitter: {
      link: String,
      text: String,
    },
    linkedin: {
      link: String,
      text: String,
    },
    website: {
      link: String,
      text: String,
    },
  },

  totalSolved: Number,
  easySolved: Number,
  easyTotal: Number,
  mediumSolved: Number,
  mediumTotal: Number,
  hardSolved: Number,
  hardTotal: Number,
});

export default mongoose.models.userdatas ||
  mongoose.model("userdatas", userDataSchema);
