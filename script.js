// Scroll to tracking
function scrollToTrack() {
    document.getElementById("track").scrollIntoView({
        behavior: "smooth"
    });
}

// Fake tracking system
function trackShipment() {
    const input = document.getElementById("trackingInput").value;
    const result = document.getElementById("result");

    if (input === "") {
        result.innerText = "Please enter a tracking ID.";
        return;
    }

    if (input === "SH123") {
        result.innerText = "📦 Your package is in Lagos - Out for delivery.";
    } else if (input === "SH456") {
        result.innerText = "🚚 Your package is in transit to Abuja.";
    } else {
        result.innerText = "❌ Tracking ID not found.";
    }
}

// Scroll animation
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
    });
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

function bookDelivery() {
    const status = document.getElementById("bookingStatus");

    status.innerText = "🔍 Finding rider...";

    setTimeout(() => {
        status.innerText = "🚚 Rider assigned! Arriving in 5 mins.";
    }, 2000);
}