import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { SearchContainer, PostContainer, PostBox } from "./styles";

interface IPost {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export function Search() {
  const [posts, setPosts] = useState<IPost[]>([]);

  async function getPostDataApi() {
    const { data } = await api.get(
      "/repos/rocketseat-education/reactjs-github-blog-challenge/issues"
    );
    setPosts(data);
  }

  useEffect(() => {
    getPostDataApi();
  }, []);
  return (
    <SearchContainer>
      <header>
        <h3>Publicações</h3>
        <span>{23} publica</span>
      </header>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>

      <PostContainer>
        {posts.map((post) => (
          <PostBox key={post.id}>
            <div>
              <strong>{post.title}</strong>
              <span>{relativeDateFormatter(post.created_at)}</span>
            </div>
            <p>{post.body}</p>
          </PostBox>
        ))}
      </PostContainer>
    </SearchContainer>
  );
}
