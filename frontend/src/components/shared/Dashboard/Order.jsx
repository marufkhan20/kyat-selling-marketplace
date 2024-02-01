const Order = () => {
  return (
    <div className="p-6 border-b flex justify-between gap-4 flex-wrap items-center mb-2 bg-white">
      <div className="h-14 overflow-hidden rounded-lg border">
        <img src="/images/buyer-1.jpg" className="w-14 rounded-lg" alt="" />
      </div>
      <span className="font-medium">#F9FCFF</span>
      <span>31 Jan, 2024</span>
      <span>USD</span>
      <span>$250</span>
      <span>3380</span>
      <span className="text-primary">Accept</span>
    </div>
  );
};

export default Order;
