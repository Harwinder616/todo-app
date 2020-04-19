import React from 'react';
import { StyleSheet, Text, ScrollView, AsyncStorage } from 'react-native';
import { Appbar,TextInput,Button } from 'react-native-paper';
import Items from './comp/option'
export default class Todo extends React.Component {
   arr=[]
  id=0;
  state = {
    text: '',
    item:[
      {id:'',
    data:''
  }
    ]
  };

  store=async()=>{
    if(this.state.text==='')
    alert('Enter some Text')
    else
   { this.arr.push({id:this.id,data:this.state.text});
    this.id++;}
    this.setState({text:''})
    await AsyncStorage.setItem("list", JSON.stringify(  this.arr))
    let value=JSON.parse( await AsyncStorage.getItem("list"))
   this.setState(()=>{
     return {item:value

     }
   })
  
   
  }
 pressHandler=(id)=>{
  let count=[];
  for(let i=0;i<this.state.item.length;i++)
  {
      if(this.state.item[i].id!=id)
      count.push(this.state.item[i]);



  }
  this.arr=count;
  AsyncStorage.setItem("list", JSON.stringify(count))

    

    this.setState((prev)=>{

      return{ item:prev.item.filter((option)=>{

        return  option.id!=id
      })
      
      }

   

    })

   
     


  }
 async componentDidMount()
   {
    let value=JSON.parse( await AsyncStorage.getItem("list"))
    this.setState(()=>{
      return {item:value
 
      }
    })
    this.arr=value;
 
    if(this.arr.length>=1)
    this.id=this.arr[this.arr.length-1].id+1
    
   }
  render()
  {

  return (
    <ScrollView style={styles.container}>
       <Appbar.Header>
       
        <Appbar.Content
          title="Todo-App" style={{alignItems:"center"}}
          
        />
       
      </Appbar.Header>
      <TextInput
        label='Enter Item' mode="outlined"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={() => {
          this.refs.demo.clear()
      }}
      />

       <Button style={{marginTop:10,marginBottom:10}} mode="contained" onPress={this.store}>
    Add Todo
  </Button>
  
 {this.state.item.length===0&&<Text  style={{  marginTop:5,marginLeft:144,fontSize:20}}>No item Exist</Text>}
 {this.state.item.map((value)=>{
    return <Items size={this.state.item.length} value={value.data} key={value.id} id={value.id} pressHandler={this.pressHandler}/>
  })}
   
   
  </ScrollView>
  );
  

}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
   
   
  },
});
