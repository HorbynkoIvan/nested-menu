/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SidebarHeader = ({ children }: Props) => (
  <div
    css={css`
      padding: 0 15px;
    `}
  >
    {children}
  </div>
);
