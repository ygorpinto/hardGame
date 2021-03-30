import styled from 'styled-components'

export const SobreStyle = styled.div`
height:80vh;
width:80%;
display:flex;
flex-direction:column;
align-items:center;
font-family: 'Montserrat', sans-serif;
text-shadow:1px 1px #ce1e9c;


img {
    position:absolute;
    top:25%;
    left:18%;
    height:25%;
    border-radius:50%;
    opacity:0.9;  

    :hover {
        opacity:1;
        animation:expandEffect 0.2s normal infinite;
    }
}
span {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:1rem 0 0 0;

    h1 {
        margin:5.5rem 0 0 4rem;
        font-size:1.3rem;
        font-weight:300;
        text-align:right;
    }

    p{
        margin:5.5rem 0 0 0;
    }
}
strong {
    font-size:1.6rem;
    font-weight:600;
}

p {
    margin:2rem 0 0 0;
    font-size:1.2rem;
    font-weight:300;
}
@keyframes showEffect {
        from {
            opacity:1;
        }

        to {
            opacity:1;
        }
    }
@keyframes expandEffect {
        from {
            height:28%;
        }

        to {
            height:28%;
        }
    }
`