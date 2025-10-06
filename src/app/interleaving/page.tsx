import { ClientCompTwo } from "@/components/client-component-two"
import { ServerComponentOne } from "@/components/server-component-one"


export default function Interleaving() {
    return (
        <>
            <h1>Interleaving Page</h1>
            <ClientCompTwo>
                <ServerComponentOne/>
            </ClientCompTwo>
        </>
    )
}