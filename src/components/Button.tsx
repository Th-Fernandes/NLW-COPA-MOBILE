import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";
import { ReactNode } from "react";
interface Props extends IButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary";
}

export function Button({ children, type = "primary", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h="56px"
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === "primary" ? "yellow.500" : "red.500"}
      _pressed={{ bg: type === "primary" ? "yellow.600" : "red.600" }}
      {...rest}
    >
      <Text color={type === "primary" ? "black" : "white"}>{children}</Text>
    </ButtonNativeBase>
  );
}
