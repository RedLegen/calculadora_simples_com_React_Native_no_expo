import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import stylesButton from './buttons';

export default function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou { count } vezes</Text>
      <StatusBar style="light" />

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

        <Text style={styles.text}>O resultado se somar o { count } + 10</Text>

        <RectButton onPress={() => setTotal(count + 10)} style={[stylesButton.buttomSomar, stylesButton.button]}>
          <Text style={stylesButton.buttonText}>Clica aqui para somar o total</Text>
        </RectButton>

        <RectButton onPress={() => setTotal(total - total)} style={[stylesButton.buttomZerar, stylesButton.button]}>
          <Text style={stylesButton.buttonText}>Clica aqui para zerar o total</Text>
        </RectButton>

      </View>

      <Text style={styles.text}>Total: { total }</Text>

    </View>
  );
}