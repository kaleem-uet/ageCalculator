import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  image,
  Image,
  StatusBar,
  TextInput,
  Pressable,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Modal,
  Portal,
  Provider,
  Button,
  IconButton,
  Paragraph,
  Dialog,
} from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import ImgBackground from '../components/ImgBackground';
import Result from '../components/Result';
import {Divider} from 'react-native-paper';
const AgeCall = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState('');
  const [visibleDate, setVisibleDate] = React.useState(false);
  const [ToDayDate, setTodayDate] = React.useState('');
  const [todayDateVisable, setTodayDateVisable] = React.useState(false);
  const [dateofBirth, setDateOfBirth] = React.useState('');
  const [ageYears, setageYears] = React.useState('0');
  const [ageMonths, setageMonths] = React.useState('0');
  const [ageDays, setageDays] = React.useState('0');
  const [tWeeks, settWeeks] = React.useState('0');
  const [tMonths, settMonths] = React.useState('0');
  const [dialogVisible, setDialogVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const shoDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);
  const containerStyle = {backgroundColor: 'balck', padding: 20, margin: 20};

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setTodayDateVisable(true);
    const a = year + '/' + month + '/' + date;
    setTodayDate(a);
  };

  const DialogFun = () =>
    Alert.alert('Birth Day', 'Happy Birth Day', [
      {
        text: 'ok',
      },
    ]);
  const handleCalculate = () => {
    let Birth = dateofBirth.split('/').join('-');
    let Today = ToDayDate.split('/').join('-');
    let CustomizeDate = selectedDate.split('/').join('-');

    let birthDate = new Date(Birth + 'T12:00:00Z');
    let today = new Date(Today ? Today : CustomizeDate + 'T12:00:00Z');
    // let customDate = new Date(CustomizeDate + 'T12:00:00Z');
          
    if ((today.getMonth() == birthDate.getMonth()) && (today.getDate() == birthDate.getDate())) {
      console.log("Happy birthDate!",);
      DialogFun();
    }

    if(today.getFullYear()==birthDate.getFullYear() &&today.getDate()+1 == birthDate.getDate() && today.getMonth()==birthDate.getMonth()){
     Alert.alert("Welcome","To The Earth")
    }else{
      let years;
      if (
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate())
      ) {
        years = today.getFullYear() - birthDate.getFullYear();
        console.log('years', years);
      } else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
        console.log('y', today.getDate());
      }
      setageYears(years);

      // Calculate months
      let months;
      if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
      } else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
      }
      // make month positive
      months = months < 0 ? months + 12 : months;
      console.log('months', months);
      setageMonths(months);

      let days;
      // days of months in a year
      let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthDate.getDate()) {
        days = today.getDate() - birthDate.getDate();
      } else {
        days =
          today.getDate() -
          birthDate.getDate() +
          monthDays[birthDate.getMonth()];
      }
      setageDays(days);
      console.log('days', days);
    
    }
   
      
    // calculate total Weeks and  Months
    // convsrt age in year to months + months
    // convert t months to the weeks / 7

    //   let tw;
    //   if(ageYears==0){
    //      const  temp = months * 30;
    //      const temp1=temp + days;
    //      console.log("days =",temp1);
    //      const day=temp1%7;
    //      console.log(day);
    //      tw =temp1/7 +day;
    //   }else{
    //     tw=ageYears*12/7+months;
    //   }
    // console.log("age in tweeks =",tw.roundUp());
  };

  const handleReset = () => {
    setDateOfBirth('');
    setSelectedDate('');
    setTodayDate('');
    setageDays('0');
    setageMonths('0');
    setageYears('0');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={{flex: 1,backgroundColor: '#3f3c47',}}>
    <StatusBar animated={true} backgroundColor="#3f3c47" />
     
      <Provider>
        <View>
          <ImgBackground />
          <View style={{marginLeft: 10}}>
            <Text style={styles.btnText}>Set Your Date of Birth Please</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <TouchableOpacity
              onPress={showModal2}
              activeOpacity={0.5}
              style={styles.btnDateOfBirth}>
              <Portal>
                <Modal
                  visible={visible2}
                  onDismiss={hideModal2}
                  contentContainerStyle={containerStyle}>
                  <DatePicker
                    options={styles.calenderStyle}
                    selectorStartingYear={1900}
                    mode="calendar"
                    onSelectedChange={date => setDateOfBirth(date)}
                  />
                  <Button
                    buttonColor="#ff4959"
                    style={{marginTop: 10, fontSize: 16, fontWeight: '600'}}
                    mode="contained"
                    onPress={() => {
                      setVisible2(false);
                    }}>
                    Ok
                  </Button>
                </Modal>
              </Portal>
              <Text style={styles.btnText}>
                {dateofBirth ? dateofBirth : 'Date Of Birth'}
              </Text>
            </TouchableOpacity>
          </View>
          <Divider bold={true}  style={{marginTop: 10}} />
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text style={styles.btnText}>Set Your Date Up To</Text>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <TouchableOpacity
              disabled={selectedDate ? true : false}
              onPress={getCurrentDate}
              style={styles.btnComen}>
              <Text style={styles.btnText}>
                {todayDateVisable && ToDayDate ? ToDayDate : 'ToDay'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={ToDayDate ? true : false}
              onPress={showModal}
              activeOpacity={0.5}
              style={styles.btnClander}>
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}>
                  <DatePicker
                    options={styles.calenderStyle}
                    selectorStartingYear={1900}
                    mode="calendar"
                    onSelectedChange={date => setSelectedDate(date)}
                  />
                  <Button
                    buttonColor="#ff4959"
                    style={{marginTop: 10, fontSize: 16, fontWeight: '600'}}
                    mode="contained"
                    onPress={() => {
                      setVisible(false);
                      setVisibleDate(true);
                    }}>
                    Ok
                  </Button>
                </Modal>
              </Portal>
              <Text style={styles.btnText}>
                {visibleDate && selectedDate ? selectedDate : 'Customize Date'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              disabled={
                (dateofBirth && ToDayDate) || (dateofBirth && selectedDate)
                  ? false
                  : true
              }
              activeOpacity={0.5}
              onPress={handleCalculate}
              style={styles.btnCalculate}>
              <Text style={styles.btnText}>Calculate</Text>
            </TouchableOpacity>
          </View>
          <Divider bold={true} style={{marginTop: 10}} />
          <Result ageDays={ageDays} ageMonths={ageMonths} ageYears={ageYears} />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleReset}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            marginTop: 30,
          }}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </Provider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnCalculate: {
    width: '80%',
    height: 45,
    padding: 10,
    backgroundColor: '#ff4959',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  btnContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  calenderStyle: {
    backgroundColor: '#090C08',
    textHeaderColor: '#00cd7c',
    textDefaultColor: '#F6E7C1',
    selectedTextColor: '#00cd7c',
    mainColor: '#ff4959',
    textSecondaryColor: '#D6C7A1',
    borderColor: 'rgba(122, 146, 165, 0.1)',
  },
  btnClander: {
    width: '45%',
    height: 40,
    borderColor: '#00cd7c',
    borderWidth: 3,
    // backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnComen: {
    width: '45%',
    height: 40,
    backgroundColor: '#00cd7c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnDateOfBirth: {
    width: '80%',
    height: 40,
    backgroundColor: '#00cd7c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default AgeCall;
