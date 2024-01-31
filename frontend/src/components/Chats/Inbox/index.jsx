import { BsSendFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import Message from "./Message";

const Inbox = () => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="p-5 border-b flex items-center justify-between gap-5">
        <div>
          <h4>John Doe</h4>
          <span className="text-primary">Active</span>
        </div>
        <div className="flex items-center gap-2 text-red-600 cursor-pointer">
          <RiDeleteBinLine />
          <span>Delete Conversation</span>
        </div>
      </div>

      <div className="px-5 py-10 flex flex-col gap-6 h-[600px] overflow-auto">
        <Message />
        <Message sender />
        <Message />
        <Message sender />
        <Message />
        <Message sender />
        <Message />
        <Message sender />
      </div>

      <div className="bg-[#F0F6FE] p-4 mt-10 flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Type a message here"
          className="outline-none pl-2 py-1 w-full block bg-transparent"
        />
        <BsSendFill className="text-3xl cursor-pointer text-primary" />
      </div>
    </div>
  );
};

export default Inbox;
