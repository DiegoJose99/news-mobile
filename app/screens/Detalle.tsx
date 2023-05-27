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
        <View style={style.container}>
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
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: 25,
                            color: 'black',
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>
                        {title}
                    </Text>
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', top: 4, marginTop: 20 }}>
                    <View style={{ height: 20, width: 160 }}>
                        <Text style={{ fontSize: 19, color: 'black' }}>{author}</Text>
                    </View>
                    <Text
                        style={{ textAlign: 'right', fontSize: 15, color: 'black' }}>
                        {publishedAt}
                    </Text>
                </View>
                <View style={{ marginTop: '5%', margin: 3, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black' }}>{description}</Text>

                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black' }}>{content}</Text>
                </View>
                <View style={style.imageContainer}>
                    <Image source={{ uri: urlToImage }} style={style.image} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Detalle;

const style = StyleSheet.create({
    image: {
        width: 200,
        height: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#60ACF8',
        position: 'relative',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        marginTop: 20,
    },
    titleH: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    contenedor: {
        borderRadius: 15,
        width: '100%',
        backgroundColor: '#60ACF8',
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        paddingTop: '3%',
        paddingHorizontal: 10,
        backgroundColor: '#E3D7DB',
        height: '100%'
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