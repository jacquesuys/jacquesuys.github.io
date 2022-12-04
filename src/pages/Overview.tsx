import Categories from "../components/Categories";
import PendingRequests from "../components/PendingRequests";
import Tabs from "../components/Tabs";

import AppLayout from "../layout/AppLayout";

function Overview() {
  return (
    <AppLayout>
      <AppLayout.TopBar />
      <AppLayout.Greeting />

      <Tabs />

      <PendingRequests />

      <Categories />

      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default Overview;
