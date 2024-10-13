import Image from "next/image";
import React from "react";
import logobrand from "../../assets/logobrand.png";
import BGPattern from "../../assets/pattern.svg";
import Judul from "../common/Judul";

const Tentang = () => {
	return (
		<section
			className="w-full h-screen bg-[#FF6141] bg-repeat"
			id="tentang"
			style={{ backgroundImage: `url(${BGPattern.src})` }}
		>
			<div className="max-w-screen-xl mx-auto pt-36">
				<div className="flex flex-col justify-center items-center">
					<Judul
						mainText="D'EMIEHAN"
						subText="TENTANG KAMI"
						mainTextColor="text-[#FF6141]"
						className={"text-7xl"}
					/>

					<div className="flex justify-center items-center pt-10">
						<div className="basis-1/2">
							<Image src={logobrand} alt="logo" className="object-cover" />
						</div>
						<div className="basis-1/2 flex flex-col gap-4 text-justify uppercase">
							<h1 className="text-5xl font-bold text-outline-white bg-purple-600 w-fit p-2 -rotate-2">
								D&apos;emiehan
							</h1>
							<p className="text-2xl font-bold text-outline-white">
								D&apos;emihan lahir dari keinginan untuk memberikan lebih dari
								sekadar mie pedas. Kami ingin menjadi teman dalam setiap momen
								berani kamu—dari menikmati makan siang yang menggugah hingga
								menghadapi tantangan pedas yang seru. Dengan berbagai level
								kepedasan yang bisa disesuaikan, D&apos;emihan memberikan
								kebebasan kepada kamu untuk memilih sensasi yang paling cocok
								dengan selera.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tentang;
