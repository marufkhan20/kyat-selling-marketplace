import DashboardLayout from "@/components/shared/Dashboard/DashboardLayout";
import FeeCalculator from "@/components/shared/Dashboard/FeeCalculator";
import Orders from "@/components/shared/Dashboard/Orders";
import Transactions from "@/components/shared/Dashboard/Transactions";

const DashboardPage = () => {
  return (
    <main>
      {/* <BreadCumb page="Seller Dashboard" /> */}
      <DashboardLayout>
        {/* <Information /> */}
        <FeeCalculator />
        <Transactions viewButton title="My Transactions" />
<<<<<<< HEAD
        <Orders viewButton title="Market Place - Buyers" />
=======
        <Orders viewButton title="Market Place -Buyers" />
>>>>>>> 30d648a24d99403d62312a1f41a43ea29fe5e496
        <Orders viewButton title="Market Place - Sellers" />
      </DashboardLayout>
    </main>
  );
};

export default DashboardPage;
