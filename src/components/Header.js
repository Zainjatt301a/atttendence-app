import React from "react"
import {View,Text,StyleSheet} from "react-native"
import { headerbackground, headerfont, headerfontcolor, vh } from "../constants"

const Header=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.textstyle}>
                Heading
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:vh*0.08,
        backgroundColor:headerbackground,
        justifyContent:"center",
        alignItems:"center",
    },
    textstyle:{
        color:headerfontcolor,
        fontSize:headerfont,
        fontWeight:"bold"
    }
})
export default Header