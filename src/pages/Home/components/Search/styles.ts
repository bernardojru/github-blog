import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;

  > header {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    span {
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  > form {
    input {
      width: 100%;
      height: 3.125rem;

      transition: all 0.8s;

      margin-top: 1rem;
      padding: 0.75rem 1rem;
      outline: none;

      border: 1px solid ${({ theme }) => theme["base-border"]};
      border-radius: 6px;

      background-color: ${({ theme }) => theme["base-input"]};

      color: ${({ theme }) => theme["base-title"]};

      ::placeholder {
        color: ${({ theme }) => theme["base-label"]};
        font-size: 1rem;
      }

      :focus {
        border-color: ${({ theme }) => theme["blue"]};
      }
    }
  }
`;

export const PostContainer = styled.main`
margin-top: 3rem;
`;

export const PostBox = styled.div`
  width: 26rem;
  /* height: 16.25rem; */

  border-radius: 10px;
  padding: 2rem;
  background-color: ${({ theme }) => theme["base-post"]};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        color: ${({ theme }) => theme["base-title"]};
        font-size: 1.25rem;
    }
    
    span {
        color: ${({ theme }) => theme["base-span"]};
        font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme["base-text"]};

  }
`;
