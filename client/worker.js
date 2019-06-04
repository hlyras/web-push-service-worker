console.log('Service Worker loaded');

self.addEventListener('push', e => {
	const data = e.data.json();
	console.log('Push Received...');
	self.registration.showNotification(data.title, {
		body: 'Notified by Lyra',
		icon: 'https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg'
	});
});