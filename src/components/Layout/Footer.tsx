const Footer = () => {
	return (
		<footer className="bg-secondary py-8 mt-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h3 className="text-xl font-bold text-accent">
							Emil<span className="text-gray-300">-Nazwisko.pl</span>
						</h3>
						<p className="text-gray-400 mt-2">
							Profesjonalne rozwiązania IT dla biznesu
						</p>
					</div>
					<div className="text-gray-400 text-sm">
						<p>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone</p>
						<p className="mt-1">
							📩 Email: kontakt@emil-nazwisko.pl
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;