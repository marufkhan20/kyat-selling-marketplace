import BreadCumb from "@/components/shared/BreadCumb";
import DashboardLayout from "@/components/shared/Dashboard/DashboardLayout";
import Transactions from "@/components/shared/Dashboard/Transactions";

const TransactionsPage = () => {
  return (
    <main>
      <BreadCumb page="Transactions" />
      <DashboardLayout>
        <Transactions title="Transactions" />
      </DashboardLayout>
    </main>
  );
};

export default TransactionsPage;
