import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90rem;
  margin-inline: auto;
  padding: 5.75rem 10rem;
  display: flex;
  gap: 3.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const BannerInfo = styled.div`
  & h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
  }

  & p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;

export const TagsGrid = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
`;

interface BannerTagProps {
  color: "yellow" | "yellowDark" | "purple" | "baseText";
}

export const BannerTag = styled.div<BannerTagProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.color]};
    color: ${(props) => props.theme.background};
  }
`;
