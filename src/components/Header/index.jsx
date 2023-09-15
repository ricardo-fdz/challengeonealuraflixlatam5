import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const HeaderLayout = styled.header`
  background-color: #191919;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: white;
  border-bottom: solid 2px #00a6ed;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <LinkStyled to={"/home"}>
        <Logo />
      </LinkStyled>
      <LinkStyled to={"/new-video"}>
        <Button variant="outlined">Nuevo video</Button>
      </LinkStyled>
    </HeaderLayout>
  );
};

export default Header;
