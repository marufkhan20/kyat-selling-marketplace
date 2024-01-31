import Button from "../../ui/Button";
import Transaction from "./Transaction";

const Transactions = ({ title, viewButton }) => {
  return (
    <div className="rounded-md">
      <div className="p-4 border-b bg-white">
        <h4 className="text-lg">{title}</h4>
      </div>

      <div className="pb-4">
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
      {viewButton && (
        <div className="flex justify-center pb-4">
          <Button variant="secondary" href="/dashboard/transactions">
            View All Transactions
          </Button>
        </div>
      )}
    </div>
  );
};

export default Transactions;
