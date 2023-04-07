function Card({children,rs,imsrc,show,lnk}){
    return(show ? 
        <a href={lnk}>
        <div className="cursor-pointer rounded h-60 w-60 grid-cols-1 shadow-lg border-t-2 border-l-2 border-amber-300 shadow-cyan-500/50 ">
            <img src={imsrc} alt="goa"
            className="h-2/3 w-60"
            />
            <hr />
            <div className="mx-3 my-3">
                <h1 className="underline italic text-lime-600">
                     {children}
                </h1>
                <div className="text-red-500">
                    Rs-{rs}/person
                </div>
            </div>
        </div></a> :
            
        <div></div> 
    )
}

export default Card;