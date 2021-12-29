/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Drawer } from "@mui/material";

export const SidebarDrawer = ({
  stateDrawer,
  toggleDrawer,
  children,
}) => (
  <Drawer
    anchor={"left"}
    open={stateDrawer["left"]}
    onClose={toggleDrawer("left", false)}
    css={css`
      .MuiDrawer-paper {
        padding: 0;
        border-radius: initial;
        width: 375px;
        background: #ffffff;
      }
    `}
  >
    {children}
  </Drawer>
);
