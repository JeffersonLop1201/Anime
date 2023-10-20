import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style={styles.image} source={require('../assets/5.jpg')}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Black Clover</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/911611.png')}
            />
          </View>
        </View>
        <View style={styles.section}>
          {renderTextSection('Historia', 'A trama acompanha dois órfãos chamados Asta e Yuno que foram criados em uma igreja do reino de Clover. No mundo onde o enredo se desenrola todos possuem algum tipo de poder mágico, Asta, porém, nasceu sem nenhuma habilidade extraordinária para chamar de sua. Yuno, no entanto, possui muita magia dentro de si e é considerado um prodígio das artes mágicas.')}
          {renderTextSection('Filmes', 'Em Black Clover: A Espada do Rei Mago, Asta nasceu em um mundo mágico, e tudo aqui gira em torno da magia. Infelizmente, ele nasceu sem poderes mágicos. Mas isso não o impede de se tornar um Rei Mago. Tudo o que ele precisa fazer é superar todas as adversidades, provar seu poder e manter um juramento com seus amigos.')}
          {renderTextSection('Mangá', 'Asta e Yuno são órfãos criados em Hage. Quando chegaram aos 15 anos de idade, os dois receberam seus respectivos grimórios e entraram nos esquadrões dos Cavaleiros Mágicos. Asta vai ao esquadrão do Touros Negros enquanto Yuno escolhe o esquadrão do Alvorecer Dourado. Este arco é contado nos volumes 1 e 2 do mangá.')}
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const renderTextSection = (subtitle, text) => (
  <View style={styles.textSection}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  section: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 30,
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f5a85e',
    textAlign: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4, // Sombra mais fina para a imagem
    shadowRadius: 3, // Raio de sombra mais fino para a imagem
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textSection: {
    marginBottom: 35,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4, // Sombra mais fina para a imagem
    shadowRadius: 3, // Raio de sombra mais fino para a imagem
    elevation: 5,
    color:'white',
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  textAlign:'center',
  color:'white',
  },
  textContainer: {
    backgroundColor: '#f5a85e',
    padding: 10,
    borderRadius: 10,
    color:'white',
  },
  text: {
    fontSize: 16,
    margin:10,
    alignItems:'center',
    color:'white',
  },
});
