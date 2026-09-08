import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logoCruzeiro: {
    resizeMode: 'contain',
    width: 500,
    margin: 10,
    maxWidth: 300,
    minHeight: 230
  },
   texto: {
    color: '#ffffff',
    marginTop: 5
  },
  textoLogo: {
    fontFamily: 'Comfortaa_500Medium',
    fontSize: 18,
    color: '#323232'
  },
  botaoGrande: {
    width: 170,
    height: 90,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  botaoPequeno: {
    width: 110,
    height: 90,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8
  },
  divGrande: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    gap: 10,
    marginBottom: 10,
    maxWidth: 400
  },
  divPequena: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '90%',
    maxWidth: 400
  },
  menu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    height: 80,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    backgroundColor: 'white'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    padding: 15,
    borderTopColor: '#5c5c5c',
    borderStyle: 'solid',
    borderTopWidth: 1
  },
  navItem: {
   alignItems: 'center',
   width: 100
  },
  textoNav: {
    textAlign: 'center',
    color: '#5c5c5c'
  }
});