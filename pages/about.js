import React from 'react'
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <section className="container mx-auto w-full flex justify-center">
                <div className="container w-128 rounded shadow-lg overflow-hidden bg-green-200 my-8">
                    <h1 className="text-green-700 pt-4 px-4 uppercase mx-auto my-auto text-2xl text-center"> About Us</h1>
                    <p className="text-lg py-4 px-4 text-center mx-auto my-auto">We are a 100% local small business in Barbados that creates big smiles for our satisfied customers. 
                        Our attention to detail, efficiency and fair pricing sets us apart from our competitors.
                        No job is too major or minor for us. If you are unsure about or interested in a service
                        we offer, we encourage you to give us a call or message.</p>
                </div>
            </section>
        </Layout>
    )
}
