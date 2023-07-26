import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () => {
  var [number,Newnumber]=useState('')
  let demo=[]
  const [newlist,updatelist]=useState(demo)
  var find=''
  var mulnums=[]

  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'orange',
      borderRadius: 10,
      width:150,
      height:40,
      marginBottom:2,
      marginLeft:40,
      marginTop:15
    },
    button1: {
      backgroundColor: 'red',
      borderRadius: 10,
      width:150,
      height:40,
      marginBottom:2,
      marginLeft:40,
      marginTop:15
    },
    button2: {
      backgroundColor: 'white',
      borderRadius: 10,
      width:200,
      height:40,
      marginBottom:2,
      marginLeft:100,
      marginTop:15
    },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop:10,
    fontWeight:'500'
  },
  Container:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }
  })

  const savenumber=(e)=>{
    Newnumber(e)
    if(e.length===10){
      let obj={'num':e}
      newlist.push(obj)
      Newnumber('')
    } 
  }

  const addmess=(text)=>{
    find=text.replaceAll(' ',"%20")
  }

  const bulsend=()=>{
    if(find.length<=0){find='Hello'}
     newlist.forEach(element => {
       Linking.openURL('https://wa.me/'+element.num+'?text='+find)
    });
  }

  const numbershowcase=(e)=>{
    return(
      <>
      <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:-15}}>
    <View style={{flex: 1, height: 20, backgroundColor: 'black'}}>
    <Text style={{marginLeft:130 ,color:'white',fontWeight:'500'}}> Number {e.index}       |      {e.item.num}</Text>
    </View>
    </View>
      <Text></Text>
      </>
    )
  }

  const clearlist=()=>{
    updatelist(demo)
  }

  useEffect(()=>{
    alert('This is Whatsapp Bulk message sender and single message sender without saving contacts..\n\nWhen a user add numbers it will redirect to whatsapp and will start messaging from the list you just need to press send and then back then it will push second number')
  },[])

  const mulnumbers=(mulin)=>{
    mulnums =mulin.split(",")
  }

  const sendnumbers=()=>{
    if(find.length<=0){find='Hello'}
    for (let index = 0; index < mulnums.length; index++) {
      const element = mulnums[index];
      Linking.openURL('https://wa.me/'+element+'?text='+find)
    }
  }
  return (
    <View>
      <ScrollView>
    <View><Text style={{fontSize:30,marginLeft:70,color:'green',fontWeight:'800',marginTop:10}}>Whatsapp Bot☺</Text></View>
    <TextInput placeholder='Enter number 10 digits' value={number} keyboardType='number-pad' onChangeText={savenumber} style={{borderRadius:5,fontSize:20,marginLeft:70,color:'red',fontWeight:'800',marginTop:30,backgroundColor:'black',marginRight:80}}></TextInput>
    <TextInput placeholder='Message' onChangeText={addmess} style={{borderRadius:5,fontSize:20,marginLeft:70,color:'white',fontWeight:'800',marginTop:30,backgroundColor:'black',marginRight:80}} multiline={true} numberOfLines = {3}></TextInput>    
    <TextInput placeholder='If you have number list sepreted by comma please paste the list here ex:- 123456,695875,6582458' onChangeText={mulnumbers} style={{borderRadius:5,fontSize:20,marginLeft:70,color:'white',fontWeight:'800',marginTop:30,backgroundColor:'black',marginRight:80}} multiline = {true}  numberOfLines = {4}></TextInput>
    <View style={styles.Container}>
    <TouchableOpacity onPress={bulsend} style={styles.button}><Text style={styles.buttonText}>Send Messages</Text></TouchableOpacity>  
    <TouchableOpacity onPress={clearlist} style={styles.button1}><Text style={styles.buttonText}>Clear Number list</Text></TouchableOpacity>   
    <TouchableOpacity onPress={sendnumbers} style={styles.button2}><Text style={styles.buttonText}> send ',' sepreted mess </Text></TouchableOpacity>     
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
    <View style={{flex: 1, height: 20, backgroundColor: 'green'}}>
    <Text style={{marginLeft:130 ,color:'black',fontWeight:'500'}}> Number Added in list {newlist.length}</Text>
    </View>
    </View>
    </ScrollView>
    <FlatList data={newlist} renderItem={(e)=>numbershowcase(e)}></FlatList>
    </View>
  )
}

export default App
