import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import { images } from '../../constants/Images'
import React from 'react';
import Title from '../../component/Title';
import Footer from '../../component/Footer';

export default function aquilon(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.bg}>
                <View style={styles.main}>
                    <Title title="Aquilon"></Title>
                    <View style={styles.image}>
                      <Image
                      source={images.aquilon.url}
                      />
                    </View>
                  <View style={styles.contenu}>
                      <Text>Qu'il est chaud le Soleil</Text>
                      <Text>Quand nous sommes en vacances</Text>
                      <Text>Y a d'la joe, des hirondelles</Text>
                      <Text>C'est le Sud de la France</Text>
                      <Text>Papa bricole au garage</Text>
                      <Text>Maman lit dans la chaise longue</Text>
                      <Text>Dans ce jolie paysage</Text>
                      <Text>Moi, je me balade en tongs</Text>
                      <Text>{'\n'}Que de bonheur !</Text>
                      <Text>Que de bonheur !</Text>
                  </View>
                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    main: {
      flex: 5
    },
    buttons: {
      flex: 4,
    },
    footer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },

    bg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    image:{
      marginLeft: "50%",
      marginRight : "50%",
      justifyContent:"center",
      alignItems:"center",      // transform: "translate(-50%,-50%)"
    },
    title: {
      flex: 1,
      alignSelf: "center",
      marginTop: 50,
    },
    titleContent: {
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white'
    },
    boldText: {
        fontWeight: "bold"
    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 7,
    },

    mainButton: {
      flexDirection: "row",
    },
    buttons1: {
      flexDirection: "row",
    },
    buttons2: {
      flexDirection: "row",
    }
  });
