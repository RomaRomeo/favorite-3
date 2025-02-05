export function formatPromo(posts: IResponsePromo[]): Promo[] {
  return posts.map((post) => ({
    date: post.date,
    category: {
      name: post.category,
      url: post.categoryUrl,
    },
    title: {
      text: post.title,
      url: post.titleUrl,
    },
    description: post.description,
    readMoreUrl: post.readMoreUrl,
    author: {
      name: post.author,
      url: post.authorUrl,
      avatar: post.avatarUrl,
    },
  }));
}
