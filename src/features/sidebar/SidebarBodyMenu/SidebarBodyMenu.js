/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigation } from "@features/header/MenuNav/hooks";
import { usePalette } from "@common/hooks";
import { MenuIcon } from "./components";

export const SidebarBodyMenu = () => {
  const { items } = useNavigation("ru");
  const hoverColor = usePalette("primaryHover");

  return (
    <List disablePadding={true}>
      {items.map(({ id, name }) => (
        <ListItem
          disablePadding
          key={id}
          css={css`
            background: #f0f0f0;
          `}
        >
          <ListItemButton
            disableRipple={true}
            disableGutters={true}
            css={css`
              border-top: 1px solid #d9d9d9;
              transition: all 0.3s ease-in-out;
              &:hover {
                background: none;
                color: ${hoverColor};
                .arrow svg {
                  fill: ${hoverColor};
                }
              }
            `}
          >
            <ListItemIcon
              css={css`
                justify-content: center;
              `}
            >
              <MenuIcon categoryId={id} />
            </ListItemIcon>
            <ListItemText primary={name} />
            <ListItemIcon
              className="arrow"
              css={css`
                justify-content: center;
              `}
            >
              <MdArrowForwardIos />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding>
        <ListItemButton
          disableRipple={true}
          disableGutters={true}
          css={css`
            border-top: 1px solid #d9d9d9;
            transition: all 0.3s ease-in-out;
            &:hover {
              background: none;
              color: ${hoverColor};
              .arrow svg {
                fill: ${hoverColor};
              }
            }
          `}
        >
          <ListItemText inset primary={"Помощь"} />
          <ListItemIcon
            css={css`
              justify-content: center;
            `}
          >
            <MdArrowForwardIos />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
