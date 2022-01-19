import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"

const CountryDetailsScreen = ({ route }) => {
    const country = route.params

    return (
        <View>
            <Image style={styles.image} source={{ uri: `https://flagcdn.com/256x192/${country.cca2.toLowerCase()}.png` }} />
            <Text style={styles.content}>Official name: {country.name.official}</Text>
            <Text style={styles.content}>Capital: {country.capital}</Text>
            <Text style={styles.content}>Population: {country.population}</Text>
            <Text style={styles.content}>Start of the week: {country.startOfWeek}</Text>
            <Text style={styles.content}>Is it landlocked: {country.landlocked ? 'Yes' : 'No'}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        marginHorizontal: 15,
    },
    image: {
        height: 86,
        width: 128,
        margin: 25,
    },
})

export default CountryDetailsScreen