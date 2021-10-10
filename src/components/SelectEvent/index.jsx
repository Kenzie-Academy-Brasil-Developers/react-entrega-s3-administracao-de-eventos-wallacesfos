import { Button } from "../CardLoja/style"
import { Total, Card, TextTitle } from "./style"
import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';


export default function SelectEvent(){
    
    const {SelectEvents, addCasamento, click, addFormatura, addConfraternizacao} = useContext(AuthContext)

    const {name, image} = click

    function handleClickCasamento(){
        
        const IdRandom = Math.floor(Math.random() * (1000000000 - 1) + 1)

        const obj = {
            id: IdRandom,
            name: name,
            image: image,
        }
        addCasamento(obj)
        SelectEvents(false)
    }
    function handleClickFormatura(){
        const IdRandom = Math.floor(Math.random() * (1000000000 - 1) + 1)

        const obj = {
            id: IdRandom,
            name: name,
            image: image,
        }

        addFormatura(obj)
        SelectEvents(false)
    }
    function handleClickConfraternizacao(){
        const IdRandom = Math.floor(Math.random() * (1000000000 - 1) + 1)

        const obj = {
            id: IdRandom,
            name: name,
            image: image,
        }
        addConfraternizacao(obj)
        SelectEvents(false)
    }


    return (
        <Total onClick={() => SelectEvents(false)}>
            <Card>
                <TextTitle>Selecione o evento</TextTitle>
                <Button onClick={() => handleClickCasamento()} >Casamento</Button>
                <Button onClick={() => handleClickFormatura()}>Formatura</Button>
                <Button onClick={() => handleClickConfraternizacao()}>Confraternização</Button>

            </Card>
        </Total>
    )
}