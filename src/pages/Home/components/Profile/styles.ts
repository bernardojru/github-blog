import styled from "styled-components";

export const ProfileContainer = styled.main`
  width: 100%;
`;

export const ProfileConst = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme["base-profile"]};

  max-width: 54rem;
  height: 13.25rem;
  margin: 0 auto;

  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;

    margin-left: 2.5rem;
  }
`;

export const DescriptionProfile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  margin-left: 2rem;
  width: 70%;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-family: "Nunito";
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${({ theme }) => theme["base-title"]};
  }

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
`;

export const Bio = styled.div`
  color: ${({ theme }) => theme["base-subtitle"]};
`;

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
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
`;
