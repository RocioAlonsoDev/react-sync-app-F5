export default function Button(button){
    return(
        <>
            <button id={button.id} className={button.className}>{button.children}</button>    
        </>
    )
} 

