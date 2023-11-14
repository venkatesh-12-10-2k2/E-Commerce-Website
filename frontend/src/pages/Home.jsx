import React, { useRef } from "react";
import { useSelector } from "react-redux";

//import componets
import SuggestedFruits from "../components/SuggestedFruits";
import AllProducts from "../components/AllProducts";
import About from "./About";
import Contact from "./Contact";

function Home() {
	const productData = useSelector((state) => state.products.productList);

	const fruitsProducts = productData.filter(
		(item) => item.category === "fruits"
	);

	return (
		<div className=" w-full p-4 sm:p-8 " id="home">
			<div className="h-full mx-auto text-center flex flex-col gap-y-8">
				<h1 className="text-5xl font-bold  sm:max-w-[500px] lg:max-w-[900px] mx-auto">
					The Fastest Delivery{" "}
					<span className="text-red-600">in your Home</span>
				</h1>

				<p className="w-full text-sm sm:max-w-lg text-slate-600 tracking-wider mx-auto">
					At City, we are passionate about making your daily
					cooking experience enjoyable and hassle-free. Our
					mission is to provide you with the highest quality
					cooking essentials and kitchen gadgets to enhance
					your culinary journey.
				</p>
				<button
					type="button"
					className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md w-3/4 sm:max-w-[350px] mx-auto"
				>
					Order Now
				</button>
			</div>

			{/* suggest fruits item in the first  */}
			<div className="mt-32 w-full">
				<SuggestedFruits fruitsProducts={fruitsProducts} />
			</div>

			{/* display all products */}
			<AllProducts heading={"Our Products"} />

			<About />
			<Contact />
		</div>
	);
}

export default Home;
