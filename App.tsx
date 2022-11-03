import { NativeBaseProvider, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";
import { AuthContextProvider } from "./src/contexts/authContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        {fontsLoaded ? <SignIn /> : <Loading />}
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
