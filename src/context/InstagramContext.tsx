import React, {createContext, useState} from 'react';
import {Post} from '../../types';
import {posts} from '../posts/posts';

type ContextType = {
  visiblePost: number | null;
  setVisiblePost: (value: number | null) => void;
  list: Post[];
  setList: (value: Post[]) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const InstagramContext = createContext<ContextType>({
  visiblePost: 0,
  setVisiblePost: () => {},
  list: [],
  setList: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

export const InstagramProvider = ({children}: {children: JSX.Element}) => {
  const [visiblePost, setVisiblePost] = useState<number | null>(null);
  const [list, setList] = useState<Post[]>(posts);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <InstagramContext.Provider
      value={{
        visiblePost,
        setVisiblePost,
        list,
        setList,
        isLogin,
        setIsLogin,
      }}>
      {children}
    </InstagramContext.Provider>
  );
};

export default InstagramContext;
