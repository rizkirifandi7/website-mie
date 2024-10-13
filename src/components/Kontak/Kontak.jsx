import React from "react";
import Judul from "../common/Judul";
import BGPattern from "../../assets/pattern.svg";

const Kontak = () => {
	return (
		<section
			id="kontak"
			className="w-full h-[80vh] bg-[#D5F022] bg-repeat"
			style={{ backgroundImage: `url(${BGPattern.src})` }}
		>
			<div className="max-w-screen-xl mx-auto pt-36">
				<div className="">
					<Judul
						mainText="D'EMIEHAN"
						subText="KONTAK"
						mainTextColor="text-[#D5F022]"
						className="text-7xl"
					/>
				</div>

				<div className="flex justify-between items-center pt-10 ">
					<div className="basis-1/2">
						<form className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Nama"
								className="p-2 border-2 border-black"
							/>
							<input
								type="email"
								placeholder="Email"
								className="p-2 border-2 border-black"
							/>
							<textarea
								placeholder="Pesan"
								className="p-2 border-2 border-black"
							></textarea>
							<button
								type="submit"
								className="p-2 bg-[#D5F022] border-2 border-black uppercase"
							>
								Kirim
							</button>
						</form>
					</div>
					<div className="">
						<div className="flex flex-col gap-4">
							<h1 className="text-5xl font-bold text-outline-white bg-[#FF6141] w-fit p-2 -rotate-2">
								D&apos;emiehan
							</h1>
							<p className="text-2xl font-bold text-outline-white">
								Jl. Sumur, Bandung, Kota Bandung.
							</p>
							<p className="text-2xl font-bold text-outline-white">
								08123456789
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Kontak;
