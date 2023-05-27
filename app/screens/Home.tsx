// import { View, Text, StyleSheet } from 'react-native';
import {Text, Button, View, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2023-04-27&sortBy=publishedAt&apiKey=2b756970a4c9499698c5b374cc780b25',
    )
      .then(response => response.json())
      .then(responseData => {
        // Obtén los primeros 10 elementos
        const limitedData = responseData.articles.slice(0, 10);
        setState(limitedData);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderNewsItem = ({item}) => {
    return (
     <View style={{flex: 1}}>
      
      <View style={styles.newsItem}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={item.urlToImage ? { uri: item.urlToImage } : require('./img/no-image.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
          color='#60ACF8'
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
  };

  const newsData = state;
  return (
    <View style={styles.container}>
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
      {loading ? ( // Si está cargando, muestra el indicador de carga
        <ActivityIndicator style={styles.loader} size="large" color="#60ACF8" />
      ) : newsData ? ( // Si hay datos de noticias, muestra la lista de noticias
        <FlatList
          data={newsData}
          renderItem={renderNewsItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      ) : ( // Si no hay datos de noticias, muestra un mensaje de carga
        <Text>Cargando noticias</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    // marginTop:20,
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
    backgroundColor: '#E3D7DB',
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
    marginLeft: 5,
    // backgroundColor: 'green',
    width: '53%',
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
    paddingBottom: 40,
  },
  loader: {
    // flex: 1,
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '80%',
    // marginBottom: 20,
  },
  loaderTextContainer: {
    marginTop: 10,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
