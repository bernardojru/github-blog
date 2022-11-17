import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

import { PostContainer } from "./styles";

interface IPost {
  title: string;
  created_at: string;
  body: string;
  comments: number;
}

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const { id } = useParams();

  async function getPostDetails() {
    const { data } = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
    );
    setPostData(data);
  }

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <PostContainer>
      <Header post={postData} />
      <Body content={postData} />
    </PostContainer>
  );
}
