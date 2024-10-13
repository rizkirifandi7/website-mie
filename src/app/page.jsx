import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Kontak from "@/components/Kontak/Kontak";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";
import Tentang from "@/components/Tentang/Tentang";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Tentang />
			<Menu />
			<Kontak />
			<Footer />
		</>
	);
}

