import "./App.css";
import useFetchNewsAsync from "./pages/useFetchNewsAsync";
import "./styles/useFetchNewsAsync.css";


const NEWS_URL = 
"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2db7c8db36f94deca2746e6693821b1f";

const App = () => {
  const [newsData, setNewsData, isLoading] = useFetchNewsAsync(NEWS_URL, {});

  if (isLoading){
    return <div>Loading....</div>;
  }

  return (
    <div className="card-wrapper">
    {newsData.articles && 
      newsData.articles.map((news, i)=>(
        <div className="card" key={i}>
          <h4>{news.title}</h4>
          <h6>{news.content}</h6>
          <p>Published on: {news.publishedAt}</p>
          <img src={news.urlToImage} alt="img-news"/>
        </div>
      ))}
  
    </div>
  );
};

export default App;
