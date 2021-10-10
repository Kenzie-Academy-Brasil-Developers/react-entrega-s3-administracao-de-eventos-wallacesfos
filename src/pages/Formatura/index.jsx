import Menu from "../../components/Menu";
import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';
import CardCart from "../../components/CardCart";

export default function Formatura(){

    const {formatura, setFormatura} = useContext(AuthContext)

    function handleClick(remover){
        const {id} = remover

        setFormatura(formatura.filter((item) => (item.id !== id)))
    }
    return(
        <>
            <Menu />
            <div className="products-cart">
                {formatura.map((item) => {
                    return <CardCart name={item.name} id={item.id} image={item.image} handleClick={handleClick} />
                })}
            </div>
        </>
    )
}