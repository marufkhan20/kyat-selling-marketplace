import Button from "../../ui/Button";
import Order from "./Order";

const ActiveOrders = ({ title, viewButton = false }) => {
  return (
    <div className="rounded-md">
      <div className="p-4 border-b bg-white">
        <h4 className="text-lg">{title}</h4>
      </div>

      <div className="pb-4">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
      {viewButton && (
        <div className="flex justify-center pb-4">
          <Button variant="secondary" href="/dashboard/orders">
            View All
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActiveOrders;
