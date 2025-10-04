export default function AboutPage(){
    console.log('Hello from Server Component')
    return <h1>Hello There {new Date().toLocaleTimeString()}</h1>
}