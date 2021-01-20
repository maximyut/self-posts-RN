import React, { useState } from "react";
import { View, StyleSheet, Image, Button, Alert, Text } from "react-native";
import {THEME} from "../theme"
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    Alert.alert("Ошибка", "Вы не дали прав на создание фото");
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
      //   aspect: [16, 9],
    });
  
    setImage(img.uri);
    onPick(img.uri);
  };

  const pickPhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.btnWrapper}>
        <Button
          title="Сделать фото"
          onPress={takePhoto}
          color={THEME.MAIN_COLOR}
        />
        <Button
          title="Выбрать фото из галереи"
          onPress={pickPhoto}
          color={THEME.MAIN_COLOR}
        />
      </View>

      {image && <Image style={styles.img} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  btnWrapper: {
    justifyContent: "space-between",
    height: 80
  },
  img: {
    width: "100%",
    height: 400,
    marginTop: 10,
  },
});
