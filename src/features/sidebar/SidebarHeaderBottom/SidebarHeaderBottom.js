/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BsBoxArrowInRight, BsCheck2Circle } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
// import { Link } from "@common/components";
// import { useCustomer } from "@common/hooks";
// import { Login } from "@common/components/Login";

export const SidebarHeaderBottom = () => {
  // const { customer } = useCustomer();

  return (
    <div
      css={css`
        padding: 13px 0;
        display: flex;
        justify-content: space-between;
      `}
    >
      {/*<Login*/}
      {/*  isShow={!customer.id}*/}
      {/*  title="Войти"*/}
      {/*  css={css`*/}
      {/*    font: 400 14px/1 Montserrat, sans-serif;*/}
      {/*    color: #000000;*/}
      {/*    text-transform: inherit;*/}
      {/*  `}*/}
      {/*  icon={*/}
      {/*    <BsBoxArrowInRight*/}
      {/*      css={css`*/}
      {/*        font-size: 19px;*/}
      {/*        margin-right: 5px;*/}
      {/*      `}*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}

      {/*{customer.id && (*/}
      {/*  <Link*/}
      {/*    variant="primary"*/}
      {/*    href="/account"*/}
      {/*    css={css`*/}
      {/*      font-size: 12px;*/}
      {/*    `}*/}
      {/*    icon={*/}
      {/*      <GrUserExpert*/}
      {/*        css={css`*/}
      {/*          font-size: 19px;*/}
      {/*          margin-right: 5px;*/}
      {/*        `}*/}
      {/*      />*/}
      {/*    }*/}
      {/*  >*/}
      {/*    {customer.name}*/}
      {/*  </Link>*/}
      {/*)}*/}
      {/*<Link*/}
      {/*  icon={<BsCheck2Circle />}*/}
      {/*  href="/account/orders"*/}
      {/*  css={css`*/}
      {/*    font-size: 12px;*/}
      {/*    svg {*/}
      {/*      font-size: 19px;*/}
      {/*      margin-right: 5px;*/}
      {/*    }*/}
      {/*  `}*/}
      {/*  variant="primary"*/}
      {/*>*/}
      {/*  Проверить заказ*/}
      {/*</Link>*/}
    </div>
  );
};
