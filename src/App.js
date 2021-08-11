import axios from "axios";
import React from "react";
import "./App.css";

const baseURL = "https://content.guardianapis.com/search?api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db";

export default function App() {
  const [post, setPost] = React.useState(null);

//jezeli kliknie na kategorie to zmieni warunki wejscia 


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.response);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;


  function navbar()
  {
     
  }
  
  
  function boxes()
  {
    let tablica =[];
    for (let i=0; i<10;i++)
    {
      //albo dodac window.open(), https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      tablica.push(<div className='box'><a href={post.results[i].webUrl} rel="noopener noreferrer" target="_blank"><h1>{post.results[i].webTitle}</h1></a></div>)
      //dodaj na później
    }
    return tablica
  }
  
    return (
      
        boxes()
    );
}