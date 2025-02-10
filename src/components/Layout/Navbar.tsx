import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link to="/" className="text-xl font-bold text-accent">
						Emil<span className="text-gray-300">-Nazwisko.pl</span>
					</Link>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{[
								['Strona główna', '/'],
								['Usługi', '/uslugi'],
								['O mnie', '/o-mnie'],
								['Kontakt', '/kontakt'],
							].map(([name, path]) => (
								<Link
									key={path}
									to={path}
									className="hover-scale text-gray-300 hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
								>
									{name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;