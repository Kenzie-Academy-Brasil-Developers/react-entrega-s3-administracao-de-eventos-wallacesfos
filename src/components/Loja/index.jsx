import axios from "axios"
import { useEffect, useState } from "react"
import CardLoja from "../CardLoja"
import { Container } from "./style";

export default function Loja(){    
    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers').then(res => {
            setBebidas(res.data)
        })
    }, [])

    return(
        <Container>
            {bebidas.map((item) => {
                return <CardLoja key={item.name} name={item.name} image={item.image_url} description={item.description} liters={item.volume.value} fabricacao={item.first_brewed}/>
            })}
        </Container>
            
    )
}