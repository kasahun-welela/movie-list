

function Header() {
  return (
    <div className="bg-[url('/background.png')] h-[40vh] bg-black flex flex-col  justify-center">
        <div className="text-white flex justify-between items-center w-[90%] md:w-[70%] mx-auto">
            <p className=" text-2xl md:text-5xl font-bold">Find your movies</p>
            <p>My Watchlist</p>
        </div>
    </div>
  )
}

export default Header