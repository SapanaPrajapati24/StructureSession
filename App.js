import React from 'react'
import {Text, View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const App = () => {

  return(
    <View style={{padding:10}}>
       <Text style = {{fontFamily: 'PlayfairDisplay-Black', fontSize: 30}}>PlayfairDisplay-Black</Text>
       <Text style = {{fontFamily: 'PlayfairDisplay-BlackItalic', fontSize:30}}>PlayfairDisplay-BlackItalic</Text>
       <Text style = {{fontFamily: 'PlayfairDisplay-Bold', fontSize:30}}>PlayfairDisplay-Bold</Text>
       <Text style = {{fontFamily: 'PlayfairDisplay-SemiBold', fontSize:30}}>PlayfairDisplay-SemiBold</Text>
      
      
      <View style={{flexDirection:"row"}}>
        <View style={{padding:20, alignItems:"center"}}>
          <Feather name='activity' size={50}  />
          <Text style={{alignItems:"center"}}>Feather Icon</Text>
       </View>

       <View style={{padding:20 , alignItems:"center"}} >
          <AntDesign name='closecircle' size={50}  />
          <Text style={{alignItems:"center"}}>AntDesign Icon</Text>
       </View>
       </View>

      <View style={{flexDirection:"row"}}>
       <View style={{padding:20, alignItems:"center"}}>
          <EvilIcons name='sc-twitter' size={50} />
          <Text style={{alignItems:"center"}}>EvilIcons Icon</Text>
       </View>

       

       <View style={{padding:20, alignItems:"center"}} >
          <Entypo name='switch' size={50}/>
          <Text style={{alignItems:"center"}}>Entypo Icon</Text>
       </View>
       
       </View>
       </View>

   
    
  );
}
export default App;