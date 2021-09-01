import { useEffect, useState } from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/article/Box";
import Header from "./components/Header";
import LaterList from './components/LaterList'

export default function App() {
    const [posts, setPost] = useState([]);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState('/search?show-elements=image&api-key=86069387-0efe-47f5-a62d-bc65c5e9e7db');

    useEffect(() => {
        instance.get(search).then((response) => {
            setPost(response.data.response.results);
        });
    }, [search]);

    const handleChangeList = (data) => {
        setList((prev) => (
            data.remove ? prev.filter((list) => list !== data.link) : [...prev, data.link]
        ))
    }

    return (
        <div className="App">

            <div className="fav">
                <LaterList list={list} DeleteFromList={handleChangeList} />
            </div>
            <div className="menu">
                {<Header setSearch={setSearch} />}
            </div>
            <div className="article_list_position">
                <div className="article_list">
                    {posts.map(({ id, webTitle, webUrl }) => (
                        (<Box key={id} setList={handleChangeList} name={webTitle} link={webUrl} list={list} />)
                    ))
                    }
                </div>
            </div>

        </div >
    );
}
