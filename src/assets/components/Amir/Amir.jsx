
import './Amir.css'
import rams2 from '../../../assets/rams2.png'
import rams3 from '../../../assets/rams3.png'

function Amir() {
    return (<>


        <div className='container'>

            <div className="header">
                <p>КЛУБ TRUE</p>

                <h2>Открыть клуб вместе с TRUE</h2>
            </div>

            <section className='sc-1'>
                <img src={rams2} alt="" />



            </section>

            <section>
                <img src={rams3} alt="" />

            </section>

        </div>


    </>);
}

export default Amir;