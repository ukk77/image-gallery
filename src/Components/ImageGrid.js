import React from 'react'
import UseFirestore from '../hooks/UseFirestore';
import './ImageGrid.css'
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedimage }) {
    const { docs } = UseFirestore('images');


    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} 
                    onClick={() => setSelectedimage(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid