
const Banner = (props) => (
    <div className="container w-auto mx-auto rounded-sm">
        <div className="flex flex-col justify-around items-center w-full h-64" style={{ backgroundImage: "url(images/banner-image-contrast.jpg)", backgroundSize: "cover"}}>
            <div className="jumbo flex flex-col justify-center items-center">
                <h1 className="font-serif text-xl xl:text-3xl uppercase text-white">{props.title}</h1>
                <p className="font-serif text-base xl:text-2xl text-white">{props.description}</p>
            </div>
        </div>
    </div>
);

export default Banner;