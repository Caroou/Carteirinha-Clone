import { View, Image } from 'react-native';
import { styles } from "./components/Style";
import { useFonts, Comfortaa_500Medium } from '@expo-google-fonts/comfortaa';
import BotaoGrande from './components/BotaoGrande';
import BotaoPequeno from './components/BotaoPequeno';
import Header from './components/Header';
import NavBar from './components/NavBar';
 
export default function App() {

    const [fontsLoaded] = useFonts({Comfortaa_500Medium});

    if (!fontsLoaded) {
    return null;   
    
  }
  return (

    <View style={styles.container}>
      <Header></Header>
      <Image source={require('./components/img/logo.jpg')} style={styles.logoCruzeiro}></Image>
      <View style={styles.divGrande}>
        <BotaoGrande style={{ backgroundColor: 'red' }} title="Carteirinha Digital" type="phone-portrait"></BotaoGrande>
        <BotaoGrande style={{ backgroundColor: 'darkblue' }} title="QRCode [Acesso]" type="qr-code"></BotaoGrande>
        <BotaoGrande style={{ backgroundColor: 'orange' }} title="Carteirinha Física" type="id-card"></BotaoGrande>
        <BotaoGrande style={{ backgroundColor: 'darkcyan' }} title="Ofertas" type="gift"></BotaoGrande>
      </View>
      <View style={styles.divPequena}>
        <BotaoPequeno style={{ backgroundColor: 'rebeccapurple' }} title="Cadastro" type="person"></BotaoPequeno>
        <BotaoPequeno style={{ backgroundColor: 'orangered' }} title="Minha Foto" type="camera"></BotaoPequeno>
        <BotaoPequeno style={{ backgroundColor: 'darkgreen' }} title="Notificações" type="notifications"></BotaoPequeno>
      </View>
      <NavBar></NavBar>
    </View>
  );
}