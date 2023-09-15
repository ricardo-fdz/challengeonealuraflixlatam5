import Header from "./components/Header";
import Footer from "./components/Footer";
import AddVideo from "./pages/AddVideo";
import DefaultPage from "./components/DefaultPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import {  onGetCategories, onGetVideos } from "./services/services";
import AddCategory from "./pages/AddCategory";
import {} from "firebase/firestore";

const FullContainer = styled(Box)`
  min-height: 80vh;
  background-color: #1e1e1e;
  padding-bottom: 20px;
`;

function App() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  const [video, setVideo] = useState({
    title: "",
  });

  const [category, setCategory] = useState({ description: "" });

  useEffect(() => {
    onGetVideos((querySnapshot) => {
      setVideos([]);
      querySnapshot.forEach((doc) => {
        if(doc.data().category === "Bakery") setVideo(doc.data());
        setVideos(v=>[...v,{...doc.data(),id: doc.id}])
      });
    });

    onGetCategories((querySnapshot) => {
      setCategories([])
      querySnapshot.forEach((doc) => {
        if(doc.data().name === "Bakery") setCategory(doc.data());
        setCategories(c=>[...c,{...doc.data(), id: doc.id}])
      });
    });
  }, []);

  return (
    <>
      <Header />
      <FullContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <DefaultPage
                videos={videos}
                categories={categories}
                video={video}
                category={category}
              />
            }
          />
          <Route
            path="/new-video"
            element={
              <AddVideo categories={categories} setCategories={setCategories} />
            }
          />
          <Route
            path="/new-category"
            element={
              <AddCategory
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </FullContainer>

      <Footer />
    </>
  );
}

export default App;
