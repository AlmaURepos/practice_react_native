import {useState} from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";


function ArticleManager() {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const onClickedAdd = () => {
        const newArticle = {
            id: Date.now(),
            title,
            summary,
        }
        setArticles([...articles, newArticle]);
        setTitle('');
        setSummary('');
    }


    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }


    return(
        <div>
            <AddArticle name="Add Article" title={title} summary={summary} onChangeTitle={(e) => setTitle(e.target.value)} onChangeSummary={(e) => setSummary(e.target.value)} onClickedadd={onClickedAdd}/>

            <ArticleList articles={articles} onClickRemove={onClickRemove}/>
        </div>
    )
}

export default ArticleManager;