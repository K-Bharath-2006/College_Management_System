import { motion } from 'framer-motion';
import { BookOpen, Users, FlaskConical, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const departmentsData = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    hod: 'Dr. Evelyn Sterling',
    facultyCount: 48,
    studentCount: 720,
    labsCount: 8,
    desc: 'Empowering students with core foundations in software development, machine learning, cloud systems, and algorithm design.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Artificial Intelligence & Data Science',
    code: 'AIDS',
    hod: 'Dr. Marcus Vance',
    facultyCount: 35,
    studentCount: 480,
    labsCount: 5,
    desc: 'Unlocking the future of neural computing, cognitive systems, statistical modeling, and deep business analytics.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Information Technology',
    code: 'IT',
    hod: 'Dr. Rajesh Pillai',
    facultyCount: 42,
    studentCount: 600,
    labsCount: 6,
    desc: 'Bridging enterprise software architectures, network administration, database integrity, and modern web applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Electronics & Communication Engineering',
    code: 'ECE',
    hod: 'Dr. Clara Oswald',
    facultyCount: 45,
    studentCount: 640,
    labsCount: 7,
    desc: 'Innovating in semi-conductor chips, VLSI layout, wireless antenna communication networks, and microprocessors.',
    image: 'https://images.unsplash.com/photo-1517055720413-77a19a4831e2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Electrical & Electronics Engineering',
    code: 'EEE',
    hod: 'Dr. Alan Turing',
    facultyCount: 38,
    studentCount: 520,
    labsCount: 6,
    desc: 'Shaping power distribution systems, clean energy grids, heavy industrial machinery controllers, and smart electronics.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    hod: 'Dr. Vikram Sarabhai',
    facultyCount: 44,
    studentCount: 680,
    labsCount: 9,
    desc: 'Exploring fluid mechanics, thermodynamical energy transfer, CAD/CAM drafting, and state-of-the-art manufacturing.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Civil Engineering',
    code: 'CIVIL',
    hod: 'Dr. Visvesvaraya Naidu',
    facultyCount: 30,
    studentCount: 450,
    labsCount: 5,
    desc: 'Designing sustainable concrete structures, transport infrastructure pipelines, geological safety, and urban grids.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Biomedical Engineering',
    code: 'BME',
    hod: 'Dr. Sarah Connor',
    facultyCount: 28,
    studentCount: 360,
    labsCount: 4,
    desc: 'Developing next-generation life support monitoring devices, bio-sensor chips, medical imaging machines, and prosthetics.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Cyber Security',
    code: 'CY',
    hod: 'Dr. Edward Snowden',
    facultyCount: 32,
    studentCount: 400,
    labsCount: 4,
    desc: 'Securing digital assets, vulnerability diagnostics, ethical hacking practices, encryption standards, and digital forensics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Robotics & Automation',
    code: 'RA',
    hod: 'Dr. Nikola Tesla',
    facultyCount: 34,
    studentCount: 420,
    labsCount: 5,
    desc: 'Pioneering robot dynamics, autonomous control circuits, machine vision integration, and corporate assembly line automation.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop'
  }
];

const Departments = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-primary-navy to-secondary-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Vertex Academics</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display">Academic Departments</h1>
          <p className="text-sm text-slate-200 max-w-xl font-light leading-relaxed">
            Explore our world-class engineering and technology courses, each featuring custom labs, research facilities, and expert faculty leads.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsData.map((dept, index) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between text-left"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/95 backdrop-blur font-mono font-bold text-xs rounded-lg text-primary-navy shadow border border-slate-100">
                  {dept.code}
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-primary-navy font-display group-hover:text-secondary-blue transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium font-sans">
                    HOD: <span className="text-slate-600 font-semibold">{dept.hod}</span>
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {dept.desc}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Faculty</span>
                    <span className="text-sm font-extrabold text-primary-navy font-display">{dept.facultyCount}</span>
                  </div>
                  <div className="space-y-0.5 border-x border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Scholars</span>
                    <span className="text-sm font-extrabold text-primary-navy font-display">{dept.studentCount}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Labs</span>
                    <span className="text-sm font-extrabold text-primary-navy font-display">{dept.labsCount}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Departments;
