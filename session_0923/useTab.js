import { useState } from "react";

export default (initialTabIndex, allTabs) => {
  // 예외처리 allTabs.length보다 initialTabIndex가 클때는

  const initialState = initialTabIndex >= allTabs.length ? 0 : initialTabIndex;

  const [currentIndex, setCurrentIndex] = useState(initialState);

  return {
    currentTab: allTabs[currentIndex],
    changeTabIndex: setCurrentIndex,
  };
};
