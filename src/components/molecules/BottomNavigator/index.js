import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TabItem from '../../atoms/TabItem';
import { colors } from '../../../utils'

export default function BottomTab({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabItem
                        key={index}
                        title={label}
                        active={isFocused}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                    // <TouchableOpacity
                    //     accessibilityRole="button"
                    //     accessibilityStates={isFocused ? ['selected'] : []}
                    //     accessibilityLabel={options.tabBarAccessibilityLabel}
                    //     testID={options.tabBarTestID}
                    //     onPress={onPress}
                    //     onLongPress={onLongPress}
                    //     style={{ flex: 1 }}
                    // >
                    //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                    //         {label}
                    //     </Text>
                    // </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 53,
        paddingVertical: 12,
        backgroundColor: colors.secondary,
    }
})
