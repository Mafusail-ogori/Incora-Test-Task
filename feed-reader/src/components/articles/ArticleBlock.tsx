import classes from "./ArticleBlock.module.css";

const ArticleBlock: React.FC<{ title: string; body: string }> = (props) => {
  return (
    <li className={classes["article-container"]}>
      <h2 className={classes["article-title"]}>{props.title}</h2>
      <div className={classes["grid-container"]}>
        <div className={classes["description"]}>
          <span className={classes[""]}>{props.body}</span>
        </div>
      </div>
    </li>
  );
};

export default ArticleBlock;
