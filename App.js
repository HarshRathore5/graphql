import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider, graphql, Mutation} from 'react-apollo';
import gql from 'graphql-tag';

//Custom Imports
// import {DogComponent, dogQuery} from './querytag';
import AppNavigator from './route';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://demo-native.herokuapp.com/v1/graphql',
  }),
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}



// -------------------------------------------------------------

// const addDog = gql`

//   mutation($type:String! , $name:String!) {
//     insert_dogs(objects: [{name:$name,type:$type}])
//     {
//       returning{
//         id
//         name
//         type
//       }
//     }
//   }

// `;
// const client = new ApolloClient({
//   link: new HttpLink({
//     uri:"https://demo-native.herokuapp.com/v1/graphql",

//   }),
//   cache: new InMemoryCache()
// });

// export default class App extends Component {
//   state={
//     type:'',
//     name:''
//   }
//   render() {
//     return (
//       <ApolloProvider client={client}>
//       <View style={styles.container}>
//         {/* <DogComponent/>
//         </View> */}
//         <Mutation mutation={addDog} refetchQueries={[{ query: dogQuery }]}>
//           {(addDogMutation, { data }) => (
//             <View>
//               <Text style={styles.welcome}>Dogs data:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={text => this.setState({ name: text })}
//                 value={this.state.name}
//                 placeholder="name"
//               />
//               <TextInput
//                 style={styles.input}
//                 onChangeText={text => this.setState({ type: text })}
//                 value={this.state.type}
//                 placeholder="type"
//               />
//               <Button
//                 onPress={() => {
//                   addDogMutation({
//                     variables: {
//                       type: this.state.type,
//                       name: this.state.name
//                     }
//                   })
//                     .then(res => res)
//                     .catch(err => <Text>{err}</Text>);
//                   this.setState({ type: '', name: '' });
//                 }}
//                 title="Add dog"
//               />
//             </View>
//           )}
//         </Mutation>
//         <Text style={styles.welcome}>My dogs:</Text>
//         <DogComponent />
//       </View>
//     </ApolloProvider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });
