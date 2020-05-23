import React from 'react'
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout title="About" description="We are new and emerging maintenance and freighting company with the main goal of guaranteed customer satisfaction.">
            <section className="container mx-auto w-full flex justify-center">
                <div className="container w-10/12 rounded shadow-lg overflow-hidden bg-white my-8">
                    <h2 className="text-green-700 pt-4 px-4 uppercase mx-auto my-auto text-2xl text-center"> About Us</h2>
                    <hr className="text-green-900 text-center mx-auto w-1/5 pt-3"/>
                    <p className="text-lg py-4 px-4 text-center mx-auto my-auto leading-loose">We are a 100% local small business in Barbados that creates big smiles for our satisfied customers. 
                        Our attention to detail, efficiency and fair pricing sets us apart from our competitors.
                        No job is too major or minor for us. If you are unsure about or interested in a service
                        we offer, we encourage you to give us a call or message.</p>
                </div>
            </section>
        </Layout>
    )
}
