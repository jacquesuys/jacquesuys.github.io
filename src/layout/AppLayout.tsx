import BottomNav from "../components/BottomNav";
import Greeting from "../components/Greeting";
import TopBar from "../components/TopBar";
import { LayoutType } from "../types";

function AppLayout({ children }: LayoutType) {
  return (
    <div>
      <div className="content">
        <div className="overflow-y-auto scroll-smooth pb-20">{children}</div>
      </div>
    </div>
  );
}

AppLayout.TopBar = TopBar;
AppLayout.Greeting = Greeting;
AppLayout.BottomNav = BottomNav;

export default AppLayout;
