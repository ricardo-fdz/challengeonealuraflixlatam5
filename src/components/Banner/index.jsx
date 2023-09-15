/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import CardVideo from "../CardVideo";
import { Button } from "@mui/material";

const BannerContainer = styled.div`
  background-image: url("src/assets/bakery.jpg");
  background-size: cover;
  height: 55vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  padding: 50px;
  color: white;
  box-shadow: 0px -300px 400px 47px rgba(30, 30, 30) inset;
  gap: 2rem;
`;

const ButtonStyled = styled(Button)`
  background-color: ${(props) => props.colored};
`;

const CardStyled = styled.div`
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Banner = ({ video, category }) => {
  console.log(category);
  return (
    <BannerContainer color={category.color}>
      <div>
        <ButtonStyled variant="contained" colored={category.color}>
          Panadería
        </ButtonStyled>
        <h2>{category.description.substring(0, 40) + "..."}</h2>
        <p>{video.description}</p>
      </div>
      <CardStyled>
        <CardVideo video={video} color={category.color} />
      </CardStyled>
    </BannerContainer>
  );
};

export default Banner;
