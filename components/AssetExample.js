import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../assets/cora.png')} />
        <Image style={styles.logo} source={require('../assets/cora.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#DB0075',
  },
  paragraph: {
    margin: 14,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
  imageContainer: {
    flexDirection: 'row', // Alinhar as imagens horizontalmente
  },
  logo: {
    height: 128,
    width: 128,
  }
});