/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children: ReactNode;
}

export const SidebarFooter = ({ children }: Props) => (
  <div
    css={css`
      padding: 0 15px 15px;
    `}
  >
    {children}
  </div>
);
