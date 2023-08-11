import Colors from '@/Themes/Colors';
import Images from '@/Themes/Images';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export type MySearch = {
  key: string;
  image: string;
  name: string;
  urlImage: string;
};
const {width} = Dimensions.get('window');
export default function ProfileScreen() {
  const [myImage, setMyImage] = useState('');
  const [mySearch, setMySearch] = useState('');
  const [myUrl, setMyUrl] = useState('');
  const [mySearchArray, setMySearchArray] = useState<MySearch[]>([]);
  const [alertVisible, setAlertVisible] = useState(false);

  const date = new Date();
  const addItem = () => {
    let mySearchObject = {
      key: date.getTime().toString() + mySearchArray.length,
      image: myImage,
      name: mySearch,
      urlImage: myUrl,
    };
    setMySearchArray([...mySearchArray, mySearchObject]);
  };
  const deleteItem = (key: string) => {
    const filterData = mySearchArray.filter(item => item.key !== key);
    setMySearchArray(filterData);
  };
  const editItem = (key: string) => {
    const editData = mySearchArray.map(item => {
      if (item.key === key) {
        let editObject = {
          ...item,
          image: myImage,
          name: mySearch,
          urlImage: myUrl,
        };
        return editObject;
      }
      return item;
    });
    setMySearchArray(editData);
  };

  // tại sao item có nhập type khác với key
  const renderItem = ({item}: {item: MySearch}) => {
    return (
      <View style={styles.containerRenderItem}>
        <View style={styles.coverRenderItem}>
          <TouchableOpacity
            style={styles.linkingButton}
            onPress={() => Linking.openURL(item.urlImage)}>
            <Image
              style={styles.imageLinking}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.textLinking}> {item.name} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.coverX}>
          <TouchableOpacity
            onPress={() => {
              deleteItem(item.key);
            }}>
            <Text style={styles.textX}> X </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.coverEdit}>
          <TouchableOpacity
            onPress={() => {
              editItem(item.key);
              setAlertVisible(true);
            }}>
            <Text style={styles.textEdit}> Edit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={alertVisible}
          onRequestClose={() => setAlertVisible(!alertVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello ProfileScreen</Text>
              <Text> Ok / Cancel</Text>
              <TouchableOpacity onPress={() => setAlertVisible(!alertVisible)}>
                <Image style={styles.imageRemove} source={Images.imageRemove} />
              </TouchableOpacity>
              <Text> Ok</Text>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder="enter your link image"
          keyboardType="default"
          onChangeText={value => {
            setMyImage(value);
          }}
          maxLength={1000}
          value={myImage}
          style={styles.textInput}
        />
        <TextInput
          placeholder="enter your name Search"
          keyboardType="default"
          onChangeText={value => {
            setMySearch(value);
          }}
          maxLength={40}
          value={mySearch}
          style={styles.textInput}
        />
        <TextInput
          placeholder="enter your Url"
          keyboardType="default"
          onChangeText={value => {
            setMyUrl(value);
          }}
          maxLength={40}
          value={myUrl}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addItem} style={styles.buttonAddItem}>
          <Text style={styles.textSubmit}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.containerShow}>
          <View style={styles.viewNameApp}>
            <Text style={styles.textNameApp}>PHẦN MỀM QUẢN LÝ BỆNH VIỆN</Text>
          </View>
          <View style={styles.coverFlatlist}>
            <FlatList
              data={mySearchArray}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setAlertVisible(true)}
          style={styles.buttonModal}>
          <Text style={styles.textModal}>Modal</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  containerRenderItem: {
    margin: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.navy,
    borderWidth: 1,
    alignContent: 'center',
    borderRadius: 10,
  },
  coverRenderItem: {
    flex: 0.7,
    margin: 10,
    flexDirection: 'row',
    borderColor: Colors.navy,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  linkingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageLinking: {height: 70, width: 50, flex: 0.3, resizeMode: 'center'},
  textLinking: {fontSize: 30, fontWeight: 'bold', flex: 0.7},
  coverX: {flex: 0.1, margin: 10},
  textX: {fontSize: 30, color: Colors.red, fontWeight: 'bold'},
  coverEdit: {flex: 0.2, margin: 2},
  textEdit: {
    fontSize: 20,
    color: Colors.navy,
    fontWeight: 'bold',
  },
  containerTextInput: {alignItems: 'center', margin: 10},
  textInput: {
    borderRadius: 20,
    padding: 10,
    borderColor: Colors.green,
    borderWidth: 0.5,
    height: 50,
    width: '100%',
    color: Colors.black,
  },
  buttonAddItem: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.navy,
    height: 30,
    width: 150,
    borderRadius: 20,
  },
  textSubmit: {
    fontWeight: 'bold',
  },
  containerShow: {
    borderWidth: 0.5,
    height: 400,
    width: 370,
    borderColor: Colors.navy,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  viewNameApp: {
    flex: 0.15,
    backgroundColor: Colors.royalblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNameApp: {color: Colors.white, fontSize: 18, fontWeight: 'bold'},
  coverFlatlist: {flex: 0.85, backgroundColor: Colors.white},
  buttonModal: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.navy,
    height: 30,
    width: 150,
    borderRadius: 20,
  },
  textModal: {
    fontWeight: 'bold',
  },
  modalView: {
    width: width * 0.8,
    margin: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
  },
  textStyle: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  okStyle: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.85,
    elevation: 5,
  },
  imageRemove: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    tintColor: 'red',
  },
});
