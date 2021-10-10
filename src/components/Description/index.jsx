import { Total, Card, TextTitle } from "./style"
import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';


export default function Description(){
    
    const {click, setDescription} = useContext(AuthContext)

    const {name, image, description, liters, fabricacao} = click
  
    return (
        <Total onClick={() => setDescription(false)} >
            <Card >
                <TextTitle>{name}</TextTitle>
                <img className="products-image" src={image} alt="img"/>
                <h4>{liters} litros</h4>
                <h4>Fabricação: {fabricacao}</h4>
                <p>{description}</p> 
            </Card>
        </Total>
    )
}