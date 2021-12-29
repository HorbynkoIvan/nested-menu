import { useState, KeyboardEvent } from "react";


export const useToggleDrawer = () => {
  const [stateDrawer, setStateDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      ((event).key === "Tab" ||
        (event).key === "Shift")
    ) {
      return;
    }

    setStateDrawer({ ...stateDrawer, [anchor]: open });
  };

  return {
    stateDrawer,
    toggleDrawer,
  };
};
