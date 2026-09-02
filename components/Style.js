import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  botaoGrande: {
    width: '30vw',
    height: '10vh',
    backgroundColor: '#da6363',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  texto: {
    color: '#ffffff'
  },
  botaoPequeno: {
    width: 90,
    height: 70,
    backgroundColor: '#638dda',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});