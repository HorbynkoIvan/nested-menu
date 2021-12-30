/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContactsList } from "./components";
import { Callback } from "@common/components/Callback";

export const SidebarFooterTop = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 13px 0;
      border-top: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
    `}
  >
    <ContactsList />
    <Callback />
  </div>
);
