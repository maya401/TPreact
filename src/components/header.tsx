export default function HeaderSection(){
    return(
        <section className="flex justify-between ">
            <h1 className="text-3xl font-bold">Skiline</h1>
            <div >
                <ul className="flex justify-around w-[50%]" >
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
                        <a href="#">About us</a>
                    </li>
                </ul>
               
            </div>
        </section>


    )
}