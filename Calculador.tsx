import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
type Moneda = "moneda1" | "monedan2" | "moneda3" | "moneda4"
type Precio = "USD" | "NIO" | "EUR" | "CRC"
type Caja = "caja1" | "caja2" | "caja3" | "caja4"


interface Props{
  moneda?: Moneda;
  precio?: Precio;
}
const validarTasadeCambio ={
  USD: 36,
  NIO: 1,
  EUR: 23,
  CRC: 34

}
const validarPrecio ={
  
}

export const Calculador =({precio}: Props) => {
  const GuardarMonedaOrigerigen = precio?  validarTasadeCambio[precio] :validarTasadeCambio.NIO;

  const [MonedaOrigen, setmonedaOrigen] = useState("");

  const saveMoneda = (text: string) => {
    setmonedaOrigen(text);
  };




  return (
    <View style={styles.container}>
      <Text>$ Calculador de divisas $</Text>

      <Text>$ Moneda Origen $</Text>
      <TextInput
      style={estilos.input}
      placeholder='moneda de origen'
      onChangeText={(text) => setmonedaOrigen (text)}
      
      />
      <Text>$ Moneda destino $</Text>
      <TextInput
      style={estilos.input}
      placeholder='moneda de '
      
      />
      <Text>$ Moneda tasa de cambio $</Text>
      <TextInput
      value={GuardarMonedaOrigerigen}
      style={estilos.input}
      placeholder='Tasa de cambio'
      
      />
      
      <Text>$ Monto $</Text>
      <TextInput
      style={estilos.input}
      placeholder='monto'
      value={MonedaOrigen}
      
      />
      <Text>$ Resultado $</Text>
      <TextInput
      style={estilos.input}
      placeholder='Resultado'
      
      />
      <TouchableOpacity
      style={estilos.boton}>
        <Text >Calcular</Text>
        </TouchableOpacity>

    </View>
  );
}

const estilos =StyleSheet.create({
  input:{
      marginHorizontal: 5,
      width: 250,
      height: 50,
      color: 'black',
      fontSize: 12,
      marginTop: 45,
      backgroundColor: 'white',
      borderRadius: 10,
      bordertWidth: 10,
      borderWidth: 1,
      borderColor: 'blsck'
  },
  boton:{
    marginTop:23,
    width:100,
    height:50,
    alignItems:'center',
    backgroundColor: "rgb(228, 119, 182)"
    
  }
})








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});