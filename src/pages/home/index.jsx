import { useContext } from 'react';
import Description from '../../components/Description';
import Loja from '../../components/Loja';
import Menu from '../../components/Menu';
import SelectEvent from '../../components/SelectEvent';
import { AuthContext } from '../../providers/auth';

export default function Home(){
    const { event, description } = useContext(AuthContext)
    

    return(
        <div>
            {description && <Description />}
            {event && <SelectEvent />}
            <Menu />
            <Loja />
        </div>
    )
}