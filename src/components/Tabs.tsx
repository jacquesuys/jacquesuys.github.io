import Tab from "./Tab";

function Tabs() {
  return (
    <div className="tabs font-bold py-3">
      <Tab to="/overview" className="">
        Overview
      </Tab>

      <Tab to="/requests" alert>
        Requests
      </Tab>
    </div>
  );
}

export default Tabs;
