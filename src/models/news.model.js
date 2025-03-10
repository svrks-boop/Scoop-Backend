import pkg from "mongoose";
const { Schema, model } = pkg;

const newsSchema = new Schema(
  {
    Headline: {
      type: String,
      required: true,
      min: 2,
      max: 200,
    },
    Location: {
      type: String,
      default: "",
    },
    // Storing HTML file as a string
    Description: {
      type: String,
      required: true,
      min: 2,
      max: 2000,
    },
    Tags: [
      {
        type: String,
        default: "",
      },
    ],
    UpvoteCount: {
      type: Number,
      default: 0,
    },
    User: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

const News = model("News", newsSchema);

export default News;
