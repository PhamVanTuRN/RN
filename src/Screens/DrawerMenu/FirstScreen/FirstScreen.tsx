import Colors from '@/Themes/Colors';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export type MyNote = {key: string; title: string};
export default function OrderScreen() {
  const [myNote, setMyNote] = useState('');
  const [myNoteArray, setMyNoteArray] = useState<MyNote[]>([]);
  const [isClick, setIsClick] = useState(false);
  const date = new Date();
  const addItem = () => {
    setIsClick(!isClick);
    let myNotesObject = {
      key: date.getTime().toString() + myNoteArray.length,
      title: myNote,
    };
    setMyNoteArray([...myNoteArray, myNotesObject]);
  };
  const deleteItem = (key: string) => {
    const filterData = myNoteArray.filter(item => item.key !== key);
    setMyNoteArray(filterData);
  };
  const copyItem = (key: string) => {
    const copyData = myNoteArray.find(item => item.key === key);
    if (copyData) {
      let copyDataRender = {
        ...copyData,
        key: date.getTime().toString() + myNoteArray.length,
      };
      setMyNoteArray([...myNoteArray, copyDataRender]);
    }
  };
  const editItem = (key: string) => {
    const editData = myNoteArray.map(item => {
      if (item.key === key) {
        let editObject = {...item, title: myNote};
        return editObject;
      }
      return item;
    });
    setMyNoteArray(editData);
  };
  // tại sao item có nhập type khác với key
  const renderItem = ({item}: {item: MyNote}) => {
    return (
      <View style={styles.containerRenderItem}>
        <View style={styles.viewTitle}>
          <Text> {item.title} </Text>
        </View>
        <View style={styles.viewButtonX}>
          <TouchableOpacity
            onPress={() => {
              deleteItem(item.key);
            }}>
            <Text> X </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonCopy}>
          <TouchableOpacity
            onPress={() => {
              copyItem(item.key);
            }}>
            <Text> Copy </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonCopy}>
          <TouchableOpacity
            onPress={() => {
              editItem(item.key);
            }}>
            <Text> Edit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder="enter your note title"
          keyboardType="default"
          onChangeText={value => {
            setMyNote(value);
          }}
          maxLength={40}
          value={myNote}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addItem} style={styles.buttonSubmit}>
          <Text
            // style={{
            //   fontWeight: 'bold',
            //   color: isClick ? Colors.navy : Colors.red,
            // }}
            style={[
              styles.textSubmit,
              isClick
                ? styles.colorTextSubmitClick
                : styles.colorTextSubmitNoClick,
            ]}>
            Submit
          </Text>
        </TouchableOpacity>

        <FlatList
          data={myNoteArray}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textSubmit: {
    fontWeight: 'bold',
    // color: isClick ? Colors.navy : Colors.red,
  },
  colorTextSubmitClick: {color: Colors.navy},
  colorTextSubmitNoClick: {color: Colors.red},
  containerRenderItem: {
    marginTop: 10,
    flexDirection: 'row',
    borderColor: Colors.navy,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 10,
    height: 30,
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  viewTitle: {flex: 0.5},
  viewButtonX: {flex: 0.1},
  viewButtonCopy: {flex: 0.2},
  viewContainer: {alignItems: 'center'},
  textInput: {
    borderRadius: 20,
    padding: 10,
    borderColor: Colors.green,
    borderWidth: 0.5,
    height: 50,
    width: '100%',
    color: Colors.black,
  },
  buttonSubmit: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.navy,
    height: 30,
    width: 150,
    borderRadius: 20,
  },
});
