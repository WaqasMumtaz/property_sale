import { StyleSheet, Dimensions, Platform } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 12,
        // backgroundColor:'#fff'
    },
    inputText: {
        borderColor: '#ebe9e6',
        borderWidth: 1,
        height: 40
    },
    inputTextError: {
        borderColor: 'red',
        borderWidth: 1,
        height: 40
    },
    locationContainer: {
        marginHorizontal: 12
    },
    propertyTypeContainer: {
        marginHorizontal: 12
    },
    borderLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#ebe9e6',
        elevation: 3,
        marginVertical: 20
    },
    iconBtn: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D3D3D3',
        borderRadius: 45,
        height: 45,
        width: 45
    },
    iconBtnSelectd: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAEBDE',
        borderRadius: 45,
        height: 45,
        width: 45
    },
    iconStyle: {
        color: '#000'
    },
    selctdIcon: {
        color: '#32CD32'
    },
    textStyle: {
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slctTextStyle: {
        color: '#32CD32',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#ebe9e6',
        paddingVertical: 8
    },
    clckdBtnStyle: {
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#DAEBDE',
        backgroundColor: '#DAEBDE',
        paddingVertical: 8
    },
    clickdText: {
        color: '#7DE24E',
        fontWeight: 'bold'
    },
    txt: {
        color: '#000'
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    detailProprtyInput: {
        borderBottomColor: '#ebe9e6',
        borderBottomWidth: 1,
        height: 40
    },
    detailProprtyInputError: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        height: 40
    },
    bottomBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // borderTopWidth:1,
        // borderTopColor:'#ebe9e6',
        // elevation:3,
    },
    uploadLateBtn: {
        borderWidth: 2,
        borderColor: '#7DE24E',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 8
    },
    uploadNowBtn: {
        borderWidth: 1,
        borderColor: '#32CD32',
        backgroundColor: '#32CD32',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 8


    },
    latitudeInputs: {
        borderColor: '#ebe9e6',
        borderWidth: 2,
        height: 40,
        borderRadius: 20,
        paddingLeft: 13,
        width: '90%',
        marginTop: 10
    },
    latitudeInputsError: {
        borderColor: 'red',
        borderWidth: 2,
        height: 40,
        borderRadius: 20,
        paddingLeft: 13,
        width: '90%',
        marginTop: 10
    },
    latitudsContainer: {
        width: "50%",
    },
    areaSizeContainer: {
        //backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10

    },
    areaSizeInputsStyle: {
        borderColor: '#ebe9e6',
        borderWidth: 2,
        height: 40,
        borderRadius: 5,
        paddingLeft: 13,
        width: '45%',
    },
    areaSizeInputsStyleError: {
        borderColor: 'red',
        borderWidth: 2,
        height: 40,
        borderRadius: 5,
        paddingLeft: 13,
        width: '45%',
    },
    bedroomInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#ebe9e6',
        height: 40,
        paddingLeft: 10
    },
    bedroomInputError: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        height: 40,
        paddingLeft: 10
    },
    emailStyle: {
        borderBottomWidth: 2,
        borderBottomColor: '#ebe9e6',
        height: 40,
        paddingLeft: 10
    },
    emailStyleError: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        height: 40,
        paddingLeft: 10
    },
    contactNoInputs: {
        borderBottomWidth: 2,
        borderBottomColor: '#ebe9e6',
        height: 40,
        //paddingLeft:10,
        marginLeft: 10,
        width: '70%'
    },
    errorInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        height: 40,
        //paddingLeft:10,
        marginLeft: 10,
        width: '70%'
    },
    mobileInputError: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        height: 40,
        //paddingLeft:10,
        marginLeft: 10,
        width: '70%'
    },
    uploadImgBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        //margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%'
    },
    headingWithBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#32CD32',
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    modalText: {
        color: '#32CD32',
        fontWeight: 'bold',

    },
    fromCamera:{
        borderBottomColor: '#ebe9e6',
        borderBottomWidth: 2,
        paddingVertical: 15
    },
    fromGallery:{
        paddingVertical: 15

    },
    textStyle:{
        color:'#000',
        fontWeight:'bold'
    }
})

export default styles;