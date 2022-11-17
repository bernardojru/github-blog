import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { HomeContainer } from "./styles";

const username = "rocketseat-education";
const reponame = "reactjs-github-blog-challenge";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      const response = await api.get(
        `search/issues?q=${query}%20práticas%20repo:${username}/${reponame}`
      );

      setPosts(response.data.items);
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <HomeContainer>
      <Profile />
      <Search getPosts={getPosts} />
    </HomeContainer>
  );
}
