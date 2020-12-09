import {useEffect, useState} from 'react'
import { projFirestore } from '../firebase/config'
import React from 'react'

function UseFirestore(collection) {
    const [docs, setDocs] = useState([])
    
    useEffect(() => {
        //unsub function returned by the firestore can be used to unsubcribe to the collection
        const unsub = projFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            //snap represents snapshot at that time of the db collection
            //if a new doc is added or deleted then this call back fires, it also fires once at start

            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents)
        });
        return () => unsub();
    }, [collection])

    return { docs }

}

export default UseFirestore
