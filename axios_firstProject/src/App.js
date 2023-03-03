import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import axios from 'axios';

function App(){


    //ASYNC - AWAIT İLE GET İŞLEMİ
    async function fetchData(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('response: ');
        console.log(response);
    }
    //ASYNC-AWAIT'te cevap geldikten sonra alt satıra geçilir


    /*
    THEN-CATCH İLE GET İŞLEMİ
    function fetchData(){
        console.log("Çalışma sırası:1")
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            console.log("çalışma sırası: 3")
        }) //olumlu cevap dönerse then
        .catch(error => console.log(error)); //hata dönerse catch 


        console.log("Çalışma sırası:2");
       
    }*/
    //THEN-CATCH'te çağrı atılır, cevap gelmeden alt satıra iner, cevap sonra gelir

    return(
        <SafeAreaView>
            <View>
                <Text>Hello API!</Text>
                <Button title='Fetch Data' onPress={fetchData}/>
            </View>
        </SafeAreaView>
    );
}

export default App;