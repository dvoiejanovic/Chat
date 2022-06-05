import macak from "../assets/macak.jpg";
import pingvin from "../assets/pingvin.jpg";
import prasac from "../assets/prasac.jpg";
import zirafa from "../assets/zirafa.jpg";

export const AvatarsEnum = Object.freeze({
  CAT: 1,
  GIRAFFE: 2,
  PENGUIN: 3,
  PIG: 4,
})

export const avatars = [
  {
    id: AvatarsEnum.CAT,
    source: macak,
  },
  {
    id: AvatarsEnum.GIRAFFE,
    source: zirafa,
  },
  {
    id: AvatarsEnum.PENGUIN,
    source: pingvin,
  },
  {
    id: AvatarsEnum.PIG,
    source: prasac,
  },
];
