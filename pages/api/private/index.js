/* eslint-disable import/no-anonymous-default-export */
import {getSession} from 'next-auth'

export default async (req,res)  => {
    const session = await getSession({req});
    if(session) {
        res.send({
            content: 'Welcome to your dashboard'
        });
    } else {
        res.send({
            content: 'You need to sign in to view this page'
        });
    }
}