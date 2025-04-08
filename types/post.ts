type User = {
  name: string;
};

export type Post = {
  _id: string;
  title: string;
  content: string;
  creator: User;
  createdAt: string;
};
