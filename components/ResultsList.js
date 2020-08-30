import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail'

const ResultsList =({title,results,navigation})=>{

   

    return(
        <View style={styles.container} >
        <Text style = {styles.title} >  {title} </Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data= {results}
        keyExtractor={(result)=>result.id}
        renderItem = {({item})=>{
            
            // Notre deuxiéme argument sera un objet qui va étre une information(qui est ici l'id de l'entreprise) que 
            // nous allons communique à mon component ResultsDetail
        
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('Fish',{id:item.id})} >
                <ResultsDetail result= {item} />
                </TouchableOpacity>
             )
        }}
        />
        </View>
    )
}


const styles= StyleSheet.create({
    title:{
        fontSize:19,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:10
    },
    container:{
        marginBottom:18

    }

});
export default ResultsList;