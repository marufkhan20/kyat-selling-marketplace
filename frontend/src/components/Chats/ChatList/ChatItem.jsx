const ChatItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 p-3 rounded-lg cursor-pointer transition-all hover:bg-primary-light">
      <div className="flex items-center gap-5">
        <img
          src="/images/buyer-1.jpg"
          alt="buyer"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <h4 className="text-base font-normal text-primary">John Doe</h4>
          <span className="text-sm">Hello</span>
        </div>
      </div>
      <span className="text-xs font-medium">Fri</span>
    </div>
  );
};

export default ChatItem;
