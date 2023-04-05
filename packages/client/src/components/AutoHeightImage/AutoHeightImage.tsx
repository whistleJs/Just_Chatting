/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

import { AutoHeightImageContainer } from "./style";

export const AutoHeightImage = (props: ImageProps) => {
  return (
    <AutoHeightImageContainer>
      <Image fill {...props} />
    </AutoHeightImageContainer>
  );
};
