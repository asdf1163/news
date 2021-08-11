import React from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/Box";




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
    <div>
      <div>{posts.map((post) => (<Box name={post.title} name2={post.body} />))}</div>
    </div>


  );
}