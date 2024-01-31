import BreadCumb from "@/components/shared/BreadCumb";
import DashboardLayout from "@/components/shared/Dashboard/DashboardLayout";
import Orders from "@/components/shared/Dashboard/Orders";

const OrdersPage = () => {
  return (
    <main>
      <BreadCumb page="Orders" />
      <DashboardLayout>
        <Orders title="Orders" />
      </DashboardLayout>
    </main>
  );
};

export default OrdersPage;
