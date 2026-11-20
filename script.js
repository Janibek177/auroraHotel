const roomData = {
    101: {
        name: "Standard Oak Suite",
        wing: "Left",
        price: 140,
        size: "45 m²",
        bed: "Single King",
        guests: "1 Guest",
        desc: "A sleek single suite crafted with warm oak wall paneling, ergonomic work setup, and travertine bathroom finishes.",
        amenities: ["Plush Bed", "Work Desk", "Rain Shower", "High-Speed Wi-Fi", "Smart TV"],
        photos: {
            bed: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        }
    },
    102: {
        name: "Superior Travertine Suite",
        wing: "Left",
        price: 180,
        size: "55 m²",
        bed: "Queen Bed",
        guests: "2 Guests",
        desc: "Refined modern space equipped with a plush queen bed, ambient cove headboard lighting, and city garden view.",
        amenities: ["Queen Bed", "Garden View", "Minibar", "Nespresso Machine", "Marble Bath"],
        photos: {
            bed: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
        }
    },
    103: {
        name: "Deluxe Corner Suite",
        wing: "Left",
        price: 210,
        size: "65 m²",
        bed: "2 Twin Beds",
        guests: "2 Guests",
        desc: "Twin sleeping suite engineered with soundproof acoustic walls, lounge seating corner, and double vanity bath.",
        amenities: ["2 Twin Beds", "Lounge Chair", "Soundproof Walls", "Dual Vanity", "Safe"],
        photos: {
            bed: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80"
        }
    },
    104: {
        name: "Executive Terrace Suite",
        wing: "Left",
        price: 260,
        size: "75 m²",
        bed: "Grand King",
        guests: "2 Guests",
        desc: "Master suite featuring a grand king bed, private outdoor terrace balcony, and integrated ambient lighting system.",
        amenities: ["Grand King Bed", "Private Terrace", "City Views", "Bathrobes", "24/7 Room Service"],
        photos: {
            bed: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
        }
    },
    105: {
        name: "Junior Suite",
        wing: "Left",
        price: 310,
        size: "85 m²",
        bed: "Grand King",
        guests: "2 Guests",
        desc: "Dual glass facade corner suite offering floor-to-ceiling city views and a deep freestanding soaking tub.",
        amenities: ["Panoramic Glass", "Soaking Tub", "Corner View", "Mini Bar", "Smart Audio"],
        photos: {
            bed: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
        }
    },
    201: {
        name: "Panoramic Suite",
        wing: "Right",
        price: 340,
        size: "90 m²",
        bed: "Super King",
        guests: "2 Guests",
        desc: "First-tier right wing suite featuring a separate living room, leather armchairs, and brass chandelier accents.",
        amenities: ["Living Room", "Super King Bed", "Leather Lounge", "Chandelier", "Walk-in Closet"],
        photos: {
            bed: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        }
    },
    202: {
        name: "Royal Residence",
        wing: "Right",
        price: 390,
        size: "100 m²",
        bed: "Super King",
        guests: "2 Guests",
        desc: "High-floor suite with spectacular skyline views, smart automation controls, and integrated spatial sound system.",
        amenities: ["Skyline Views", "Smart Lighting", "B&O Audio", "Jacuzzi Shower", "Espresso Bar"],
        photos: {
            bed: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
        }
    },
    203: {
        name: "Garden Loft",
        wing: "Right",
        price: 440,
        size: "125 m²",
        bed: "2 King Beds",
        guests: "4 Guests",
        desc: "Spacious dual-chamber residence with two private king bedrooms, grand dining table, and luxury bath amenities.",
        amenities: ["2 Bedrooms", "2 Bathrooms", "Grand Dining", "Gaming Suite", "Personal Concierge"],
        photos: {
            bed: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
        }
    },
    204: {
        name: "Ambassador Suite",
        wing: "Right",
        price: 520,
        size: "140 m²",
        bed: "Super King",
        guests: "2 Guests",
        desc: "Wellness suite equipped with an in-room cedar steam sauna, private hydrotherapy tub, and tea lounge bar.",
        amenities: ["Private Sauna", "Hydro Jacuzzi", "Teak Terrace", "Herbal Tea Bar", "Massage Bed"],
        photos: {
            bed: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
        }
    },
    205: {
        name: "Presidential Penthouse",
        wing: "Right",
        price: 680,
        size: "190 m²",
        bed: "Emperor Bed",
        guests: "4 Guests",
        desc: "The apex of Aurora Grand Hotel. Top-floor penthouse featuring private elevator access, marble fireplace, and grand piano.",
        amenities: ["Private Elevator", "Marble Fireplace", "Grand Piano", "360 Skyline View", "Butler Service"],
        photos: {
            bed: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
            bath: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
            view: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
        }
    }
};

let currentWing = 'left';
let activeRoomId = 101;

function goToScene(sceneId) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sceneId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const ext = document.getElementById('screen-exterior');
        if (ext && ext.classList.contains('active')) {
            goToScene('screen-reception');
        }
    }
});

function openCorridor(wing) {
    currentWing = wing;
    const titleEl = document.getElementById('corridor-title');
    const gridEl = document.getElementById('corridor-doors-grid');

    titleEl.innerText = wing === 'left'
        ? "Left Wing — Executive & Deluxe (101–105)"
        : "Right Wing — Grand Suites & Penthouse (201–205)";
    gridEl.innerHTML = '';

    const ids = wing === 'left' ? [101, 102, 103, 104, 105] : [201, 202, 203, 204, 205];

    ids.forEach(id => {
        const room = roomData[id];
        const card = document.createElement('div');
        card.className = "door-card";
        card.onclick = () => openRoom(id);

        card.innerHTML = `
            <div class="door-top">
                <span class="door-num-badge">DOOR #${id}</span>
                <span class="status-dot"></span>
            </div>
            <div class="door-img-box">
                <img src="${room.photos.bed}" alt="${room.name}" class="door-img">
                <div class="door-tag">#${id}</div>
            </div>
            <div>
                <h4 class="door-room-name">${room.name}</h4>
                <p class="door-price">$${room.price} / night</p>
            </div>
            <span class="door-action">Open Suite &rarr;</span>
        `;
        gridEl.appendChild(card);
    });

    goToScene('screen-corridor');
}

function openRoom(id) {
    activeRoomId = id;
    const room = roomData[id];

    document.getElementById('room-wing-badge').innerText = `${room.wing} Wing · Suite #${id}`;
    document.getElementById('room-name').innerText = room.name;
    document.getElementById('room-price').innerText = `$${room.price}`;
    document.getElementById('room-desc').innerText = room.desc;

    document.getElementById('room-size').innerText = room.size;
    document.getElementById('room-bed').innerText = room.bed;
    document.getElementById('room-guests-cap').innerText = room.guests;

    document.getElementById('room-main-photo').src = room.photos.bed;
    document.getElementById('thumb-bed').src = room.photos.bed;
    document.getElementById('thumb-bath').src = room.photos.bath;
    document.getElementById('thumb-view').src = room.photos.view;

    const amenBox = document.getElementById('room-amenities');
    amenBox.innerHTML = room.amenities
        .map(a => `<span class="amenity-chip">${a}</span>`)
        .join('');

    document.getElementById('booking-success').classList.add('hidden');
    document.getElementById('book-nights').value = 1;

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('book-date').value = today;

    calculateTotal();
    goToScene('screen-room');
}

function switchPhoto(key) {
    const room = roomData[activeRoomId];
    if (room && room.photos[key]) {
        document.getElementById('room-main-photo').src = room.photos[key];
    }
}

function returnToCorridor() {
    openCorridor(currentWing);
}

function calculateTotal() {
    const room = roomData[activeRoomId];
    const nights = parseInt(document.getElementById('book-nights').value) || 1;
    const total = room.price * nights;
    document.getElementById('book-total').innerText = `$${total.toLocaleString()}`;
}

function processBooking(e) {
    e.preventDefault();
    const name = document.getElementById('book-name').value;
    const date = document.getElementById('book-date').value;
    const nights = document.getElementById('book-nights').value;
    const room = roomData[activeRoomId];
    const total = room.price * parseInt(nights);

    const ref = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    const details = `Guest: ${name} | Check-in: ${date} | Duration: ${nights} Night(s) | Total: $${total.toLocaleString()} | Ref code: ${ref}`;

    document.getElementById('booking-success-details').innerText = details;
    document.getElementById('booking-success').classList.remove('hidden');
}