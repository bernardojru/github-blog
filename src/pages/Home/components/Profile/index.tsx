import {
  ProfileContainer,
  ProfileConst,
  DescriptionProfile,
  Tags,
  Bio,
  Info,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileConst>
        <img src="https://github.com/bernardojru.png" alt="" />
        <DescriptionProfile>
          <Tags>
            <span>bernardo José</span>
            <a href="">
              <strong>GITHUB</strong>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </Tags>
          <Bio>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            ratione.
          </Bio>

          <Info>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{"bernardo"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{"bershop"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{32}</span>
            </div>
          </Info>
        </DescriptionProfile>
      </ProfileConst>
    </ProfileContainer>
  );
}
