/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  phone: string;
}

export const LinkTel = ({ phone }: Props): JSX.Element => (
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
