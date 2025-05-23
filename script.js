// Card Data
const cardData = {
    technology: [
        {
            title: "Wearable Devices",
            subtitle: "(Smartwatch, Smart Glasses)",
            description: "Devices you can wear that track information or provide notifications.",
            examples: "Examples: Fitbit for health tracking, smart glasses for navigation."
        },
        {
            title: "Ambient Surveillance",
            subtitle: "",
            description: "Monitoring or recording of people without them actively noticing.",
            examples: "Examples: Security cameras, motion detectors in public spaces."
        },
        {
            title: "Smart Home Devices",
            subtitle: "",
            description: "Connected devices that automate or control your home environment.",
            examples: "Examples: Smart speakers (like Alexa), smart thermostats."
        },
        {
            title: "Extended Reality (VR / AR)",
            subtitle: "",
            description: "Virtual Reality (VR) creates a fully immersive digital world. Augmented Reality (AR) adds digital information to the real world.",
            examples: "Examples: VR gaming, AR filters on social media."
        },
        {
            title: "Artificial Intelligence (AI)",
            subtitle: "",
            description: "Software that can learn, make decisions, or solve problems.",
            examples: "Examples: Chatbots (like ChatGPT), image recognition software."
        },
        {
            title: "Humanoid Robots",
            subtitle: "",
            description: "Robots designed to look and act like humans.",
            examples: "Examples: Sophia the Robot, customer service robots."
        },
        {
            title: "Emotion Recognition",
            subtitle: "",
            description: "Technology that can detect human emotions from facial expressions or voice.",
            examples: "Examples: Customer support systems that identify angry callers."
        },
        {
            title: "Predictive Policing",
            subtitle: "",
            description: "AI that predicts where crimes may occur based on data.",
            examples: "Example: Police departments using software to assign patrols."
        },
        {
            title: "Autonomous Drones",
            subtitle: "",
            description: "Drones that can fly and complete tasks without human control.",
            examples: "Examples: Delivery drones, surveillance drones."
        },
        {
            title: "Brain-Computer Interfaces",
            subtitle: "",
            description: "Technology that connects the human brain directly to a computer.",
            examples: "Examples: Neuralink (Elon Musk's brain chip), mind-controlled prosthetics."
        }
    ],
    target: [
        {
            title: "Children",
            description: "Young users typically under 12 years old with limited autonomy.",
            examples: "Examples: Elementary school students, kids using educational apps."
        },
        {
            title: "Students",
            description: "Learners in educational institutions from middle school to university.",
            examples: "Examples: High school students, college students, online learners."
        },
        {
            title: "Families",
            description: "Household units with multiple generations and varying tech literacy.",
            examples: "Examples: Parents with children, multi-generational households."
        },
        {
            title: "Employees",
            description: "Working professionals in various industries and organizations.",
            examples: "Examples: Office workers, remote employees, freelancers."
        },
        {
            title: "Elderly",
            description: "Older adults typically over 65 with varying comfort with technology.",
            examples: "Examples: Retirees, seniors in care facilities, aging in place."
        },
        {
            title: "City Residents",
            description: "People living in urban environments with dense populations.",
            examples: "Examples: Metropolitan dwellers, apartment residents, commuters."
        },
        {
            title: "Travelers",
            description: "People who move frequently between locations for business or leisure.",
            examples: "Examples: Business travelers, tourists, digital nomads."
        },
        {
            title: "Consumers",
            description: "General purchasers of goods and services in the marketplace.",
            examples: "Examples: Online shoppers, retail customers, service users."
        },
        {
            title: "Healthcare Providers",
            description: "Medical professionals and institutions delivering health services.",
            examples: "Examples: Doctors, nurses, hospitals, clinics."
        },
        {
            title: "Online Users",
            description: "People who primarily interact through digital platforms and services.",
            examples: "Examples: Social media users, gaming communities, remote workers."
        }
    ],
    revenue: [
        {
            title: "Selling Personal Data",
            description: "Collecting and selling user data to third parties.",
            examples: "Example: Social media apps, free online tools."
        },
        {
            title: "Subscriptions",
            description: "Regular payments for continued access to a service.",
            examples: "Example: Netflix, Spotify."
        },
        {
            title: "Advertising",
            description: "Generating income by showing ads to users.",
            examples: "Example: Free mobile games, social media platforms."
        },
        {
            title: "Pay-Per-Use",
            description: "Users pay each time they use the service.",
            examples: "Example: Ride-sharing apps, cloud storage."
        },
        {
            title: "Freemium Model",
            description: "Basic access is free, but advanced features require payment.",
            examples: "Example: Spotify, premium mobile apps."
        },
        {
            title: "Government Funding",
            description: "Receiving financial support from public institutions.",
            examples: "Example: Public health tracking systems, educational platforms."
        },
        {
            title: "Microtransactions",
            description: "Small in-app purchases for extra features or benefits.",
            examples: "Example: Mobile games, avatar upgrades."
        },
        {
            title: "One-Time Purchase",
            description: "Users pay a single fee to access the product.",
            examples: "Example: Software licences, digital art."
        },
        {
            title: "Crowdsourcing Data",
            description: "Users provide data which the company uses or sells.",
            examples: "Example: Traffic apps like Waze, user feedback platforms."
        },
        {
            title: "Marketplace Commissions",
            description: "The platform takes a percentage of each transaction made between buyers and sellers using the platform.",
            examples: "Example: Etsy charges a commission on every sale made by sellers using its marketplace."
        }
    ],
    problem: [
        {
            title: "Security and Safety",
            description: "Keeping people safe from harm or crime.",
            examples: "Example: Home security systems, emergency response apps."
        },
        {
            title: "Health Monitoring",
            description: "Tracking physical or mental health conditions.",
            examples: "Example: Fitness trackers, mental health apps."
        },
        {
            title: "Education Efficiency",
            description: "Making learning faster, cheaper, or more personalized.",
            examples: "Example: Adaptive learning apps, digital classrooms."
        },
        {
            title: "Workplace Productivity",
            description: "Helping employees work faster or more effectively.",
            examples: "Example: Time-tracking software, task automation tools."
        },
        {
            title: "Social Connection",
            description: "Helping people stay in touch with others.",
            examples: "Example: Social media apps, video calling platforms."
        },
        {
            title: "Control Over Public Spaces",
            description: "Managing access and behavior in public areas.",
            examples: "Example: Smart parks, automated gates."
        },
        {
            title: "Automated Justice",
            description: "Enforcing rules and laws using technology.",
            examples: "Example: AI-powered surveillance that identifies violations."
        },
        {
            title: "Mental Health and Well-being",
            description: "Helping people manage stress, anxiety, or mood.",
            examples: "Example: Meditation apps, AI-powered therapy."
        },
        {
            title: "Fraud Detection",
            description: "Identifying and preventing fraudulent activities.",
            examples: "Example: Banking apps, e-commerce security."
        },
        {
            title: "Personalization",
            description: "Tailoring content, services, or experiences to individual users.",
            examples: "Example: Recommendation engines, custom learning paths."
        }
    ],
    purpose: [
        { title: "Optimize", description: "Make a process faster, better, or cheaper." },
        { title: "Entertain", description: "Provide fun, excitement, or amusement." },
        { title: "Monitor", description: "Watch or track people, environments, or data." },
        { title: "Heal", description: "Improve health, reduce pain, or cure illness." },
        { title: "Connect", description: "Bring people together, enable communication." },
        { title: "Educate", description: "Teach or provide information." },
        { title: "Protect", description: "Keep users safe from harm." },
        { title: "Analyze", description: "Understand or interpret data." },
        { title: "Automate", description: "Perform tasks without human input." },
        { title: "Inspire", description: "Encourage creativity or new ideas." }
    ],
    advanced: [
        {
            title: "Synthetic Biology",
            description: "Engineering of living organisms for specific purposes.",
            examples: "Examples: Genetically modified crops, lab-grown meat."
        },
        {
            title: "Agentic AI",
            subtitle: "(AI with autonomous decision-making)",
            description: "AI that can make its own decisions without human input.",
            examples: "Examples: Self-driving cars, autonomous trading algorithms."
        },
        {
            title: "Digital Twins",
            description: "Digital replicas of real-world objects or systems.",
            examples: "Examples: A digital version of a factory, a simulated city."
        }
    ]
};

// Game State
let drawnCards = {
    technology: null,
    target: null,
    revenue: null,
    problem: null,
    purpose: null
};

let individualMode = false;
let advancedTechMode = false;
let currentStep = 1;
let conceptText = '';

// DOM Elements
const drawAllBtn = document.getElementById('drawAllCards');
const resetBtn = document.getElementById('resetCards');
const drawIndividualBtn = document.getElementById('drawIndividual');
const toggleAdvancedInput = document.getElementById('toggleAdvanced');
const cardsContainer = document.getElementById('cardsContainer');
const technologyHeader = document.getElementById('technologyHeader');
const conceptTextArea = document.getElementById('conceptText');

// Step Navigation Elements
const nextToStep2Btn = document.getElementById('nextToStep2');
const backToStep1Btn = document.getElementById('backToStep1');
const nextToStep3Btn = document.getElementById('nextToStep3');
const backToStep2Btn = document.getElementById('backToStep2');
const nextToStep4Btn = document.getElementById('nextToStep4');
const backToStep3Btn = document.getElementById('backToStep3');
const nextToStep5Btn = document.getElementById('nextToStep5');
const backToStep4Btn = document.getElementById('backToStep4');
const startOverBtn = document.getElementById('startOver');

// Event Listeners
drawAllBtn.addEventListener('click', drawAllCards);
resetBtn.addEventListener('click', resetCards);
drawIndividualBtn.addEventListener('click', toggleIndividualMode);
toggleAdvancedInput.addEventListener('change', toggleAdvancedTech);

// Step Navigation Event Listeners
nextToStep2Btn.addEventListener('click', () => goToStep(2));
backToStep1Btn.addEventListener('click', () => goToStep(1));
nextToStep3Btn.addEventListener('click', () => goToStep(3));
backToStep2Btn.addEventListener('click', () => goToStep(2));
nextToStep4Btn.addEventListener('click', () => goToStep(4));
backToStep3Btn.addEventListener('click', () => goToStep(3));
nextToStep5Btn.addEventListener('click', () => goToStep(5));
backToStep4Btn.addEventListener('click', () => goToStep(4));
startOverBtn.addEventListener('click', startNewGame);

// Concept text event listener
conceptTextArea.addEventListener('input', (e) => {
    conceptText = e.target.value;
    // Update the concept summary if we're currently in step 2
    if (currentStep === 2) {
        updateConceptSummaries(2);
    }
});

// Add click listeners to card slots for individual mode
document.querySelectorAll('.card-slot').forEach(slot => {
    slot.addEventListener('click', (e) => {
        if (individualMode) {
            const category = slot.getAttribute('data-category');
            if (category) {
                drawSingleCard(category);
            }
        }
    });
});

// Helper Functions
function getRandomCard(category) {
    // Use advanced technology cards if in advanced mode and category is technology
    if (category === 'technology' && advancedTechMode) {
        const cards = cardData.advanced;
        return cards[Math.floor(Math.random() * cards.length)];
    }
    
    const cards = cardData[category];
    return cards[Math.floor(Math.random() * cards.length)];
}

function renderCard(category, card) {
    const cardElement = document.getElementById(`${category}Card`);
    const slot = document.querySelector(`[data-category="${category}"]`);
    
    if (!cardElement) return;
    
    // Update content first
    let html = `<div class="card-title">${card.title}`;
    if (card.subtitle) {
        html += ` <span style="font-weight: normal; color: #666;">${card.subtitle}</span>`;
    }
    html += `</div>`;
    
    if (card.description) {
        html += `<div class="card-description">${card.description}</div>`;
    }
    
    if (card.examples) {
        html += `<div class="card-examples">${card.examples}</div>`;
    }
    
    cardElement.innerHTML = html;
    
    // Trigger the flip animation by adding filled class
    slot.classList.add('filled');
    
    // Check if we can proceed to next step
    checkCanProceed();
}

function drawSingleCard(category) {
    // In individual mode, allow redrawing. In normal mode, prevent redrawing
    if (drawnCards[category] && !individualMode) return; 
    
    const card = getRandomCard(category);
    drawnCards[category] = card;
    renderCard(category, card);
}

function drawAllCards() {
    const categories = ['technology', 'target', 'revenue', 'problem', 'purpose'];
    
    categories.forEach((category, index) => {
        setTimeout(() => {
            if (!drawnCards[category]) {
                drawSingleCard(category);
            }
        }, index * 200); // Stagger the animations
    });
    
    // Update UI
    if (individualMode) {
        toggleIndividualMode();
    }
}

function resetCards() {
    // Reset game state
    drawnCards = {
        technology: null,
        target: null,
        revenue: null,
        problem: null,
        purpose: null
    };
    
    // Reset UI
    document.querySelectorAll('.card-content').forEach(content => {
        const category = content.id.replace('Card', '');
        
        content.innerHTML = `<div class="draw-prompt">Click "Draw Cards" or "Swap Card" to reveal a ${category.charAt(0).toUpperCase() + category.slice(1)} card</div>`;
    });
    
    document.querySelectorAll('.card-slot').forEach(slot => {
        slot.classList.remove('filled');
    });
    
    // Reset individual mode
    if (individualMode) {
        toggleIndividualMode();
    }
    
    // Check if we can proceed (should disable next button)
    checkCanProceed();
}

function toggleAdvancedTech() {
    // Read state from checkbox
    advancedTechMode = toggleAdvancedInput.checked;
    
    // Get the technology header container
    const technologyHeaderContainer = technologyHeader.parentElement;
    
    // Update header text and styling
    if (advancedTechMode) {
        technologyHeader.textContent = 'Advanced Technology';
        technologyHeaderContainer.classList.add('advanced-tech');
    } else {
        technologyHeader.textContent = 'Technology';
        technologyHeaderContainer.classList.remove('advanced-tech');
    }
    
    // Clear the technology card if one is drawn, so user can draw from new deck
    if (drawnCards.technology) {
        drawnCards.technology = null;
        const technologyCard = document.getElementById('technologyCard');
        const technologySlot = document.querySelector('[data-category="technology"]');
        
        technologyCard.innerHTML = `<div class="draw-prompt">Click "Draw Cards" or "Swap Card" to reveal a ${advancedTechMode ? 'Advanced Technology' : 'Technology'} card</div>`;
        technologySlot.classList.remove('filled');
    }
}

function toggleIndividualMode() {
    individualMode = !individualMode;
    
    if (individualMode) {
        cardsContainer.classList.add('individual-mode');
        drawIndividualBtn.textContent = 'Exit Swap';
        drawIndividualBtn.title = 'Exit Individual Mode - Return to normal drawing mode';
        drawAllBtn.disabled = true;
        drawAllBtn.style.opacity = '0.5';
        
        // Add instruction
        if (!document.querySelector('.individual-instruction')) {
            const instruction = document.createElement('div');
            instruction.className = 'individual-instruction';
            instruction.style.cssText = `
                background: #222222;
                padding: 15px;
                margin-bottom: 20px;
                border: 1px solid #ffffff;
                border-left: 3px solid #ffffff;
                color: #ffffff;
                font-weight: normal;
                text-align: center;
                font-family: 'Share Tech Mono', 'Courier New', monospace;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 0.8rem;
            `;
            instruction.textContent = 'Swap Mode: Click any card to draw/redraw';
            cardsContainer.parentNode.insertBefore(instruction, cardsContainer);
        }
    } else {
        cardsContainer.classList.remove('individual-mode');
        drawIndividualBtn.textContent = 'Swap Card';
        drawIndividualBtn.title = 'Swap individual cards - Click on each card category below to draw one at a time';
        drawAllBtn.disabled = false;
        drawAllBtn.style.opacity = '1';
        
        // Remove instruction
        const instruction = document.querySelector('.individual-instruction');
        if (instruction) {
            instruction.remove();
        }
    }
}

// Step Progression Functions
function goToStep(step) {
    // Hide current step
    document.querySelector('.step-content.active').classList.remove('active');
    
    // Show target step
    document.getElementById(`step${step}`).classList.add('active');
    
    // Update step indicators
    updateStepIndicators(step);
    
    // Update current step
    currentStep = step;
    
    // Update displays based on step
    if (step >= 2) {
        updateConceptSummaries(step);
        // Load existing concept text if returning to step 2
        if (step === 2 && conceptTextArea && conceptText) {
            conceptTextArea.value = conceptText;
        }
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicators(activeStep) {
    const indicators = document.querySelectorAll('.step-indicator');
    
    indicators.forEach((indicator, index) => {
        const stepNumber = index + 1;
        
        indicator.classList.remove('active', 'completed');
        
        if (stepNumber === activeStep) {
            indicator.classList.add('active');
        } else if (stepNumber < activeStep) {
            indicator.classList.add('completed');
        }
    });
}

function updateCardSummaries(step) {
    const summaryContainer = document.getElementById(`drawnCardsSummary${step === 2 ? '' : step}`);
    if (!summaryContainer) return;
    
    let html = '';
    const categories = ['technology', 'target', 'revenue', 'problem', 'purpose'];
    
    categories.forEach(category => {
        const card = drawnCards[category];
        if (card) {
            html += `
                <div class="summary-card">
                    <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                    <div class="card-title">${card.title}</div>
                    <div class="card-description">${card.description}</div>
                </div>
            `;
        }
    });
    
    summaryContainer.innerHTML = html;
}

function updateConceptSummaries(step) {
    const summaryContainer = document.getElementById(`conceptSummary${step}`);
    if (!summaryContainer) return;
    
    // Build topics line
    let topicsHtml = '';
    const categories = ['technology', 'target', 'revenue', 'problem', 'purpose'];
    const topicLabels = {
        technology: 'Technology',
        target: 'Target Group', 
        revenue: 'Revenue Model',
        problem: 'Problem',
        purpose: 'Purpose'
    };
    
    categories.forEach(category => {
        const card = drawnCards[category];
        if (card) {
            topicsHtml += `<span class="topic-tag">${topicLabels[category]}: ${card.title}</span>`;
        }
    });
    
    // Build concept display - different messages for different steps
    let conceptDisplayText;
    if (step === 2) {
        conceptDisplayText = conceptText || 'Use the design elements above to create your speculative system. Describe your concept in the text area below.';
    } else {
        conceptDisplayText = conceptText || 'No concept description provided yet. Go back to Step 2 to add your concept description.';
    }
    
    summaryContainer.innerHTML = `
        <div class="concept-topics">
            <h4>Your Design Elements:</h4>
            <div class="topics-line">
                ${topicsHtml}
            </div>
        </div>
        <div class="concept-description">
            <h4>Your Concept:</h4>
            <div class="concept-text">${conceptDisplayText}</div>
        </div>
    `;
}

function checkCanProceed() {
    const hasCards = Object.values(drawnCards).some(card => card !== null);
    nextToStep2Btn.disabled = !hasCards;
    
    if (hasCards) {
        nextToStep2Btn.title = "Continue to design phase";
    } else {
        nextToStep2Btn.title = "Draw at least one card to continue";
    }
}

function startNewGame() {
    // Reset all game state
    resetCards();
    
    // Reset concept text
    conceptText = '';
    if (conceptTextArea) {
        conceptTextArea.value = '';
    }
    
    // Go back to step 1
    goToStep(1);
    
    // Reset advanced mode if active
    if (advancedTechMode) {
        toggleAdvancedInput.checked = false;
        toggleAdvancedTech();
    }
    
    // Reset individual mode if active
    if (individualMode) {
        toggleIndividualMode();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Speculation Game loaded successfully!');
    
    // Add some visual feedback for loaded state
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});