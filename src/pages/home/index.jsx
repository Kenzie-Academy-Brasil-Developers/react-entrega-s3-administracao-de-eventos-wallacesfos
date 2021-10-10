import { useContext } from 'react';
import Loja from '../../components/Loja';
import Menu from '../../components/Menu';
import SelectEvent from '../../components/SelectEvent';
import { AuthContext } from '../../providers/auth';

export default function Home(){
    const { event } = useContext(AuthContext)
    

    return(
        <div>
            {event && <SelectEvent />}
            <Menu />
            <Loja />
        </div>
    )
}