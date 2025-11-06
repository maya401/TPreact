export default function HeaderSection(){
    return(
     
        <section className="flex justify-between m-7 bg-[#FFF2E1] ">
            <h1 className="text-3xl font-bold">Skiline</h1>
            <div className="flex justify-between w-[50%] ">
                <ul className="flex justify-around w-[400px] items-center  " >
                    <li>
                        <a href="#">Home</a>
                    </li>
                     <li>
                        <a href="#">Careers</a>
                    </li>
                     <li>
                        <a href="#">Blogs</a>
                    </li>
                     <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <button className="p-2 ">Loggin</button>
               <button>Sign up</button>
            </div>
        </section>
       


    )
}