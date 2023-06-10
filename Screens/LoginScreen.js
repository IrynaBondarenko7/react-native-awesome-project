import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../images/bg_img.jpg")}
      >
        <View style={styles.formWrap}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
            <View style={styles.passwordWrap}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={true}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <TouchableOpacity style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>Показати</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
              <Text style={styles.btnText}>Увійти</Text>
            </TouchableOpacity>
            <View style={styles.linkWrap}>
              <Text style={styles.linkText}>Немає акаунту?</Text>
              <TouchableOpacity style activeOpacity={0.7}>
                <View>
                  <Text style={styles.linkText}> Зареєструватися</Text>
                  <View style={styles.underline} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 16,
    paddingBottom: 111,
  },

  formWrap: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 27,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
  },
  linkWrap: {
    flexDirection: "row",
    justifyContent: "center",
  },
  linkText: {
    color: "#1B4371",
  },
  underline: {
    borderBottomColor: "#1B4371",
    borderBottomWidth: 0.5,
  },
  passwordWrap: {
    position: "relative",
    justifyContent: "center",
  },
  toggleButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  toggleButtonText: {
    color: "#1B4371",
  },
});
