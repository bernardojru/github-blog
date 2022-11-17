import { Link } from "react-router-dom";
import { HeaderContainer, Info, Links } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface Users {
  login: string;
}

interface Post {
  title: string;
  created_at: string;
  body: string;
  comments: number;
}

interface HeaderProps {
  post: Post;
}

export function Header({ post }: HeaderProps) {
  const [profile, setProfile] = useState<Users>();

  async function getProfileDateApi() {
    const { data } = await api.get("/users/bernardojru");
    setProfile(data);
  }

  useEffect(() => {
    getProfileDateApi();
  }, []);
  return (
    <HeaderContainer>
      <Links>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <strong>VOLTAR</strong>
        </Link>
        <a href="https://github.com/bernardojru" target="__blank">
          <strong>VER NO GITHUB</strong>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </Links>
      <h1>{post.title}</h1>
      <Info>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{profile?.login}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{relativeDateFormatter(post.created_at)}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{post.comments}</span>
        </div>
      </Info>
    </HeaderContainer>
  );
}
