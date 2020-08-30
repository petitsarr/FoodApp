import React from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const SearchBar= ({term,onTermChange,ontermSubmit})=>{
    return(
        <View style={styles.backgroundStyle} >
        <Feather name= "search" style={styles.iconStyle} />
      <TextInput
       value={term}
       autoCapitalize="none"
       onEndEditing={()=>ontermSubmit()}
       autoCorrect={false}
        onChangeText={(newterm)=>onTermChange(newterm)}
         style={styles.inputStyle} 
         placeholder='Search'/>
        </View>
    )
}
const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'gray',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom: 10
        
    },
    inputStyle:{
        flex:1,
        fontSize:19  
       
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }

})
export default SearchBar;