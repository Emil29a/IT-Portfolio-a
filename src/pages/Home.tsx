import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="min-h-screen bg-primary text-white">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Automatyzacja i Optymalizacja<br />
							<span className="text-accent">Procesów Biznesowych</span>
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Specjalizuję się w tworzeniu rozwiązań IT dla księgowości<br />
							i automatyzacji procesów biznesowych
						</p>
					</motion.div>
				</div>
			</section>

			{/* Quick Overview Sections */}
			<section className="py-16 px-4 bg-secondary">
				<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
					{/* Usługi Preview */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-primary/50 p-6 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-4 text-accent">Usługi</h2>
						<p className="text-gray-300 mb-4">
							Oferuję kompleksowe rozwiązania w zakresie automatyzacji procesów księgowych,
							integracji systemów IT oraz optymalizacji przepływu dokumentów.
						</p>
						<Link to="/uslugi" className="text-accent hover:text-accent/80">
							Zobacz więcej →
						</Link>
					</motion.div>

					{/* O mnie Preview */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-primary/50 p-6 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-4 text-accent">O mnie</h2>
						<p className="text-gray-300 mb-4">
							4 lata doświadczenia w księgowości połączone z silnym backgroundem IT.
							Magister informatyki i licencjat z finansów i rachunkowości.
						</p>
						<Link to="/o-mnie" className="text-accent hover:text-accent/80">
							Poznaj mnie →
						</Link>
					</motion.div>

					{/* Kontakt Preview */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="bg-primary/50 p-6 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-4 text-accent">Kontakt</h2>
						<p className="text-gray-300 mb-4">
							Jestem dostępny do realizacji projektów w konkurencyjnych stawkach.
							Możliwość spotkania w Warszawie lub zdalnie.
						</p>
						<Link to="/kontakt" className="text-accent hover:text-accent/80">
							Skontaktuj się →
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Home;