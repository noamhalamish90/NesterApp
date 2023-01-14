import { CollectionReference } from 'firebase/firestore';
import { auth, database } from '../config/firebase';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';

function EventInput() {
  const [event, setEvent] = useState({});

  function addEventHandler() {
    console.log(event);
    setEvent({});
  }

  return (
    <View style={styles.eventInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Event Type"
        onChangeText={(eventType) =>
          setEvent((prevEvent) => ({ ...prevEvent, eventType: eventType }))
        }
        value={event.eventType}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Event Comment"
        onChangeText={(eventComment) =>
          setEvent((prevEvent) => ({
            ...prevEvent,
            eventComment: eventComment,
          }))
        }
        value={event.eventComment}
      />
      <Button title="Add Event" onPress={addEventHandler} />
    </View>
  );
}

export default EventInput;

const styles = StyleSheet.create({
  eventInputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
