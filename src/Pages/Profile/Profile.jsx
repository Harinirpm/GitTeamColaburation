import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Profile Avatar" 
                        className="profile-avatar" 
                    />
                    <h2 className="profile-name">Jack Sparrow</h2>
                    <p className="profile-bio">Software Developer | Tech Enthusiast | Traveler</p>
                </div>
                <div className="profile-info">
                    <div className="info-item">
                        <span className="info-label">Location:</span>
                        <span className="info-value">Delhi,India</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">jack@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Phone:</span>
                        <span className="info-value">9876543210</span>
                    </div>
                    <button className='loginButton'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
