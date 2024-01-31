const Message = ({ sender }) => {
  return (
    <div className={`w-[90%] sm:w-[80%] ${sender && "self-end"}`}>
      <img
        src="/images/buyer-1.jpg"
        alt="buyer"
        className="w-8 h-8 rounded-full"
      />
      <div
        className={`${
          sender ? "bg-[#F5F5F5]" : "bg-primary-light"
        } mt-2 rounded-lg py-4 px-7`}
      >
        <p>
          Breaking the endless cycle of meaningless text message conversations
          starts with only talking to someone who offers interesting topics
          opinions.
        </p>
      </div>
      <p className="text-sm text-right mt-2 text-gray-500">12:13 PM</p>
    </div>
  );
};

export default Message;
