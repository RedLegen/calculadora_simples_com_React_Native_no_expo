// importação dos componentes do (Expo, React Native e do react native gesture handler)

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// importação dos estilos

import styles from './styles';
import stylesButton from './buttons';

// a função que faz o render na tela

export default function App() {
  // funções do UseState

  // count: é a variavel que é chamada quando é alterada 
  // SetCount: é a função que faz a alteração na tela

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // o render do que vai aparecer na tela 
  
  return (
    // mostra quantas vezes a pessoa clicou
  
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou { count } vezes</Text>
      <StatusBar style="light" />

      {/* criação de botões */}

      <View style={styles.buttonContainer}>
        <RectButton onPress={() => setCount(count + 1)} style={[stylesButton.button, stylesButton.button1]}>
          <Text style={stylesButton.buttonText}>Clica aqui</Text>
        </RectButton>

        <RectButton onPress={() => setCount(count + 2)} style={[stylesButton.button, stylesButton.button2]}>
          <Text style={stylesButton.buttonText}>Clica aqui para somar 2X</Text>
        </RectButton>

        <RectButton onPress={() => setCount(count + 3)} style={[stylesButton.button, stylesButton.button3]}>
          <Text style={stylesButton.buttonText}>Clica aqui para somar 3X</Text>
        </RectButton>

        <RectButton onPress={() => setCount(count + 4)} style={[stylesButton.button, stylesButton.button4]}>
          <Text style={stylesButton.buttonText}>Clica aqui para somar 4X</Text>
        </RectButton>

        <RectButton onPress={() => setCount(count - count)} style={[stylesButton.buttomZerar, stylesButton.button]}>
          <Text style={stylesButton.buttonText}>Clica aqui para zerar a contagem</Text>
        </RectButton>

        {/* mostra o resultado das vezes clicadas */}

        <Text style={styles.text}>O resultado se somar o { count } + 10</Text>

        <RectButton onPress={() => setTotal(count + 10)} style={[stylesButton.buttomSomar, stylesButton.button]}>
          <Text style={stylesButton.buttonText}>Clica aqui para somar o total</Text>
        </RectButton>

        <RectButton onPress={() => setTotal(total - total)} style={[stylesButton.buttomZerar, stylesButton.button]}>
          <Text style={stylesButton.buttonText}>Clica aqui para zerar o total</Text>
        </RectButton>

      </View>

      {/* mostra o resultado das vezes clicadas + 10 */}

      <Text style={styles.text}>Total: { total }</Text>

    </View>
  );
}