import getSession from 'next-auth'

export default async (req,res) => {
    const session = await getSession({req});

    if(session) {
        res.send()
    } else {

    }
}