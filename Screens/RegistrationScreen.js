import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

export default function RegistrationScreen() {
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginFocus = () => {
    setLoginFocused(true);
  };

  const handleLoginBlur = () => {
    setLoginFocused(false);
  };
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
  const form = {
    login,
    email,
    password,
  };

  const onSubmit = () => {
    console.log(form);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/bg_img.jpg")}
        >
          <View style={styles.formWrap}>
            <View style={styles.avatarWrap}>
              <View style={styles.avatar}>
                <TouchableOpacity style>
                  <Image
                    style={styles.addBtnImg}
                    source={require("../images/add_btn.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isLoginFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  value={login}
                  onFocus={handleLoginFocus}
                  onBlur={handleLoginBlur}
                  onChangeText={setLogin}
                />
              </KeyboardAvoidingView>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  value={email}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  onChangeText={setEmail}
                />
              </KeyboardAvoidingView>
              <View style={styles.passwordWrap}>
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    value={password}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    onChangeText={setPassword}
                  />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.toggleButton}>
                  <Text style={styles.toggleButtonText}>Показати</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={onSubmit}
              >
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
              <View style={styles.linkWrap}>
                <Text style={styles.linkText}>Вже є акаунт?</Text>
                <TouchableOpacity style activeOpacity={0.7}>
                  <Text style={styles.linkText}> Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    paddingBottom: 45,
  },

  formWrap: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  avatarWrap: {
    position: "absolute",
    left: 132,
    top: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
  },
  addBtnImg: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 81,
    left: 105,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
