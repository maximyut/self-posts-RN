import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen, onRemove }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>Постов нет</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onOpen={onOpen} onRemove={onRemove} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItems: {
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 20,
  },
});
