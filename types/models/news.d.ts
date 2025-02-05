interface News {
  date: string;
  category: {
    name: string;
    url: string;
  };
  title: {
    text: string;
    url: string;
  };
  description: [];
  readMoreUrl?: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
}
