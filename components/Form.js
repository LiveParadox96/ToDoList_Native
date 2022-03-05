import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'></TextInput>
            <Button color='blue' onPress={() => addHandler(text)} title='Добавить задачу' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 30,
        textAlign: 'center',
        marginHorizontal: '20%',
        width: '60%'
    }
});
