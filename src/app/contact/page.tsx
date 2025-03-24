import Header from "../components/Header";
import SponsorSection from "../components/Sponsor";
import Form from "../components/Form";
import Footer from "../components/Footer";
import BreadcrumbSection from "../components/Breadcrumb";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { IoMdContacts, IoMdShareAlt } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <Header />
      <BreadcrumbSection title="CONTACT" backgroundImage="/image1.png" />

      <main className="flex flex-col items-center mt-12 md:mt-16 lg:mt-20 gap-y-8 md:gap-y-12 lg:gap-y-16 robotoSlab">
        {/* Contact Section */}
        <section className="w-full px-4 xs:px-5 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-[var(--secondary-bg)] p-6 sm:p-8 md:p-10 rounded-lg">
            <div className="text-center mb-8 md:mb-10">
              <IoMdContacts className="mx-auto text-3xl sm:text-4xl text-[var(--text-color)] mb-3 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--text-color)] mb-2 sm:mb-3">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-color)] opacity-80 max-w-2xl mx-auto">
                Reach out to our team for any inquiries or support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Phone Numbers */}
              <div className="bg-white p-5 sm:p-6 shadow-sm rounded-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="bg-[var(--primary-color)]/10 p-2 sm:p-3 rounded-full">
                    <FaPhone className="text-xl sm:text-2xl text-[var(--primary-color)]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl text-[var(--text-color)]">
                    Phone Numbers
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    { role: "President", number: "021 269 1170" },
                    { role: "Manager", number: "022 107 7217" },
                    { role: "Secretary", number: "022 560 1055" },
                  ].map((person) => (
                    <li
                      key={person.role}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <FaUserTie className="mt-0.5 sm:mt-1 text-[var(--text-color)] flex-shrink-0 text-base sm:text-lg" />
                      <div>
                        <p className="text-sm sm:text-base text-[var(--text-color)] opacity-80">
                          {person.role}
                        </p>
                        <a
                          href={`tel:+64${person.number.replace(/\s/g, "")}`}
                          className="text-base sm:text-lg text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors"
                        >
                          {person.number}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="space-y-6 sm:space-y-8">
                {/* Email */}
                <div className="bg-white p-5 sm:p-6 shadow-sm rounded-lg">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="bg-[var(--primary-color)]/10 p-2 sm:p-3 rounded-full">
                      <FaEnvelope className="text-xl sm:text-2xl text-[var(--primary-color)]" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-xl text-[var(--text-color)]">
                      Email
                    </h3>
                  </div>
                  <a
                    href="mailto:mt8848fc@gmail.com"
                    className="text-base sm:text-lg text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-2"
                  >
                    mt8848fc[at]gmail[dot]com
                  </a>
                </div>

                {/* Location */}
                <div className="bg-white p-5 sm:p-6 shadow-sm rounded-lg">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="bg-[var(--primary-color)]/10 p-2 sm:p-3 rounded-full">
                      <FaMapMarkerAlt className="text-xl sm:text-2xl text-[var(--primary-color)]" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-xl text-[var(--text-color)]">
                      Location
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[var(--text-color)]">
                    Auckland, New Zealand
                  </p>
                </div>

                {/* Social Media */}
                <div className="bg-white p-5 sm:p-6 shadow-sm rounded-lg">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="bg-[var(--primary-color)]/10 p-2 sm:p-3 rounded-full">
                      <IoMdShareAlt className="text-xl sm:text-2xl text-[var(--primary-color)]" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-xl text-[var(--text-color)]">
                      Connect With Us
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {[
                      {
                        platform: "Facebook",
                        icon: <FaFacebook className="text-lg sm:text-xl" />,
                        url: "https://www.facebook.com/profile.php?id=100089657247479",
                      },
                      {
                        platform: "Instagram",
                        icon: <FaInstagram className="text-lg sm:text-xl" />,
                        url: "https://www.instagram.com/mt.8848_youth_club/",
                      },
                    ].map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 sm:gap-3"
                      >
                        {social.icon}
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor Section */}
        <SponsorSection />

        <Form />
        <Footer />
      </main>
    </>
  );
}
