const Information = () => {
  return (
    <section>
      <h2 className="text-[28px] mb-3 font-normal">Randall Henderson</h2>
      <p>IT Contractor</p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-7 flex justify-between gap-5 items-start rounded-lg info-card-1 text-white">
          <div>
            <img src="/images/icons/briefcase.png" alt="icon" />
            <h4 className="text-lg mt-3 font-normal">Completed Orders</h4>
          </div>
          <span className="text-[50px] !font-normal">50</span>
        </div>
        <div className="p-7 flex justify-between gap-5 items-start rounded-lg info-card-2 text-white">
          <div>
            <img src="/images/icons/notes.png" alt="icon" />
            <h4 className="text-lg mt-3 font-normal">Active Orders</h4>
          </div>
          <span className="text-[50px] !font-normal">10</span>
        </div>
        <div className="p-7 flex justify-between gap-5 items-start rounded-lg info-card-3 text-white">
          <div>
            <img src="/images/icons/conversation.png" alt="icon" />
            <h4 className="text-lg mt-3 font-normal">Messages</h4>
          </div>
          <span className="text-[50px] !font-normal">28</span>
        </div>
        <div className="p-7 flex justify-between gap-5 items-start rounded-lg info-card-4 text-white">
          <div>
            <img src="/images/icons/ringing.png" alt="icon" />
            <h4 className="text-lg mt-3 font-normal">Notifications</h4>
          </div>
          <span className="text-[50px] !font-normal">18</span>
        </div>
      </div>
    </section>
  );
};

export default Information;
