import ChatList from "@/components/Chats/ChatList";
import Inbox from "@/components/Chats/Inbox";
import BreadCumb from "@/components/shared/BreadCumb";
import DashboardLayout from "@/components/shared/Dashboard/DashboardLayout";

const ChatsPage = () => {
  return (
    <main>
      <BreadCumb page="Chats" />
      <DashboardLayout>
        <div className="flex justify-between gap-2">
          <ChatList />
          <Inbox />
        </div>
      </DashboardLayout>
    </main>
  );
};

export default ChatsPage;
