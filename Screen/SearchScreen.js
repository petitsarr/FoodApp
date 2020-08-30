import React,{useState} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList';
  
//useResults me renvoie mes trois variables
import useResults from  '../hooks/useResults'

const SearchScreen= ({navigation})=>{
    const [term,setTerm]=useState('');
    // je recupere mes trois variables
    const [searchApi,results,errorMessage]= useResults();

    // Nous créons une fonction qui permet de filtrer les resultats en fonction du prix
    // Dans nos resultats nous devons montres les restaurants les moins cheres en premiers
    // Elle recoit en paramétre le prix
    const filterResultsByPrice=(price)=>{
      // price === '$' || '$$' || '$$$'
      return results.filter((result)=>{
        return result.price === price
      })

    }
    
  
// on appel notre fonction searchApi à chaque fois que nous soumettons notre terme de recherche
    return(
        <View style={{flex:1}}>
        <SearchBar 
        ontermSubmit={ ()=> searchApi(term)}
        term={term}
         onTermChange={(newTerm)=>setTerm(newTerm)}
          />
        
         {errorMessage ? <Text>{errorMessage}</Text> : null}
{/* Si ScrollView detecte qu'elle contient trop de contenu
pour tout tenir à l'ecran à un moment donné il activera automatiquement le defilement
 */} 
        <ScrollView>
        <ResultsList navigation={navigation} results= {filterResultsByPrice('$')} title= 'Cost Effective' />
        <ResultsList navigation={navigation} results= {filterResultsByPrice('$$')} title ='Bit Pricier' />
        <ResultsList navigation={navigation} results= {filterResultsByPrice('$$$')} title = 'Big Spender' />
        </ScrollView>
        </View>
    )   
}
const styles=StyleSheet.create({

})
export default SearchScreen;
