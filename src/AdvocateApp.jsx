import React, { useState, useEffect } from 'react';
import {
  Scale,
  ShieldCheck,
  FileText,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  Check,
  ChevronRight,
  BookOpen,
  Gavel,
  Briefcase,
  Globe,
  X,
  Award,
  Image as ImageIcon,
  Newspaper
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Asset Imports - Case Sensitive Verified
import officeImg from './assets/advocate/office.jpg';
import airportImg from './assets/advocate/airport.jpg';
import drivingImg from './assets/advocate/driving.jpg';
import teamImg from './assets/advocate/team.jpg';
import courtImg from './assets/advocate/court.jpg';
import indiaMapSvg from './assets/india-map.svg';

/**
 * SANJAY KUMAR OJHA - ELITE ADVOCATE PORTFOLIO
 * High-Fidelity Refactor (Anti-Gravity Version)
 */

export default function AdvocateApp() {
  const [showBCIGate, setShowBCIGate] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    matterType: 'Criminal',
    preferredContact: 'Call',
    briefMatter: ''
  });

  const PRIMARY_PHONE = "+91 93048 22844";
  const WHATSAPP_LINK = "https://wa.me/919304822844";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    const contactMethod = formData.preferredContact === 'WhatsApp' ? 'WhatsApp' : 'Phone Call';
    const message = `Hello Adv. Sanjay Kumar Ojha, I am seeking legal assistance for a ${formData.matterType} matter. Name: ${formData.name}. Preferred contact: ${contactMethod}. Details: ${formData.briefMatter}`;
    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (showBCIGate) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F2F2F]/90 backdrop-blur-md px-4 font-sans text-[#0F2F2F]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#F8F7F4] p-8 md:p-12 rounded-2xl max-w-xl w-full border border-[#B89648]/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex justify-center mb-6 text-[#B89648]">
            <div className="bg-[#0F2F2F] p-4 rounded-full border border-[#B89648]/30">
              <Scale size={40} />
            </div>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center tracking-tight">
            Compliance & Disclaimer
          </h2>
          <div className="space-y-4 text-sm leading-relaxed mb-8 text-justify border-y border-gray-200 py-6">
            <p>As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted to solicit work or advertise in any manner.</p>
            <p>By clicking <strong>"I Understand & Enter"</strong>, the user acknowledges that:</p>
            <ul className="list-disc pl-5 space-y-2 italic text-gray-600">
              <li>The content provided is solely for informational purposes and not for solicitation.</li>
              <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
              <li>The user wishes to gain more information about Sanjay Kumar Ojha for their own information and use.</li>
            </ul>
          </div>
          <button 
            onClick={() => setShowBCIGate(false)}
            className="w-full bg-[#0F2F2F] text-[#F8F7F4] py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[#B89648] hover:text-[#0F2F2F] transition-all duration-300 shadow-lg active:scale-95"
          >
            I Understand & Enter
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0F2F2F] font-sans selection:bg-[#B89648] selection:text-[#0F2F2F]">
      
      {/* 🔷 SECTION 1: STICKY HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ isScrolled
        ? 'bg-[#0F2F2F]/95 backdrop-blur-lg border-b border-[#B89648]/20 py-3 shadow-xl' : 'bg-transparent py-6' }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className={`font-serif text-xl md:text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-[#F8F7F4]' : 'text-[#0F2F2F]' }`}>
              SANJAY KUMAR <span className="text-[#B89648]">OJHA</span>
            </h1>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-[#B89648]' : 'text-gray-500' }`}>
              Advocate | Pan-India Practice
            </span>
          </div>

          <nav className={`hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-widest items-center ${isScrolled ? 'text-[#F8F7F4]' : 'text-[#0F2F2F]' }`}>
            <a href="#experience" className="hover:text-[#B89648] transition-colors">Experience</a>
            <a href="#practice" className="hover:text-[#B89648] transition-colors">Expertise</a>
            <a href="#gallery" className="hover:text-[#B89648] transition-colors">Gallery</a>
            <a href="#blog" className="hover:text-[#B89648] transition-colors">Insights</a>
            <a href="#jurisdictions" className="hover:text-[#B89648] transition-colors">Jurisdictions</a>
            <a href="#contact" className={`px-5 py-2 rounded-full border transition-all ${ isScrolled
              ? 'bg-[#B89648] text-[#0F2F2F] border-transparent'
              : 'border-[#0F2F2F] hover:bg-[#0F2F2F] hover:text-white' }`}>
              Contact
            </a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-white' : 'bg-[#0F2F2F]' }`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-white' : 'bg-[#0F2F2F]' }`}></div>
            <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-white' : 'bg-[#0F2F2F]' }`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-[#0F2F2F] flex flex-col items-center justify-center text-white p-10 lg:hidden"
          >
            <button className="absolute top-8 right-8 text-[#B89648]" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="space-y-8 text-center text-2xl font-serif">
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block">Experience</a>
              <a href="#practice" onClick={() => setIsMenuOpen(false)} className="block">Expertise</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block">Gallery</a>
              <a href="#blog" onClick={() => setIsMenuOpen(false)} className="block">Insights</a>
              <a href="#jurisdictions" onClick={() => setIsMenuOpen(false)} className="block">Jurisdictions</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔷 SECTION 2: HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0F2F2F] -z-10 hidden md:block skew-x-[-12deg] translate-x-12"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#B89648]/30 text-[#B89648] text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
              Pan-India Legal Support
            </span>
            <h2 className="font-serif text-4xl md:text-7xl text-[#0F2F2F] leading-[1.1] mb-8">
              Strategic Advocacy Across <span className="text-[#B89648] underline decoration-1 underline-offset-8">Indian Jurisdictions</span>.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light text-[#0F2F2F]/80">
              High-stakes representation in Criminal, Civil, and Constitutional matters. We provide clarity when legal complexity reaches its peak.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact"
                className="group flex items-center justify-center gap-3 bg-[#0F2F2F] text-[#F8F7F4] px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#B89648] hover:text-[#0F2F2F] shadow-xl hover:-translate-y-1">
                Request a Callback
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#25D366] hover:text-white">
                <MessageCircle size={18} /> WhatsApp Direct
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="h-[1px] w-12 bg-[#B89648]"></div>
              <p className="text-sm italic font-serif text-gray-500">
                "Justice is not a destination, but a standard we uphold daily."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-2 relative"
          >
            <div className="aspect-[3/4] rounded-2xl bg-[#0F2F2F] border border-[#B89648]/20 overflow-hidden shadow-2xl relative group">
              <img src={officeImg}
                alt="Advocate Sanjay Kumar Ojha"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2F] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-serif text-xl">Sanjay Kumar Ojha</p>
                <p className="text-[#B89648] text-xs uppercase font-bold tracking-widest">Advocate, High Court</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#B89648] -z-10 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#B89648] -z-10 rounded-bl-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* 🔷 SECTION 3: TRUST STRIP (EXPERIENCE) */}
      <section id="experience" className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-[#0F2F2F]">
          {[
            { icon: <Scale size={24} />, label: "25+ Years", sub: "Legal Excellence" },
            { icon: <Globe size={24} />, label: "Pan-India", sub: "Practice Footprint" },
            { icon: <ShieldCheck size={24} />, label: "Confidential", sub: "Absolute Privilege" },
            { icon: <FileText size={24} />, label: "1,200+ Cases", sub: "Success Track Record" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="p-3 bg-[#0F2F2F]/5 rounded-xl text-[#B89648]">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 SECTION 4: PRACTICE AREAS */}
      <section id="practice" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[#B89648] font-bold text-[10px] tracking-[0.3em] uppercase block mb-2">Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl">Legal Specializations</h2>
          </div>
          <p className="text-gray-500 text-sm md:max-w-xs mt-6 md:mt-0 leading-relaxed italic">
            "We handle complexity with surgical precision across every bench in India."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Gavel size={32} />, title: "Bail & Criminal Defense", desc: "Specialized in pre-arrest strategy and securing Anticipatory Bail in high-stakes criminal litigation." },
            { icon: <Scale size={32} />, title: "Constitutional Writs", desc: "Expertise in Article 226 and 32 petitions targeting arbitrary state actions and fundamental right violations." },
            { icon: <Briefcase size={32} />, title: "Civil & Commercial", desc: "Aggressive litigation for high-value property partitions and complex contractual breaches." },
            { icon: <BookOpen size={32} />, title: "Service Matters", desc: "Representing government employees before CAT and High Courts regarding promotion and disciplinary actions." },
            { icon: <FileText size={32} />, title: "Matrimonial Law", desc: "Privacy-first approach to contested divorces, custody, and high-net-worth maintenance claims." },
            { icon: <ShieldCheck size={32} />, title: "Legal Audit & Risk", desc: "Preventive advisory on statutory compliance and risk mapping for corporate entities." },
          ].map((area, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }} 
              viewport={{ once: true }}
              className="group p-10 bg-white border border-gray-100 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,47,47,0.05)] hover:border-[#B89648]/30 flex flex-col items-start hover:-translate-y-2"
            >
              <div className="text-[#B89648] mb-6 group-hover:scale-110 transition-transform">{area.icon}</div>
              <h3 className="font-serif text-xl mb-4">{area.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{area.desc}</p>
              <a href="#contact" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F2F2F] group-hover:text-[#B89648] transition-colors">
                Initiate Strategy
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔷 SECTION 5: GALLERY - OPTIMIZED FRAMES */}
      <section id="gallery" className="py-24 bg-[#0F2F2F]/5 border-y border-[#B89648]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-[#0F2F2F] rounded-2xl text-[#B89648] mb-4">
              <ImageIcon size={24} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0F2F2F]">Professional Presence</h2>
            <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold mt-4">In the Chambers & At the Bench</p>
          </div>

          <div className="grid md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
            <div className="md:col-span-8 relative overflow-hidden rounded-3xl group aspect-video md:aspect-auto">
              <img src={courtImg} alt="High Court" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F2F] to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-2xl">At the High Court of Gujarat</p>
                <p className="text-[#B89648] text-xs uppercase font-bold tracking-widest">Advocacy in Action</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-4">
              <div className="relative overflow-hidden rounded-3xl group aspect-square md:aspect-auto">
                <img src={teamImg} alt="With Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#0F2F2F]/20"></div>
              </div>
              <div className="relative overflow-hidden rounded-3xl group aspect-square md:aspect-auto">
                <img src={airportImg} alt="Pan India Travel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#0F2F2F]/20"></div>
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden rounded-3xl group aspect-square md:aspect-auto">
               <img src={drivingImg} alt="On the Move" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-8 relative overflow-hidden rounded-3xl group aspect-video md:aspect-auto">
               <img src={officeImg} alt="In the Chambers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 6: JURISDICTIONS - INTERACTIVE MAP */}
      <section id="jurisdictions" className="bg-[#0F2F2F] py-24 text-[#F8F7F4] relative overflow-hidden">
        <JurisdictionMap />
      </section>

      {/* 🔷 SECTION 7: STRATEGIC BLOG (INSIGHTS) */}
      <section id="blog" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-3 text-[#B89648] mb-4">
                <Newspaper size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Thought Leadership</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">Strategic Insights</h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F2F2F] hover:text-[#B89648] transition-colors border-b border-[#0F2F2F]/20 pb-1">
              Read All Articles <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                date: "May 2026", 
                title: "The Criticality of Anticipatory Bail in Modern Litigation", 
                category: "Criminal Law",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                date: "April 2026", 
                title: "Article 226 vs Article 32: Choosing Your Constitutional Shield", 
                category: "Constitutional",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                date: "March 2026", 
                title: "Service Law: Protecting Civil Servant Rights Against Departmental Bias", 
                category: "Service Matters",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600" 
              },
            ].map((post, i) => (
              <motion.article 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black text-[#0F2F2F] uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{post.date}</span>
                <h3 className="font-serif text-xl mt-3 mb-4 group-hover:text-[#B89648] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  Procedural nuances that determine the outcome of high-stakes legal battles in India's highest courts...
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 8: CONTACT */}
      <section id="contact" className="py-24 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 text-[#0F2F2F]">
          <div className="bg-[#0F2F2F] rounded-[2rem] overflow-hidden shadow-2xl grid md:grid-cols-2">
            <div className="p-12 md:p-20 text-[#F8F7F4]">
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Secure Your Legal Strategy.</h2>
              <p className="text-gray-400 mb-12 max-w-sm leading-relaxed">
                Connect directly for a high-priority legal consultation. Every case is personally reviewed by Adv. Sanjay Kumar Ojha.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-[#B89648]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Line</p>
                    <p className="text-lg font-bold">{PRIMARY_PHONE}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#B89648]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Principal Chambers</p>
                    <p className="text-sm font-medium leading-relaxed opacity-80 text-[#F8F7F4]">
                      Boring Canal Road, Patna, Bihar<br />
                      Supreme Court Chambers, New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F7F4] p-12 md:p-20 border-l border-[#B89648]/10">
              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input type="text" name="name" onChange={handleInputChange} required
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#B89648] transition-all"
                      placeholder="e.g. Rahul Sharma" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Phone</label>
                    <input type="tel" name="phone" onChange={handleInputChange} required
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#B89648] transition-all"
                      placeholder="+91" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Matter Type</label>
                    <select name="matterType" onChange={handleInputChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#B89648] transition-all appearance-none">
                      <option>Criminal</option>
                      <option>Civil</option>
                      <option>Constitutional</option>
                      <option>Property</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">Preferred Mode of Contact</label>
                  <div className="flex gap-6 mt-2">
                    <label className="inline-flex items-center gap-2 text-sm cursor-pointer group">
                      <input type="radio" name="preferredContact" value="Call" checked={formData.preferredContact==='Call' } onChange={handleInputChange}
                        className="accent-[#B89648] w-4 h-4" />
                      <span className="group-hover:text-[#B89648] transition-colors">Phone Call</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm cursor-pointer group">
                      <input type="radio" name="preferredContact" value="WhatsApp" checked={formData.preferredContact==='WhatsApp' } onChange={handleInputChange}
                        className="accent-[#B89648] w-4 h-4" />
                      <span className="group-hover:text-[#B89648] transition-colors">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <textarea rows="4" name="briefMatter" onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#B89648] transition-all"
                  placeholder="Describe your legal situation briefly..."></textarea>
                <div className="text-[10px] text-gray-600 leading-relaxed italic">
                  * Note: By submitting this form, you acknowledge that no attorney-client relationship is formed until a formal vakalatnama is signed.
                </div>
                <button type="submit"
                  className="w-full bg-[#0F2F2F] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-[#25D366] transition-all shadow-xl active:scale-95">
                  Secure Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 FOOTER */}
      <footer className="bg-[#F8F7F4] py-12 border-t border-gray-200 pb-24 md:pb-12 text-[#0F2F2F]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-serif text-lg tracking-wider">
              SANJAY KUMAR <span className="text-[#B89648]">OJHA</span>
            </h2>
            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">© 2026 Advocate Sanjay Ojha. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-[#B89648]">Privacy Policy</a>
            <a href="#" className="hover:text-[#B89648]">Disclaimer</a>
          </div>
        </div>
      </footer>

      {/* 🔷 MOBILE STICKY CONTACT BAR - Z-INDEX FIX */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] flex border-t border-[#B89648]/20 h-16 shadow-[0_-10px_25px_rgba(0,0,0,0.1)]">
        <a href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`}
          className="flex-1 bg-[#0F2F2F] text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[10px] border-r border-white/10">
          <Phone size={16} /> Call
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-[10px]">
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

/**
 * Interactive India Map Component - PRECISION COORDINATES
 */
function JurisdictionMap() {
  const [selected, setSelected] = useState(null);

  const courts = [
    { id: 'delhi', name: 'Supreme Court & High Court', city: 'New Delhi', top: '25%', left: '45%', detail: 'Handling high-stakes Constitutional challenges and Article 32/136 petitions before the Apex Court.' },
    { id: 'patna', name: 'Patna High Court', city: 'Bihar', top: '35%', left: '65%', detail: 'Principal practice location. Specialized in Criminal Writs, Bail strategy, and Service Law disputes.' },
    { id: 'ranchi', name: 'Jharkhand High Court', city: 'Ranchi', top: '45%', left: '68%', detail: 'Extensive experience in Mining law matters and Civil Appellate jurisdiction within Jharkhand.' },
    { id: 'mumbai', name: 'Bombay High Court', city: 'Maharashtra', top: '65%', left: '28%', detail: 'Strategic representation for Corporate clients and Admiralty matters in the financial capital.' },
    { id: 'gujarat', name: 'Gujarat High Court', city: 'Ahmedabad', top: '55%', left: '18%', detail: 'Representing clients in complex Civil and Criminal Appellate matters before the Gujarat bench.' },
  ];

  return (
    <>
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10 text-[#F8F7F4]">
        <div>
          <span className="text-[#B89648] font-bold text-[10px] tracking-[0.3em] uppercase block mb-4">Pan-India Presence</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Strategic Representation Across Every Major Bench.</h2>
          
          <div className="space-y-4">
            {courts.map((court) => (
              <motion.button
                key={court.id}
                onClick={() => setSelected(court)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all text-left ${
                  selected?.id === court.id ? 'bg-[#B89648] border-[#B89648] text-[#0F2F2F]' : 'bg-white/5 border-white/10 text-white hover:border-[#B89648]/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${selected?.id === court.id ? 'bg-[#0F2F2F]' : 'bg-[#B89648]'}`}></div>
                  <div>
                    <p className="font-bold text-sm tracking-wide">{court.name}</p>
                    <p className="text-[10px] uppercase opacity-60 tracking-widest">{court.city}</p>
                  </div>
                </div>
                <ChevronRight size={16} className={selected?.id === court.id ? 'rotate-90' : ''} />
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 p-8 bg-[#F8F7F4] rounded-2xl border-l-4 border-[#B89648] shadow-2xl relative text-[#0F2F2F]"
              >
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-gray-400 hover:text-[#0F2F2F]">
                  <X size={16} />
                </button>
                <p className="font-serif text-xl mb-4 italic">"Strategic Insights"</p>
                <p className="text-gray-600 text-sm leading-relaxed">{selected.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex justify-center">
          <div className="aspect-[4/5] w-full max-lg bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 p-8 relative overflow-hidden flex items-center justify-center">
            {/* OFFICIAL INDIA MAP SVG OVERLAY */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={indiaMapSvg} alt="India Map" className="w-full h-full object-contain opacity-40 brightness-0 invert" />
              
              {/* INTERACTIVE HOTSPOTS */}
              {courts.map(court => (
                <motion.div 
                  key={court.id}
                  className="absolute cursor-pointer group"
                  style={{ top: court.top, left: court.left }}
                  onClick={() => setSelected(court)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${selected?.id === court.id ? 'bg-[#F8F7F4]' : 'bg-[#B89648]'} shadow-[0_0_15px_rgba(184,150,72,0.5)] z-10`} />
                    <div className="absolute w-8 h-8 bg-[#B89648]/20 rounded-full animate-ping" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0F2F2F] text-[#B89648] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded whitespace-nowrap border border-[#B89648]/30">
                      {court.city}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-12 right-12 bg-[#B89648] text-[#0F2F2F] px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl"
            >
              Active Jurisdiction Monitoring
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
