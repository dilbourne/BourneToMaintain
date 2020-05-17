import Layout from '../components/Layout';
import Link from 'next/link';
import List from '../components/List';

export default function Home() {
  const services_list = ['Mowing', 'Hedge Trimming', 'Debris Removal', 'Pesticide Spraying', 'Freighting', 'Pressure Washing', 'and More!'];
  const why_us_list = ['Attention to Detail', 'Competitive Pricing', 'Efficient', 'Experienced', 'Free Consultations', 'Friendly & Trustworthy', 'Reliability'];
  return (
    <Layout>
        <div className="flex flex-row flex-wrap items-center justify-around">
              <div className="flex flex-col items-center justify-around h-96 w-3/4 my-6 mx-2 md:w-88 bg-white opacity-90 rounded-lg p-4 cursor-pointer hover:opacity-100 shadow-xl">
                  <h2 className="text-2xl text-green-900 uppercase">Our Services</h2>
                  <hr className="text-green-900 w-2/3 font-bold"/>
                  <List items={services_list} />
              </div>
              <div className="flex flex-col items-center justify-around my-6 mx-2 h-96 w-3/4 md:w-88 bg-white opacity-90 rounded-lg p-4 cursor-pointer hover:opacity-100 shadow-xl">
                  <h2 className="text-2xl text-green-900 uppercase">Portfolio</h2>
                  <img className="rounded pl-2 pr-2 mt-2" src="images/thumbnail.jpg" alt="thumbnail" />
                  <p className="text-green-900 text-lg">
                      View our collection of work done in Barbados.
                  </p>
                  <Link href="/our_work"><button className="rounded shadow-lg bg-green-500 text-white uppercase text-center my-2 px-3 py-1 font-bold hover:text-green-900 hover:bg-gray-300">View <i className="fa fa-eye"></i></button></Link>
              </div>
              <div className="flex flex-col items-center justify-around my-6 mx-2 h-96 w-3/4 md:w-88 bg-white opacity-90 rounded-lg p-4 cursor-pointer hover:opacity-100 shadow-xl">
                  <h2 className="text-2xl text-green-900 uppercase">Why Us?</h2>
                  <hr className="text-green-900 w-2/3 font-bold"/>
                  <List items={why_us_list} />
              </div>
          </div>
    </Layout>
  )
}
