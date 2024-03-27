//npm instal -g npm@10.5.0

// import React from "react";
// import {View, Text} from "react-native";

// function App (){
//     return(
//         <View>
//             <Text>Ola world</Text>
//         </View>
//     );
// }
// //dps tem de criar tenho que colocar o expor
// export default App; //poderia por antes da function

//////////////////////////////////////////////////////////

import React, {Component} from "react";
import {View, Text, Image} from "react-native";

class App extends Component{
    render(){
        let curso = 'INFO';
        return (
            <View>
                <Text>Olá Mundo</Text>
                <Text>Exemplo!</Text>
                <Text style={{color: 'blue', fontSize:30, margin: 15}}>meu Exemplo!</Text>

                <Image source={{uri: 'url aqui'}} style={{width:300, heigth:300}}/>
                <Text>{curso}</Text>
                {/* para chamar o componente */}
                {/* <minhaImagem/> */}
                {/* passando propriedades, a altura e a largura */}
                {/* <minhaImagem largura/> */}
                <minhaImagem largura={400} altura={400} nome="imagem 1"/>
            </View>
        );
    }
}
export default App;

// caso queira criear um componente para a img
// nao precisa colocar a view pq é um unico componente

class minhaImagem extends Component{
    render(){
        let img = 'url da imagem';
        return(
            <View>
                {/* <Image source={{uri:img}} style={{width:300, heigth:300}}/> */}
                <Image source={{uri:img}} style={{width: this.props.largura, heigth:this.props.altura}}/>
                <Text>{this.props.nome}</Text>
            </View>
        );
    }
}
