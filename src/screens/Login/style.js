import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';



const styles = StyleSheet.create({
  
  container: {    
    flex: 1,
    alignContent:'center',
    alignItems:'center',
    backgroundColor: '#BFB3A8',    
  },
  input:  {
        marginTop:10,
        marginBottom:10,
        padding:10,
        width: 400,
        maxWidth: '80%',
        height: 40,
        borderRadius:50,
        backgroundColor: '#fff9',
        color: '#8C6A56',

  },
  textBtn:  {
    color:'#fff',
    fontWeight:'500',
  },
  btncadastro:{
    width: 100,
    height:40,
    backgroundColor:'#8C6A56',
    borderRadius:50,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:20,
  },
  icone:  {
    fontSize:150,
    padding:40,
    color:'white',
  }
});

export default styles;