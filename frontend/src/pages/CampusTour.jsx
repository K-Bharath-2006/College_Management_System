import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wifi, BookOpen, FlaskConical, Users, Monitor, Eye, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

// Animated Counter Hook
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const tourSpots = [
  {
    id: 1, title: 'Main Academic Block',
    desc: 'A 7-storey state-of-the-art academic block housing 120+ classrooms, faculty cabins, and administration offices built with modern eco-friendly architecture.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900&auto=format&fit=crop',
    tag: 'Academic',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 2, title: 'Innovation & Research Center',
    desc: 'A dedicated 30,000 sq.ft. innovation hub featuring incubation cells, prototype workshops, 3D printing labs, and co-working spaces for student entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?q=80&w=900&auto=format&fit=crop',
    tag: 'Research',
    color: 'from-violet-600 to-purple-700'
  },
  {
    id: 3, title: 'Central Library',
    desc: 'Over 1,00,000 books, 5,000 research journals, and 24×7 digital access through DELNET and IEEE Xplore, with 500+ quiet reading seats across 3 floors.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=900&auto=format&fit=crop',
    tag: 'Library',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 4, title: 'Smart Classrooms',
    desc: 'Fully digitalized ICT-enabled classrooms equipped with 4K interactive smartboards, surround-sound systems, HD cameras, and cloud-synchronized attendance.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop',
    tag: 'Technology',
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 5, title: 'Engineering Laboratories',
    desc: '50+ specialized labs including GPU computing clusters, VLSI fabrication, robotics arenas, embedded systems benches, and a dedicated IoT test environment.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
    tag: 'Labs',
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 6, title: 'Student Activity Center',
    desc: 'A vibrant multi-purpose 5,000-capacity auditorium complex with cultural stages, club rooms, cafeteria, student lounges, and collaborative maker spaces.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop',
    tag: 'Student Life',
    color: 'from-rose-600 to-pink-700'
  },
  {
    id: 7, title: 'Sports Complex',
    desc: 'Internationally-standard sports facilities including cricket grounds, synthetic football turf, NBA-spec basketball courts, and an Olympic-standard swimming pool.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=900&auto=format&fit=crop',
    tag: 'Sports',
    color: 'from-green-600 to-emerald-700'
  },
  {
    id: 8, title: 'Boys Hostel',
    desc: '1,200-capacity fully air-conditioned hostel with 24/7 security, biometric access, high-speed Wi-Fi, recreational lounge, and hygienic multi-cuisine dining.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=900&auto=format&fit=crop',
    tag: 'Hostel',
    color: 'from-slate-600 to-gray-800'
  },
  {
    id: 9, title: 'Girls Hostel',
    desc: '900-capacity premium girls residential block with dedicated wardens, CCTV surveillance, beauty salon, reading room, indoor games, and self-cooking facilities.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900&auto=format&fit=crop',
    tag: 'Hostel',
    color: 'from-pink-600 to-rose-700'
  },
  {
    id: 10, title: 'Open Green Campus',
    desc: 'A sprawling 150-acre lush green campus with botanical gardens, nature trails, open-air amphitheaters, rainwater harvesting, and over 10,000 indigenous trees.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop',
    tag: 'Campus',
    color: 'from-lime-600 to-green-700'
  }
];

const highlights = [
  { icon: Monitor, value: '100+', label: 'Smart Classrooms', color: 'bg-blue-50 text-blue-600' },
  { icon: FlaskConical, value: '50+', label: 'Research Labs', color: 'bg-violet-50 text-violet-600' },
  { icon: BookOpen, value: '10', label: 'Departments', color: 'bg-emerald-50 text-emerald-600' },
  { icon: BookOpen, value: '24×7', label: 'Digital Library', color: 'bg-cyan-50 text-cyan-600' },
  { icon: Star, value: 'Modern', label: 'Sports Arena', color: 'bg-amber-50 text-amber-600' },
  { icon: Wifi, value: '100%', label: 'Wi-Fi Campus', color: 'bg-rose-50 text-rose-600' },
];

const CampusTour = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(10000, 2000, countersStarted);
  const c2 = useCounter(500, 1800, countersStarted);
  const c3 = useCounter(50, 1500, countersStarted);
  const c4 = useCounter(150, 1600, countersStarted);

  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop"
          alt="Vertex Campus"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-blue-900/80 to-indigo-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-blue-300" />
              <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">Virtual Campus Tour</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-tight tracking-tight mb-6">
              Explore Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-200">
                Campus
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
              Take a virtual journey through Vertex College of Engineering and experience our world-class academic infrastructure, student facilities, and vibrant campus life.
            </p>
            <motion.a
              href="#tour-gallery"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-navy rounded-2xl font-bold text-base shadow-xl hover:bg-blue-50 transition-colors"
            >
              <Eye className="h-5 w-5" />
              <span>Start Campus Tour</span>
              <ChevronRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ANIMATED STATS */}
      <section ref={statsRef} className="bg-primary-navy py-16 border-y border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: c1, suffix: '+', label: 'Students' },
              { value: c2, suffix: '+', label: 'Faculty' },
              { value: c3, suffix: '+', label: 'Labs' },
              { value: c4, suffix: '+', label: 'Recruiters' },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <span className="block text-4xl sm:text-5xl font-extrabold text-white font-display">
                  {s.value.toLocaleString()}{s.suffix}
                </span>
                <span className="block text-xs text-slate-400 uppercase tracking-widest font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR GALLERY */}
      <section id="tour-gallery" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Campus Tour" title="Explore Every Corner of Our Campus" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {tourSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${spot.color} opacity-0 group-hover:opacity-50 transition-opacity duration-400`} />
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white bg-gradient-to-r ${spot.color} shadow`}>
                    {spot.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary-navy font-display mb-2 group-hover:text-secondary-blue transition-colors">
                      {spot.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{spot.desc}</p>
                  </div>
                  <button className="mt-4 inline-flex items-center space-x-1.5 text-xs font-bold text-secondary-blue hover:text-primary-navy transition-colors">
                    <span>View Details</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS HIGHLIGHTS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Infrastructure" title="Campus Highlights at a Glance" center={true} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${h.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xl font-extrabold text-primary-navy font-display">{h.value}</p>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-0.5">{h.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-3xl font-extrabold font-display mb-4">Visit Us In Person</h2>
          <p className="text-slate-300 mb-8">Schedule a campus visit and experience Vertex College of Engineering firsthand with a guided tour from our student ambassadors.</p>
          <a
            href="mailto:admissions@vertex.edu"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-primary-navy rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-xl"
          >
            <MapPin className="h-5 w-5" />
            <span>Schedule a Campus Visit</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default CampusTour;
