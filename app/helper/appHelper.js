import { Alert, AsyncStorage, } from 'react-native';
let isAlertShown = false;

export function showAPICallError(objAlert) {
    if (!isAlertShown){
        isAlertShown = true;
        Alert.alert(objAlert.title,
            objAlert.message,
            [
                { text: objAlert.leftBtn, onPress: () => { isAlertShown = false; } },
            ],
            { cancelable: false });
    }
}

export function showNoInternetAlert() {
    if (!isAlertShown){
        isAlertShown = true;
        Alert.alert('No wireless connection',
            'Connect to Wi-Fi or cellular to access data.',
            [
                { text: 'OK', onPress: () => { isAlertShown = false; } },
            ],
            { cancelable: false });
    }
}

export function showServerNotReachable() {
    if (!isAlertShown){
        isAlertShown = true;
        Alert.alert('Internet unreachable',
            'Please check your internet connection and try again.',
            [
                { text: 'OK', onPress: () => { isAlertShown = false; } },
            ],
            { cancelable: false }
        );
    }
}

export function isValidPhoneNo(phoneNo) {
    const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(phoneNo);
}

export function isValidEmail(email) {
    const format = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return format.test(email);
}

export function isValidUserName(email) {
    const format = /^[0-9a-zA-Z_]{5,}$/;
    return format.test(email);
}

export function isEmpty(text) {
    return (text.toString().trim().length > 0 && text.toString().trim() !== '0');
}

export function setAsyncStorage(value, key) {
    AsyncStorage.setItem(key, value);
}
