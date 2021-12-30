/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChoiceCity, LocaleSwitcher } from "@features/header";

export const SidebarFooterBottom = () => (
  <>
    <div
      css={css`
        font-size: 13px;
        max-width: 200px;
        margin: 10px auto;
        text-align: center;
      `}
    >
      Работаем без выходных с 9:00 до 21:00
    </div>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <LocaleSwitcher />
      <ChoiceCity />
    </div>
  </>
);
