import Navbar from './Navbar';
import Head from 'next/head';
import Banner from './Banner';
import Footer from './Footer';

const Layout = (props) => (
    <div className="bg-gray-200">
        <Head>
            <meta name="description" content="lawn maintenance and freighting company in Barbados with the lowest prices and best quality service." />
            <title>Bourne To Maintain</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <div className="container bg-gray-200 mx-auto rounded-sm">
            <Navbar />
            <Banner 
                title={'Lawn Care - Freighting - Maintenance'}
                description={'Call us today for a FREE quote, quick & easy.'}
            />
            {props.children}
        </div>
        <Footer />
    </div>
    
);

export default Layout;