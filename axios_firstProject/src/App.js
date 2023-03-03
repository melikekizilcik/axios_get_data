import React, { useState , useEffect} from 'react';
import {SafeAreaView, View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';



const URL = 'https://jsonplaceholder.typicode.com/users';


function App(){
    const [loading, setLoading] = useState(true); //veri çekmediğimiz için false
    const [userList, setUserList] = useState([]);


    //ASYNC - AWAIT İLE GET İŞLEMİ
    async function fetchData(){
        const response = await axios.get(URL);
        setLoading(false);
        setUserList(response.data);
    }
    


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
    //ASYNC-AWAIT'te cevap geldikten sonra alt satıra geçilir


    const renderUser = ({item}) => <UserCard name={item.name} email={item.email} username={item.username} />;

    useEffect(() => {fetchData();},[]); //uygulama açılırken fetch data çalışacak


    return(
        <SafeAreaView>
            <View>
               {loading ? (<ActivityIndicator size="large" />) : (<FlatList 
                 data={userList}
                 renderItem = {renderUser}/>)
                 }
            </View>
        </SafeAreaView>
    );
}

export default App;