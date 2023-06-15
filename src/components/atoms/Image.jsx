export default function Image(image){
    return(
        <>
            <img src={image.src} alt={image.alt} id={image.id} />
        </>
    )
} 
