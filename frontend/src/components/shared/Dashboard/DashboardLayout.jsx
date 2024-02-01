const DashboardLayout = ({ children }) => {
  return (
    <section className="section-container">
      <div className="container-custom">
        {/* <Sidebar /> */}
        <div className="w-full h-fit bg-[#F9FCFF] py-7 px-2 sm:px-8 rounded-lg flex flex-col gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
