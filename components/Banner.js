
const Banner = (props) => (
    <div className="container w-auto mx-auto rounded-sm">
        <div className="flex flex-col justify-around items-center w-full h-80" style={{ filter: 'grayscale(65%)', backgroundImage: "url(images/unsplash-banner.jpg)", backgroundSize: "100% 100%", backgroundPosition:"center", backgroundRepeat: "no-repeat"}}>
            <div className="jumbo flex flex-col justify-center items-center">
                <h1 className="text-xs sm:text-xl xl:text-3xl uppercase text-white font-bold">{props.title}</h1>
                <p className="text-xs  sm:text-lg xl:text-2xl text-white font-bold">{props.description}</p>
                <p className="text-xs  sm:text-base xl:text-xl text-white mt-8 italic font-bold">{props.slogan}</p>
            </div>
        </div>
    </div>
);

export default Banner;