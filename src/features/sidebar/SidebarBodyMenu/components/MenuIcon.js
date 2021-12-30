/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  categoryId: number;
}

export const MenuIcon = ({ categoryId }: Props) => (
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
