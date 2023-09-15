import './Toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useToogle } from '../../context'

const Toggle = () => {

    var [toggle,setToogle] = useToogle()

    const handleToggle = () => {
        // eslint-disable-next-line no-const-assign
        toggle= !toggle
        setToogle(toggle)
    }

  return (
    <div className='t'>
        <img src={Sun} alt='' className='t-icon'></img>
        <img src={Moon} alt='' className='t-icon'></img>
        <div className='t-button' onClick={handleToggle} style={{left: toggle ? 0 : 25 }}>

        </div>
    </div>
  )
}

export default Toggle