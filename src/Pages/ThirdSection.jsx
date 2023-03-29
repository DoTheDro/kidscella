import imageTutor from '../assets/images/tutor-image.png'
import imageStudent from '../assets/images/student-image.png'

const ThirdSection = () => {
    return (
        <div className="w-full px-4 py-5 relative flex flex-col gap-5 lg:py-8">
            <h2 className="text-center text-shadow font-semibold text-2xl">What We Offer</h2>
            <div className="flex flex-col gap-6 lg:gap-10">
                <div className="w-full flex flex-col gap-5 sm:flex-row-reverse sm:items-center sm:justify-center">
                    <img className='w-3/4 m-auto sm:w-40 sm:m-0 lg:w-56' src={imageTutor} alt="Tutor Image" />
                    <p className="text-lg text-center">1-on-1 Tutoring Services</p>
                </div>
                <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center">
                    <img className='sm:w-52 sm:m-0 lg:w-56' src={imageStudent} alt="Student Image" />
                    <p className="text-lg text-center">Hands-on Interactive Learning</p>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection