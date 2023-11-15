import { Feed } from "../../models/Feed";
import ArticleBlock from "./ArticleBlock";

const FeedElement: React.FC<{ feed: Feed }> = (props) => {
  return (
    <ul>
      {props.feed.articles.map((article, index) => (
        <ArticleBlock key={index} title={article.title} body={article.body} />
      ))}
    </ul>
  );
};

export default FeedElement;
