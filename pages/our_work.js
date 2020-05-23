import Layout from '../components/Layout';
import { Card } from '../components/Card';

export default function OurWork(props) {
    const before = "Before";
    const after = "After";
    const folder = "images/"
    return (
        <Layout title="Portfolio" description="How good is our work? Take a look at our portfolio.">
            <div className="w-full flex flex-col">
                <p className="text-sm md:text-base lg:text-lg text-center text-green-900 font-bold pt-6">Jobs listed were completed to client specifications</p>
                <div className="container bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-1.jpg"} title={before}/>
                    <Card src={folder + "after-1.jpg"} title={after} />
                </div>
                <div className="container  bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-2.jpg"} title={before}/>
                    <Card src={folder + "after-2.jpg"} title={after} />
                </div>
                <div className="container  bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-3.jpg"} title={before}/>
                    <Card src={folder + "after-3.jpg"} title={after} />
                </div>
                <div className="container  bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-4.jpg"} title={before}/>
                    <Card src={folder + "after-4.jpg"} title={after} />
                </div>
                <div className="container  bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-5.jpg"} title={before}/>
                    <Card src={folder + "after-5.jpg"} title={after} />
                </div>
                <div className="container  bg-green-300 rounded shadow-lg flex flex-row flex-wrap justify-around lg:justify-center items-center my-3">
                    <Card src={folder + "before-6.jpg"} title={before}/>
                    <Card src={folder + "after-6.jpg"} title={after} />
                </div>
            </div>
        </Layout>
    )
}
