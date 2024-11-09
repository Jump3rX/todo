import React from "react";

const Tabs = (props) => {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const nuOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : "")
            }
            key={index}
          >
            <h4>
              {tab} <span>({nuOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
