// import { View, Text, StyleSheet } from 'react-native';
import {Text, Button, View, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.contenedor}>
        <View style={{width: '15%'}} />
        <View style={{width: '65%'}}>
          <Text allowFontScaling={false} style={styles.titleH}>
            Noticias del mundo
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        />
      </View>
      <View style={styles.newsItem}>
        <View>
          <Text style={styles.title}>Titulo</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./screens/img/car.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Descripcion</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ver más"
            // onPress={() =>
            //   handlePress(
            //     item.title,
            //     item.author,
            //     item.publishedAt,
            //     item.description,
            //     item.url,
            //     item.urlToImage,
            //     item.content,
            //   )
            // }
          />
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    backgroundColor: '#60ACF8',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleH: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  container: {
    paddingTop: '3%',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
  newsItem: {
    marginVertical: 4,
    backgroundColor: '#E5C7D1',
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: 'black',
    // backgroundColor: 'pink',
    textAlign: 'justify',
    marginBottom: 10,
    marginTop:5,
  },
  content: {
    flexDirection: 'row',
  },
  imageContainer: {
    top: 2,
  },
  image: {
    width: 150,
    height: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    position: 'relative',
  },
  descriptionContainer: {
    marginLeft: 10,
    // backgroundColor: 'green',
    width: '56%',
  },
  description: {
    paddingTop: '1%',
    fontSize: 18,
    color: 'black',
    textAlign: 'justify',
  },
  buttonContainer: {
    marginTop: 10,
  },
  line: {
    top: 5,
    width: '100%',
    height: 1,
    backgroundColor: '#808080',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
