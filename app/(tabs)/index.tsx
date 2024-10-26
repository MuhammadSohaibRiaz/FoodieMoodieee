import { StyleSheet,Image,View,Text } from 'react-native';
import Food from '../../assets/data/food'
// import EditScreenInfo from '@/components/EditScreenInfo';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image 
      // source={require('../../')} 
      // source={{uri: 'https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg'}}
      source={{uri: Food[0].image}}
      style={styles.image}
    />
      <Text style={styles.title}>{Food[0].title}</Text>
      <Text style={styles.title}>{Food[0].price}</Text>

      <Image 
      // source={require('../../')} 
      // source={{uri: 'https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg'}}
      source={{uri: Food[1].image}}
      style={styles.image}
    />
      <Text style={styles.title}>{Food[1].title}</Text>
      <Text style={styles.title}>{Food[1].price}</Text>

      <Image 
      // source={require('../../')} 
      // source={{uri: 'https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg'}}
      source={{uri: Food[2].image}}
      style={styles.image}
    />
      <Text style={styles.title}>{Food[2].title}</Text>
      <Text style={styles.title}>{Food[2].price}</Text>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
    width:'100%',
    aspectRatio:2/1
  }
});
