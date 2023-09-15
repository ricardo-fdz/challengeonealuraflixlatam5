/* eslint-disable react/prop-types */
import Banner from "../Banner";
import Carousel from "../Carousel";
import styled from "@emotion/styled";

const CarouselContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DefaultPage = ({ videos, categories, video, category }) => {
  return (
    <>
      <Banner video={video} category={category} />
      <CarouselContainer>
        {categories.map((category, idx) => {
          return (
            videos.some((video) => video.category == category.name) && (
              <Carousel
                idx={idx}
                key={category.id}
                category={category}
                videos={videos.filter(
                  (video) => video.category == category.name
                )}
              />
            )
          );
        })}
      </CarouselContainer>
    </>
  );
};

export default DefaultPage;
