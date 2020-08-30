import React,{useState,useEffect} from 'react';
import Yelp from '../API/Yelp'

const useResults =()=>{
     // je l'initialise comme tableau vide parceque je m'attends à ce que les resultats finissent par etre un grand tableau d'objets.
     const [results,setResults]=useState([]);
     // la gestion du message d'erreur dans mon catch
     const [errorMessage,setErrorMessage]=useState("");
 
     // Ma fonction pour rechercher l'api.
     // il s'agit d'une opération asynchrone nous devons ajouter une promesse ou klk chose comme ça
     // Ou pour simplifier notre code nous pouvons transformer searchApi en fonction asynchrone
     // Nous pouvons utiliser la syntaxe d'attente à l'interieur de cette fonction
     // En d'autre terme nous allons dire que la reponse est une attente à yelp
     //Nous assignons le resultat à response .
     const searchApi= async (searchTerm) =>{
       console.log('salut petit cva')
       try{   
         
         const response = await Yelp.get('/search',{
             params:{
                 limit:50,
                 term:searchTerm,
                 location:'san jose'
   
             }
         });
       //   response.data.bussiness recoit mes objets et mis a jour de mon state
       setResults(response.data.businesses);
 
       }
     //Si quelque chose ne va pas..
       catch (err) {
           setErrorMessage('quelque chose ne vas pas');
 
       }
     }
     //Lorsque notre composant est rendu pour la premiére fois nous pouvons appeler notre api de recherche avec useEffect et un tableau vide
     useEffect(()=>{
       searchApi('pasta')
 
     },[])
     return [searchApi,results,errorMessage];

};  
export default useResults;