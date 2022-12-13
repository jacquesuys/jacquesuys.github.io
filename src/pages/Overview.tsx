import Categories from "../components/Categories";

import AppLayout from "../layout/AppLayout";

function Overview() {
  return (
    <AppLayout>
      <AppLayout.TopBar />
      <AppLayout.Greeting />

      <Categories />

      <AppLayout.BottomNav />
    </AppLayout>
  );
}

export default Overview;
