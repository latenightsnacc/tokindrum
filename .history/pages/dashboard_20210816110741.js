import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';

export default function Dashboard(){
    const[session, loading] = useSession();
    const[content, setContent] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/api/private");
            const json = await res.json();

            if(json.content){
                setContent(json.content)
            }
        }
        fetchData(); 
    }, [session]);

    if (typeof window !== "undefined" && loading) return null;
    if (!session){
        return (
           <main>
               <div>
                   <h1>You are not signed in, please sign in!</h1>
               </div>
           </main> 
        )
    }
    return (
    <main>
        <div>
            <h1>Welcome to your dashboard!</h1>
            <p> {content} </p>
        </div>
    </main>
    )
} 