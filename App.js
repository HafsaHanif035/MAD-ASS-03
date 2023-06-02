import * as React from 'react';
import { View, Text, ImageBackground, TouchableHighlight, StyleSheet, TextInput, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { HeaderButtons ,Item } from 'react-navigation-header-buttons';
import { useState } from 'react';
import bg from './assets/backgroundimg.png';
import { color } from 'react-native-reanimated';

function WelcomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%' }}>
        <Text style={style.h1}>Welcome to School Management System</Text>
        <TouchableHighlight style={style.button}
          onPress={() => { navigation.navigate("Home"); }}>
          <Text style={style.buttonText}>Gets Started!</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}


function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%' }}>
        <Text style={style.h1}>Sign In </Text>
        <Text style={style.h2}>Already have an account</Text>

        <TextInput style={style.input}
          placeholder='Enter your Email address'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput style={style.input}
          placeholder='Enter Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableHighlight style={style.btn1} onPress={() => { navigation.navigate("SignIn") }}>
          <Text style={style.buttonText}>Sign In</Text>
        </TouchableHighlight>

        <TouchableHighlight style={style.btn1} onPress={() => { navigation.navigate("SignUp") }}>
          <Text style={style.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <Text style={style.h2}>Create new Account</Text>


      </ImageBackground>
    </View>
  );
}

function SignUpScreen({ navigation, route }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('Gender');
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%' }}>
        <Text style={style.h1}>Create Your Account</Text>
        <TextInput style={style.input}
          placeholder='First name'
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={style.title}></Text>
        <TextInput style={style.input}
          placeholder='last name'
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={style.title}></Text>
        <TextInput style={style.input}
          placeholder='Enter your email address'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />


        <Text style={style.title}></Text>
        <TextInput style={style.input}
          placeholder='Enter password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Text style={style.title}></Text>
        <TextInput style={style.input}
          placeholder='confirm password'
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />

        <Text style={style.title}></Text>
        <Picker style={style.picker}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="Gender" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <TouchableHighlight style={style.btn1} onPress={() => navigation.navigate("AccountCreated")}>
          <Text style={style.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.btn1} onPress={() => navigation.navigate("Home")}>
          <Text style={style.buttonText}>Go Back</Text>
        </TouchableHighlight>
        
      </ImageBackground>
    </View>
  )
}
function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%' }}>
        <Text style={style.h1}>Successfully Signed-In to your account</Text>
        <TouchableHighlight style={style.button} onPress={() => navigation.navigate('Home')}>
          <Text style={style.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.btn1} onPress={()=>
            navigation.navigate('AccountCreated',{firstName:'Hafsa',lastName:'Hanif', id: 35, gmail:'hafsahanif@gmail.com'})
        }>
        <Text style={style.buttonText}>Click to see Details</Text>

        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}
function AccountCreatedScreen({ navigation, route }) {
  const { firstName, lastName,id, gmail} = route.params;
  return (
    <View style={style.container}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%' }}>
        <Text style={style.h1}>Account Created Successfully</Text>
        <Text style={style.h2}> firstName: {JSON.stringify(firstName)}</Text>
        <Text style={style.h2}> lastName: {JSON.stringify(lastName)}</Text>
        <Text style={style.h2}> id: {JSON.stringify(id)}</Text>
        <Text style={style.h2}> gmail: {JSON.stringify(gmail)}</Text>
      </ImageBackground>
    </View>

  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Welcome'
        screenOptions={{
          headerStyle:{backgroundColor:'skyblue'}
        }
        } >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome Page' }}  />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home',
         headerRight:()=>(
          <HeaderButtons >
            <Item title='Click ME' iconName='web-back' onPress={() =>{alert('Button Pressed')} } 
              color='black'
            ></Item>
          </HeaderButtons>
         ),
         headerStyle:{backgroundColor:'skyblue'}

         } }></Drawer.Screen>
        <Drawer.Screen name="SignUp" component={SignUpScreen}></Drawer.Screen>
        <Drawer.Screen name="SignIn" component={SignInScreen}></Drawer.Screen>
        <Drawer.Screen name="AccountCreated" component={AccountCreatedScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;


const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    alignSelf: 'center',
    height: 30,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 8,
    backgroundColor: 'white',
    marginBottom: 80,
    marginLeft: 60,
    marginTop: 20,
    borderRadius: 5,
    shadowOpacity:5,
    shadowColor:'black',
    shadowRadius:5,
    shadowOffset:{
      height:5,
      width:5
    }
  },
  btn1: {
    alignSelf: 'center',
    height: 30,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 8,
    backgroundColor: 'white',
    marginBottom: 20,
    marginLeft: 60,
    marginTop: 25,
    borderRadius: 5,
    shadowOpacity:5,
    shadowColor:'black',
    shadowRadius:5,
    shadowOffset:{
      height:5,
      width:5
    }
  },
  h1: {
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: 'Calibari',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 45,
    marginBottom: 30
  },
  h2: {
    alignSelf: 'Center',
    alignContent: 'center',
    fontSize: 20,
    color: 'white'
  },
  input: {
    alignSelf: 'center',
    height: 40,
    width: '40%',
    //borderWidth: 0.2,
    marginLeft: 60,
    borderBottomColor: 'black',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 10
  },
  picker: {
    alignSelf: 'center',
    width: '40%',
    backgroundColor: 'lightgrey',
    fontWeight: "italic",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 50

  },
})



