
import React, { useState } from "react";

const Tabs = () => {
  const tabs = [
    { id: "tab1", title: "Tab 1", content: "Product selection ✅" },
    { id: "tab2", title: "Tab 2", content: "Add to cart 🛒"},
    { id: "tab3", title: "Tab 3", content: " Proceed to checkout 💱" },
    { id: "tab4", title: "Tab 4", content: "Invoice payment 💰" },
    { id: "tab5", title: "Tab 5", content: "Prepare product for shipment 💯 " },
  ];

  const initialTabId = localStorage.getItem("selectedTabId") || tabs[0].id;

  const [selectedTabId, setSelectedTabId] = useState(initialTabId);

  const handleTabClick = (id) => {
    setSelectedTabId(id);

    localStorage.setItem("selectedTabId", id);
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  return (
    <div>
      <div className="tab">
        <div className="tab__header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={selectedTabId === tab.id ? "active" : ""}
            >
              {tab.title}
              <span className="tab-indicator"></span>
            </button>
          ))}
        </div>
        <div className="tab-content">{selectedTab && selectedTab.content}</div>
      </div>
    </div>
  );
};

export default Tabs;
