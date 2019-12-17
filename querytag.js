import React from 'react';
import {Text} from 'react-native';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const dogQuery = gql`
  query {
    dogs {
      name
      type
    }
  }
`;
const addUser = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    insert_user(objects: [{name: $name, email: $email, password: $password}]) {
      returning {
        id
        name
        email
        password
      }
    }
  }
`;
const userQuery = gql`
  query {
    user {
      name
      email
      password
    }
  }
`;
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
const maptodogs = items => {
  return items.map((item, index) => {
    return item.name + '\n';
  });
};
const DogComponent = graphql(dogQuery)(props => {
  const {dogs, error} = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (dogs) {
    return <Text>{maptodogs(dogs)}</Text>;
  }

  return <Text>Loading...</Text>;
});
const UserComponent = graphql(userQuery)(props => {
  const {users, error} = props.users;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (users) {
  return console.l
  }
});

export {DogComponent, dogQuery, addUser, userQuery, UserComponent,loginQuery};
