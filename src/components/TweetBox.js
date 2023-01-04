import {
  MediaIcon,
  GifIcon,
  PollIcon,
  EmojiIcon,
  SchedulaIcon,
} from "../icons/icons";
import db from "../firebase";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { CollectionReference } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = () => {
    console.log({ content });
    if (content !== "") {
    }
  };

  return (
    <div className="flex-1 flex-col flex mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="Whats happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-between -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <MediaIcon className="text-primary-base "></MediaIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <GifIcon className="text-primary-base "></GifIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <PollIcon className="text-primary-base "></PollIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <EmojiIcon className="text-primary-base "></EmojiIcon>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light">
            <SchedulaIcon className="text-primary-base "></SchedulaIcon>
          </div>
        </div>
        <button
          onClick={sendTweet()}
          className=" bg-primary-base text-white rounded-full px-4 py-2 font-medium "
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
