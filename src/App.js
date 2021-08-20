import React, {useState} from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/Box";
import Header from "./components/Header";
import Categories from "./components/Categories";
import LaterList from './components/LaterList'



export default function App() {


  const [posts, setPost] = React.useState([]);


  const change = (id) => {
    
    return (
      setSearch('/search?show-elements=image&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db&section='+id),
      console.log(search)
    );
  }
  const [list, setList] = useState([])
  const [search, setSearch] = React.useState('/search?show-elements=image&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db');

  React.useEffect (() => {
    instance.get(search).then((response) => {
      setPost(response.data.response.results);
      console.log(response.data.response.results);
    });
  },[search]);

  return (
    <div className="App">
      <div className="fav"><LaterList list={list} /></div>
      <div className="menu">
        {Categories.map((option) => (<Header key={option.id} id={option.id} title={option.name} img={option.img} handleChange={change} />))}
      </div>
      <div className="article_list_position">
        <div className="article_list">
          {posts.map((post) => (<Box key={post.id} name={post.webTitle} link={post.webUrl} setList={setList} list={list} />))}
        </div>
      </div>
    </div>

  );
}