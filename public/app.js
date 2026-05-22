/**
 * Saamabee Air Services - Client-Side SPA Application Engine
 * Contains Hash Router, View Transition Handler, Interactive Search Engine,
 * Gallery filter, Lightbox system, and Luxury Travel Advisor Recommender.
 */

// ==========================================================================
// 1. Comprehensive Project Asset Database
// Integrating all 28 project image assets with titles, descriptions & pricing.
// ==========================================================================
const IMAGE_DATABASE = [
    // Resorts & Hotels
    {
        filename: 'sugar-beach-viceroy-resort.jpg',
        title: 'Viceroy Sugar Beach Resort',
        category: 'resorts',
        description: 'Luxury beach resort terrace featuring a private infinity pool overlooking the Caribbean Sea.',
        location: 'St. Lucia, Caribbean',
        price: 850,
        rating: 4.9,
        tags: ['pool', 'beach', 'honeymoon']
    },
    {
        filename: 'tropical-beachfront-resort-villas.jpeg',
        title: 'Tropical Beachfront Villas',
        category: 'resorts',
        description: 'Two-story private beach villas with lush palms and direct access to pristine sands.',
        location: 'Maldives',
        price: 980,
        rating: 4.8,
        tags: ['beach', 'villa', 'family']
    },
    {
        filename: 'luxury-resort-swimming-pool-night.jpg',
        title: 'Hillside Sanctuary Pool',
        category: 'resorts',
        description: 'Spectacular hillside luxury resort featuring an illuminated swimming pool at twilight.',
        location: 'Phuket, Thailand',
        price: 620,
        rating: 4.7,
        tags: ['pool', 'night', 'romantic']
    },
    {
        filename: 'jewel-grande-montego-bay-pool.jpg',
        title: 'Jewel Grande Beach Resort',
        category: 'resorts',
        description: 'Premium swimming pool and cabanas at a luxury Montego Bay beachfront retreat.',
        location: 'Montego Bay, Jamaica',
        price: 720,
        rating: 4.9,
        tags: ['pool', 'beach', 'resort']
    },
    {
        filename: 'luxury-hillside-villas-twilight.jpg',
        title: 'Royal Twilight Villas',
        category: 'resorts',
        description: 'Multi-level heated plunge pools and authentic hillside thatched villas at twilight.',
        location: 'Bali, Indonesia',
        price: 1150,
        rating: 5.0,
        tags: ['villa', 'pool', 'exclusive']
    },
    {
        filename: 'luxury-safari-river-lodge.webp',
        title: 'Safari River Lodge & Observatory',
        category: 'resorts',
        description: 'Namibian safari river lodge deck complete with a telescope for stargazing in the wild.',
        location: 'Namibia, Africa',
        price: 1250,
        rating: 4.9,
        tags: ['observatory', 'safari', 'wildlife']
    },
    {
        filename: 'pangkor-laut-resort-malaysia.jpg',
        title: 'Pangkor Laut Overwater Resort',
        category: 'resorts',
        description: 'Pristine infinity pools and premium overwater bungalows extending into the emerald sea.',
        location: 'Pangkor Laut, Malaysia',
        price: 890,
        rating: 4.8,
        tags: ['pool', 'overwater', 'luxury']
    },
    {
        filename: 'cheval-blanc-st-barths-resort.jpg',
        title: 'Cheval Blanc St. Barth Isle',
        category: 'resorts',
        description: 'Caribbean private plunge pool and garden deck overlooking the beach at Cheval Blanc.',
        location: 'St. Barths',
        price: 1400,
        rating: 5.0,
        tags: ['pool', 'beach', 'private']
    },
    {
        filename: 'saamabee-accommodation-tropical-villa-ad.png',
        title: 'Tropical Overhang Villa',
        category: 'resorts',
        description: 'Breathtaking cantilevered villa structure featuring an integrated infinity pool.',
        location: 'Fiji Islands',
        price: 1300,
        rating: 4.9,
        tags: ['villa', 'pool', 'modern']
    },
    {
        filename: 'saamabee-accommodation-savanna-deck.png',
        title: 'Savanna Starlight Deck',
        category: 'resorts',
        description: 'Savanna outdoor deck and lounge designed for star-studded safari viewing.',
        location: 'Serengeti, Tanzania',
        price: 1050,
        rating: 4.7,
        tags: ['safari', 'deck', 'nature']
    },
    {
        filename: 'saamabee-indian-palace-hotel-banner.png',
        title: 'The Indian Heritage Palace',
        category: 'resorts',
        description: 'Heritage royal palace hotel offering sunset dining and traditional service.',
        location: 'Rajasthan, India',
        price: 1500,
        rating: 5.0,
        tags: ['heritage', 'palace', 'royal']
    },

    // Aircraft & Flight Views
    {
        filename: 'airbus-a350-nose-sunset.jpg',
        title: 'Airbus A350 Premium Fleet',
        category: 'flights',
        description: 'High-definition view of the Airbus A350 cockpit nose illuminated by golden hour sunset.',
        airline: 'Saamabee Air Signature',
        duration: '12h 40m',
        stops: 'Non-stop',
        price: 1850,
        rating: 4.9
    },
    {
        filename: 'airplane-turbofan-engine-runway.jpg',
        title: 'Turbofan Engine Diagnostics',
        category: 'flights',
        description: 'Close-up of a high-bypass jet turbofan engine on a wet runway before departure.',
        airline: 'Saamabee Global Charter',
        duration: '7h 15m',
        stops: 'Non-stop',
        price: 1200,
        rating: 4.8
    },
    {
        filename: 'vintage-polished-metal-airplane.jpg',
        title: 'Vintage Flagship Aircraft',
        category: 'flights',
        description: 'Polished metal vintage aircraft featuring a signature red stripe and classic elegance.',
        airline: 'Heritage Flight Experience',
        duration: '3h 30m',
        stops: 'Non-stop',
        price: 950,
        rating: 4.7
    },
    {
        filename: 'qantas-boeing-747-indigenous-livery.jpg',
        title: 'Boeing 747 Indigenous Art',
        category: 'flights',
        description: 'Qantas Boeing 747 featuring the iconic bright red Wunala Dreaming Aboriginal artwork.',
        airline: 'Pacific Airways Partner',
        duration: '14h 20m',
        stops: '1 Stop',
        price: 1650,
        rating: 4.8
    },
    {
        filename: 'boeing-777-engine-close-up-sunset.jpg',
        title: 'Boeing 777 Engine Close-Up',
        category: 'flights',
        description: 'Sleek Boeing 777 commercial jet engine reflecting brilliant orange sunset rays.',
        airline: 'Saamabee Express',
        duration: '9h 50m',
        stops: 'Non-stop',
        price: 1400,
        rating: 4.9
    },
    {
        filename: 'airplane-cockpit-nose-with-flying-plane.jpg',
        title: 'Double Transit Flight Path',
        category: 'flights',
        description: 'Foreground aircraft nose with another commercial passenger airliner flying high above.',
        airline: 'Saamabee Air Signature',
        duration: '6h 10m',
        stops: 'Non-stop',
        price: 1100,
        rating: 4.7
    },
    {
        filename: 'boeing-airplane-nose-sky-front.jpg',
        title: 'Boeing Intercontinental Jet',
        category: 'flights',
        description: 'Stunning direct front perspective of a modern passenger jet climbing under a deep blue sky.',
        airline: 'Saamabee Air Elite',
        duration: '11h 05m',
        stops: 'Non-stop',
        price: 2100,
        rating: 4.9
    },
    {
        filename: 'red-dreamliner-airplane-night.jpg',
        title: 'Dreamliner Nocturnal Transit',
        category: 'flights',
        description: 'Close-up perspective of a bright red Boeing 787 Dreamliner nose under airport floodlights.',
        airline: 'Saamabee Starry Night',
        duration: '8h 45m',
        stops: 'Non-stop',
        price: 1550,
        rating: 4.8
    },

    // Scenic Vistas
    {
        filename: 'saamabee-flight-booking-sunset-banner.jpg',
        title: 'Golden Sunset Flight Over Clouds',
        category: 'vistas',
        description: 'Passenger jet engine visible as it sails smoothly through orange clouds at sunset.'
    },
    {
        filename: 'airplane-wing-sunset-clouds.jpg',
        title: 'Ethereal Wing Sunset Vista',
        category: 'vistas',
        description: 'Scenic wing view flying directly over a soft blanket of twilight orange clouds.'
    },
    {
        filename: 'airplane-wing-clouds-blue-sky.png',
        title: 'Wing View Over Sky Oceans',
        category: 'vistas',
        description: 'Stunning airplane wing perspective gliding over crisp white clouds under a clear blue sky.'
    },
    {
        filename: 'saamabee-explore-the-world-cabin-window.png',
        title: 'Cabin Window Horizon Seat',
        category: 'vistas',
        description: 'Gazing through the aircraft cabin double-windows out towards the atmospheric horizon.'
    },
    {
        filename: 'dramatic-airplane-night-spotlight.jpeg',
        title: 'Spotlight Nocturnal Spotlight',
        category: 'vistas',
        description: 'Split-screen dramatic spotlit nose view of a luxurious corporate flight at night.'
    },
    {
        filename: 'saamabee-world-tourism-day-banner.jpg',
        title: 'World Tourism Runway Sunset',
        category: 'vistas',
        description: 'Scenic airline parked on the runway taxi deck under a burning orange tourist sky.'
    },
    {
        filename: 'passenger-window-wing-sunset.jpg',
        title: 'Passenger Port View Sunset',
        category: 'vistas',
        description: 'Cabin passenger window perspective capturing the wing silhouette against sunset gradient.'
    },
    {
        filename: 'saamabee-airport-contact-info-banner.jpg',
        title: 'Airport Terminal Reflective Glass',
        category: 'vistas',
        description: 'Golden hour architectural reflection across modern airport terminal windows.'
    },
    {
        filename: 'romantic-beach-holiday-champagne.jpg',
        title: 'Couples Golden Beach Holiday',
        category: 'resorts',
        description: 'Romantic couple sharing a champagne toast on beachfront lounge chairs.',
        location: 'Bora Bora, French Polynesia',
        price: 950,
        rating: 4.9,
        tags: ['beach', 'romantic', 'luxury']
    },

    // Famous International Destinations
    {
        filename: 'kashmir-dal-lake.png',
        title: 'Serene Dal Lake, Kashmir',
        category: 'destinations',
        description: 'Traditional Shikara boats gliding across the calm waters of Dal Lake, surrounded by the majestic snow-capped Himalayan ranges.',
        location: 'Srinagar, Kashmir',
        price: 350,
        rating: 4.9,
        tags: ['lake', 'mountain', 'nature']
    },
    {
        filename: 'kuala-lumpur-petronas.png',
        title: 'Petronas Twin Towers, Kuala Lumpur',
        category: 'destinations',
        description: 'The breathtaking modern architectural marvel of the Petronas Twin Towers glowing at twilight, a top favorite city break destination.',
        location: 'Kuala Lumpur, Malaysia',
        price: 280,
        rating: 4.8,
        tags: ['city', 'skyline', 'architecture']
    },
    {
        filename: 'singapore-marina-bay.png',
        title: 'Marina Bay Sands Skyline, Singapore',
        category: 'destinations',
        description: 'The iconic Marina Bay Sands hotel and vibrant futuristic skyline at night, capturing the energy of Singapore.',
        location: 'Marina Bay, Singapore',
        price: 450,
        rating: 4.9,
        tags: ['city', 'luxury', 'skyline']
    },
    {
        filename: 'phuket-thailand.png',
        title: 'Tropical Paradise Phi Phi Islands, Phuket',
        category: 'destinations',
        description: 'A traditional wooden longtail boat resting on crystal clear turquoise waters against towering limestone cliffs in Phuket.',
        location: 'Phuket, Thailand',
        price: 240,
        rating: 4.7,
        tags: ['beach', 'island', 'tropical']
    },
    {
        filename: 'dubai-skyline.png',
        title: 'Futuristic Dubai Skyline & Burj Khalifa',
        category: 'destinations',
        description: 'The towering spire of Burj Khalifa soaring over the illuminated highways and futuristic cityscape of Dubai at night.',
        location: 'Dubai, United Arab Emirates',
        price: 550,
        rating: 4.9,
        tags: ['city', 'skyline', 'luxury']
    },
    {
        filename: 'istanbul-turkey.png',
        title: 'Sunset Over Hagia Sophia, Istanbul',
        category: 'destinations',
        description: 'A magical golden sunset outlining the historical domes and minarets of Hagia Sophia, with seagulls soaring over the Bosphorus.',
        location: 'Istanbul, Turkey',
        price: 390,
        rating: 4.9,
        tags: ['history', 'sunset', 'culture']
    },
    {
        filename: 'kathmandu-nepal.png',
        title: 'Boudhanath Stupa & Himalayas, Kathmandu',
        category: 'destinations',
        description: 'The historic Boudhanath Stupa decorated with colorful fluttering prayer flags, framed by the towering, snow-covered peaks of Nepal.',
        location: 'Kathmandu, Nepal',
        price: 190,
        rating: 4.8,
        tags: ['temple', 'mountain', 'heritage']
    }
];

// ==========================================================================
// 2. SPA Router & View Transitions
// Hash-based client router with support for native CSS View Transitions.
// ==========================================================================
class Router {
    constructor() {
        this.routes = {
            'home': 'view-home',
            'flights': 'view-flights',
            'accommodations': 'view-accommodations',
            'destinations': 'view-destinations',
            'experience': 'view-experience',
            'consultation': 'view-consultation'
        };
        this.defaultRoute = 'home';

        window.addEventListener('hashchange', () => this.handleHashChange());
        window.addEventListener('DOMContentLoaded', () => this.handleHashChange());
    }

    handleHashChange() {
        const hash = window.location.hash.slice(2); // Remove '#/'
        const route = this.routes[hash] ? hash : this.defaultRoute;
        
        // Update URL just in case
        if (window.location.hash !== `#/${route}`) {
            window.location.hash = `#/${route}`;
            return;
        }

        this.navigate(route);
    }

    navigate(route) {
        const targetViewId = this.routes[route];
        
        // Helper to update active view classes and navigation attributes
        const performTransition = () => {
            document.querySelectorAll('.view-section').forEach(view => {
                view.classList.remove('active');
            });
            document.getElementById(targetViewId).classList.add('active');

            // Update header navigation active states
            document.querySelectorAll('nav a').forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === `#/${route}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Close mobile menu if active
            const navElement = document.querySelector('nav');
            const toggleBtn = document.querySelector('.menu-toggle');
            if (navElement.classList.contains('active')) {
                navElement.classList.remove('active');
                toggleBtn.classList.remove('active');
            }

            // Scroll window to top smoothly
            window.scrollTo({ top: 0, behavior: 'instant' });
        };

        // Support View Transitions API for seamless layout morphing
        if (document.startViewTransition) {
            document.startViewTransition(() => performTransition());
        } else {
            performTransition();
        }
    }
}

// Instantiate Router
const appRouter = new Router();

// ==========================================================================
// 3. Application State & Booking Manager
// Tracks user search filters, active reservation lists, and local storage.
// ==========================================================================
class BookingState {
    constructor() {
        this.activeBookings = JSON.parse(localStorage.getItem('saamabee_bookings')) || [];
        this.currentPendingBooking = null;
        
        // Seed initial bookings if empty for demonstrating high premium quality
        if (this.activeBookings.length === 0) {
            this.activeBookings = [
                {
                    id: 'RES-74921',
                    title: 'Safari River Lodge & Observatory',
                    type: 'Hotel Booking',
                    location: 'Namibia, Africa',
                    price: 2500,
                    dates: '2026-06-12 to 2026-06-14',
                    status: 'Confirmed'
                }
            ];
            this.saveToStorage();
        }
    }

    saveToStorage() {
        localStorage.setItem('saamabee_bookings', JSON.stringify(this.activeBookings));
    }

    addBooking(booking) {
        this.activeBookings.push(booking);
        this.saveToStorage();
        this.renderReservationsList();
    }

    cancelBooking(id) {
        this.activeBookings = this.activeBookings.filter(b => b.id !== id);
        this.saveToStorage();
        this.renderReservationsList();
    }

    renderReservationsList() {
        const listContainer = document.getElementById('reservations-list');
        if (!listContainer) return;

        if (this.activeBookings.length === 0) {
            listContainer.innerHTML = `
                <div class="no-reservations">
                    <p>No active reservations or flight itineraries scheduled yet.</p>
                    <a href="#/home" class="btn btn-primary btn-sm">Explore Flights Now</a>
                </div>
            `;
            return;
        }

        listContainer.innerHTML = this.activeBookings.map(booking => `
            <div class="reservation-card">
                <div class="reservation-info">
                    <span class="reservation-status">${booking.status}</span>
                    <h4 style="margin-top: 10px;">${booking.title}</h4>
                    <p style="color: var(--accent); margin-bottom: 8px;">${booking.type}</p>
                    <p><strong>Itinerary ID:</strong> ${booking.id}</p>
                    <p><strong>Route/Location:</strong> ${booking.location}</p>
                    <p><strong>Dates:</strong> ${booking.dates}</p>
                    <p><strong>Total Value:</strong> $${booking.price.toLocaleString()}</p>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="appState.handleCancel('${booking.id}')" style="padding: 10px 20px; font-size: 0.7rem; border-color: var(--accent); color: var(--accent);">Cancel Transit</button>
            </div>
        `).join('');
    }

    handleCancel(id) {
        if (confirm('Are you sure you wish to cancel this premium itinerary and release seats/room?')) {
            this.cancelBooking(id);
        }
    }
}

// Instantiate state
const appState = new BookingState();

// ==========================================================================
// 4. Interactive Search Results & Filter Engine
// Simulates a luxury backend loader, dynamically rendering flight/hotel lists.
// ==========================================================================
class SearchEngine {
    constructor() {
        this.searchParams = {};
    }

    openDirectBooking(title, category, price, location, image) {
        // Create a temporary mock item to bypass search results
        const mockItem = {
            id: `ACC-${Math.floor(1000 + Math.random() * 9000)}`,
            title: title,
            type: category || 'Luxury Hotel Stay',
            image: image,
            price: price,
            rating: 5.0,
            location: location,
            description: '',
            details: [
                { label: 'Room Privileges', value: 'Bespoke Package Rate' },
                { label: 'Check In', value: 'Scheduled on consultation' },
                { label: 'Exclusive Perks', value: 'Infinity Pool, Private Lounge, Free Wi-Fi' }
            ]
        };

        // Pre-populate searchParams in case they are empty
        if (!this.searchParams.date) {
            this.searchParams.date = 'Selected upon consultation';
        }
        if (!this.searchParams.travelClass) {
            this.searchParams.travelClass = 'Prestige Suite';
        }

        appState.currentPendingBooking = mockItem;

        const drawer = document.getElementById('booking-drawer');
        const detailsContainer = document.getElementById('booking-summary-details');

        if (!drawer || !detailsContainer) return;

        const subtotal = price;
        const luxuryTax = Math.round(subtotal * 0.12);
        const total = subtotal + luxuryTax;

        detailsContainer.innerHTML = `
            <div class="booking-summary-card">
                <h4>Reservation Selected</h4>
                <div class="booking-summary-row" style="margin-top: 15px;">
                    <span>Item</span>
                    <span>${title}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Category</span>
                    <span>${mockItem.type}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Target Route/Stay</span>
                    <span>${location}</span>
                </div>
                <div class="booking-summary-row">
                    <span>VIP Privilege Class</span>
                    <span>${this.searchParams.travelClass || 'First Class'}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Scheduled Date</span>
                    <span>${this.searchParams.date || 'Selected upon consultation'}</span>
                </div>
            </div>
            
            <div class="booking-summary-card">
                <h4>Pricing Details</h4>
                <div class="booking-summary-row" style="margin-top: 15px;">
                    <span>Privilege Fare</span>
                    <span>$${subtotal.toLocaleString()}</span>
                </div>
                <div class="booking-summary-row">
                    <span>Premium Lounge & Cabin Tax (12%)</span>
                    <span>$${luxuryTax.toLocaleString()}</span>
                </div>
                <div class="booking-summary-total">
                    <span>Total Cost</span>
                    <span>$${total.toLocaleString()}</span>
                </div>
            </div>
        `;

        drawer.classList.add('active');
    }

    closeBookingDrawer() {
        const drawer = document.getElementById('booking-drawer');
        if (drawer) {
            drawer.classList.remove('active');
        }
        appState.currentPendingBooking = null;
    }

    confirmReservation(e) {
        e.preventDefault();
        const item = appState.currentPendingBooking;
        if (!item) return;

        const nameInput = document.getElementById('booking-client-name');
        const emailInput = document.getElementById('booking-client-email');

        if (!nameInput.value || !emailInput.value) {
            alert('Please input guest passenger credentials to validate reservation.');
            return;
        }

        const totalCost = item.price + Math.round(item.price * 0.12);

        // Add to state list
        appState.addBooking({
            id: `RES-${Math.floor(10000 + Math.random() * 90000)}`,
            title: item.title,
            type: item.type,
            location: item.location,
            price: totalCost,
            dates: this.searchParams.date || '2026-07-24',
            status: 'Confirmed'
        });

        // Close drawer
        this.closeBookingDrawer();

        // Reset form inputs
        nameInput.value = '';
        emailInput.value = '';

        // Navigate to consultation view where reservations live
        window.location.hash = '#/consultation';
        
        alert(`Congratulations! Your luxury reservation for "${item.title}" has been successfully guaranteed. Itinerary details are saved to your account profile.`);
    }
}

// Instantiate search engine controller
let searchController;
document.addEventListener('DOMContentLoaded', () => {
    searchController = new SearchEngine();
    
    // Bind drawer buttons
    const closeBtn = document.getElementById('drawer-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => searchController.closeBookingDrawer());
    }

    const drawerForm = document.getElementById('drawer-booking-form');
    if (drawerForm) {
        drawerForm.addEventListener('submit', (e) => searchController.confirmReservation(e));
    }
});

// ==========================================================================
// 5. Interactive Destinations Gallery & Lightbox
// Masonry filtering mechanics and fullscreen accessible overlay controls.
// ==========================================================================
class GalleryController {
    constructor() {
        this.activeFilter = 'destinations';
        this.initGallery();
    }

    initGallery() {
        const galleryGrid = document.getElementById('destinations-gallery-grid');
        if (!galleryGrid) return;

        // Render only actual destination and resort assets, excluding aircraft/flight vistas
        const destinationsAssets = IMAGE_DATABASE.filter(item => item.category === 'destinations' || item.category === 'resorts');
        galleryGrid.innerHTML = destinationsAssets.map(item => `
            <div class="gallery-item" data-category="${item.category}" onclick="galleryController.openLightbox('${item.filename}')">
                <img src="${item.filename}" alt="${item.title}" loading="lazy">
                <div class="gallery-item-overlay">
                    <h4>${item.title}</h4>
                    <p>${item.category === 'resorts' ? 'Resort & Lodge' : 'International Destination'}</p>
                </div>
            </div>
        `).join('');

        // Filter button click binders
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                this.filterGallery(filter);
            });
        });

        // Lightbox close binders
        const closeBtn = document.getElementById('lightbox-close-btn');
        const lightbox = document.getElementById('gallery-lightbox');
        if (closeBtn && lightbox) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) this.closeLightbox();
            });
            // Escape key listener
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                    this.closeLightbox();
                }
            });
        }

        // Apply initial active filter (Famous Destinations)
        this.filterGallery(this.activeFilter);
    }

    filterGallery(category) {
        this.activeFilter = category;
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            if (category === 'all' || itemCat === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    openLightbox(filename) {
        const item = IMAGE_DATABASE.find(i => i.filename === filename);
        if (!item) return;

        const lightbox = document.getElementById('gallery-lightbox');
        const img = document.getElementById('lightbox-img');
        const captionTitle = document.getElementById('lightbox-caption-title');
        const captionDesc = document.getElementById('lightbox-caption-desc');

        if (!lightbox || !img) return;

        img.src = item.filename;
        img.alt = item.title;
        captionTitle.textContent = item.title;
        captionDesc.textContent = item.description || `An exclusive offering showcasing our premium air travel and luxury accommodations portfolio.`;

        lightbox.classList.add('active');
    }

    closeLightbox() {
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
        }
    }
}

// Instantiate gallery
let galleryController;
document.addEventListener('DOMContentLoaded', () => {
    galleryController = new GalleryController();
});

// ==========================================================================
// 6. Luxury Travel Advisor Recommendation System
// Dynamic concierge recommender matching preferences to curated retreats.
// ==========================================================================
class TravelAdvisor {
    constructor() {
        this.currentStep = 1;
        this.preferences = {};
        this.initWizard();
    }

    initWizard() {
        const wizardCard = document.getElementById('advisor-wizard-card');
        if (!wizardCard) return;

        // Choice cards binders
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                const group = card.getAttribute('data-group');
                const val = card.getAttribute('data-value');

                // Toggle active card
                document.querySelectorAll(`.option-card[data-group="${group}"]`).forEach(c => {
                    c.classList.remove('selected');
                });
                card.classList.add('selected');

                this.preferences[group] = val;
            });
        });

        // Next/Back buttons
        const nextBtn = document.getElementById('advisor-next-btn');
        const prevBtn = document.getElementById('advisor-prev-btn');

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
            prevBtn.addEventListener('click', () => this.prevStep());
        }

        // Restart button
        const restartBtn = document.getElementById('advisor-restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.resetWizard());
        }
    }

    nextStep() {
        if (this.currentStep === 1) {
            if (!this.preferences.style) {
                alert('Please select a preferred vacation lifestyle to proceed.');
                return;
            }
            this.currentStep = 2;
            this.updateWizardSteps();
        } else if (this.currentStep === 2) {
            if (!this.preferences.budget) {
                alert('Please select your target travel standard configuration.');
                return;
            }
            this.showRecommendation();
        }
    }

    prevStep() {
        if (this.currentStep === 2) {
            this.currentStep = 1;
            this.updateWizardSteps();
        }
    }

    updateWizardSteps() {
        document.querySelectorAll('.advisor-step').forEach(step => {
            step.classList.remove('active');
        });
        document.getElementById(`advisor-step-${this.currentStep}`).classList.add('active');

        // Update footer buttons
        const prevBtn = document.getElementById('advisor-prev-btn');
        const nextBtn = document.getElementById('advisor-next-btn');

        if (this.currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
            nextBtn.textContent = 'CONTINUE';
        } else {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = 'BUILD TRAVEL PLAN';
        }
    }

    showRecommendation() {
        const wizardContainer = document.getElementById('advisor-wizard-card');
        const recContainer = document.getElementById('advisor-rec-card');
        
        if (!wizardContainer || !recContainer) return;

        // Custom recommendations mapping to physical database assets
        let matchedResort;
        let matchedFlight;
        let itineraryTitle = '';
        let itineraryDesc = '';

        if (this.preferences.style === 'honeymoon') {
            matchedResort = IMAGE_DATABASE.find(item => item.filename === 'cheval-blanc-st-barths-resort.jpg');
            matchedFlight = IMAGE_DATABASE.find(item => item.filename === 'boeing-airplane-nose-sky-front.jpg');
            itineraryTitle = 'Ethereal Shore Honeymoon';
            itineraryDesc = 'Indulge in a tailor-made romantic island getaway. Flights feature our premier widebody Boeing First Class cabin and private lounge transfers, arriving at St. Barths to rest at a luxurious Cheval Blanc beach villa complete with your personal butler and private plunge pool overlooking turquoise horizons.';
        } else if (this.preferences.style === 'safari') {
            matchedResort = IMAGE_DATABASE.find(item => item.filename === 'luxury-safari-river-lodge.webp');
            matchedFlight = IMAGE_DATABASE.find(item => item.filename === 'airbus-a350-nose-sunset.jpg');
            itineraryTitle = 'Serengeti Skies Safari Expedition';
            itineraryDesc = 'An immersive luxury safari exploration. Fly out with our signature Airbus A350 ultra-long-range fleet. Arrive in the Namibian valley to observe wildlife directly from your private lodge river observatory platform, complete with telescopes and starlight astronomy decks.';
        } else if (this.preferences.style === 'corporate') {
            matchedResort = IMAGE_DATABASE.find(item => item.filename === 'saamabee-indian-palace-hotel-banner.png');
            matchedFlight = IMAGE_DATABASE.find(item => item.filename === 'red-dreamliner-airplane-night.jpg');
            itineraryTitle = 'Imperial Heritage Corporate Retreat';
            itineraryDesc = 'The ultimate corporate prestige experience. Fly under private charter configurations aboard our nocturnal Dreamliner fleet. Land in Rajasthan to host high-level strategic summits and formal dining inside a magnificently restored Indian palace fortress.';
        } else { // leisure
            matchedResort = IMAGE_DATABASE.find(item => item.filename === 'sugar-beach-viceroy-resort.jpg');
            matchedFlight = IMAGE_DATABASE.find(item => item.filename === 'boeing-777-engine-close-up-sunset.jpg');
            itineraryTitle = 'Tropical Lagoon Luxury Leisure';
            itineraryDesc = 'Relax fully with our signature tropical retreat. Multi-course dining and flatbed comfort aboard our long-range Boeing 777 fleet will deliver you directly to the white sands of Sugar Beach. Features private cabanas, wellness spas, and ocean infinity pools.';
        }

        // Render recommendation
        document.getElementById('rec-title').textContent = itineraryTitle;
        document.getElementById('rec-hero-img').src = matchedResort.filename;
        document.getElementById('rec-resort-title').textContent = matchedResort.title;
        document.getElementById('rec-resort-loc').textContent = matchedResort.location;
        document.getElementById('rec-flight-spec').textContent = matchedFlight.title;
        document.getElementById('rec-flight-airline').textContent = matchedFlight.airline || 'Saamabee Air Elite';
        document.getElementById('rec-itinerary-desc').textContent = itineraryDesc;

        // Calculate custom cost
        const pricePerPerson = matchedResort.price + matchedFlight.price;
        document.getElementById('rec-cost-val').textContent = `$${pricePerPerson.toLocaleString()}`;

        // Bind reserve package button to open booking drawer directly
        const bookBtn = document.getElementById('advisor-book-btn');
        if (bookBtn) {
            bookBtn.onclick = () => {
                searchController.openDirectBooking(
                    itineraryTitle,
                    'Custom Package Escape',
                    pricePerPerson,
                    matchedResort.location,
                    matchedResort.filename
                );
            };
        }

        // Swap view panels
        wizardContainer.style.display = 'none';
        recContainer.classList.add('active');
    }

    resetWizard() {
        const wizardContainer = document.getElementById('advisor-wizard-card');
        const recContainer = document.getElementById('advisor-rec-card');

        if (!wizardContainer || !recContainer) return;

        this.currentStep = 1;
        this.preferences = {};

        // Remove active card selected states
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Hide rec and show wizard
        recContainer.classList.remove('active');
        wizardContainer.style.display = 'block';

        this.updateWizardSteps();
    }
}

// Instantiate travel advisor controller
let advisorController;
document.addEventListener('DOMContentLoaded', () => {
    advisorController = new TravelAdvisor();
});

// ==========================================================================
// 7. General Page Event Listeners & UI Polishing
// Mobile slide navigation toggles, and shrinking header listeners.
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Scroll event listener to shrink header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger menu event listener
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('main-nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Render active reservations list in consultation tab on startup
    appState.renderReservationsList();
});
