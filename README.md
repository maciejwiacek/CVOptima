# 🧠 ApplyBuddy (Working Title)

An AI-powered web assistant that helps job seekers tailor their CV and generate personalized cover letters for specific job postings.

Users upload their CV and paste a job description or URL. The app analyzes both using NLP and AI models, identifies missing keywords/skills, and provides optimization suggestions — including a tailored cover letter draft.

---

## 🚀 Live Demo

Coming soon – deployed on [Netlify / Vercel / GitHub Pages]

---

## 🎯 Features

- 📄 Upload or paste your CV
- 🔍 Paste job description or URL
- 🤖 AI-powered analysis using Hugging Face models
- ✍️ Skill gap suggestions + tailored bullet points
- 📝 Automatically generated cover letter draft
- 📋 Copy-to-clipboard & download support
- 📱 Responsive, clean UI

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS
- **AI Models:** Hugging Face Transformers (summarization, keyword extraction, etc.)
- **APIs:** Hugging Face Inference API
- **PDF Parsing:** `pdf-parse` or `pdf.js`
- **Deployment:** [Netlify / Vercel]

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/applybuddy.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📁 Project Structure
src/<br />
├── components/        # UI components<br />
├── pages/             # Main views (Home, Results, etc.)<br />
├── utils/             # Helper functions (parsing, AI calls)<br />
├── assets/            # Static assets (logo, icons)<br />
└── App.jsx

---

## 🧪 AI Model Integration (Planned)

- ✅ Job description summarization
- ✅ Keyword & skill extraction
- ✅ Resume/job alignment scoring
- ✅ Cover letter generation (prompt-based)

---

## 🧠 Future Improvements

- Allow saving and reusing CVs
- Export tailored CVs (PDF/DOCX)
- Real-time job listing integration via public APIs
- User accounts & cloud sync
- Browser extension (auto-fetch job data)

---

## 👤 Author

[Maciej Wiącek]<br />
📧 maciejwiacek4@gmail.com
