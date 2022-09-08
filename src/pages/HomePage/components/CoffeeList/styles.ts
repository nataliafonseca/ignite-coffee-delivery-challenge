import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 90rem;
  margin-inline: auto;
  padding: 2rem 10rem;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
  margin-bottom: 4rem;
`;

export const ProductCard = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0 1.25rem 1.25rem;

  > img {
    margin-top: -1.25rem;
  }

  > div {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      background-color: ${(props) => props.theme.yellowLight};
      color: ${(props) => props.theme.yellowDark};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;

      font-size: 0.625rem;
      font-weight: 700;
    }
  }

  > h3 {
    margin-top: 1rem;

    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
  }

  > p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
  }

  > footer {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 0;
      border: none;
    }

    > p {
      font-size: 0.875rem;

      span {
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
      }
    }

    .addToCart {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .quantity {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: ${(props) => props.theme.baseButton};
        border-radius: 6px;

        span {
          padding: 0 0.5rem;
        }

        button {
          background-color: transparent;
          color: ${(props) => props.theme.purple};

          &:hover {
            color: ${(props) => props.theme.purpleDark};
          }
        }
      }

      .cart {
        padding: 0.5rem;
        border-radius: 6px;
        background-color: ${(props) => props.theme.purpleDark};
        color: ${(props) => props.theme.baseCard};

        &:hover {
          background-color: ${(props) => props.theme.purple};
        }
      }
    }
  }
`;
