import Colors from '@/Themes/Colors';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export type NumberPrioritize = {
  key: string;
  icon: JSX.Element;
  name: string;
};
export default function ProfileScreen() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [number, setNumber] = useState(0);
  const [numberShow, setNumberShow] = useState('');
  const [myNoteArray, setMyNoteArray] = useState<NumberPrioritize[]>([]);
  const date = new Date();
  const addNumber = () => {
    setAlertVisible(!alertVisible);
    let myNotesObject = {
      key: date.getTime().toString() + myNoteArray.length,
      icon: (
        <AntDesign
          name="forward"
          size={25}
          color={Colors.green}
          style={styles.iconForward}
        />
      ),
      name: number.toString(),
    };
    setMyNoteArray([...myNoteArray, myNotesObject]);
  };
  const deleteItem = (key: string) => {
    const filterData = myNoteArray.filter(item => item.key !== key);
    setMyNoteArray(filterData);
  };

  const minus = () => {
    setNumber(number >= 1 ? number - 1 : 0);
  };
  const plus = () => {
    setNumber(number >= 0 ? number + 1 : 1);
  };
  const renderItem = ({item}: {item: NumberPrioritize}) => {
    return (
      <View style={styles.containerRenderItem}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={alertVisible}
          onRequestClose={() => setAlertVisible(alertVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.viewTextThemso}>
                <Text style={styles.modalText}>Thêm số gọi ưu tiên</Text>
              </View>
              <Text style={styles.textChonso}>
                {' '}
                Chọn số để ưu tiên số bất kỳ.
              </Text>
              <View style={styles.containerShowModal}>
                <TouchableOpacity style={styles.minus} onPress={minus}>
                  <AntDesign
                    name="minuscircle"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInput}>
                  <TextInput
                    style={styles.textInputNumber}
                    value={number.toString()}
                    onChangeText={value => {
                      setNumber(Number(value));
                    }}
                    keyboardType="numeric"
                    editable={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plus} onPress={plus}>
                  <AntDesign
                    name="pluscircle"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.viewButtonCancel}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => setAlertVisible(!alertVisible)}>
                  <MaterialIcons
                    name="cancel"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                  <Text>Huỷ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonXacnhan}
                  onPress={addNumber}>
                  <AntDesign
                    name="checkcircle"
                    size={25}
                    color={Colors.green}
                    style={styles.iconMinus}
                  />
                  <Text>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setAlertVisible(true)}
          style={styles.buttonModal}>
          <View style={styles.viewNameRenderItem}>
            <Text style={styles.textNameRenderItem}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewCoverButtonDelete}>
          <TouchableOpacity
            onPress={() => {
              deleteItem(item.key);
            }}>
            <AntDesign
              name="delete"
              color={Colors.red}
              style={styles.iconDelete}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  useEffect(() => {
    if (number < 10) {
      setNumberShow('00' + number);
    }
    if (number >= 10) {
      setNumberShow('0' + number);
    }
    if (number >= 100) {
      setNumberShow(number.toString());
    }
  }, [number]);
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={alertVisible}
          onRequestClose={() => setAlertVisible(alertVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.viewCoverTextThemso}>
                <Text style={styles.modalText}>Thêm số gọi ưu tiên</Text>
              </View>
              <Text style={styles.textChonsodeuutien}>
                {' '}
                Chọn số để ưu tiên số bất kỳ.
              </Text>
              <View style={styles.viewCoverButtonMinus}>
                <TouchableOpacity style={styles.minus} onPress={minus}>
                  <AntDesign
                    name="minuscircle"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInput}>
                  <TextInput
                    style={styles.textInputNumber}
                    value={number.toString()}
                    onChangeText={value => {
                      setNumber(Number(value));
                    }}
                    keyboardType="numeric"
                    editable={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plus} onPress={plus}>
                  <AntDesign
                    name="pluscircle"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.coverViewCancel}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => setAlertVisible(!alertVisible)}>
                  <MaterialIcons
                    name="cancel"
                    color={Colors.red}
                    style={styles.iconMinus}
                  />
                  <Text>Huỷ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonAddNumber}
                  onPress={addNumber}>
                  <AntDesign
                    name="checkcircle"
                    size={25}
                    color={Colors.green}
                    style={styles.iconMinus}
                  />
                  <Text>Xác nhận</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.container}>
          <View style={styles.coverShowAddNumber}>
            <TouchableOpacity style={styles.onPressModal}>
              <Text style={styles.textOnPressModal}>Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAlertVisible(true)}
              style={styles.onPressModal}>
              <Text style={styles.textOnPressModal}> + Thêm số chờ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.coverViewTextXinchao}>
            <View style={styles.coverTextXinchao}>
              <Text style={styles.textXinchao}>XIN CHÀO</Text>
              <Text style={styles.showNumber}>{numberShow}</Text>
            </View>
            <View style={styles.coverViewShowSocho}>
              <View style={styles.coverViewSocho}>
                <Text style={styles.textSocho}>CÁC SỐ CHỜ PHỤC VỤ</Text>
              </View>
              <View style={styles.coverFlatlist}>
                <FlatList
                  data={myNoteArray}
                  numColumns={2}
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  iconForward: {fontWeight: 'bold', fontSize: 30},
  containerRenderItem: {
    height: '100%',
    width: '45%',
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
  },
  viewTextThemso: {
    width: '100%',
    height: '18%',
    backgroundColor: Colors.green,
    justifyContent: 'center',
  },
  containerShowModal: {
    flexDirection: 'row',
    height: '30%',
    width: '80%',
    borderColor: Colors.darkgray,
    borderWidth: 0.7,
    borderRadius: 20,
    marginVertical: 5,
  },
  viewButtonCancel: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonCancel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMinus: {fontWeight: 'bold', fontSize: 30},
  buttonXacnhan: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonModal: {
    flex: 0.8,
    justifyContent: 'center',

    alignItems: 'center',
    flexDirection: 'row',
  },
  viewNameRenderItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNameRenderItem: {
    color: Colors.green,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  viewCoverButtonDelete: {
    flex: 0.2,
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aqua,
  },
  textChonso: {marginVertical: 15, fontSize: 20},
  viewCoverButtonMinus: {
    flexDirection: 'row',
    height: '30%',
    width: '80%',
    borderColor: Colors.darkgray,
    borderWidth: 0.7,
    borderRadius: 20,
    marginVertical: 5,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // flex: 1,
    height: '100%',
  },
  textChonsodeuutien: {marginVertical: 15, fontSize: 20},
  iconDelete: {fontWeight: 'bold', fontSize: 25},
  viewCoverTextThemso: {
    width: '100%',
    height: '18%',
    backgroundColor: Colors.green,
    justifyContent: 'center',
  },
  buttonAddNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverViewCancel: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    width: '80%',
    height: '30%',
    margin: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,

    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
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
    fontSize: 26,
    color: Colors.white,
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
  onPressModal: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.navy,
    height: 30,
    width: 150,
    borderRadius: 20,
  },
  textOnPressModal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dodgerblue,
  },
  minus: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.darkgray,
    borderWidth: 0.7,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  plus: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.darkgray,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 0.7,
  },
  textInput: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.darkgray,
    borderWidth: 0.7,
  },
  textInputNumber: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  coverShowAddNumber: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  coverViewTextXinchao: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTextXinchao: {
    height: '40%',
    width: 380,
    borderColor: Colors.aqua,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: Colors.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textXinchao: {
    color: Colors.red,
    fontSize: 48,
    fontWeight: 'bold',
  },
  showNumber: {
    color: Colors.red,
    fontSize: 100,
    fontWeight: 'bold',
  },
  coverViewShowSocho: {
    borderWidth: 0.7,
    height: '40%',
    width: '110%',
    borderColor: Colors.navy,
    borderRadius: 15,
  },
  coverViewSocho: {
    flex: 0.15,
    backgroundColor: Colors.royalblue,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'space-between',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textSocho: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  coverFlatlist: {
    flex: 0.85,
    backgroundColor: Colors.white,
    borderRadius: 15,
  },
});
