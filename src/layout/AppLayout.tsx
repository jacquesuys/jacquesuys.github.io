import BottomNav from "../components/BottomNav";
import Greeting from "../components/Greeting";
import Tabs from "../components/Tabs";
import TopBar from "../components/TopBar";
import { LayoutType } from "../types";

function AppLayout({ children }: LayoutType) {
  return (
    <div className="relative h-full ">
      <div className="overflow-y-auto pb-20">
        <TopBar />
        <Greeting />
        <Tabs />
        {children}
      </div>
      <BottomNav />
    </div>
  );
}

export default AppLayout;
