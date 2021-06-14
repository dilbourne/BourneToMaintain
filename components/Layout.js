import Navbar from './Navbar';
import Head from 'next/head';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children, title, description}) => {
    return (
            <>
            <div className="bg-gray-200">
                <Head>
                    <meta lang="en" charSet="utf-8" />
                    <meta name="description" content={description} />
                    <title>{title}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="container bg-gray-200 mx-auto rounded-sm">
                    <Navbar />
                    <Banner 
                        title={'Lawn Care, Freighting, Maintenance & More!'}
                        description={'Call us today for a FREE quote!'}
                        slogan={`"We maintain your yard like it's our very own."`}
                    />
                    {children}
                </div>
                <Footer />
            </div>
        </>            
        )
};

export default Layout;