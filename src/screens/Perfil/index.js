import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native';
import styles from './style'

import foto from '../../../assets/IMG_20200714_192117.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PerfilScreen(props){
    const { navigation } = props;

    return(
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#BFB3A8"  />
            <Image source={foto} style={styles.foto} />
                <Text style={styles.titulo}>
                    Roney C. Lima
                </Text>
                <Text style={styles.texto}>
                    Estudante de Engenharia Elétrica, Programador Full Stack, mas principalmente pai de uma família linda. Por vários motivos, merece uma ótima vaga em uma maravilhosa empresa para contribuir com muito orgulho, trabalhando para entregar produtos de alta qualidade e de forma agil. 
                </Text>
            
        </View>
    );
}


  