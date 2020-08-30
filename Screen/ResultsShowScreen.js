import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import Yelp from '../API/Yelp'

const ResultsShowScreen =({route,navigation})=>{
    // cet fois ci nous obtiendrons un seul objet
    // Nous utilisons une valeur par defaut null qui indique que nous n'avons 
    // pas encore de données disponibles
    const [result,setResult]= useState(null);
    // L'id contient un objet avec des informations sur l'entreprise que nous avons demandées
    // Comme le tableau de photo (le tableau d'image) que nous voulons afficher à notre utilisateur
    const id = route.params.id
   
    // Ma fonction recoit l'id
    const getResult= async (id) => {
        const response= await Yelp.get(`/${id}`)
       setResult( response.data);
  
    }

    useEffect(()=>{
        getResult(id)
    })
    // S'il n'y a pas de resultat
    if(!result){
        return null;
    }
    return(
        <View>
        <Text> {result.name} </Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem= {({item})=>{
            return <Image style= {styles.image} source={{uri:item}}/>

        }}
        />
        </View>

    );
}
const styles= StyleSheet.create({
    image:{
        height:200,
        width:300
       
    }

});
export default ResultsShowScreen;
/* Nous devons nous rappeler que lorsque notre quand notre application ou lorsque ce composant est affiché
pour la premiére fois,les résultats result vont avoir une valeur null.Donc si nous essayons de faire reference à
des propriétés différentes comme le nom ou les images de ce restaurant nous aurons un message d'erreur .Doncc pour gerer 
cela avant de renvoyer notre jsx,je vais ajouter un petit controle
*/