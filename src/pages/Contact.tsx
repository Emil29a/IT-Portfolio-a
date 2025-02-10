import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Tutaj dodać logikę wysyłania formularza
		console.log('Form data:', formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="min-h-screen bg-primary text-white py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						Skontaktuj się <span className="text-accent">ze mną</span>
					</h1>
					<p className="text-xl text-gray-300">
						Chętnie omówię szczegóły Twojego projektu
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Formularz kontaktowy */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="bg-secondary p-8 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-6 text-accent">Formularz kontaktowy</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
									Imię i nazwisko *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-md bg-primary/50 border border-gray-600 text-white focus:outline-none focus:border-accent"
								/>
							</div>
							
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
									Email *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-md bg-primary/50 border border-gray-600 text-white focus:outline-none focus:border-accent"
								/>
							</div>

							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
									Telefon (opcjonalnie)
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-md bg-primary/50 border border-gray-600 text-white focus:outline-none focus:border-accent"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
									Wiadomość *
								</label>
								<textarea
									id="message"
									name="message"
									required
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className="w-full px-4 py-2 rounded-md bg-primary/50 border border-gray-600 text-white focus:outline-none focus:border-accent"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent/90 transition-colors"
							>
								Wyślij wiadomość
							</button>
						</form>
					</motion.div>

					{/* Dane kontaktowe */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="bg-secondary p-8 rounded-lg"
					>
						<h2 className="text-2xl font-bold mb-6 text-accent">Dane kontaktowe</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold mb-4">Bezpośredni kontakt</h3>
								<ul className="space-y-4 text-gray-300">
									<li className="flex items-center">
										<span className="text-accent mr-3">📧</span>
										<span>email@emil-nazwisko.pl</span>
									</li>
									<li className="flex items-center">
										<span className="text-accent mr-3">📱</span>
										<span>+48 XXX XXX XXX</span>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-4">Lokalizacja</h3>
								<p className="text-gray-300">
									Warszawa - możliwość spotkania osobistego<br />
									lub konsultacji zdalnej
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-4">Godziny pracy</h3>
								<p className="text-gray-300">
									Poniedziałek - Piątek<br />
									9:00 - 17:00
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;