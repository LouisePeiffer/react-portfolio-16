import React from 'react'

export default function Footer() {
    return (
        <div className="bigDivFooter">
            <div className="footer1">
                <div>
                    <h1>Social Media</h1>
                    <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <div>
                    <h1>Contactez-moi</h1>
                    <a href=""><i class="fas fa-envelope-open-text"></i></a>
                    <a href="tel:+2222222"><i class="fas fa-phone-square-alt"></i></a>

                </div>
                <div>
                    <h1>Motivation quote</h1>
                    <p>“Yeah I’m in my bag but I’m in his too. That’s why every time you see me I got some new shoes.”</p>
                    <span>– Megan Thee Stallion, “Cash Sh*t”</span>
                </div>
            </div>
            <div className="footer2">
                <h1>Copyright Hot Girl Loulou</h1>
            </div>
        </div>
    )
}
