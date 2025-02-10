import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className="min-h-screen bg-primary text-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						O <span className="text-accent">Mnie</span>
					</h1>
					<p className="text-xl text-gray-300">
						Łączę wiedzę z zakresu IT i księgowości, aby tworzyć efektywne rozwiązania biznesowe
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Doświadczenie */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="bg-secondary p-8 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-6 text-accent">Doświadczenie</h2>
						<p className="text-gray-300 mb-6">
							Posiadam 4 lata doświadczenia w księgowości oraz solidne podstawy w IT. 
							Moje poprzednie role obejmowały stanowiska konsultanta systemów ERP, księgowego 
							oraz analityka danych finansowych.
						</p>
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-semibold mb-2">Wykształcenie</h3>
								<ul className="text-gray-300 space-y-2">
									<li>• Magister Informatyki (mgr inż.)</li>
									<li>• Licencjat z Finansów i Rachunkowości</li>
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Umiejętności */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="bg-secondary p-8 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-6 text-accent">Umiejętności</h2>
						<div className="space-y-6">
							{skills.map((category, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<h3 className="text-lg font-semibold mb-3">{category.title}</h3>
									<ul className="text-gray-300 space-y-2">
										{category.items.map((item, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-accent mr-2">✓</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Dodatkowe informacje */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="mt-12 text-center"
				>
					<p className="text-gray-300">
						Ze względu na rozbudowę portfolio, obecnie oferuję usługi w konkurencyjnych stawkach.
						Chętnie umówię się na spotkanie w Warszawie lub zdalnie, aby omówić szczegóły projektu.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

const skills = [
	{
		title: "Systemy ERP",
		items: [
			"eNova (3 lata doświadczenia)",
			"Unisoft (1 rok doświadczenia)",
			"SAP, Symfonia, IFS, RAKS SQL",
		],
	},
	{
		title: "Technologie i Narzędzia",
		items: [
			"Automatyzacja procesów księgowych",
			"Elektroniczny obieg dokumentów",
			"Raportowanie i analiza finansowa",
			"Integracje systemów księgowych",
		],
	},
	{
		title: "Umiejętności Techniczne",
		items: [
			"Excel (tabele przestawne, makra)",
			"Programowanie i skrypty",
			"Customizacja oprogramowania księgowego",
		],
	},
];

export default About;