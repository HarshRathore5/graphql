import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {styles} from './styles';
export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  loginCheck = () => {
    const loginQuery=gql`
    query ($email: String!, $password: String!) {
        user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
          id
          name
          password
          email
        }
      }
    `;

  };

  render() {
    return (
      <View style={styles.SignInContainer}>
        <View style={styles.screenTxtContainer}>
          <Text style={styles.screenTxt}>Sign In</Text>
        </View>

        <View style={styles.inputTextField2Container}>
          <TextInput
            style={styles.inputTextField2}
            value={this.state.email}
            onChangeText={text =>
              this.setState({
                email: text,
              })
            }
            placeholder="Email Address"></TextInput>
          <View style={styles.inputTextField2Img}></View>
        </View>
        <View style={styles.inputTextField2Container}>
          <TextInput
            style={styles.inputTextField2}
            value={this.state.password}
            onChangeText={text =>
              this.setState({
                password: text,
              })
            }
            placeholder="Password"
            textContentType="password"></TextInput>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.loginCheck}
          style={styles.submitBtn}>
          <Text style={styles.submitTxt}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
          style={styles.clickableLinkContVerification}>
          <Text style={styles.dontHaveText}>
            Don't have an account
            <Text style={styles.SignUpText}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
