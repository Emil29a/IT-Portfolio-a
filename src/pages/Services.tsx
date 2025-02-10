import { motion } from 'framer-motion';

const Services = () => {
	return (
		<div className="min-h-screen bg-primary text-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Kompleksowe <span className="text-accent">Usługi IT</span>
					</h1>
					<p className="text-xl text-gray-300">
						Specjalistyczne rozwiązania dla biznesu i księgowości
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							className="bg-secondary p-8 rounded-lg"
						>
							<h2 className="text-2xl font-bold mb-4 text-accent">{service.title}</h2>
							<p className="text-gray-300 mb-6">{service.description}</p>
							<ul className="space-y-3">
								{service.features.map((feature, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 * idx }}
										className="flex items-start"
									>
										<span className="text-accent mr-2">✓</span>
										<span className="text-gray-300">{feature}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

const services = [
	{
		title: "Automatyzacja Procesów Biznesowych",
		description: "Kompleksowe rozwiązania automatyzujące powtarzalne zadania w księgowości i administracji.",
		features: [
			"Automatyzacja importu wyciągów bankowych do systemów księgowych",
			"Boty klasyfikujące dokumenty z wykorzystaniem AI",
			"Przyspieszenie księgowania faktur przy dużym wolumenie dokumentów",
			"Automatyzacja przypomnień o terminach podatkowych (VAT, PIT, CIT)",
		],
	},
	{
		title: "Integracje IT w Księgowości",
		description: "Profesjonalna konfiguracja i integracja systemów księgowych z innymi narzędziami.",
		features: [
			"Dostosowanie przepływów księgowych do potrzeb firmy",
			"Tworzenie raportów i wizualizacji w Excel i Power BI",
			"Import i przetwarzanie danych z systemów księgowych (SAP, eNova, Symfonia)",
			"Zarządzanie bazami danych i automatyzacja operacji finansowych",
		],
	},
	{
		title: "Optymalizacja Procesów Biznesowych",
		description: "Usprawnienie przepływu dokumentów i procesów w firmie.",
		features: [
			"Wdrażanie elektronicznego obiegu dokumentów (BPMN)",
			"Integracja rozwiązań OCR do przetwarzania faktur",
			"Projektowanie narzędzi i kalkulatorów finansowych",
			"Dostosowywanie systemów ERP pod księgowość",
		],
	},
	{
		title: "Rozwój Aplikacji Webowych",
		description: "Tworzenie nowoczesnych rozwiązań internetowych dla biznesu.",
		features: [
			"Profesjonalne strony internetowe dla firm",
			"Aplikacje webowe i mobilne z naciskiem na usługi finansowe",
			"Optymalizacja SEO i wydajności istniejących stron",
			"Doradztwo w zakresie wyboru i wdrożenia OCR",
		],
	},
];

export default Services;