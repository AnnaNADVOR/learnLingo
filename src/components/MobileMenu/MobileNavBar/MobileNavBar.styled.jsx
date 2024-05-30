import styled from '@emotion/styled';


export const MobileContainer = styled.div`
    position: fixed; 
    width:80%;
    height: 100%;
    top:0;
    right: 0;
    padding: 48px 40px;
    background-color: ${({ theme }) => theme.colors.primaryWhite};

    nav {
        ul {
            flex-direction: column;
            li {
                &:not(:last-child) {
                     margin:0; 
                    margin-bottom: 20px; 
                   
                }
                a {
                    padding:0;
                    font-size: 25px;
                }
            }
        }
    }
`

