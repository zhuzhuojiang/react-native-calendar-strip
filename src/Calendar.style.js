/**
 * Created by bogdanbegovic on 8/26/16.
 */

import {
    StyleSheet,
    Platform
} from 'react-native';

export default StyleSheet.create({

    //CALENDAR STYLES
    calendarContainer: {
        overflow: 'hidden'
    },
    datesStrip: {
        flexDirection: 'row'
    },
    calendarDates: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarHeader: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    //CALENDAR DAY
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        ...Platform.select({
            ios: {
                width: 50,
            }
        }),
        height: 50,
        borderRadius: 50 / 2
    },
    dateName: {
        fontSize: 10,
        textAlign: 'center'
    },
    weekendDateName: {
        fontSize: 10,
        color: '#A7A7A7',
        textAlign: 'center'
    },
    dateNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    weekendDateNumber: {
        fontSize: 18,
        color: '#A7A7A7',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
