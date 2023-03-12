import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, SectionList } from 'react-native';

export default function SectionListComp() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState([]);
    const [data, setData] = useState(
        [
            {
                key: 0,
                title: 'Starters',
                data: [{ key: 0, title: 'Salad' }, { key: 1, title: 'Soup' }, { key: 2, title: 'Fish Cracker' }]
            },

            {
                key: 1,
                title: 'Dessi Food',
                data: [{ key: 4, title: 'Karahi' }, { key: 5, title: 'Kabab' }]
            },

            {
                key: 2,
                title: 'Fast Food',
                data: [{ key: 6, title: 'Burger' }, { key: 7, title: 'Pizza' }, { key: 8, title: 'Paasta' }, { key: 9, title: 'Shawarma' }]
            },

            {
                key: 3,
                title: 'Drinks',
                data: [{ key: 10, title: 'Coke' }, { key: 11, title: 'Fanta' }, { key: 12, title: 'Mint' }, { key: 13, title: 'Sprite' }]
            },
            {
                key: 4,
                title: 'Tea',
                data: [{ key: 14, title: 'Tea-1' }, { key: 15, title: 'Tea-2' }, { key: 16, title: 'Tea-3' }, { key: 17, title: 'Tea-4' }]
            },
            {
                key: 5,
                title: 'Sweets',
                data: [{ key: 18, title: 'Sweet-1' }, { key: 19, title: 'Sweet-2' }, { key: 20, title: 'Sweet-3' }, { key: 21, title: 'Sweet-4' }]
            },
            {
                key: 6,
                title: 'Sweets',
                data: [{ key: 23, title: 'Sweet-1' }, { key: 24, title: 'Sweet-2' }, { key: 25, title: 'Sweet-3' }, { key: 26, title: 'Sweet-4' }]
            },


        ])
    const selectItem = (sectionIndex) => {
        setState(prevState => {
            const newState = [...prevState];
            newState[sectionIndex] = !newState[sectionIndex];
            if (newState[sectionIndex]) {
                setCount(count + 1);
            } else {
                setCount(count - 1);
            }
            return newState;
        });
    };
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.1 }}>
                <Text style={styles.text}>{count} Item Selected</Text>
            </View>
            <View style={{ flex: 0.9 }}>

                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                    renderSectionHeader={({ section: { title } }) => (

                        <View style={{ flex: 1, height: 30, backgroundColor: 'green' }}>
                            <Text style={{ backgroundColor: 'green', color: 'white', fontSize: 22 }}>{title}</Text>
                        </View>

                    )}
                    stickySectionHeadersEnabled={true}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => selectItem(item.key, index)} style={{ flex: 1, height: 30, backgroundColor: state[item.key] ? 'orange' : 'grey', marginVertical: 3 }}>
                            <Text style={{ color: 'white', fontSize: 18, padding: 3 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}

                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 40,
        fontWeight: 'bold'
    }
});