import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .50s linear;
    }

    #div-friends {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textDiv};
        transition: all .50s linear;
    }

    #div-list{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all .50s linear;
    }

    header {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all .50s linear;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        padding: 20px;
        position: fixed;
        top: 0;
        z-index: 5;
        height:65px
    }

    #div__opcoes, #lbl_dark_mode, #lblexit, #pesquisa, #conteudo{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textDiv};
        transition: all .50s linear;
        
    }

    #div_tecnologias_usadas, #flex_layout{
        background: ${({ theme }) => theme.background};
    }

    #div_tecnologias_usadas, .div_icones{
        background: ${({ theme }) => theme.backgroundTecnologias};
        color: ${({ theme }) => theme.color}
            
    }

    #fechar, #mostrar{
        color: ${({ theme }) => theme.borderColor};
    }

    #titulo-perfis, #nome, #titulo_tecnologias_usadas{
        color: ${({ theme }) => theme.color};
        
    }

    #texto-sobre-rafael, #texto-projetos-rafael{
        color: ${({ theme }) => theme.colorblack};
        
    }

    #perfil1, #descricao, #div_feed{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.headerText};
        transition: all .50s linear;
    }

    footer {
        background: ${({ theme }) => theme.backgroundFooter};
        color: ${({ theme }) => theme.color};
        transition: all .50s linear;
        margin-top: 100px;
        text-align:center;
    }

    #conteudo,#pesquisa{
        background: ${({ theme }) => theme.colorFundoCards}
    }

    #caixa, #popUp_error,#h1_popUp, #texto_popUp{
        background: ${({ theme }) => theme.colorCards};
       color: ${({ theme }) => theme.color};

    }
    
`;
