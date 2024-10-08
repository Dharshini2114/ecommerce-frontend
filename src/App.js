import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Products from './Products'; // Your Product component for listing products
import './App.css'; // Import the CSS styles

// Google Login response handler
const responseGoogle = (response) => {
    console.log(response);
};

function App() {
    return (
        <GoogleOAuthProvider clientId="273134632769-iqhvngrofpucgsdj6mlup0com8cog849.apps.googleusercontent.com">
            <div className="App">
                {/* Header with logo, company name, and navigation */}
                <header className="App-header">
                    <img src="/images/logo.png" className="App-logo" alt="logo" />
                    <h1>Innovate Engineering Products</h1>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Sensors</li>
                            <li>Controllers</li>
                            <li>Meters</li>
                            <li>Actuators</li>
                            <li>Wires & Cables</li>
                            <li>Blogs</li>
                            <li>Testimonials</li>
                        </ul>
                    </nav>

                    {/* Video background */}
                    <div className="video-container">
                        <video autoPlay loop muted>
                            <source src="/videos/background.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </header>

                {/* Google Login */}
                <div className="google-login">
                    <GoogleLogin
                        onSuccess={responseGoogle}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>

                {/* Product listing */}
                <div className="products-container">
                    <Products />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
