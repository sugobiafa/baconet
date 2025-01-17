import {
  Inter_300Light,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { SourceCodePro_400Regular } from "@expo-google-fonts/source-code-pro";

import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Stack, usePathname } from "expo-router";
import {
  Platform,
  Share,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { Icon } from "../../../components/icon";
import { useFont, useLoadFonts } from "../../../components/useFont";

function ShareButton() {
  const theme = useColorScheme() === "dark" ? DarkTheme : DefaultTheme;
  const href = usePathname();
  const link = new URL(href, "https://everywhere.run").toString();
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
      <Icon
        width={24}
        height={24}
        fill={theme.colors.text}
        name={"share-outline"}
      />
    </TouchableOpacity>
  );
}

export default function StackLayout({ segment }) {
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
      screenOptions={{
        headerLargeTitle: segment !== "(about)",
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
      <Stack.Screen
        name={initRouteName}
        // @ts-ignore
        options={
          initRouteName === "index"
            ? (nav) => ({
                title: "Home",
                headerLargeTitle: true,
                headerRight(props) {
                  if (Platform.OS === "web") {
                    return null;
                  }
                  // if (Platform.OS === "web") {
                  //   return (
                  //     <SearchBar
                  //       onSubmit={() => {
                  //         nav.setParams({ q: value });
                  //       }}
                  //       onChangeQuery={(val) => {
                  //         setValue(val);
                  //       }}
                  //       value={value}
                  //     />
                  //   );
                  // }
                  return <ShareButton />;
                },
                // headerSearchBarOptions: {
                //   placeholder: "Search",
                //   autoFocus: true,
                // },
              })
            : undefined
        }
      />

      <Stack.Screen name="blog/[post]" />
    </Stack>
  );
}
