import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card,List} from 'react-native-paper'

const Items=(prop)=>{
    if(prop.value===''||prop.size===0||prop.value===undefined)
    return<Text style={{  marginTop:5,marginLeft:144,fontSize:20}}>No item exist</Text>

   return(
    <View>
     <Card style={{marginBottom:5}}>
     <List.Item
    title={prop.value}
    right={() => <List.Icon  icon="delete" />}
    onPress={()=>prop.pressHandler(prop.id)}
  />
     </Card>
        
       

        </View>



   )


}
export default Items
/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center'
      
      //alignItems:'center',
      //justifyContent: 'center',
    }
  });*/