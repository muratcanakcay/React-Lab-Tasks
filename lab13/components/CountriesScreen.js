import React, { useEffect, useState } from 'react'
import { RefreshControl, ActivityIndicator, FlatList, Button, StyleSheet, Text, View, TextInput } from "react-native"

const CountriesScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState('')
    const [inputText, onChangeText] = useState('')

    const fetchData = async () => {
        setLoading(true)
        let fetchURL

        if (searchText == '') {
            fetchURL = 'https://restcountries.com/v3.1/all'
        }
        else {
            fetchURL = 'https://restcountries.com/v3.1/name/' + searchText
        }

        const response = await fetch(fetchURL)

        if (response.ok) {
            const json = await response.json()
            const sortedCountries = json.sort(function (prev, next) { return prev.name.common.localeCompare(next.name.common) })
            setCountries(sortedCountries)
        }
        else {
            setCountries([])
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [searchText])

    useEffect(() => {
        if (inputText.length > 2) {
            console.log('searchText > 2')
            setSearchText(inputText)
        }
        else if (searchText.length > 2) {
            console.log('searchText < 2')
            setSearchText('')
        }
    }, [inputText])

    const renderCountry = ({ item }) => {
        return (
            <View style={styles.country}>
                <Button
                    title={item.name.common}
                    onPress={() => navigation.navigate('CountryDetailsScreen', item)}
                    color="#000000"
                />
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.results}>Found {countries.length} countries.</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={inputText}
                placeholder='Search...'
            />
            {loading ?

                <Text style={styles.loading}>
                    Loading...
                </Text>
                :
                <FlatList
                    data={countries}
                    renderItem={renderCountry}
                    keyExtractor={item => item.cca2}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchData} />}
                />
            }
        </View>)
}

const styles = StyleSheet.create({
    loading: {
        margin: 20,
        fontStyle: 'italic',
    },
    country: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    results: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    input: {
        height: 40,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 10,
    },

})

export default CountriesScreen