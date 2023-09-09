import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import Logo from "../Logo";


const HeaderLayout = styled.header`
  background-color: #191919;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: white;
  border-bottom: solid 2px  #00a6ed;
`
const Header = () => {
    return <HeaderLayout>
      <Logo/>
      <Button variant="outlined">Nuevo video</Button>
    </HeaderLayout>;
};

export default Header;

