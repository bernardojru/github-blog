import {
  ProfileContainer,
  ProfileConst,
  DescriptionProfile,
  Tags,
  Bio,
  Info,
} from "./styles";

import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { api } from "../../../../lib/axios";

interface Users {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  company: string
  bio: string;
  followers: number;
}

export function Profile() {
  const [profile, setProfile] = useState<Users>();

  async function getProfileDateApi() {
    const { data } = await api.get("/users/bernardojru");
    setProfile(data);
  }

  useEffect(() => {
    getProfileDateApi();
  }, []);
  return (
    <ProfileContainer>
      <ProfileConst>
        <img src="https://github.com/bernardojru.png" alt="" />
        <DescriptionProfile>
          <Tags>
            <span>{profile?.name}</span>
            <a href="https://github.com/bernardojru" target="_blank">
              <strong>GITHUB</strong>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </Tags>
          <Bio>{profile?.bio}</Bio>

          <Info>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile?.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile?.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>
                {profile?.followers} seguidores
              </span>
            </div>
          </Info>
        </DescriptionProfile>
      </ProfileConst>
    </ProfileContainer>
  );
}
