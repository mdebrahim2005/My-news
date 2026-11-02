import Link from "next/link";
import { FaBullseye, FaEye, FaAward, FaUsers, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "About Us | The Dragon News",
  description: "Learn more about The Dragon News and our mission of journalism without fear or favour.",
};

export default function AboutPage() {
  const stats = [
    { label: "Daily Readers", value: "500K+" },
    { label: "Global Reporters", value: "120+" },
    { label: "Years of Trust", value: "15+" },
    { label: "Award Honors", value: "35+" },
  ];

  const values = [
    {
      icon: <FaBullseye className="text-3xl text-red-600 mb-3" />,
      title: "Our Mission",
      desc: "To provide factual, unbiased, and investigative reporting that holds power accountable and keeps communities informed.",
    },
    {
      icon: <FaEye className="text-3xl text-red-600 mb-3" />,
      title: "Our Vision",
      desc: "To become the most dependable and credible digital news publication trusted globally for journalistic integrity.",
    },
    {
      icon: <FaAward className="text-3xl text-red-600 mb-3" />,
      title: "Core Values",
      desc: "Truth, transparency, public interest, and fearlessness guide every single headline, editorial piece, and story we publish.",
    },
  ];

  const team = [
    {
      name: "Jimmy Dane",
      role: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Sophia Martinez",
      role: "Senior Political Analyst",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Marcus Vance",
      role: "Head of Investigative Desk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50 text-gray-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="text-center space-y-4 pt-4">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Journalism Without Fear or Favour
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-relaxed">
            The Dragon News is dedicated to delivering independent news, insightful analysis, and real-time coverage on world politics, economy, tech, and culture.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {stats.map((item, index) => (
            <div key={index} className="text-center py-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-red-600 font-serif">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </section>

        {/* Mission & Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {val.icon}
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Editorial Board / Team */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Meet Our Leadership
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              The journalists and editors upholding our publication standards
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm text-center p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-red-500 mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                <p className="text-xs text-red-600 font-medium mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white rounded-xl border border-gray-200 p-8 sm:p-10 text-center shadow-sm">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
            Want to join our newsroom?
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
            We are always looking for passionate writers, field journalists, and digital content creators who value objective journalism.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-medium text-sm rounded-lg hover:bg-red-700 transition-colors shadow-sm"
          >
            Explore Careers <FaArrowRight size={14} />
          </Link>
        </section>

      </div>
    </main>
  );
}