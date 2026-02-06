'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- DATA: Team Members & Departments ---
// I've updated the images to placeholders. You just need to match the file names.
const departments = [
  {
    title: "CHAT OPERATIONS LEADERSHIP",
    members: [
      { name: "Jack", image: "/images/man.webp" },
      { name: "Leon", image: "/images/man.webp" },
    ],
    description: "Jack and Leon lead SMP's chat department, overseeing both client delivery and day-to-day chat operations. Jack focuses on the overall client experience, onboarding, and strategy. Leon manages and trains the chat teams, maintaining high standards in communication."
  },
  {
    title: "CREATOR SUCCESS & PARTNERSHIPS TEAM",
    members: [
      { name: "Tyler", image: "/images/man.webp" },
      { name: "Sam", image: "/images/man.webp" },
    ],
    description: "Tyler and Sam lead SMP's Creator Success and Partnerships team. Tyler focuses on creator wellbeing, ongoing support, and success planning. Sam works across creator success and acquisition, helping onboard the right creators and guiding them through early growth."
  },
  {
    title: "MARKETING DEVELOPMENT TEAM",
    members: [
      { name: "Charlie", image: "/images/man.webp" },
      { name: "Ben", image: "/images/man.webp" },
    ],
    description: "Charlie and Ben lead SMP's marketing development function. Charlie oversees social media technologies, tools, and automation. Ben specializes in UX and UI development, ensuring every system, funnel, and creator-facing asset is intuitive and high-converting."
  },
  {
    title: "GROWTH & CREATIVE STRATEGY TEAM",
    members: [
      { name: "Tom", image: "/images/man.webp" },
      { name: "Leo", image: "/images/man.webp" },
    ],
    description: "Tom and Leo lead SMP's Growth and Creative Strategy team. Tom works closely with creators to manage campaigns and track results. Leo focuses on creative strategy and funnel optimization, shaping content and visuals that convert attention into paying fans."
  }
];

export default function TheTeamSection() {
  return (
    <section 
      id="the-team" 
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32 font-sans"
    >
      
      {/* --- BACKGROUND DECORATIONS (Red Theme) --- */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3" />
      <div className="absolute left-[-100px] top-[10%] w-[400px] h-[400px] border border-white/5 rounded-[60px] rotate-45 pointer-events-none" />

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
            <div className="bg-red-600 px-6 py-2 transform -skew-x-6 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
               <h2 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase transform skew-x-6">
                 THE
               </h2>
            </div>
            <h2 className="text-4xl md:text-6xl font-light italic text-white tracking-widest uppercase">
              TEAM
            </h2>
          </div>
        </motion.div>


        {/* ==========================
            2. JAYBE SOLATORIO (Left Text, Right Image)
           ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-b border-white/5 pb-20">
          
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-900 px-6 py-2 rounded-lg mb-8 shadow-lg transform -rotate-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic tracking-wider uppercase">
                Jaybe Solatorio
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                With a background in <span className="text-white font-medium">corporate real estate</span>, Jaybe understands exactly what both 
                traditional and creative businesses need, building connections with 
                <span className="text-red-500 font-medium"> unicorn level clients</span>.
              </p>
              
              <p>
                His skill set sits in organizational management and flawless execution. 
                He brings clarity to an industry that feels chaotic to most, giving his team 
                and creators a clear path through a confusing space.
              </p>

              <p>
                Coming into the creative world with a business mindset let Jaybe see the cracks 
                way before anyone else. That advantage helped him and his team take over the 
                market and establish dominance in record time.
              </p>
            </div>
            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </motion.div>

          {/* Image */}
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
                <Image 
                  src="/images/man.webp" // Keep Jaybe's image here
                  alt="Jaybe Solatorio"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              {/* Co-Founder Badge */}
               <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-red-600/50 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                 <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">Role</p>
                 <p className="text-white text-lg font-bold">Co-Founder</p>
               </div>
            </div>
          </motion.div>
        </div>


        {/* ==========================
            3. JESSE THOMSON (Left Image, Right Text)
           ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           
           {/* IMAGE (Swapped to Left side for visual flow) */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
             <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
              {/* Red Border decoration */}
              <div className="absolute inset-0 border-2 border-red-600/30 rounded-[40px] transform -translate-x-4 -translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <Image 
                  src="/images/man.webp" // CHANGE THIS TO JESSE'S PHOTO
                  alt="Jesse Thomson"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-900 px-6 py-2 rounded-lg mb-8 shadow-lg transform rotate-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white italic tracking-wider uppercase">
                Jesse Thomson
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                While studying Marketing at University, Jesse quickly realised that none of his 
                lecturers understood the modern marketing landscape. He signed 
                multiple clients while still sitting in class, running a freelance brand scaling 
                business that showed him how vital creative campaigns are.
              </p>
              <p>
                He found OTM shortly after leaving university to pursue his branding work, but it 
                became obvious that the bigger opportunity was right in front of him. The same 
                skills he used to scale products and services were directly transferable to 
                creators, and Jesse applied them with precision.
              </p>
              <p>
                Jesse is no stranger to pressure or discipline. After training and competing in 
                multiple amateur MMA fights, he learned the value of keeping his head down and 
                putting the work in. Jesse brings that same creative instinct to his mastery of influencer scaling.
              </p>
            </div>
            <div className="mt-8 h-1 w-24 bg-red-600 rounded-full" />
          </motion.div>
        </div>


        {/* ==========================
            4. DEPARTMENTS GRID
           ========================== */}
        <div className="space-y-24 border-t border-white/5 pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {departments.map((dept, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Red Title Pill */}
                        <div className="bg-red-600 px-4 py-1.5 rounded-md transform -skew-x-12 mb-8 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                            <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-widest transform skew-x-12">
                                {dept.title}
                            </h4>
                        </div>

                        {/* Images Row */}
                        <div className="flex justify-center gap-6 mb-6">
                            {dept.members.map((member, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-28 h-28 md:w-36 md:h-36 relative rounded-2xl overflow-hidden border border-red-900/50 shadow-xl mb-3 group bg-neutral-900">
                                        <Image 
                                            src={member.image} 
                                            alt={member.name} 
                                            fill 
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="bg-neutral-800 border border-red-600/30 px-4 py-1 rounded-sm shadow-md">
                                        <span className="text-red-500 text-xs font-bold uppercase tracking-wider">{member.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Description Text */}
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
                            {dept.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* ==========================
            5. GROUP PHOTO (Q3 Wrap Up)
           ========================== */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 flex flex-col items-center border-t border-white/5 pt-24"
        >
             <div className="relative w-full max-w-5xl h-[300px] md:h-[550px] rounded-[40px] overflow-hidden border border-neutral-800 shadow-2xl mb-12 group">
                 {/* Badge */}
                 <div className="absolute top-8 left-8 bg-red-600/90 backdrop-blur-md px-6 py-3 rounded-xl z-20 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                     <h3 className="text-white text-2xl font-bold">Q3 <br/><span className="text-lg font-light">Wrap Up</span></h3>
                 </div>
                 
                 {/* Group Image */}
                 <Image 
                    src="/images/group-photo.jpg" // CHANGE THIS TO GROUP PHOTO
                    alt="Team Group Photo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
             </div>

             <div className="max-w-4xl text-center">
                 <p className="text-gray-400 text-sm leading-relaxed">
                    SMP is built on a senior management team covering chat operations, marketing, creative strategy, and creator success. 
                    This leadership team is the engine behind every SMP operation, driving strategy, consistency, and results. 
                    It’s not just a team – it’s a system built for long-term success.
                 </p>
             </div>
        </motion.div>

      </div>
    </section>
  );
}