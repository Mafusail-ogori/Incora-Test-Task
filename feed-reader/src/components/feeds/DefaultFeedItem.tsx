import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import classes from "./FeedItem.module.css";
import { useNavigate } from "react-router-dom";
import { Feed } from "../../models/Feed";
import { useEffect } from "react";
import { parseFeedData } from "../../store/feedActions";

const DefaultFeedItem: React.FC<{ url: string }> = (props) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const feed: Feed = useSelector((state: RootState) => state.feed.feed);

  useEffect(() => {
    dispatch(parseFeedData(props.url));
  }, [dispatch, props.url]);

  const feedClickHandler = () => {
    navigation(`/${feed.creator}`);
  };

  return (
    <li className={classes["feed-container"]} onClick={feedClickHandler}>
      <h2 className={classes["feed-title"]}>{feed.creator}</h2>
    </li>
  );
};

export default DefaultFeedItem;
