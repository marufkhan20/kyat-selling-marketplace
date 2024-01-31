import { IoSearch } from "react-icons/io5";
import ChatItem from "./ChatItem";

const ChatList = () => {
  return (
    <div className="hidden md:block w-[400px] bg-white px-2 py-4 rounded-lg">
      <div className="bg-[#F0F6FE] p-2 rounded-lg flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Search Messages"
          className="outline-none pl-2 py-1 w-full block bg-transparent"
        />
        <IoSearch className="text-3xl cursor-pointer text-primary" />
      </div>

      <div className="mt-2 h-[700px] overflow-auto">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default ChatList;
