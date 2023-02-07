import {
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { SourceCodePro_400Regular } from "@expo-google-fonts/source-code-pro";

import Ionicons from "@expo/vector-icons/Ionicons";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Stack, usePathname } from "expo-router";
import { useContextKey } from "expo-router/build/Route";
import {
  Platform,
  Share,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import { usePosts } from "../../../components/api";
import { OutletContext } from "../../../components/OutletContext";
import { useFont, useLoadFonts } from "../../../components/useFont";

// export const unstable_settings = {
//   initialRouteName: "media",
// };

function ShareButton() {
  const theme = useColorScheme() === "dark" ? DarkTheme : DefaultTheme;
  const href = usePathname();
  const link = new URL(href, "https://baconet.netlify.app").toString();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: Platform.select({ web: 16, default: 0 }),
      }}
      onPress={() => {
        Share.share({
          url: link,
          message: "Evan's cooking",
        });
      }}
    >
      <Ionicons size={24} color={theme.colors.text} name={"share-outline"} />
    </TouchableOpacity>
  );
}

export default function StackLayout({ segment }) {
  // const posts = usePosts();

  const initRouteName = segment.replace(/^\(/, "").replace(/\)$/, "");

  useLoadFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    SourceCodePro_400Regular,
  });

  // if (!fontsLoaded) return null;

  return (
    <Stack
      id={useContextKey()}
      screenOptions={{
        headerLargeTitle: true,
        headerTitleStyle: {
          fontFamily: useFont("Inter_700Bold"),
        },

        headerLargeTitleStyle: {
          fontFamily: useFont("Inter_700Bold"),
        },

        headerRight(props) {
          if (Platform.OS === "web") {
            return null;
          }
          return <ShareButton />;
        },
      }}
    >
      <Stack.Screen name={initRouteName} />

      <Stack.Screen name="watch/[video]" options={{ presentation: "modal" }} />
    </Stack>
  );
}