/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import CardVideo from "../CardVideo";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";

const CarouselHead = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  gap: 1rem;
`;
const CategoryButton = styled(Button)`
  background-color: ${(props) => props.colored};
`;
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel = ({ videos, category, idx }) => {
  return (
    <>
      {idx !== 0 && (
        <CarouselHead>
          <CategoryButton colored={category.color} variant="contained">
            {category.name}
          </CategoryButton>
          <p>{category.description}</p>
        </CarouselHead>
      )}

      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        mouseTracking
        items={videos.map((video) => (
          <CardVideo color={category.color} key={video.id} video={video} />
        ))}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </>
  );
};

export default Carousel;
