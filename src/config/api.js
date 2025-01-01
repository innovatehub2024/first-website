// const API_BASE_URL = process.env.NODE_ENV === 'production' 
//     ? '/api'  // Production URL
//     : 'http://localhost:8000/api';  // Development URL

// export default API_BASE_URL;
// src/config/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://your-django-backend-url/api';
export default API_BASE_URL;