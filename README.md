# The Speculation Game - Digital Version

**Design for the future you fear.**

A digital tool for exploring the ethical implications of emerging technologies through speculative design workshops.

## Overview

The Speculation Game is an interactive card-based design exercise where participants combine technologies, target groups, funding models, problems, and strategies to create speculative systems. This digital version facilitates workshops in face-to-face, online, or hybrid environments.

Based on **CORE v2.0** of the physical card deck.

## Core Features

- **Random Card Drawing**: Draw from 5 main categories with one click
- **Individual Card Mode**: Swap cards one at a time for controlled facilitation
- **Twist Cards**: Optional sixth category when a combination feels too easy
- **Card Reset**: Start fresh with new combinations
- **Responsive Design**: Works across desktop, tablet, and mobile devices

## Card Categories

1. **Technology** (10): Wearable Technology, Ambient Surveillance, Smart Devices, AI, and more
2. **Target Group** (10): Children, Students, Workers, Older Adults, Patients, Citizens
3. **Funding Model** (10): Subscription, Advertising, Licensing, Marketplace Commission, and more
4. **Problem** (10): Learning Challenges, Safety Risks, Social Isolation, Information Overload
5. **Strategy** (10): Optimize, Monitor, Support, Protect, Influence, and more
6. **Twist** (10, optional): No Opt-Out, Black Box, Scoring, Function Creep, and more

## Workshop Integration

- Built-in instructions and reflection questions
- Example concepts for inspiration
- Built-in Draw → Design → Build → Pitch → Reflect flow

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

When using this tool in workshops or research, please provide appropriate attribution to The Speculation Game concept by Tinker Ethical TechLab and mention this digital adaptation developed by Marise van Noordenne.

*This project was pair programmed with Cursor AI*

---

The goal is not to predict the future, but to think critically about the implications of our technological choices. 
