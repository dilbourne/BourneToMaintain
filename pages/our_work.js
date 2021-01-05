import Layout from '../components/Layout';
import { Card } from '../components/Card';
import  Carousel  from 'react-elastic-carousel';

export default function OurWork(props) {
    const before = "Before";
    const after = "After";
    const folder = "images/";
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        //{ width: 1200, itemsToShow: 4}
    ];
    const items = [
        { id: 1, filename: 'before-1.jpg', title: 'before' },
        { id: 2, filename: 'after-1.jpg', title:  'after'},
        { id: 3, filename: 'before-2.jpg', title: 'before' },
        { id: 4, filename: 'after-2.jpg', title:  'after'},
        { id: 5, filename: 'before-3.jpg', title: 'before' },
        { id: 6, filename: 'after-3.jpg', title:  'after'},
        { id: 7, filename: 'before-4.jpg', title: 'before' },
        { id: 8, filename: 'after-4.jpg', title:  'after'},
        { id: 9, filename: 'before-5.jpg', title: 'before' },
        { id: 10, filename: 'after-5.jpg', title:  'after'},
        { id: 11, filename: 'before-6.jpg', title: 'before' },
        { id: 12, filename: 'after-6.jpg', title:  'after'}
    ]

    return (
        <Layout title="Portfolio" description="How good is our work? Take a look at our portfolio.">
            <div className="w-full flex bg-white flex-col justify-center items-center container rounded shadow-lg py-8 px-6 my-8">
                <h2 className="text-green-700 uppercase mx-auto my-auto text-2xl text-center">OUR WORK</h2>
                <hr className="text-green-900 text-center mx-auto w-1/5 pt-2"/>
                <p className="w-4/5 text-base md:text-lg lg:text-xl text-center text-black mt-4">We listen to our customers and give them exactly what they want. Our team works quickly and efficiently - so you don't have to hear noisy equipment all day! We also remove all trimmings and debris from your residence and dispose of it in an eco-friendly manner.</p>
                <div className="container bg-green-200 h-full rounded shadow-lg mt-8 mb-6 px-4 pt-8 pb-6">
                    <Carousel breakPoints={breakPoints} itemsToScroll={2}>
                        {items.map((item)=>(<Card key={item.id} src={folder + item.filename} title={item.title} />))}
                    </Carousel>
                </div>
            </div>
        </Layout>
    )
}