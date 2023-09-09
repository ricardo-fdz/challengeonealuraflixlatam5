/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const CardStyle = styled.img`
  border: 4px solid ${(props) => props.color};
  border-radius: 3px;
  max-width: 326px;
`;

const CardVideo = ({ video, color }) => {
  return (
    <>
      <CardStyle
        color={color}
        onDragStart={(e) => {
          e.preventDefault();
        }}
        src={video.image}
        alt={video.title}
      />
    </>
  );
};

export default CardVideo;
