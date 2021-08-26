export default function Power(props){ //parametro vindo do LerUm

    const completo = props.value;
    const fillValue = `${completo}%`;

    const barra = {
        width: '100%' ,      //aqui estamos tratando css direto no arquivo, INLINE
        marginBottom: '0.5rem',
        height: '1.8rem',
        backgroundColor: '#e7e5e8',
        borderRadius: '0.4rem',
        border: '1px solid #e7e5e8',
        marginLeft: '4%',
        
    } 

    const fill = {
        width: fillValue,
        height: '1.7rem',
        backgroundColor: '#e76a24',
        borderRadius: '0.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition : 'width 1s ease-in-out',
    }

    const text = {
        color: '#fffff',
        textAlign: 'center',
    }
    
    return(
        <div style={barra}>
            <div style={fill}>
                <span style={text}>{completo}</span>
            </div>
                

            
        </div>
    )

}