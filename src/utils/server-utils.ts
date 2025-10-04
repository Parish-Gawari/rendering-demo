import "server-only"

export const serverSideFunction =() =>{
    console.log(
        `Server Side Component
            use env file
            interact with a database
            make connection with service mesh`
    );
    return "server result";
}