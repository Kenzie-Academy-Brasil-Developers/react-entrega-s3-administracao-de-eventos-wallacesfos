import { Card, Title, Button, Caixa} from "./style"

export default function CardCart(props){

    const {id, name, image, handleClick} = props

    return(

        <Card>
            <Title>{name}</Title>
            <Caixa>
                <img className="products-image" src={image} alt="name"/>
            </Caixa>
            <Button onClick={() => handleClick({id, name})}>Remover do Carrinho</Button>
        </Card>

    )
}