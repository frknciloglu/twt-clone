import React from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { TopTweetIcon } from "../icons/icons";

const Content = () => {
  return (
    <main className="flex-1  flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <TopTweetIcon className="text-primary-base w-60 h-60" />
      </header>
      <div className="flex px-3 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1395756690063208449/n3O4W_9F_400x400.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <TweetBox></TweetBox>
      </div>
      <Divider></Divider>
    </main>
  );
};

export default Content;
