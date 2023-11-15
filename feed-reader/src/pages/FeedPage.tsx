import DefaultFeedItem from "../components/feeds/DefaultFeedItem";
import { feedURLs } from "../data/feedsURLs";
import classes from "./FeedPage.module.css";

const FeedPage = () => {
  return (
    <section>
      <ul className={classes["feeds-container"]}>
        {feedURLs.map((url, index) => (
          <DefaultFeedItem url={url} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default FeedPage;
