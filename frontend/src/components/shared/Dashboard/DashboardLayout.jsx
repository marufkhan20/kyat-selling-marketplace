import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <section className="section-container">
      <div className="container-custom flex flex-col lg:flex-row justify-between gap-6">
        <Sidebar />
        <div className="dashboard-content h-fit bg-[#F9FCFF] py-7 px-2 sm:px-8 rounded-lg flex flex-col gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
