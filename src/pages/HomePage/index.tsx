import { useContext } from "react";

import { ShopContext } from "../../contexts/ShopContext";
import * as S from "./styles";

export function HomePage() {
  const { coffees } = useContext(ShopContext);

  return (
    <S.Wrapper>
      {coffees.map((coffee) => {
        return (
          <div key={coffee.id}>
            <pre>{JSON.stringify(coffee, null, 2)}</pre>
          </div>
        );
      })}
    </S.Wrapper>
  );
}
