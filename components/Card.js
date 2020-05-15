

export const Card = (props) => {
    return (
        <div className="w-96 my-6 mx-6 bg-green-500 overflow-hidden rounded shadow-lg">
            <img className="w-full" src={props.src} alt="before and after pictures"/>
            <p className="font-bold text-center text-gray-100 uppercase text-xl px-6 py-3">{props.title}</p>
        </div>
    )
}
