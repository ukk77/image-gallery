import React, {useEffect, useState} from 'react'
import { projStorage, projFirestore, timeStamp } from '../firebase/config'

function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storageRef = projStorage.ref(file.name);
        const collectionRef = projFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            collectionRef.add({ url, createdAt })
            setUrl(url)
        });

    }, [file])

    return { progress, url, error}
    
}

export default useStorage
