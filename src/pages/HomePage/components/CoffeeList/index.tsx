import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";

import { ShopContext } from "../../../../contexts/ShopContext";
import * as S from "./styles";

export function CoffeeList() {
  const { coffees } = useContext(ShopContext);

  return (
    <S.Wrapper>
      <h2>Nossos Cafés</h2>
      <S.ProductGrid>
        {coffees.map((coffee) => {
          return (
            <S.ProductCard key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div>
                {coffee.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{coffee.name}</h3>
              <p>{coffee.description}</p>
              <footer>
                <p>
                  R${" "}
                  <span>{coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </p>
                <div className="addToCart">
                  <div className="quantity">
                    <button>
                      <Minus size={14} />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="cart">
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </div>
              </footer>
            </S.ProductCard>
          );
        })}
      </S.ProductGrid>
    </S.Wrapper>
  );
}
