import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import BannerImg from "../../../../assets/banner-image.png";
import * as S from "./styles";

export function Banner() {
  return (
    <S.Wrapper>
      <S.BannerInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <S.TagsGrid>
          <S.BannerTag color="yellowDark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </S.BannerTag>
          <S.BannerTag color="baseText">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantem o café intacto</span>
          </S.BannerTag>
          <S.BannerTag color="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </S.BannerTag>
          <S.BannerTag color="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </S.BannerTag>
        </S.TagsGrid>
      </S.BannerInfo>
      <img src={BannerImg} alt="" />
    </S.Wrapper>
  );
}
