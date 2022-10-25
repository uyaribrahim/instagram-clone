export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Search: undefined;
  SignedIn: undefined;
};

export type Media = {
  uri: string;
  thumbnail?: number | undefined;
};

export type Post = {
  type: 'image' | 'video';
  media: Media[];
  category: string;
};
