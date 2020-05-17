
const Footer = () => (
    <footer>
        <div className="h-80 w-auto mx-auto container flex flex-col items-center justify-center bg-green-500 py-8 rounded-sm">
            <img className="" src="images/B2M-logo-white-sm.png"/>
            <p className="pb-4 font-bold uppercase text-white">Bourne To Maintain</p>
            <hr className="py-2 w-64" />
            <p className="pb-2 font-bold uppercase text-xs text-white">Contact Us</p>
            <p className="text-white pb-2"><i className="fa fa-phone"></i> <a className="hover:underline" href="tel:246-265-0501">(246)-265-0501</a></p>
            <div className="container flex flex-row justify-center items-center">
                <span className=""><a href="https://instagram.com/djsparx246/" className=" rounded-md py-2 px-4 transition ease-in-out duration-600 hover:bg-purple-600"><i className="text-white fa fa-instagram"></i></a></span>
                <span className=""><a href="tel:246-265-0501" className="rounded-md py-2 px-4 transition ease-in-out duration-600 hover:bg-green-300"><i className="text-white fa fa-whatsapp"></i></a></span>
                <span className=""><a href="mailto:bourne2freight@gmail.com"className="rounded-md px-4 py-2 transition ease-in-out duration-600 hover:bg-blue-500"><i className="text-white fa fa-envelope"></i></a></span>
            </div>
            <p className="text-white pt-2 pb-1">&copy; Bourne To Maintain, 2020. All rights reserved.</p>
            <p className="text-white pb-4"><a className="hover:underline" href="#">Terms of Use</a> | <a className="hover:underline" href="#">Privacy Policy</a></p>
        </div>
    </footer>
);

export default Footer;
