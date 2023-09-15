/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import {
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { crearVideo, saveVideo } from "../../services/services";
import { NavLink } from "react-router-dom";

const FormStyle = styled.form`
  max-width: 70vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding-top: 2rem;
`;

const ButtonSecondary = styled(Button)`
  background-color: #9e9e9e;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NuevoVideo = ({ categories }) => {
  const [data, setData] = useState({
    link: "",
    image: "",
    category: "",
    description: "",
    title: "",
    id: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    saveVideo(data).then(doc=>{
      e.target.reset();
      console.log(doc.id);
    })
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetHandler = (e) => {
    e.target.form.reset();
    setData({
      link: "",
      image: "",
      category: "",
      description: "",
      title: "",
      id: "",
    });
  };

  return (
    <Container
      sx={{
        paddingTop: "30px",
        color: "white",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <Typography variant="h4">Nuevo Video</Typography>
      <FormStyle action="" onSubmit={submitHandler}>
        <TextField
          name="link"
          onChange={changeHandler}
          variant="filled"
          label="Link video"
        />
        <TextField
          name="image"
          onChange={changeHandler}
          variant="filled"
          label="Link Imagen"
        />
        <TextField
          name="title"
          onChange={changeHandler}
          variant="filled"
          label="Titulo"
        />
        <Select
          name="category"
          onChange={changeHandler}
          variant="filled"
          label="Categoría"
          sx={{ textAlign: "left", color: "lightgray" }}
          value={data.category}
        >

          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          name="description"
          onChange={changeHandler}
          variant="filled"
          label="Descripción"
        />
        <TextField
          name="id"
          onChange={changeHandler}
          variant="filled"
          label="Código de seguridad"
        />

        <ButtonsContainer>
          <div>
            <Button
              variant="contained"
              type="submit"
              sx={{ marginRight: "1rem" }}
            >
              Guardar
            </Button>
            <ButtonSecondary variant="contained" onClick={resetHandler}>
              Limpiar
            </ButtonSecondary>
          </div>
          <LinkStyled to={"/new-category"}>
            <Button
              variant="contained"
              onClick={() => {
                console.log("To new category");
              }}
            >
              Nueva Categoría
            </Button>
          </LinkStyled>
        </ButtonsContainer>
      </FormStyle>
    </Container>
  );
};

export default NuevoVideo;
