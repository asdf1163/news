import React from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/Box";
import Header from "./components/Header";





export default function App() {
  const [posts, setPost] = React.useState([]);

  //jezeli kliknie na kategorie to zmieni warunki wejscia 

  React.useEffect(() => {
    instance.get('/posts').then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      
      <div className="menu">
        <Header title={'News'} color={'red'}/>
        <Header title={'Sport'} color={'green'}/>
        <Header title={'World News'} color={'blue'}/>
        <Header title={'Politics'}/>
      </div>
      
      <div>{posts.map((post) => (<Box key={post.id} name={post.title} name2={post.body} />))}</div>
    </div>

  );
}