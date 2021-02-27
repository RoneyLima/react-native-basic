import { HeaderTitle } from '@react-navigation/stack';
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'


import { Header } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen(props){
    const { navigation } = props;


    
    return(
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#BFB3A8"  />
            <Icon name="person-circle" style={styles.icone} />
            <View style={styles.formview}>
                <TextInput style={styles.input} placeholder="Digitai a vossa graça" onChangeText={text=>setNome(text)} />

                <TextInput style={styles.input} placeholder="Digitai o vosso endereço de e-mail" onChangeText={text=>setEmail(text)} />

                <TextInput style={styles.input} placeholder="Agora, digitai a vossa senha" secureTextEntry={true} onChangeText={text=>setSenha(text)} />
                
                <TouchableOpacity style={styles.btncadastro} onPress={() => cadastro()}>
                    <Text style={styles.textBtn}>Cadastrai</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    );
}