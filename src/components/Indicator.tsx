import { ReactNode } from "react";

function Indicator({
  children,
  indicator,
}: {
  children: ReactNode;
  indicator: number;
}) {
  return (
    <div className="indicator w-full">
      <span className="indicator-item badge badge-error mr-3 text-xs font-semibold">
        {indicator < 10 ? indicator : "9+"}
      </span>
      {children}
    </div>
  );
}

export default Indicator;
