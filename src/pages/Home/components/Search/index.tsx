import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { SearchContainer, PostContainer, PostBox } from "./styles";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>;
}

interface IPost {
  id: number;
  title: string;
  number: number;
  created_at: string;
  body: string;
}

export function Search({ getPosts }: SearchInputProps) {
  const [posts, setPosts] = useState<IPost[]>([]);

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

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
        <span>{posts.length} publicações</span>
      </header>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>

      <PostContainer>
        {posts.map((post) => (
          <PostBox key={post.id} to={`/posts/${post.number}`}>
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
