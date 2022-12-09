import React from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import { A } from "@expo/html-elements";
import ProjectCard from "../../../components/Card";
import { Podcasts } from "../../../components/data";
import { Stack } from "expo-router";

const IA = A as any;
export default function Media({ navigation }) {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Media",
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        {Podcasts.map(({ authors, ...project }) => (
          <ProjectCard
            key={project.title}
            {...project}
            renderDescription={() => (
              <View style={styles.aWrapper}>
                {authors.map((author, index) => (
                  <IA
                    key={author}
                    href={`https://twitter.com/${author}`}
                    style={styles.a}
                  >
                    {`@${author}${index !== authors.length - 1 ? " | " : ""}`}
                  </IA>
                ))}
              </View>
            )}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  aWrapper: { flexDirection: "row" },
  a: {
    marginVertical: 0,
    color: "white",
    marginBottom: 4,
  },
});