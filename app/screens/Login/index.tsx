import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../../components/shared/Header";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('screens/Home/index', {userName: user});
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={['#87CEEB', '#FFF']}  
    >
      <Header/>
      <View style={styles.content}>
      <Text>Login</Text>
      <Text>Digite seu usuário</Text>
      <TextInput style={styles.input}
        onChangeText={(inputText) => {setUser(inputText)}}
        value={user}
      />

      <Text>Digite sua senha</Text>
      <TextInput style={styles.input}
        onChangeText={(inputText) => {setPassword(inputText)}}
        value={password}
      />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      </View>
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 25,
  },
  button: {
    backgroundColor: 'inherit',
    borderColor: 'gray',
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    padding: 5,
  }
});
