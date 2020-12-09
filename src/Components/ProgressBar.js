import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import './ProgressBar.css'
import { motion } from 'framer-motion';


function ProgressBar({ file, setFile }) {
    const {url, progress} = useStorage(file)
    console.log(progress, url)

    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div style={{ width:"50%", margin:"auto", display:"flex" }}>
            <p style={{ "margin-right":"5px" }}>0</p>
            
            <motion.div className="progress-bar" 
                initial={{ width: 0 }}
                animate={{ width: progress + "%" }}
            >
                
            </motion.div>
            
            <p style={{ "margin-left":"5px" }}>{progress + "%"}</p>

        </div>
    )
}

export default ProgressBar
