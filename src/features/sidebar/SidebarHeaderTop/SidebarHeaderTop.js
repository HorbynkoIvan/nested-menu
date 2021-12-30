/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { Anchor } from "@features/header/HeaderMobile/hooks";

interface Props {
  toggleDrawer: (anchor: Anchor, open: boolean) => any;
}

export const SidebarHeaderTop = ({ toggleDrawer }: Props) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      padding: 13px 0;
      border-bottom: 1px solid #d9d9d9;
    `}
  >
    <IconButton onClick={toggleDrawer("left", false)}>
      <IoMdClose
        css={css`
          width: 16px;
          height: 16px;
        `}
      />
    </IconButton>

    <div
      css={css`
        max-width: 100px;
        margin-left: 12px;
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        src="/assets/images/new_logo.svg"
        alt="Пампик - портал для родителей"
        title="Pampik - детский интернет-магазин"
      />
    </div>
  </div>
);
