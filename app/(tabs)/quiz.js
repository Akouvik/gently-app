import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


function MyComponent() {
    const navigation = useNavigation()
    const [bg, setBg] = useState('#c4b5fd')
    const OptionButton = ({ title }) => {
        return (
            <View style={styles.option}>
                <TouchableOpacity style={[styles.optionButton, { backgroundColor: bg }]}
                    onPress={() => {
                        setBg("#fff")
                        navigation.navigate('Articles')
                    }
                    }
                >
                    <Text style={styles.optionText}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <View style={styles.headerRow}>
        //             <View style={styles.timeContainer}>
        //                 <Text style={styles.timeText}>9:41</Text>
        //             </View>
        //             <View style={styles.iconGroup}>
        //                 <View style={styles.iconContainer}>
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/82280934ec2d29ebbb78b56c6a0fd4ec2502de9ba360763e64df0a8d9bc482c3?',
        //                         }}
        //                         style={styles.icon}
        //                     />
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/688ba00fbe58227ed5be8da1090220e8b0846710a6ca4568e026fffd2db2e006?',
        //                         }}
        //                         style={styles.iconFill}
        //                     />
        //                 </View>
        //                 <View style={styles.iconContainer}>
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c1937d0c7775bf80f2e3b32e7abbdfa5aa13f12a4dfb37a321c797e55598dca?',
        //                         }}
        //                         style={styles.icon}
        //                     />
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/315c4dd2ef4712b21d46880034f3da8ed2e9bae807ae5c718c7313800f14042c?',
        //                         }}
        //                         style={styles.iconFill}
        //                     />
        //                 </View>
        //                 <View style={styles.iconContainear}>
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abd87139193e2c681f470fc76d77658c5c65d9ef1663d2b299df2961f3ccb20a?',
        //                         }}
        //                         style={styles.icon}
        //                     />
        //                     <Image
        //                         source={{
        //                             uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4eaed7ad595d68cf957259ec0c7b372c973f866c86599c82815d94b9ac4b45bc?',
        //                         }}
        //                         style={styles.iconFill}
        //                     />
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        //     <View style={styles.content}>
        //         <View style={styles.progressRow}>
        //             <Text style={styles.iconText}>􀆉</Text>
        //             <View style={styles.progressBar}>
        //                 <View style={styles.progress} />
        //             </View>
        //             <Text style={styles.progressText}>
        //                 12 <Text style={styles.totalText}>/ 23</Text>
        //             </Text>
        //         </View>
        //         <Text style={styles.questionText}>
        //             How frequently do you experience these feelings?
        //         </Text>
        //         <View style={styles.option}>
        //             <TouchableOpacity style={styles.optionText}>all the time</TouchableOpacity>
        //         </View>
        //         <View style={styles.option}>
        //             <TouchableOpacity style={styles.optionText}>most of the time</TouchableOpacity>
        //         </View>
        //         <View style={styles.option}>
        //             <TouchableOpacity style={styles.optionText}>some of the time</TouchableOpacity>
        //         </View>
        //         <View style={styles.option}>
        //             <TouchableOpacity style={styles.optionText}>very rarely</TouchableOpacity>
        //         </View>
        //     </View>
        // </View>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>9:41</Text>
                    </View>
                    <View style={styles.iconGroup}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/82280934ec2d29ebbb78b56c6a0fd4ec2502de9ba360763e64df0a8d9bc482c3?',
                                }}
                                style={styles.icon}
                            />
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/688ba00fbe58227ed5be8da1090220e8b0846710a6ca4568e026fffd2db2e006?',
                                }}
                                style={styles.iconFill}
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8c1937d0c7775bf80f2e3b32e7abbdfa5aa13f12a4dfb37a321c797e55598dca?',
                                }}
                                style={styles.icon}
                            />
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/315c4dd2ef4712b21d46880034f3da8ed2e9bae807ae5c718c7313800f14042c?',
                                }}
                                style={styles.iconFill}
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abd87139193e2c681f470fc76d77658c5c65d9ef1663d2b299df2961f3ccb20a?',
                                }}
                                style={styles.icon}
                            />
                            <Image
                                source={{
                                    uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4eaed7ad595d68cf957259ec0c7b372c973f866c86599c82815d94b9ac4b45bc?',
                                }}
                                style={styles.iconFill}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.progressRow}>
                    <Text style={styles.iconText}>􀆉</Text>
                    <View style={styles.progressBar}>
                        <View style={styles.progress} />
                    </View>
                    <Text style={styles.progressText}>
                        12 <Text style={styles.totalText}>/ 23</Text>
                    </Text>
                </View>
                <Text style={styles.questionText}>
                    How frequently do you experience these feelings?
                </Text>
                <OptionButton title="all the time" />
                <OptionButton title="most of the time" />
                <OptionButton title="some of the time" />
                <OptionButton title="very rarely" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        marginHorizontal: 'auto',
        width: '100%',
        backgroundColor: '#1e293b',
        maxWidth: 480,
    },
    header: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        width: '100%',
        backgroundColor: '#1e293b',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    timeContainer: {
        alignItems: 'center',
    },
    timeText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1c1c1e',
        opacity: 0.9,
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 5,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1.7,
        width: 17,
    },
    icon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    iconFill: {
        width: '100%',
        height: '100%',
    },
    content: {
        paddingHorizontal: 20,
        marginTop: 20,
        width: '100%',
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        width: '100%',
    },
    iconText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    progressBar: {
        flex: 1,
        backgroundColor: '#d1d5db',
        opacity: 0.2,
        borderRadius: 50,
    },
    progress: {
        height: 4,
        backgroundColor: '#a78bfa',
        borderRadius: 50,
    },
    progressText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#737373',
    },
    totalText: {
        color: '#737373',
    },
    questionText: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '600',
        color: '#c4b5fd',
    },
    option: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 64,
        marginTop: 20,
        backgroundColor: '#c4b5fd',
        borderRadius: 24,
    },
    optionButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1e293b',
    },
});

export default MyComponent;
