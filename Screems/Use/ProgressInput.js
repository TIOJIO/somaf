import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';  
  
export default class App extends Component {  
    state={  
        progressStatus: 0,  
    }  
    anim = new Animated.Value(0);  
    componentDidMount(){  
        this.onAnimate();  
    }  
    onAnimate = () =>{  
        this.anim.addListener(({value})=> {  
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        Animated.timing(this.anim,{  
             toValue: 90,  
             duration: 6000,  
        }).start();  
    }  
  render() {  
    return (  
      <View style={styles.root}>  
           <View style={styles.container}>
           <Animated.View  
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
           </View>

           <Animated.Text style={styles.label}>  
                    {this.state.progressStatus }%
            </Animated.Text> 
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
    container: {  
    width: 100,  
    height: 10,  
    padding: 3,  
    borderColor: "#FAA",  
    borderWidth: 1,  
    borderRadius: 5,  
    justifyContent: "center",  
    marginTop:30
  },  
  root: {  
    
  }, 
  inner:{  
    width: 100,  
    height: 10,  
    borderRadius: 5,  
    backgroundColor:"green",  
  },  
  label:{  
    fontSize:23,  
    color: "black",  
    marginLeft:10,
    zIndex: 1,  
  }  
});  