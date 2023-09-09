import Header from "./components/Header";
import Footer from "./components/Footer";
import AddVideo from "./pages/AddVideo";
import DefaultPage from "./components/DefaultPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { listaCategorias, listaVideos } from "./services/services";

const FullContainer = styled(Box)`
  min-height: 80vh;
  background-color: #1e1e1e;
  padding-bottom: 20px;
`;

function App() {

  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  const [video, setVideo] = useState({
    title: ''
  });
  const [category, setCategory] = useState({});

  useEffect(() => {
    listaVideos().then(
      (res) => {
        setVideos(res);
        setVideo(res.find(video=>video.category=='Bakery'))
      },
      (err) => {
        console.log(err)
      }
    );

    listaCategorias().then(
      (res) => {
        setCategories(res);
        console.log(res.find(category=>category.name=='Bakery'))
        setCategory(res.find(category=>category.name=='Bakery'))
      },
      (err) => {
        console.log(err)
      }
    );
  }, []);

  return (
    <>
      <Header />
      <FullContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<DefaultPage videos={video} categories={categories} video={video} category={category} />} />
          <Route path="/new-video" element={<AddVideo categories={categories} setCategories={setCategories} />} />
          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </FullContainer>

      <Footer />
    </>
  );
}

export default App;
