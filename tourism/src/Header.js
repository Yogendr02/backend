function Header(){
    return(
     <div>
        <div className='m-2 w-140 h-16 rounded bg-blue-500'>
            <div className="flex relative">
            <img src="https://images.megapixl.com/4350/43505401.jpg" alt="tour" className="h-16 rounded-full ml-2" />
            <div className='mx-2 self-center font-medium italic'>Tourna App</div>
            <div className="self-center absolute mr-10 right-0 font-bold bg-white w-16 p-2 rounded-3xl">Home</div>
            </div>
        </div>
    </div>
    )
}

export default Header