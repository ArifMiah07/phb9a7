
const Banner = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center" style={{border: '2px solid #0BE58A', backgroundImage: 'url("https://i.ibb.co/NVLT3s0/banner.png")', width: '1170px', height:'600px', margin: '0 auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '24px'}}>
            {/* <img src="https://i.ibb.co/NVLT3s0/banner.png" className="w-full h-full" alt="" /> */}
            <h1 className="text-[#fff] text-[56px] text-center">
                Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="text-white text-[18px] text-center my-6 ">
                Unveil the joy of cooking with our personalized classes, crafted to match your taste and skill level.<br /> Discover new techniques,  flavors, and dishes in an exceptional culinary adventure just for you!
            </p>
            <div>
                <button className="btn bg-[#0BE58A] font-bold text-black rounded-[50px] mr-8 ">Explore Now</button>
                <button className="bg-base-0 font-bold text-white rounded-[50px] border border-white py-3 px-5 ">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;