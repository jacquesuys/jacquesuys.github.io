import DesktopNav from "../components/DesktopNav";
import { LayoutType } from "../types";

function Layout({ children }: LayoutType) {
  return (
    <div className="flex">
      <DesktopNav />
      <div className="h-full min-h-screen bg-black text-white p-7 md:p-0 font-interRegular w-full">
        {children}
      </div>
    </div>
  );
}

export default Layout;
