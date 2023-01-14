import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import colors from './colors';
import { Entypo } from '@expo/vector-icons';
import { CollectionReference } from 'firebase/firestore';
import { auth, database } from '../config/firebase';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { Time } from 'react-native-gifted-chat';
import EventInput from './EventInput';

const homeImage = require('../assets/backImage.png');

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => {
        <Image
          source={homeImage}
          style={{ width: 40, height: 40, marging: 15 }}
        />;
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <EventInput />
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: '',
    alignItems: 'flex-end',
    margin: 50,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'red',
  },
  button: {
    width: '25%',
    height: 40,
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#f6f7f8',
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
});
