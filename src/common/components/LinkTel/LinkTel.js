/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const LinkTel = ({ phone }) => (
  <a
    href={`tel:${phone.replace(/\s+/g, "")}`}
    css={css`
      font-weight: 700;
      font-size: 17px;
      color: #000;
    `}
  >
    {phone}
  </a>
);
