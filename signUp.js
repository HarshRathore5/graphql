import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Mutation} from 'react-apollo';
import {styles} from './styles';
import {addUser, userQuery} from './querytag';

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };
  checkDetails(name, email, password) {
    // var {graphql, buildSchema} = require('graphql');
    // var schema = buildSchema(`
    //   type Query {
    //     name: String,
    //     email: String,
    //     password: String
    //   }
    // `);
    // var root = {
    //   name: () => name,
    //   email: () => email,
    //   password: () => password,
    // };
    // graphql(schema, '{ name ,email,password}', root).then(response => {
    //   // this.props.navigation.navigate('Home', {response: response.data});
    //   console.log(response);
    // });
  }

  render() {
    return (
      <View style={styles.SignInContainer}>
        <View style={styles.screenTxtContainer}>
          <Text style={styles.screenTxt}>Sign Up</Text>
        </View>
        <Mutation mutation={addUser} refetchQueries={[{query: userQuery}]}>
          {(addUserMutation, {data}) => (
            <>
              <View style={styles.inputTextField2Container}>
                <TextInput
                  style={styles.inputTextField2}
                  value={this.state.name}
                  onChangeText={text =>
                    this.setState({
                      name: text,
                    })
                  }
                  placeholder="Name"></TextInput>
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
                onPress={
                  () =>
                    addUserMutation({
                      variables: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                      },
                    }).then(this.props.navigation.navigate('Login'))
                  // .catch(err => <Text>{err}</Text>)
                }
                style={styles.submitBtn}>
                <Text style={styles.submitTxt}>Submit</Text>
              </TouchableOpacity>
            </>
          )}
        </Mutation>
      </View>
    );
  }
}
