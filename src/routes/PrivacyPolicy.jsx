/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import banner from '../../src/assets/privacy-policy.jpg'

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="banner-container">
                <img className="img-fluid banner-image" alt="Banner" src={banner} />
                <div className="banner-text">
                    Privacy Policy
                </div>
            </div>
            <div className='col-lg-12 container'>

                <p className='t-description'>
                    <li>  We may share your personal information with third-party service providers that help us execute our training programs, but only with your consent. These providers are bound to use your information strictly to deliver services to us and must adhere to our privacy policies. We will not sell or share your information with other parties for any other reason.</li> <br />

                    <li>This policy applies to all services provided through our website. By using our website, you agree to our Privacy Policy.</li><br />

                    <li>
                        We try to keep your personal information safe from unauthorized access or disclosure. We keep your information on secure computer systems with restricted access in monitored surroundings. We encrypt susceptible information to secure your data.
                    </li><br />

                    <li>
                        You have the option of whether or not to share your personal information with us. If you choose not to get involved, you could end up not being able to access some features, offers, and services that rely on your participation with us. If you decide to build a relationship with us, we will continue to interact with you as part of that relationship.
                    </li><br />



                </p>
            </div>
            <div className='col-lg-12 container mt-4'>

                <p className='t-description'>
                    <li> When we accumulate your personal information, we will explain why we need it and if we plan to disclose it to anybody outside the organization or those working for us. We will not share your personal information with third parties without your consent unless legally necessary.</li><br />

                    <li>  If you provide us with personal information, we will keep it accurate and allow you to update or change it. Your data will be confidential and used exclusively for research, marketing, and business analysis. We will not sell or rent your personal information. We may share your information with our business partners or franchisees with your permission. We will additionally share your information as required by law.
                    </li> <br />



                    <li>    By using our website, you agree to the terms of this Privacy Policy and the use of your personal information for the reasons specified. At the time of collection, we will tell you how your information will be used. We generally use your information to reply to inquiries, process orders, and give access to certain services. You will have the option of restricting access to your information. If you fail to respond to limit access, we assume you agree to the distribution of your information as stated.</li><br />

                    <li>  Please remember that this Privacy Policy may change at any time without prior notification. Please email us if you have any concerns regarding our Privacy Policy or how we handle your personal information.</li><br />

                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy