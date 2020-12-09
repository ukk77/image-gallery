import React from 'react'
import './Modal.css'
import { motion } from 'framer-motion';

function Modal({ selectedImage, setSelectedimage }) {
    const onHandleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedimage(null);
        }
    }
    
    return (
        <motion.div className="backdrop" onClick={onHandleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal
