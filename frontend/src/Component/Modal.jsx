import React from 'react'
function Modal(props) {
    return (props.trigger) ? (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-20 bg-[rgba(0,0,0,0.5)]'>
            <div className="relative p-8 w-full max-w-md bg-[#e1eff2] rounded-lg shadow-lg">
                <button className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800" onClick={()=>props.setTrigger(false)}>Close</button>
                { props.children }
            </div>
        </div>
    ) : null;
}

export default Modal