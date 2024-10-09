import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  // Hàm giải phương trình bậc 2
  const solveQuadraticEquation = () => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setResult('Vui lòng nhập đúng các hệ số.');
      return;
    }

    const delta = B * B - 4 * A * C;

    if (delta < 0) {
      setResult('Phương trình vô nghiệm.');
    } else if (delta === 0) {
      const x = -B / (2 * A);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      setResult(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  // Hàm clear dữ liệu
  const clearData = () => {
    setA('');
    setB('');
    setC('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        value={a}
        onChangeText={text => setA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        value={b}
        onChangeText={text => setB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        value={c}
        onChangeText={text => setC(text)}
      />

      <Button title="Giải" onPress={solveQuadraticEquation} />
      <Button title="Clear" onPress={clearData} color="red" />

      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
