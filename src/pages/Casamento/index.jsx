import Menu from "../../components/Menu";
import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';
import CardCart from "../../components/CardCart";

export default function Casamento(){

    const {casamento, setCasamento} = useContext(AuthContext)

    function handleClick(remover){
        const {id} = remover

        setCasamento(casamento.filter((item) => (item.id !== id)))
    }


    return(
        <>
            <Menu />
            <div className="products-cart">
                {casamento.map((item) => {
                    return <CardCart key={item.id} name={item.name} id={item.id} image={item.image} handleClick={handleClick} />
                })}
            </div>
        </>
    )
}