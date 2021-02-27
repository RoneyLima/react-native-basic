import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import styles from './style'
import DATA from './data'


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
  );


export default function ListaScreen(props){
    const {navigation} = props;

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo} > Qualificações</Text>
            <StatusBar animated={true} backgroundColor="#BFB3A8"  />
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />
        </SafeAreaView>
      );
}




