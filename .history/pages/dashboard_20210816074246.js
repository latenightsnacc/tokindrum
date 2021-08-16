import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';

export default function Dashboard(){
    const[session, loading] = useSession();
    const[content, setContent] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/apo")
        }
    })
}