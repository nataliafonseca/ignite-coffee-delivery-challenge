import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90rem;
  margin-inline: auto;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`;

interface TagProps {
  variant: "yellow" | "purple";
}

export const Tag = styled.div<TagProps>`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  cursor: pointer;

  background-color: ${(props) =>
    props.variant === "purple" ? props.theme.purpleLight : props.theme.yellowLight};
  color: ${(props) => (props.variant === "purple" ? props.theme.purple : props.theme.yellowDark)};
`;
