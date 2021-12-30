/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const MenuIcon = ({ categoryId }) => (
  <div
    css={css`
      max-width: 30px;
      max-height: 30px;
    `}
  >
    <img
      src={`/assets/images/navigation/${categoryId}.png`}
      alt="Picture of the nav"
      css={css`
        width: 100%;
      `}
    />
  </div>
);
