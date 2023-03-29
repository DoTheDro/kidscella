import firstImage from '../assets/images/hero-section-image.png'

const FirstSection = () => {
    return (
        <div className="bg-custom-yellow w-full px-4 py-5 sm:flex sm:flex-row-reverse sm:items-center lg:py-8 lg:justify-evenly xl:justify-center xl:gap-96">
            <div className='px-4 py-3 sm:w-3/5 lg:max-w-sm'>
                <img className='w-full' src={firstImage} alt="Hero Image" />
            </div>

            <div className='py-4 lg:max-w-sm'>
                <h1 className='text-center text-shadow font-extrabold text-4xl text-custom-blue drop-shadow-2xl sm:text-left'>Your child's FUTURE is our PRIORITY.</h1>
            </div>
        </div>
    )
}

export default FirstSection