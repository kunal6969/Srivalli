import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Facebook', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg> },
        { name: 'Instagram', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg> },
        { name: 'Twitter', href: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.336.213-2.033.163.604 1.885 2.349 3.261 4.428 3.3-1.623 1.274-3.666 2.033-5.88 2.033-.38 0-.755-.022-1.124-.067 2.099 1.35 4.606 2.142 7.33 2.142 8.798 0 13.619-7.29 13.434-13.795.939-.679 1.75-1.523 2.398-2.486z"/></svg> },
    ];
    
    return (
        <footer className="bg-gradient-to-b from-brand-green to-brand-green/95 text-brand-beige">
            <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
                    <div className="md:col-span-1 text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <img 
                                src="/images/srivalli-logo.jpg" 
                                alt="Srivalli Logo" 
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-white/40"
                                style={{
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                                }}
                            />
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-wide text-white">Srivalli</h3>
                                <p className="text-xs sm:text-sm text-brand-gold font-semibold tracking-widest">JAIPUR</p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-brand-cream/90">Flavours of Southern India</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-white mb-4 sm:mb-5 text-base sm:text-lg">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a href="#home" className="hover:text-brand-gold transition-colors text-sm sm:text-base active:scale-95 inline-block">Home</a></li>
                            <li><a href="#menu" className="hover:text-brand-gold transition-colors text-sm sm:text-base active:scale-95 inline-block">Menu</a></li>
                            <li><a href="#about" className="hover:text-brand-gold transition-colors text-sm sm:text-base active:scale-95 inline-block">About Us</a></li>
                            <li><a href="#contact" className="hover:text-brand-gold transition-colors text-sm sm:text-base active:scale-95 inline-block">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-white mb-4 sm:mb-5 text-base sm:text-lg">Contact Us</h4>
                        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-brand-cream/90">
                            <p>D-178, Anurag Path,<br/>Malviya Nagar, Jaipur</p>
                            <p><a href="mailto:contact@srivalli.com" className="hover:text-brand-gold transition-colors">contact@srivalli.com</a></p>
                            <p><a href="tel:+919314662006" className="hover:text-brand-gold transition-colors">+91 9314662006</a></p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-white mb-4 sm:mb-5 text-base sm:text-lg">Follow Us</h4>
                        <div className="flex space-x-5 sm:space-x-6 justify-center md:justify-start">
                           {socialLinks.map(link => (
                               <a key={link.name} href={link.href} aria-label={link.name} className="text-brand-beige hover:text-brand-gold transition-all active:scale-90 duration-300 p-2 rounded-full hover:bg-white/10">
                                   {link.icon}
                               </a>
                           ))}
                        </div>
                    </div>
                </div>
                <div className="mt-10 sm:mt-12 border-t border-white/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
                    <p className="text-brand-cream/80">&copy; {new Date().getFullYear()} Srivalli Restaurant. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;