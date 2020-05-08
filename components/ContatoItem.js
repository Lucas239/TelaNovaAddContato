import React from 'react';
import{Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

const ContatoItem = (props) => {

    const excluirContato = () =>{

        Alert.alert(

            'Excluir Contato',
            'Deseja excluir esse Contato',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => props.onDelete.bind(this,props.chave)
                }
            ],

            { cancelable: false }
        )
    } 
    return(
        <TouchableOpacity onLongPress={excluirContato}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text>({props.id})Nome: {props.nome}</Text>
                <Text>       Telefone: {props.numero}</Text>
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    itemNaLista:{
        width:Medidas.itemWidth,
        maxWidth:Medidas.itemMaxW,
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backItemNa,
        flex:Medidas.itemflex,
        margin:Medidas.itemMargin,
        padding:Medidas.itemPadding,
        borderWidth:1,
        marginBottom:8,
        borderRadius:5
      }
});
export default ContatoItem;