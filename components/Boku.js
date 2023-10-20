import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <ImageBackground style={styles.image} source={require('../assets/UA.png')}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>BOKU NO HERO ACADEMIA</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/boku-no-hero-academia.jpg')}
            />
          </View>
        </View>
        <View style={styles.section}>
          {renderTextSection('Historia', 'Boku no Hero conta a história de Izuku "Deku" Midoriya, um jovem que nasceu sem Individualidade (poder) em um mundo em que 80% da população manifesta ao menos uma desde criança. O sonho do jovem de se tornar um herói, inspirado pelo herói nº 1, All Might, é massacrado pela descoberta.')}
          {renderTextSection('Filmes', 'Boku no Hero tem dois filmes: 2 Heróis e Heroes Rising. O primeiro se passa nas férias de verão da U.A. Aqui, Midoriya e All Might visitam a I-Expo, uma feira em uma ilha remota destinada a exibir individualidades e tecnologias que fortalecem estes poderes. Claro, o jovem e o herói encontram outros alunos da turma de Deku, mas vilões ameaçam a exposição. 2 Heróis estreou no Brasil em 2019. O filme está disponível no catálogo do Telecine.')}
          {renderTextSection('Mangá', 'O mangá de Boku no Hero, escrito e ilustrado por Kōhei Horikoshi, é publicado na revista japonesa Weekly Shonen Jump desde julho de 2014. Até o momento, 29 volumes foram publicados. A obra ainda não foi concluída.')}
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
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  textAlign:'center',
  },
  textContainer: {
    backgroundColor: '#f5a85e',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    margin:10,
    alignItems:'center',
  },
});
