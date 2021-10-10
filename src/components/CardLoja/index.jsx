import { Card, Title, Button, Caixa} from "./style"
import { AuthContext } from '../../providers/auth';
import { useContext } from 'react';

export default function CardLoja(props){
    const {SelectEvents, setClick, setDescription} = useContext(AuthContext)


    const {name, image} = props


    function handleClick(){
        setClick(props)
        SelectEvents(true)
    }

    function handleClickDescription(){
        setClick(props)
        setDescription(true)
    }

    

    return(
        <Card >
            <Title>{name}</Title>
            <Caixa>
                <img className="products-image pointer" src={image} alt="name" onClick={() => handleClickDescription()}/>
            </Caixa>
            <Button onClick={() => handleClick()}>Adicionar ao carrinho</Button>
        </Card>

    )
}