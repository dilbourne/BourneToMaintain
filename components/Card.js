

export const Card = (props) => {
    return (
        <div className="lg:w-45/100 w-96 my-2 lg:my-6 mx-2 bg-gray-200 overflow-hidden rounded shadow-lg">
            <img className="w-full" src={props.src} alt="before and after pictures"/>
            <p className="font-bold text-center text-green-900 uppercase text-sm md:text-lg lg:text-xl px-6 py-1">{props.title}</p>
        </div>
    )
}
