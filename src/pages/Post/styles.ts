import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54rem;
  margin: -5rem auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
