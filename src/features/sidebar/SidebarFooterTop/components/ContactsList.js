/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContacts } from "../../../../common/hooks/useContacts";
import { LinkTel } from "../../../../common/components/LinkTel";

export const ContactsList = () => {
  const { phones } = useContacts();

  return (
    <ul
      css={css`
        text-align: center;
      `}
    >
      {phones.map(({ id, tel }) => (
        <li key={id}>
          <LinkTel phone={tel} />
        </li>
      ))}
    </ul>
  );
};
