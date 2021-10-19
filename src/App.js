import { useEffect, useState } from "react";
import { instance } from "./api/base";
import "./App.css";
import Box from "./components/article/Box";
import Header from "./components/Header";
import LaterList from './components/LaterList'
import { link } from './api/link';
import Languages from './language/AvailableLanguages'

export default function App() {
    const [posts, setPost] = useState([]);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState(link);

    useEffect(() => {
        console.log(search)
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
            <div className="top">
                <div className="logo">RS<span className="logoType">news</span></div>
                <div className="fav">
                    <LaterList list={list} DeleteFromList={handleChangeList} />
                </div>
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
            <div className="lang">
                <Languages />
            </div>
        </div >
    );
}
