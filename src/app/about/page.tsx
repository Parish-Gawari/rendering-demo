import { cookies } from "next/headers"

export default async function AboutPage(){
    const cookieStore = await cookies()
    const theme = cookieStore.get("theme") || 'dark'
    console.log(theme)
    console.log('Hello from Server Component')
    return <h1>Hello There {new Date().toLocaleTimeString()}</h1>
}