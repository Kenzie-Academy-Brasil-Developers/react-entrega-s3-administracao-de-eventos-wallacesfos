import { Card, Title, Button, Caixa} from "./style"
import { AuthContext } from '../../providers/auth';
import { useContext } from 'react';

export default function CardLoja(props){
    const {SelectEvents, setClick} = useContext(AuthContext)


    const {name, image} = props

    function handleClick(){
        setClick(props)
        SelectEvents(true)
    }

    return(
        <Card>
            <Title>{name}</Title>
            <Caixa>
                <img className="products-image" src={image} alt="name"/>
            </Caixa>
            <Button onClick={() => handleClick()}>Adicionar ao carrinho</Button>
        </Card>

    )
}