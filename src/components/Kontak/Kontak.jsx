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

				<div className="flex justify-between items-center pt-16  gap-6">
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
								className="p-2 text-lg font-bold bg-[#FF6141] border-2 border-black uppercase"
							>
								Kirim
							</button>
						</form>
					</div>
					<div className="basis-1/2">
						<div className="flex flex-col justify-center items-center gap-4 p-4 border-2 border-black bg-white">
							<h1 className="text-5xl font-bold text-outline-white bg-[#FF6141] w-fit p-2 -rotate-2">
								D&apos;emiehan
							</h1>
							<p className="text-2xl font-bold text-outline-white">
								Jl. Sumur, Bandung, Kota Bandung.
							</p>
							<p className="text-2xl font-bold text-outline-white">
								08123456789
							</p>
							<a
								href="https://wa.me/08123456789"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 bg-[#25D366] text-lg font-bold text-white text-center border-2 border-black uppercase"
							>
								Hubungi via WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Kontak;
