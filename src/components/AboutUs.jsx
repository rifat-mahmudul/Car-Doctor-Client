import img1 from '../assets/images/about_us/parts.jpg';
import img2 from '../assets/images/about_us/person.jpg';


const AboutUs = () => {
    return (
        <section className='pb-16'>
            <div className="flex flex-col lg:flex-row justify-between items-start max-w-[90%] xl:max-w-[1150px] mx-auto">
                <div className='relative'>
                    <img
                    src={img2}
                    className="xl:max-w-sm rounded-lg shadow-2xl mb-5 lg:mb-0 max-w-[90%] mx-auto" />
                    <img className="xl:max-w-sm rounded-lg hidden xl:block shadow-2xl absolute top-40 left-40" src={img1} alt="" />
                </div>

                <div>
                    <h1 className="text-error font-bold">About Us</h1>
                    <h1 className="py-6 text-5xl font-bold max-w-sm">
                        We are qualified & of experience in this field
                    </h1>
                    <p className='text-gray-500 mb-3 max-w-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-gray-500 mb-3 max-w-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
