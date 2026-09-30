
import {createPortal} from 'react-dom';
import Button from './Button';
export default function Modal({ref, children}){
    return createPortal(
        <dialog ref={ref} className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md rounded-xl p-6 shadow-2xl backdrop:bg-black/60' >
            <h2 className='text-xl font-semibold text-stone-800 mb-6'>{children}</h2> 
            <form method='dialog' className='text-right'>
                <Button className='bg-amber-300 hover:bg-amber-400 px-5 py-2 rounded-lg'>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
}