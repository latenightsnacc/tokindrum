import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';

export default function Dashboard(){
    const[session, loading] = useSession();
}