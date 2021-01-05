import LightBox from './LightBox';

export const Card = (props) => {
    return (
        <div className="w-96 h-full my-2 lg:my-6 mx-2 bg-purple-100 overflow-hidden rounded shadow-lg border-2 border-purple-500 border-opacity-75">
            <LightBox imagePath={props.src} caption={props.title} />
            <p className="text-center text-purple-900 uppercase text-sm md:text-lg lg:text-xl px-6 py-1">{props.title}</p>
        </div>
    )
}
