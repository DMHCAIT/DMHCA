import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { supabase } from '../lib/supabase'

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<{ phone: string; email: string; address: string } | null>(null)
  const [socialLinks, setSocialLinks] = useState<{ facebook?: string; youtube?: string; instagram?: string; linkedin?: string } | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await supabase.from('site_settings').select('key,value').in('key', ['contact_info', 'social_links'])
        if (data && data.length > 0) {
          const ci = data.find(r => r.key === 'contact_info')
          const sl = data.find(r => r.key === 'social_links')
          if (ci?.value) setContactInfo(typeof ci.value === 'string' ? JSON.parse(ci.value) : ci.value)
          if (sl?.value) setSocialLinks(typeof sl.value === 'string' ? JSON.parse(sl.value) : sl.value)
        }
      } catch (_) {}
    })()
  }, [])

  const phone = contactInfo?.phone ?? '+91 7042011441'
  const email = contactInfo?.email ?? 'info@dmhca.in'
  const address = contactInfo?.address ?? 'Delhi Medical Health Care Academy, New Delhi, India'
  const fbUrl = socialLinks?.facebook ?? 'https://www.facebook.com/dmhca.in'
  const ytUrl = socialLinks?.youtube ?? 'https://www.youtube.com/@dmhca'
  const igUrl = socialLinks?.instagram ?? 'https://www.instagram.com/dmhca_official/'
  const liUrl = socialLinks?.linkedin ?? 'https://www.linkedin.com/company/dmhca/'
  const quickLinks = [
    { name: 'About Us', path: '/about-dmhca' },
    { name: 'Courses', path: '/top-medical-courses' },
    { name: 'Events', path: '/events' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact-us' },
  ]

  const courses = [
    { name: 'Fellowship Programs', path: '/top-medical-courses' },
    { name: 'Diploma Courses', path: '/top-medical-courses' },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#4D6A92] via-[#3D5A82] to-[#4D6A92] text-white z-30 border-t-4 border-jhu-gold">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.2), transparent 45%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5 lg:col-span-5">
            <div className="flex items-center">
              <img
                src="/assets/dmhca-logo.png"
                alt="DMHCA"
                className="w-[180px] sm:w-[230px] h-auto object-contain"
              />
            </div>
            <p className="text-gray-100/95 leading-relaxed text-base sm:text-lg">
              Empowering healthcare<br />
              professionals with world-class <br />
              medical education and training<br />
              programs.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/85 hover:text-white transition-all duration-300 flex items-center justify-center border border-white/10">
                <FaFacebook size={18} />
              </a>
              <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/85 hover:text-white transition-all duration-300 flex items-center justify-center border border-white/10">
                <FaYoutube size={18} />
              </a>
              <a href={igUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/85 hover:text-white transition-all duration-300 flex items-center justify-center border border-white/10">
                <FaInstagram size={18} />
              </a>
              <a href={liUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/85 hover:text-white transition-all duration-300 flex items-center justify-center border border-white/10">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2 lg:pt-2">
            <h4 className="text-base sm:text-lg font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4 lg:col-span-2 lg:pt-2">
            <h4 className="text-base sm:text-lg font-semibold tracking-wide">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link 
                    to={course.path} 
                    className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-3 lg:pt-2">
            <h4 className="text-base sm:text-lg font-semibold tracking-wide">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-jhu-gold flex-shrink-0 text-sm mt-1" />
                <span className="text-gray-200 text-sm sm:text-base leading-snug">
                  {address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-jhu-gold flex-shrink-0 text-sm" />
                <span className="text-gray-200 text-sm sm:text-base">{phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-jhu-gold flex-shrink-0 text-sm" />
                <span className="text-gray-200 text-sm sm:text-base break-all">{email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-jhu-gold/30 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2026 DMHCA - Digital Medical & Healthcare Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer