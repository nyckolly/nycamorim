import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState('pink');

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0 , 8 ));
    setButtonColor(buttonColor === 'pink' ? 'purple' : 'pink','purple' ,);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Card>
        <AssetExample currentImageIndex={currentImageIndex} />
      </Card>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={changeImage}
      >
        <Text style={styles.buttonText}>Me mude de cor!!!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DB0075',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    marginTop: 6,
    borderRadius: 15,
    alignSelf: 'center',
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
