
import './Umar.css'
import rasm from '../../assets/rasm.png'
import Row from '../../assets/Row.png'

function Umar() {
    return ( <>

        <div className="Div-Umar container " >
            <p className="p-Umar1" >Контакты</p>
            <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ </h1>
            <h3 className='h3-Umar' >ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h3>
        </div>

        <div className='container div-Umar2' >
            <img src={rasm} alt="" />
        </div>

        <div className='container div-Umar3' >
            <img src={Row} alt="" />
        </div>
    
    </> );
}

export default Umar;