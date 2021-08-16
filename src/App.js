import React from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/Box";
import Header from "./components/Header";
import Kategorie from "./components/Kategorie";


export default function App() {
  const [posts, setPost] = React.useState([]);

  //jezeli kliknie na kategorie to zmieni warunki wejscia 

  React.useEffect(() => {
    instance.get('/search?show-elements=image&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db').then((response) => {
      setPost(response.data.response.results);
      console.log(response.data.response.results);
    });
  }, []);

  return (
    <div className="App">
      
      <div className="menu">
        {Kategorie.map((option) => (<Header key={option.id} title={option.name} img={option.img}/>))}
      </div>

      <div className="article_list">
          {posts.map((post) => (<Box key={post.id} name={post.webTitle} link={post.webUrl}/>))}        
      </div>
    </div>

  );
}