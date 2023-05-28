import {
    View,
    Text,
    ActivityIndicator,
    Linking,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const Detalle = ({ route }) => {
    const { author } = route.params;
    const { title } = route.params;
    const { publishedAt } = route.params;
    const { description } = route.params;
    const { url } = route.params;
    const { urlToImage } = route.params;
    const { content } = route.params;

    const [isLoading, setIsLoading] = useState(true);
    const navegacion = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator size="large" color="#60ACF8" />
                <Text style={style.loadingText}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={{backgroundColor:'#eae1ef', height: '100%'}}>
            <View style={style.contenedor}>
                <View style={{ width: '2%' }} />
                <TouchableOpacity onPress={() => navegacion.goBack()}>
                    <Image source={require('../img/flecha-izquierda.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />
                </TouchableOpacity>
                <View style={{ width: '80%' }}>
                    <Text allowFontScaling={false} style={style.titleH}>
                        Detalle
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View style={style.imageContainer}>
                    <Image source={{ uri: urlToImage }} style={style.image} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: 'black',
                            // textAlign: 'justify',
                            fontWeight: 'bold',
                            marginTop: 30,
                            paddingHorizontal: 10,
                        }}>
                        {title}
                    </Text>
                </View>
                <View
                    style={{ justifyContent: 'space-between', top: 4, marginTop: 20, paddingHorizontal: 10, }}>
                    {/* <View style={{ height: 20, width: 160 }}> */}
                    <Text style={{ fontSize: 25, color: 'black' }}>Autor: {author}</Text>
                    {/* </View> */}
                    <Text
                        style={{ fontSize: 15, color: 'black', paddingTop:2}}>Actualizado, {publishedAt}
                    </Text>
                </View>
                <View style={{ marginTop: '5%', margin: 3, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black', paddingHorizontal: 10, }}>{description}</Text>

                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black', paddingHorizontal: 10, }}>{content}</Text>
                </View>

            </ScrollView>
        </View>
    );
};

export default Detalle;

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        // borderRadius: 20,
        // borderWidth: 1,
        borderColor: '#60ACF8',
        position: 'relative',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
    },
    titleH: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    contenedor: {
        width: '100%',
        backgroundColor: '#266ab5',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 5,
        paddingTop: '2%',
    },
    container: {
        paddingTop: '2%',
        paddingHorizontal: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 18,
        color: 'black',
    }
});