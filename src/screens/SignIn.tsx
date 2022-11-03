import { Text, Center, Icon } from "native-base";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Fontisto } from "@expo/vector-icons";

export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type="secondary"
        mt={12}
      >
        Entrar Com Google
      </Button>
      <Text mt={4} color="white" textAlign="center">
        Não utilizamos nenhuma informação além {"\n"}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}
