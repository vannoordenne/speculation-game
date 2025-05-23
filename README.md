# The Speculation Game - Digital Version

**Design for the future you fear.**

A digital tool for exploring the ethical implications of emerging technologies through speculative design workshops.

## Overview

The Speculation Game is an interactive card-based design exercise where participants combine emerging technologies with target groups, revenue models, problems, and purposes to create speculative systems. This digital version facilitates workshops in face-to-face, online, or hybrid environments.

## Core Features

- **Random Card Drawing**: Draw from 5 main categories with one click
- **Individual Card Mode**: Draw cards one at a time for controlled facilitation
- **Advanced Technologies**: Optional extra category for complex scenarios
- **Card Reset**: Start fresh with new combinations
- **Responsive Design**: Works across desktop, tablet, and mobile devices

## Card Categories

1. **Technology Cards** (10): Core technologies like AI, VR/AR, Wearable Devices
2. **Target Group Cards** (10): Children, Students, Employees, Elderly
3. **Revenue Model Cards** (10): Subscriptions, Data Selling, Government Funding
4. **Problem Cards** (10): Security, Health Monitoring, Education Efficiency
5. **Primary Purpose Cards** (10): Optimize, Monitor, Heal, Connect
6. **Advanced Technologies** (3): Synthetic Biology, Agentic AI, Digital Twins

## Workshop Integration

- Built-in instructions and reflection questions
- Three complete example concepts for inspiration
- Strategies for handling impossible card combinations
- Step-by-step workflow guidance

## Usage Instructions

### For Facilitators
1. Open the game in a web browser
2. Project screen for group sessions or share link for remote participation
3. Choose "Draw All Cards" for quick starts or "Draw Individual Cards" for step-by-step facilitation
4. Guide participants through the design process
5. Use built-in reflection questions for critical discussions

### For Participants
1. Draw cards using provided buttons
2. Design system combining all drawn elements
3. Create prototype (digital, paper, or conceptual)
4. Present concept to group
5. Engage in critical reflection

## Deployment

### Local Usage
Open `index.html` in any modern web browser. Works offline except for Google Fonts.

### Web Hosting
Upload all files to:
- GitHub Pages
- Netlify
- Vercel
- Your organization's web server

### Integration Options
- Embed in learning management systems
- Use with online workshop platforms
- Share via QR codes for mobile access

## File Structure

```
speculation-game/
├── index.html          # Main game interface
├── styles.css          # Visual styling
├── script.js           # Game logic and interactivity
└── README.md           # Documentation
```

## Educational Applications

### Learning Objectives
- Critical analysis of technology implications
- Ethical awareness of benefits and potential harms
- Systems thinking about technology, society, and economics
- Creative problem-solving with constraints
- Future literacy skills development

### Suitable For
- Design Education: Technology ethics, speculative design, human-centered design
- Technology Studies: Digital sociology, science and technology studies
- Business Education: Innovation ethics, technology entrepreneurship
- General Education: Digital literacy, critical thinking

## Customization

### Adding Cards
Edit the `cardData` object in `script.js`:

```javascript
technology: [
    {
        title: "Your New Technology",
        subtitle: "(Optional subtitle)",
        description: "Description of the technology",
        examples: "Examples: specific use cases"
    }
]
```

### Styling
Modify `styles.css` for branding or accessibility needs.

### Translation
All text content is in `index.html` and `script.js` for straightforward translation.

## Technical Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for local use
- Internet connection only needed for Google Fonts (optional)
- Compatible with desktop, tablet, and mobile devices

## Workshop Best Practices

### Preparation
- Test tool on presentation setup
- Prepare prototyping materials
- Review example concepts
- Set clear time limits

### Facilitation
- Provide context about speculative design
- Demonstrate card drawing process
- Encourage exploratory thinking over realistic products
- Guide reflection using provided questions
- Document participant concepts

### Follow-up
- Facilitate concept sharing between groups
- Connect to real-world technology examples
- Discuss further exploration opportunities

## License and Attribution

When using this tool in workshops or research, please provide appropriate attribution to The Speculation Game concept and mention this digital adaptation.

---

The goal is not to predict the future, but to think critically about the implications of our technological choices. 