import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";
import BGPattern from "../../assets/pattern.svg";

import { MenuMakanan } from "../../api/dummydata";
import Judul from "../common/Judul";
import { Button } from "../ui/button";

const Menu = () => {
	const backgroundColors = [
		"#5AD7FF",
		"#D5F022",
		"#FF6141",
		"#FF419C",
		"#FFA841",
		"#41FFD3",
		"#FFD341",
	];

	return (
		<section
			className="w-full h-full bg-[#FFE920]"
			id="menu"
			style={{
				backgroundImage: `url(${BGPattern.src})`,
				backgroundRepeat: "repeat",
				backgroundSize: "auto",
			}}
		>
			<div className="pt-36 pb-24">
				<div className="flex flex-col justify-center items-center ">
					<Judul
						mainText="D'EMIEHAN"
						subText="Menu Terpopuler"
						mainTextColor="text-[#FFE920]"
						className="text-7xl"
					/>

					<div className="flex flex-col justify-center items-center max-w-screen-2xl pt-16 uppercase">
						<Carousel>
							<CarouselContent>
								{MenuMakanan.map((menu, index) => (
									<CarouselItem
										key={menu.id}
										className="md:basis-1/2 lg:basis-[360px]"
									>
										<Card
											className="h-[450px] rounded-none border-2 border-white transform transition-transform duration-300 hover:scale-105 hover:rotate-3"
											style={{
												backgroundColor:
													backgroundColors[index % backgroundColors.length],
											}}
										>
											<CardHeader>
												<Image
													src={menu.image}
													alt={menu.title}
													className="w-full h-[250px] object-cover"
												/>
											</CardHeader>
											<CardContent className="border-t-2 border-white">
												<CardTitle className="text-5xl font-extrabold pt-4 text-outline-white text-center">
													{menu.title}
												</CardTitle>
											</CardContent>
										</Card>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						<div className="mt-14">
							<Button className="px-8 py-6 text-base font-bold tracking-wider border border-white transform transition-transform duration-300 bg-blue-500 hover:bg-blue-600  hover:rotate-3 rounded-none uppercase">
								Lihat Semua Menu
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
