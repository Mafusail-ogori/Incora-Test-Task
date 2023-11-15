import classes from "./ArticleBlock.module.css";

const ArticleBlock: React.FC<{ title: string; body: string }> = (props) => {
  return (
    <li className={classes["article-container"]}>
      <h2>{props.title}</h2>
      <article>{props.body}</article>
    </li>
  );
};

export default ArticleBlock;
