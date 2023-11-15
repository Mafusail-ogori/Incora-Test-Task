export interface Feed {
  creator: string;
  articles: {
    title: string;
    body: string;
  }[];
}
