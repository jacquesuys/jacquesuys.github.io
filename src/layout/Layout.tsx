import { LayoutType } from "../types";

function Layout({ children }: LayoutType) {
  return (
    <div className="h-full min-h-screen bg-black text-white p-7 font-interRegular">
      {children}
    </div>
  );
}

export default Layout;
