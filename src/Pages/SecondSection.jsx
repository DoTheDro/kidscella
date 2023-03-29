import { useState } from "react"

const SecondSection = (props) => {
    const [ state, setState ] = useState(props.state)

    const currentShowcase = state.map((show, id) => {
        if (show.view) {
            return (
                <div className='text-center text-base lg:max-w-screen-xl lg:mx-auto' key={id}>
                    <p>{show.aim}</p>
                </div>
            )
        }
    })

    const handleClick = () => {
        if (document.getElementById('mission').classList.contains('active')) {
            document.getElementById('mission').classList.remove('active')
        } else {
            document.getElementById('mission').classList.add('active')
        }

        if (document.getElementById('vision').classList.contains('active')) {
            document.getElementById('vision').classList.remove('active')
        } else {
            document.getElementById('vision').classList.add('active')
        }

        const vision = state.map((item) => {
            if(item.view) {
                return { ...item, view: !item.view }
            } else {
                return { ...item, view: !item.view }
            }
        })

        setState(vision)
    }

    return (
        <div className="w-full px-4 py-5 flex flex-col gap-5 bg-gray sm:h-72 lg:py-8 lg:h-64">
            <h2 className="text-center text-shadow font-semibold text-2xl lg:max-w-screen-xl lg:mx-auto">KidsCella Tutorial Services</h2>
            <div className="w-full flex justify-evenly lg:max-w-screen-xl lg:mx-auto">
                <button className="text-lg active" id='mission' onClick={handleClick}>Mission</button>
                <button className="text-lg" id='vision' onClick={handleClick}>Vision</button>
            </div>
            {currentShowcase}
        </div>
    )
}

export default SecondSection