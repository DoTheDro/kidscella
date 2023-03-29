import iconPhone from '../assets/images/icon-call.png'
import iconFacebook from '../assets/images/icon-facebook.png'
import iconInstagram from '../assets/images/icon-instagram.png'
import iconMail from '../assets/images/icon-gmail.png'

const FourthSection = () => {
    return (
        <div className="w-full px-4 py-5 bg-custom-yellow flex flex-col gap-5 lg:py-8" id='contact'>
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-center text-shadow text-2xl text-custom-blue font-semibold">KidsCella Tutorial Services</h2>
                <div>
                    <p className="text-center text-lg font-semibold">Open for:</p>
                    <p className="text-center text-lg font-semibold">Grades 1, 2, 3, 4, 5 and 6</p>
                    <p className="text-center text-lg font-semibold">Grades 7 and 8 (Junior High)</p>
                </div>
            </div>
            
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-center text-shadow text-2xl text-custom-blue font-semibold">Contact Us Now!</h2>
                <div className='w-full flex flex-row items-center justify-center'>
                    <img className='w-7 h-7' src={iconPhone} alt="Icon Phonecall" />
                    <div className='pl-3'>
                        <p className='text-lg font-semibold'>(083) 553-9475</p>
                        <p className='text-lg font-semibold'>09708813991</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-center'>
                    <img className='w-7 h-7' src={iconFacebook} alt="Icon Facebook" />
                    <div className='pl-3'>
                        <p className='text-lg font-semibold'>KidsCella Tutorial Services</p>
                        <p className='text-lg font-semibold'>facebook.com/KidsCella</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-center'>
                    <img className='w-7 h-7' src={iconInstagram} alt="Icon Instagram" />
                    <div className='pl-3'>
                        <p className='text-lg font-semibold'>@kids_cella</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-center'>
                    <img className='w-7 h-7' src={iconMail} alt="Icon Email" />
                    <div className='pl-3'>
                        <p className='text-lg font-semibold'>kidscella97@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FourthSection