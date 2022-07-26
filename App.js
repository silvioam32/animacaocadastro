import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Logo from "./assets/harley.png";

import * as Animatable from "react-native-animatable";

export default function App() {
    const [nome, setENome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const cadastro = () => {
        Alert.alert("nome, email, senha");
        //Fazer chamada no back-and para cadastro.
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            {/* adicionei9 esta View para animação do Header */}
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    style={styles.styleImage}
                    source={Logo}
                    resizeMode="contain"
                />
            </View>

            {/* adicionei para animação do nome loguin e senha */}
            <Animatable.View
                delay={600}
                animation="fadeInUp"
                style={styles.containerForm}
            >
                <TextInput
                    placeholder="Seu nome..."
                    style={styles.TextInput}
                    onChangeText={(text) => setENome(text)}
                />
                <TextInput
                    placeholder="Seu e-mail..."
                    style={styles.TextInput}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Seu senha..."
                    style={styles.TextInput}
                    onChangeText={(text) => setSenha(text)}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38a69d",
   },
   containerLogo: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38a69d",
    },
   containerForm: {
        flex: 1,
        paddingEnd: '5%',
        paddingStart: '5%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
   },
    styleImage: {
        height: 300,
        width: "100%",
        marginBottom: 20,
    },
    TextInput: {
        fontSize: 20,
        marginTop: 10,
        padding: 10,
        marginBottom: 8,
        borderRadius: 7,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    button: {
        height: 40,
        width: "50%",
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38a69f",
    },
    buttonText: {
        color: "black",
        fontWeight: 'bold',
    },
});
