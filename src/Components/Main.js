import Recat from 'react'
import Leftside from './Leftside'
import '../Style/main.css'
import Middle from './Middle'
import Rightside from './Rightside'
const Main = () => {
    return (
        <>
            <div className='lowermain'>

                <div className='l'>
                    <Leftside />
                </div>
                <div className='m'>
                    <Middle />
                </div>
                <div className='r'>
                    <Rightside />
                </div>

            </div>
        </>
    )

}

export default Main