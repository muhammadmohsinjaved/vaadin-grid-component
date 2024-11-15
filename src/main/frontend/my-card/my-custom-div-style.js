import {css} from 'lit';
export  const divStyle=css`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

    .maindiv {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .container {
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(17, 25, 40, 0.25);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        padding: 38px;
        filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        text-align: center;

    }

    .wrapper {
        width: 100%;
        height: 100%;

    }

    .banner-image {
        background-image: url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80);
        background-position: center;
        background-size: cover;
        height: 300px;
        width: 100%;
        border-radius: 12px;
        border: 1px solid rgba(255,255,255, 0.255)
    }

    h1{
        font-family: 'Righteous', sans-serif;
        color: rgba(255,255,255,0.98);
        text-transform: uppercase;
        font-size: 2.4rem;
    }

    p {
        color: #fff;
        font-family: 'Lato', sans-serif;
        text-align: center;
        font-size: 0.8rem;
        line-height: 150%;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .button-wrapper{
        margin-top: 18px;
    }

    .btn {
        border: none;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 12px;
        font-size: 0.8rem;
        letter-spacing: 2px;
        cursor: pointer;
    }

    .btn + .btn {
        margin-left: 10px;
    }

    .outline {
        background: transparent;
        color: rgba(0, 212, 255, 0.9);
        border: 1px solid rgba(0, 212, 255, 0.6);
        transition: all .3s ease;

    }

    .outline:hover{
        transform: scale(1.125);
        color: rgba(255, 255, 255, 0.9);
        border-color: rgba(255, 255, 255, 0.9);
        transition: all .3s ease;
    }

    .fill {
        background: rgba(0, 212, 255, 0.9);
        color: rgba(255,255,255,0.95);
        filter: drop-shadow(0px 0px 0px);
        font-weight: bold;
        transition: all .3s ease;
    }

    .fill:hover{
        transform: scale(1.125);
        border-color: rgba(255, 255, 255, 0.9);
        filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
        transition: all .3s ease;
    }
`;