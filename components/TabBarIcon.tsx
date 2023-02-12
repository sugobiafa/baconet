import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  focused?: boolean;
  color: string;
  style?: React.ComponentProps<typeof Ionicons>["style"];
}) {
  let resolvedName: any = props.name;
  if (!props.focused) {
    resolvedName = props.name + "-outline";
  }

  return (
    <Ionicons
      size={30}
      style={[{ width: 30, height: 35, marginBottom: -3 }, props.style]}
      {...props}
      name={resolvedName}
    />
  );
}

export function makeIcon(name: React.ComponentProps<typeof Ionicons>["name"]) {
  return (props: { focused?: boolean; color: string }) => (
    <TabBarIcon name={name} {...props} />
  );
}
