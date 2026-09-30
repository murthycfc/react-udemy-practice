
export  const data = {
    html:{
        title: 'HTML',
        description: "Standard markup language that defines the structure and content of a web page.",
        code : `<button id="myBtn">Click Me</button>`
    },
    css:{
        title: "CSS",
        description: "Design language used to format, layout, and style HTML elements.",
        code : `button {
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
}`
    },
    javascript:{
        title: "Javascript",
        description: "High-level, dynamic programming language that adds logic and interactivity.",
        code : `const btn = document.getElementById('myBtn');
btn.addEventListener('click', () => {
alert('Button clicked!');
});
`
    },
    react:{
        title: "React",
        description: "JavaScript library for building user interfaces using reusable components.",
        code :  `import React, { useState } from 'react';
export default function App() {
return (
    <button 
    style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px', padding: '10px 20px' }}
    onClick={() => alert('React Button Clicked!')}
    >
    Click Me
    </button>
);
}
`
    }
}