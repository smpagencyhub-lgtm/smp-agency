'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- DATA: Team Members & Departments ---

const departments = [
   
  {
    title: "CHAT OPERATIONS LEADERSHIP",
    members: [
      { name: "ENRICO", image: "/images/ChatLeader--1.jpg" },
      { name: "KRISTOFF", image: "/images/ChatLeader2.png" },
    ],
    description: "Enrico and Kristoff lead SMP's chat department, overseeing both client delivery and day-to-day chat operations. Enrico focuses on the overall client experience, onboarding, and strategy. Kristoff manages and trains the chat teams, maintaining high standards in communication."
  },
];

export default function TheTeamSection() {
  return (
    <section 
      id="the-team" 
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32 font-sans"
    >
      
      {/* --- GLOBAL BACKGROUND DECORATIONS --- */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none translate-x-1/3" />
      <div className="absolute left-[-200px] top-[10%] w-[600px] h-[600px] border border-white/5 rounded-[100px] rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================
            1. MAIN TITLE
           ========================== */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-24"
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-600 px-8 py-3 transform -skew-x-6 shadow-[0_0_40px_rgba(220,38,38,0.6)]">
               <h2 className="text-4xl md:text-7xl font-bold text-white tracking-widest uppercase transform skew-x-6">
                 THE
               </h2>
            </div>
            <h2 className="text-4xl md:text-7xl font-light italic text-white tracking-widest uppercase">
              TEAM
            </h2>
          </div>
        </motion.div>


        {/* ==========================
            2. INDIVIDUAL FOUNDERS (Jaybe, Jesse, Suharto)
            (Kept largely the same, just ensuring spacing consistency)
           ========================== */}
        
        {/* --- ARTHUR TURNER (Jaybe) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-b border-white/5 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-900 px-6 py-2 rounded-lg mb-8 shadow-lg transform -rotate-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic tracking-wider uppercase">
                Arthur Turner
              </h3>
            </div>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>With a background in <span className="text-white font-medium">corporate real estate</span>, Jaybe understands exactly what both traditional and creative businesses need, building connections with <span className="text-red-500 font-medium"> unicorn level clients</span>.</p>
              <p>His skill set sits in organizational management and flawless execution. He brings clarity to an industry that feels chaotic to most, giving his team and creators a clear path through a confusing space.</p>
              <p>Coming into the creative world with a business mindset let Jaybe see the cracks way before anyone else. That advantage helped him and his team take over the market and establish dominance in record time.</p>
            </div>
            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
              <div className="absolute inset-0 border-2 border-red-600/30 rounded-[40px] transform translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <Image src="/images/man.webp" alt="Jaybe Solatorio" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
               <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-red-600/50 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                 <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">Role</p>
                 <p className="text-white text-lg font-bold">CEO</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* --- RAFFY (Jesse) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-b border-white/5 pb-20">
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
             <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
              <div className="absolute inset-0 border-2 border-red-600/30 rounded-[40px] transform -translate-x-4 -translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <Image src="/images/man.webp" alt="Jesse Thomson" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
               <div className="absolute -bottom-6 -right-6 bg-neutral-900 border border-red-600/50 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                 <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">Role</p>
                 <p className="text-white text-lg font-bold">COO</p>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-900 px-6 py-2 rounded-lg mb-8 shadow-lg transform rotate-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic tracking-wider uppercase">Raffy</h3>
            </div>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>While studying Marketing at University, Jesse quickly realised that none of his lecturers understood the modern marketing landscape. He signed multiple clients while still sitting in class.</p>
              <p>He found OTM shortly after leaving university to pursue his branding work, but it became obvious that the bigger opportunity was right in front of him.</p>
              <p>Jesse is no stranger to pressure or discipline. After training and competing in multiple amateur MMA fights, he learned the value of keeping his head down and putting the work in.</p>
            </div>
            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </motion.div>
        </div>
          
        {/* --- SUHARTO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-b border-white/5 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-900 px-6 py-2 rounded-lg mb-8 shadow-lg transform -rotate-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic tracking-wider uppercase">Suharto</h3>
            </div>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>With a background in <span className="text-white font-medium">corporate real estate</span>, Jaybe understands exactly what both traditional and creative businesses need.</p>
              <p>His skill set sits in organizational management and flawless execution. He brings clarity to an industry that feels chaotic to most.</p>
              <p>Coming into the creative world with a business mindset let Jaybe see the cracks way before anyone else.</p>
            </div>
            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
              <div className="absolute inset-0 border-2 border-red-600/30 rounded-[40px] transform translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <Image src="/images/man.webp" alt="Suharto" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
               <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-red-600/50 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                 <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">Role</p>
                 <p className="text-white text-lg font-bold">Marketing Head</p>
               </div>
            </div>
          </motion.div>
        </div>


        {/* ==========================
            4. DEPARTMENTS SECTION (CARDS & BIGGER IMAGES)
           ========================== */}
        <div className="space-y-20 pt-20">
            
            {departments.map((dept, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative w-full"
                >
                    {/* --- THE CARD CONTAINER --- 
                        Used to fill the "waste space" with a sleek background */}
                    <div className="relative w-full max-w-5xl mx-auto bg-neutral-900/40 border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden backdrop-blur-sm shadow-2xl">
                        
                        {/* DECORATION: Corner Accents */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-600/20 rounded-tl-[3rem] pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-red-600/20 rounded-br-[3rem] pointer-events-none" />
                        
                        {/* DECORATION: Glowing Orb behind images */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            
                            {/* TITLE */}
                            <div className="bg-red-600 px-8 py-2 rounded-lg transform -skew-x-12 mb-12 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                <h4 className="text-white text-sm md:text-xl font-bold uppercase tracking-[0.2em] transform skew-x-12">
                                    {dept.title}
                                </h4>
                            </div>
                            
                            {/* BIGGER IMAGES ROW */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
                                {dept.members.map((member, i) => (
                                    <div key={i} className="flex flex-col items-center group">
                                        {/* IMAGE CONTAINER - Increased Size */}
                                        <div className="w-40 h-40 md:w-64 md:h-64 relative rounded-3xl overflow-hidden border-2 border-red-900/50 shadow-2xl mb-6 bg-neutral-900">
                                            <Image 
                                                src={member.image} 
                                                alt={member.name} 
                                                fill 
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Inner gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        {/* Name Label */}
                                        <div className="bg-neutral-800/80 border border-red-600/30 px-6 py-2 rounded-full shadow-lg backdrop-blur-md">
                                            <span className="text-red-500 text-sm md:text-base font-bold uppercase tracking-widest">{member.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* DESCRIPTION - Wider and Larger Font */}
                            <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                                {dept.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* ==========================
            5. GROUP PHOTO
           ========================== */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-40 flex flex-col items-center border-t border-white/5 pt-24"
        >
             <div className="relative w-full max-w-6xl h-[300px] md:h-[600px] rounded-[40px] overflow-hidden border border-neutral-800 shadow-2xl mb-12 group">
                 <div className="absolute top-8 left-8 bg-red-600/90 backdrop-blur-md px-6 py-3 rounded-xl z-20 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                     <h3 className="text-white text-2xl font-bold">Q3 <br/><span className="text-lg font-light">Wrap Up</span></h3>
                 </div>
                 <Image src="/images/group-photo.jpg" alt="Team Group Photo" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
             </div>

             <div className="max-w-4xl text-center">
                 <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    SMP is built on a senior management team covering chat operations, marketing, creative strategy, and creator success. 
                    This leadership team is the engine behind every SMP operation, driving strategy, consistency, and results.
                 </p>
             </div>
        </motion.div>

      </div>
    </section>
  );
}