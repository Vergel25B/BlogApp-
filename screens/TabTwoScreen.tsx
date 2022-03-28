import { Dimensions, Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button } from "react-native-elements";
import { useAssets } from 'expo-asset';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import ViewWithLoading from  "../components/ViewWithLoading";
import { Appbar } from 'react-native-paper';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [loading, setLoading] = useState<boolean>(true);
  const[email, setEmail]=useState<string>("juandelacruz@gmail.com");
  const[password, setPassword]=useState<string>("666666");

  setTimeout (() => {
    setLoading(false);
  },3000);

  return (
    <ViewWithLoading
      loading={loading}
    >
    <View style={styles.container}>
  
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        borderColor: 'pink',
        overflow: 'hidden',
        padding: 10,
        borderWidth: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column'
      }}>

        
        
        <View style={styles.lottieContainer}>
        <LottieView
                        source={require('../assets/lottie/50124-user-profile.json')}
                        autoPlay={true}
                        loop={true}
          />
        </View >

        <View style={styles.titleContainer}>
          <Text style={{
            fontSize: 35,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4'
          }}>
          W E L C O M E ! To Our Blog App.
          </Text>
          
        </View>

        <View style={{
          flex: 0,
          justifyContent: 'center',
          paddingHorizontal: 20,
          backgroundColor: '#0a191e'
        }}>

        <TextInput
        label="Email"
        value={email}
        autoComplete={false}
        style={{marginBottom: 10}}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
        />

        <TextInput
        label="Password"
        value={password}
        autoComplete={false}
        secureTextEntry={true}
        style={{marginBottom: 20}}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
        />
        </View>


        <View style={styles.buttonContainer}>

        <Button
                        title={'REGISTER'}
                        buttonStyle={{
                        backgroundColor: '#b5179e',
                        borderRadius: 30,
                        padding: 20,
                        paddingHorizontal: 40
                    }}
                    titleStyle={{
                        color: '#ffff',
                        fontFamily: 'poppins-bold',
                    }}
          />
        <Button
                        title={'SIGN IN'}
                        buttonStyle={{
                        backgroundColor: '#7209b7',
                        borderRadius: 30,
                        padding: 20,
                        paddingHorizontal: 40
                    }}
                    titleStyle={{
                        color: '#ffff',
                        fontFamily: 'poppins-bold'
                    }}
          />
        </View >

        <View style={styles.forgotpwContainer}>
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4',
            textDecorationLine: 'underline'
          }}>
          Forgot Password?
          </Text>
          </View>
        
        

      </View>
    </View>
    </ViewWithLoading>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottieContainer:{
    flex: 0.7, 
    backgroundColor: '#0a191e' 
  },
  titleContainer:{
    flex: 0.2, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: '#0a191e'
  },
  buttonContainer:{
    flex: 0.2, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#0a191e',
  },
  forgotpwContainer:{
    flex: 0, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: '#0a191e'
  }
})