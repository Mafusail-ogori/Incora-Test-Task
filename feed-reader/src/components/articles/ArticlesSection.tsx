import { Feed } from "../../models/Feed";
import ArticleBlock from "./ArticleBlock";
import classes from "./ArticlesSection.module.css";

const FeedElement: React.FC<{ feed: Feed }> = (props) => {
  return (
    <ul className={classes["articles-container"]}>
      {props.feed.articles.map((article, index) => (
        <ArticleBlock key={index} title={article.title} body={article.body} />
      ))}
    </ul>
  );
};

export default FeedElement;
