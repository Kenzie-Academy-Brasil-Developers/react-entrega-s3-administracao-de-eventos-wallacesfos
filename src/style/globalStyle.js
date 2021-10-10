import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

html, body{
    background-color: #101010;
    margin: 0;
    border: 0;
    padding: 0;
}

.products-image{
    height: 8.25rem;
    width: auto;
}

.btn-nav:hover{
    color: white;
}

.number{
    font-size: 10px;
    margin-left: 5px;
    background-color: rgb(19, 196, 255);
    padding: 4px 7px;
    border-radius: 100px;
    margin-right:10px ;
    color: black;
}

.products-cart{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

}

.pointer{
    cursor: pointer;
}



@media (max-width: 768px){
    .navbar{
        flex-direction:column;
        align-items: center;
    }
}


@media (max-width: 415px){
    .navbar{
        flex-direction:column;
        align-items: center;
        height: auto;
    }

    .navbar-links{
        flex-direction: column;
    }

    .btn-nav{
        margin: 5px;
    }
}



`