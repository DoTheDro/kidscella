const Navbar = () => {
    return (
        <header>
            <nav className="max-w-6xl pb-3 bg-custom-yellow lg:flex lg:max-w-none lg:justify-center">
                <div className="w-full p-4 text-center lg:text-left lg:max-w-screen-sm">
                    <a href="/">
                        <h1 className="text-custom-blue text-center font-extrabold text-xl inline-flex sm:text-2xl">
                            KidsCella
                        </h1>
                    </a>
                </div>

                <div className="container w-full text-center flex items-center sm:justify-center sm:gap-4 sm:m-auto lg:justify-around lg:max-w-screen-sm xl:m-0">
                    <div className="w-4/12 inline-block mx-2 sm:w-max">
                        <a className=" text-custom-blue font-semibold text-base" href="#contact">
                            Enroll A Student
                        </a>
                    </div>
                    
                    <div className="w-4/12 inline-block mx-2 sm:w-max">
                        <a className=" text-custom-blue font-semibold text-base" href="#contact">
                            Become A Tutor
                        </a>
                    </div>
                    
                    <div className="w-4/12 inline-block mx-2 sm:w-max">
                        <a className=" text-custom-blue font-semibold text-base" href="#contact">
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar