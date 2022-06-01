import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getData = async () => {
        //async를 사용하는 함수 따로 선언
        try {
            setLoading(true);
            const query = category === 'all'? '' : `&category=${category}`;
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8c18e150c391487a94e2dba3b0d657eb`, );
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {

        getData();

    }, [category])

    if (isLoading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    return (
        <NewsListBlock>
            <div>
                {
                    (articles.map((article) =>
                        <NewsItem key={article.url} article={article} />
                    ))
                }
            </div>
        </NewsListBlock>
    )
}


export default NewsList;