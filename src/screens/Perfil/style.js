import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  
  container: {    
    flex: 1,
    alignContent:'center',
    alignItems:'center',
    backgroundColor: '#BFB3A8',
  }, 
  foto: {
    marginTop:40,
    width: '50%',
    height: '29%',
    maxHeight: '40%',
    borderRadius:200,
    borderColor: '#73665A',
    borderWidth:8,
    
  },
  titulo: {
    color:'#73665A',
    fontSize: 28,
    fontWeight:'700',
    padding:10,
  },
  texto:  {
    fontSize:16,
    color: '#8C6A56',
    paddingHorizontal:12,
    paddingTop:40,
  }
});

export default styles;