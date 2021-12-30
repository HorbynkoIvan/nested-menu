/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const SidebarFooter = ({ children }) => (
  <div
    css={css`
      padding: 0 15px 15px;
    `}
  >
    {children}
  </div>
);
