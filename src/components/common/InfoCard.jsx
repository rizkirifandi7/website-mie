import React from "react";

const InfoCard = ({ icon, title, desc }) => {
	return (
		<>
			<div className="basis-1/3 flex flex-col border-2 border-white items-center p-6 bg-[#e3f85b]">
				<div className="text-3xl mb-2 bg-blue-400 rounded-full text-white p-1">
					{icon}
				</div>
				<h2 className="text-xl font-extrabold text-outline-white">{title}</h2>
				<p className="text-lg font-semibold">{desc}</p>
			</div>
		</>
	);
};

export default InfoCard;
