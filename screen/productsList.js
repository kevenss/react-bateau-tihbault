import React from 'react'
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import Product from '../component/Product';
import HeadStore from '../component/HeadStore';

export default class ProductsList extends React.Component {
  render(){
    let products = this.props.route.params.data ? this.props.route.params.data : [];
    
    return <View style={styles.container}>
            <ImageBackground source={require("../assets/background.png")} style={styles.image}>
            <HeadStore navigation={this.props.navigation}></HeadStore>
              <Text style={{textAlign: "center"}}> Choisissez vos produits</Text>
              <View style={{flex:1}}>
                {products.map((value,index)=>{
                  return <Product key={index} item={value}/>
                })}
              </View>
            </ImageBackground>
          </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 5
  },
  buttons: {
    flex: 4,
  },
  image:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
  }
})