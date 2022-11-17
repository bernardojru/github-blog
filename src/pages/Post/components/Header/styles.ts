import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  background-color: ${({ theme }) => theme["base-profile"]};

  width: 100%;
  height: 10.5rem;
  margin: 0 auto;

  border-radius: 10px;

  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Links = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > a {
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    transition: all 0.8s;

    gap: 8px;

    color: ${({ theme }) => theme.blue};

    text-decoration: none;

    strong {
      font-size: 0.75rem;
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    :hover {
      border-bottom-color: ${({ theme }) => theme.blue};
    }
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme["base-label"]};
    }
    span {
      color: ${({ theme }) => theme["base-span"]};
    }
  }
`;
