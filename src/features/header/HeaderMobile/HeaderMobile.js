/** @jsxImportSource @emotion/react */
import { IconButton } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { useToggleDrawer } from "./hooks";
import { Sidebar } from "../../sidebar";

export const HeaderMobile = () => {
  const { stateDrawer, toggleDrawer } = useToggleDrawer();

  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        <AiOutlineMenu />
      </IconButton>

      <Sidebar stateDrawer={stateDrawer} toggleDrawer={toggleDrawer} />
    </div>
  );
};
