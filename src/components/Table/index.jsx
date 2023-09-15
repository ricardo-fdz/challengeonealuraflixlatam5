/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { deleteCategory, getCategory } from '../../services/services';

const TableStyled = styled.table`
  width: 80%;
  text-align: left;
  border: solid 2px lightgray;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 1rem;
  & tr:nth-of-type(even) {
    background-color: #3e3e3e;
  }
  > * {
    border: solid 2px lightgray;
  }
`;

const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  > tr &:hover {
    transform: scale(1.1);
  }
`;

const Table = ({categories, setCurrentId, setData}) => {

  const editHandler = (id) => {
    setCurrentId(id);
    getCategory(id).then((doc) => {
      setData(doc.data());
    });
  };

  return (
    <TableStyled>
    <thead>
      <tr>
        <th style={{ padding: "5px" }}>Nombre</th>
        <th style={{ padding: "5px" }}>Descripción</th>
        <th style={{ padding: "5px" }}>Editar</th>
        <th style={{ padding: "5px" }}>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr key={category.name}>
          <td style={{ padding: "5px" }}>{category.name}</td>
          <td style={{ padding: "5px" }}>{category.description}</td>
          <td style={{ padding: "5px" }}>
            <ButtonIcon
              onClick={() => {
                editHandler(category.id);
              }}
            >
              🖋️
            </ButtonIcon>{" "}
          </td>
          <td style={{ padding: "5px" }}>
            <ButtonIcon
              onClick={() => {
                deleteCategory(category.id);
              }}
            >
              ❌
            </ButtonIcon>{" "}
          </td>
        </tr>
      ))}
    </tbody>
  </TableStyled>
  )
}

export default Table