import { MapPin, ShoppingCart } from "phosphor-react";

import LogoImg from "../../../../assets/logo.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <img src={LogoImg} alt="" />
      <div>
        <S.Tag variant="purple">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </S.Tag>
        <S.Tag variant="yellow">
          <ShoppingCart size={22} weight="fill" />
        </S.Tag>
      </div>
    </S.Wrapper>
  );
}
