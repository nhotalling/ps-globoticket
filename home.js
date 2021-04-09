import React from 'react';
import {View, Image} from 'react-native';

// props cannot be changed during life of component
// require ensures the images is bundled correctly
const Home = props => {
  return (
    <View style={{flexDirection: 'column'}}>
      <Image style={styles.globologo} source={require('./images/logo.png')} />
      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

const introText = `Lorem ipsum etc`;

export default Home;
