import {Nav, Logo,Div, Links} from './style'
import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';
import { useHistory } from 'react-router';

export default function Menu(){
    const {casamento, confraternizacao, formatura} = useContext(AuthContext)

    const history = useHistory()

    function routes(local){
        history.push(`/${local}`)
    }

    return(
            <Nav className="navbar">
                <Logo onClick={() => routes('')}>Boteco do Wallace</Logo>

                <Div className="navbar-links">
                    <Links className="btn-nav" onClick={() => routes('casamento')}>Casamento <span className="number">{casamento.length}</span></Links>
                    <Links className="btn-nav" onClick={() => routes('formatura')}>Formatura <span className="number">{formatura.length}</span></Links>
                    <Links className="btn-nav" onClick={() => routes('confraternizacao')}>Confraternização <span className="number">{confraternizacao.length}</span></Links>
                </Div>
            </Nav>
       
        
    )
}