import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    return (
        <section className="text-primary-black flex flex-col justify-between min-h-screen bg-primary-white body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 w-full md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <div className="title-font font-medium text-3xl text-primary-white">
                        <div className="flex justify-center md:justify-start items-center">
                            <img src="./light_ico.png" className="w-14 sm:w-20" alt="" />
                            <span className="font-bold text-primary-blue text-6xl mb-3">ndex</span>
                        </div>
                    </div>
                    <p className="leading-relaxed text-center md:text-left text-2xl mt-4">Register to index. Share your skills, contact with friends and done jobs.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-white shadow-xl rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-primary-blue text-xl font-semibold text-center title-font mb-5">Register</h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-primary-black">Full name<span className="text-[red]">*</span></label>
                        <input type="text" autoComplete="yes" placeholder="Jhon Doe" id="name" name="name" required className="w-full bg-black rounded border-[1px] border-solid border-primary-blue shadow-inner shadow-secondary-black focus:border-secondary-blue focus:ring-2 focus:ring-primary-blue text-base outline-none text-primary-black px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-primary-black">Email<span className="text-[red]">*</span></label>
                        <input type="email" autoComplete="yes" placeholder="example@mail.com" id="email" name="email" required className="w-full bg-black rounded border-[1px] border-solid border-primary-blue shadow-inner shadow-secondary-black focus:border-secondary-blue focus:ring-2 focus:ring-primary-blue text-base outline-none text-primary-black px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="image" className="leading-7 text-sm text-primary-black">Profile picture<span className="text-[red]">*</span></label>
                        <input type="file" autoComplete="yes" accept="image/png, image/gif, image/jpeg" id="image" name="image" required className="w-full bg-black my-input rounded border-[1px] border-solid border-primary-blue shadow-inner shadow-secondary-black focus:border-secondary-blue focus:ring-2 focus:ring-primary-blue text-base outline-none text-primary-black leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-primary-black">Password<span className="text-[red]">*</span></label>
                        <input type="password" autoComplete="yes" placeholder="Password" id="password" name="password" required className="w-full bg-black rounded border-[1px] border-solid border-primary-blue shadow-inner shadow-secondary-black focus:border-secondary-blue focus:ring-2 focus:ring-primary-blue text-base outline-none text-primary-black px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="form-control mb-4">
                        <label className="cursor-pointer flex gap-1">
                            <input type="checkbox" defaultChecked className="" />
                            <span className="label-text">Agree with our <span className="text-primary-blue font-medium hover:text-secondary-blue">privacy policy.</span></span>
                        </label>
                    </div>

                    <button className="text-primary-white transition active:scale-[0.98] font-medium bg-primary-blue border-secondary-blue border-0 py-2 px-8 focus:outline-none hover:bg-secondary-blue rounded text-lg">Register</button>
                    <p className="text-md text-primary-black mt-3">Already have an account? <Link to={'/login'} className="text-primary-blue font-medium hover:text-secondary-blue">Login Now!</Link></p>

                    <div className="divider">OR</div>
                    <button className="transition active:scale-[0.98] bg-secondary-white text-base hover:bg-secondary-white-hover border-0 py-2 px-8 focus:outline-none rounded flex items-center justify-center gap-2">Continue with <FcGoogle className="text-xl"></FcGoogle></button>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Register;