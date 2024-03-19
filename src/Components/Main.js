import Recat from 'react'
import Leftside from './Leftside'
import '../Style/main.css'
import Middle from './Middle'
import Rightside from './Rightside'
const Main = () => {
    return (
        <>
            <div className='lowermain'>

                <div style={{  }}>
                    <Leftside />
                </div>
                <div style={{ flex: 0.55 }}>
                    <Middle />
                </div>
                <div style={{ flex: 0.5 }}>
                    <Rightside />
                </div>

            </div>
        </>
    )

}

export default Main