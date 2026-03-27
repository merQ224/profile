import valentine from '../assets/project-gif/valentine.gif';
import aiService from '../assets/project-gif/aiService.gif';

export const projectData = [
    {
        title: "CSV Upload",
        area: "Frontend + Backend",
        description: "A full-stack project for uploading CSV files, processing them through a backend API, and storing the results in MongoDB. The frontend provides an interface for uploading files and viewing stored tables, while the backend handles file parsing, validation, and database operations.",
        language: "TypeScript, HTML, JavaScript, CSS, Angular, Ionic",
        gif: "csv-upload.gif",
        repo: "https://github.com/merQ224/csv-upload"
    },
    {
        title: "Valentine SPA",
        area: "Frontend",
        description: "A funny App to send to your valentine to ask if they will be your valentine. Deployed to production via github pages.",
        language: "React, TypeScript, JavaScript, CSS, HTML",
        gif: valentine,
        repo: "https://github.com/merQ224/app-valentine-question"

    },
    {
        title: "Summarise Service Request API",
        area: "Backend",
        description: "This is a serverless backend powered by Node.js (TypeScript) that provides text redaction and summarisation APIs. Uses Hugging Face models for summarisation and NER (Named Entity Recognition) to detect and redact sensitive information such as names, emails, phone numbers and addresses.",
        language: "TypeScript, NodeJS",
        gif: aiService,
        repo: "https://github.com/merQ224/api-summarise-service-request-v1"
    },
    {
        title: "CSV Utility",
        area: "Backend",
        description: "Utility script for comparing CSV files, identify differences, and generate cleaned or sync outputs.",
        language: "Python",
        gif: "csv-diff.gif",
        repo: "https://github.com/merQ224/utility-csv-diff"
    },
    {
        title: "Angular testing",
        area: "Frontend",
        description: "Test different designs and behaviours.",
        language: "Angular, Ionic, TypeScript, SCSS, HTML",
        gif: "test-angular.gif",
        repo: "https://github.com/merQ224/testing-angular"
    },
    {
        title: "Profile",
        area: "Frontend",
        description: "What you see now, this SPA.",
        language: "JavaScript, React, HTML, CSS",
        gif: "profile.gif",
        repo: "https://github.com/merQ224/profile"
    }
]