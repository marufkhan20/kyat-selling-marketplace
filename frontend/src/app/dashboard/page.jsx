import Information from "@/components/dashboard/Information";
import BreadCumb from "@/components/shared/BreadCumb";
import DashboardLayout from "@/components/shared/Dashboard/DashboardLayout";
import Orders from "@/components/shared/Dashboard/Orders";
import Transactions from "@/components/shared/Dashboard/Transactions";

const DashboardPage = () => {
  return (
    <main>
      <BreadCumb page="Seller Dashboard" />
      <DashboardLayout>
        <Information />
        <Transactions viewButton title="Latest Transactions" />
        <Orders viewButton title="Active Orders" />
      </DashboardLayout>
    </main>
  );
};

export default DashboardPage;
