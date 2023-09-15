/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {
  saveCategory,
  updateCategory,
} from "../../services/services";
import Table from "../../components/Table";

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

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AddCategory = ({ categories }) => {
  const initializeData = {
    name: "",
    description: "",
    color: "#000",
    id: "",
  };
  const [currentId, setCurrentId] = useState("");
  const [data, setData] = useState(initializeData);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId === "") {
      saveCategory(data).then((res) => console.log(res));
    } else {
      updateCategory(currentId, data).then((res) => {
        setCurrentId("");
        console.log(res);
      });
    }
    setData(initializeData);
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetHandler = () => {
    setCurrentId("");
    setData({
      name: "",
      description: "",
      color: "",
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
      <Typography variant="h4">Nuevo Categoría</Typography>
      <FormStyle action="" onSubmit={submitHandler}>
        <TextField
          value={data.name}
          name="name"
          onChange={changeHandler}
          variant="filled"
          label="Categoría"
        />
        <TextField
          value={data.description}
          name="description"
          onChange={changeHandler}
          variant="filled"
          label="Descripción"
        />
        <TextField
          value={data.color}
          name="color"
          onChange={changeHandler}
          variant="filled"
          label="Color"
          type="color"
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
              {currentId === "" ? "Guardar" : "Actualizar"}
            </Button>
            <ButtonSecondary variant="contained" onClick={resetHandler}>
              Limpiar
            </ButtonSecondary>
          </div>
        </ButtonsContainer>
      </FormStyle>
      <Table categories={categories} setCurrentId={setCurrentId} setData={setData}/>
    </Container>
  );
};

export default AddCategory;
