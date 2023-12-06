import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <>
    <View style={{display:'flex'}}>
      <Text>Isso é uma View </Text>
      <Text>Olá, Texto!!!!</Text>
      <Text>Olá, Texto!!!!</Text>
      <Text>Olá, Texto!!!!</Text>

      <View style={styles.caixa}>

      </View>
      
    </View>  
    </>
  );
}


const styles = StyleSheet.create({
  caixa: {
    widht:'100%',
    height: '100px',
    backgroundColor: 'red' 
  }
    
})