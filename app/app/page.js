export default function PropertyServicesWebsite() {
  const services = [
    {
      title: 'Property Photography',
      price: '£160',
      desc: 'Bright, clean photography designed for estate agent listings, landlord marketing and property brochures.',
    },
    {
      title: 'Floor Plans',
      price: '£90',
      desc: 'Clear estate agent style floor plans, ideal for listings, brochures and landlord marketing packs.',
    },
    {
      title: 'EPC Certificate',
      price: '£85',
      desc: 'Domestic EPC assessments for residential properties with straightforward booking and quick turnaround.',
    },
    {
      title: 'Gas Safety Certificate',
      price: '£85',
      desc: 'Gas safety certification arranged through a qualified Gas Safe engineer as part of your property package.',
    },
  ];

  const packages = [
    {
      title: 'Marketing Pack',
      price: '£230',
      includes: ['Photography', 'Floor plan'],
      note: 'Ideal for estate agents and sellers who need strong listing visuals.',
    },
    {
      title: 'Compliance Pack',
      price: '£150',
      includes: ['EPC certificate', 'Gas safety certificate'],
      note: 'A simple option for landlords preparing a property for tenancy.',
    },
    {
      title: 'Complete Property Pack',
      price: '£340',
      includes: ['Photography', 'Floor plan', 'EPC certificate', 'Gas safety certificate'],
      note: 'One booking, one visit, everything handled.',
      featured: true,
    },
  ];

  const gallery = [
    {
      title: 'Sales & Lettings Photography',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Clean Floor Plans',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Landlord Compliance Services',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      color: '#171717',
      lineHeight: 1.5,
    },
    container: {
      maxWidth: '1180px',
      margin: '0 auto',
      padding: '0 24px',
    },
    section: {
      padding: '70px 0',
    },
    hero: {
      borderBottom: '1px solid #e5e5e5',
      padding: '80px 0',
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      alignItems: 'center',
    },
    eyebrow: {
      fontSize: '12px',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: '#737373',
      marginBottom: '16px',
    },
    h1: {
      fontSize: '52px',
      lineHeight: 1.05,
      margin: '0 0 20px 0',
    },
    h2: {
      fontSize: '36px',
      lineHeight: 1.1,
      margin: '10px 0 14px 0',
    },
    lead: {
      fontSize: '18px',
      color: '#525252',
      maxWidth: '640px',
    },
    buttonRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      marginTop: '30px',
    },
    buttonDark: {
      display: 'inline-block',
      padding: '14px 22px',
      borderRadius: '14px',
      backgroundColor: '#171717',
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: 600,
    },
    buttonLight: {
      display: 'inline-block',
      padding: '14px 22px',
      borderRadius: '14px',
      border: '1px solid #d4d4d4',
      color: '#171717',
      textDecoration: 'none',
      fontWeight: 600,
      backgroundColor: '#ffffff',
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '18px',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '24px',
    },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px',
    },
    card: {
      border: '1px solid #e5e5e5',
      borderRadius: '24px',
      padding: '24px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    cardImageWrap: {
      overflow: 'hidden',
      borderRadius: '28px',
      border: '1px solid #e5e5e5',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    image: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      display: 'block',
    },
    imageCaption: {
      padding: '18px 20px',
      fontSize: '20px',
      fontWeight: 600,
    },
    packageSection: {
      backgroundColor: '#f7f7f7',
      padding: '70px 0',
    },
    packageCardFeatured: {
      border: '1px solid #171717',
      borderRadius: '24px',
      padding: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    packageCard: {
      border: '1px solid #e5e5e5',
      borderRadius: '24px',
      padding: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#171717',
      color: '#ffffff',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      padding: '8px 12px',
      borderRadius: '999px',
      marginBottom: '16px',
    },
    price: {
      fontSize: '42px',
      fontWeight: 700,
      margin: '10px 0 20px 0',
    },
    ul: {
      paddingLeft: '20px',
      color: '#404040',
    },
    trustWrap: {
      border: '1px solid #e5e5e5',
      borderRadius: '28px',
      padding: '30px',
    },
    faqWrap: {
      borderRadius: '28px',
      backgroundColor: '#f5f5f5',
      padding: '30px',
    },
    contact: {
      backgroundColor: '#171717',
      color: '#ffffff',
      padding: '70px 0',
      marginTop: '10px',
    },
    contactCard: {
      borderRadius: '24px',
      backgroundColor: 'rgba(255,255,255,0.06)',
      padding: '28px',
    },
    mutedDark: {
      color: '#d4d4d4',
    },
    whatsapp: {
      position: 'fixed',
      right: '24px',
      bottom: '24px',
      backgroundColor: '#171717',
      color: '#ffffff',
      textDecoration: 'none',
      padding: '14px 20px',
      borderRadius: '999px',
      fontWeight: 600,
      boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.eyebrow}>London Property Media</div>
              <h1 style={styles.h1}>Photography, floor plans and compliance services - all in one place.</h1>
              <p style={styles.lead}>
                Professional property photography, floor plans and compliance services for estate agents, landlords and developers across London. Book a single service or combine everything into one efficient package.
              </p>
              <div style={styles.buttonRow}>
                <a href="#packages" style={styles.buttonDark}>View Packages</a>
                <a href="#contact" style={styles.buttonLight}>Get a Quote</a>
              </div>
            </div>

            <div style={styles.grid2}>
              {['One booking', 'Fast turnaround', 'Professional presentation', 'London focused service'].map((item) => (
                <div key={item} style={styles.card}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ maxWidth: '760px', marginBottom: '30px' }}>
            <div style={styles.eyebrow}>Portfolio feel</div>
            <h2 style={styles.h2}>A cleaner, more premium way to present property services</h2>
            <p style={{ color: '#525252' }}>
              Built for estate agents, landlords and developers who need strong visuals and reliable compliance support.
            </p>
          </div>

          <div style={styles.grid3}>
            {gallery.map((item) => (
              <div key={item.title} style={styles.cardImageWrap}>
                <img src={item.image} alt={item.title} style={styles.image} />
                <div style={styles.imageCaption}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <div style={{ maxWidth: '760px', marginBottom: '30px' }}>
            <div style={styles.eyebrow}>Services</div>
            <h2 style={styles.h2}>Individual services</h2>
            <p style={{ color: '#525252' }}>
              Book a single service or combine multiple into one simple visit.
            </p>
          </div>

          <div style={styles.grid4}>
            {services.map((service) => (
              <div key={service.title} style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: 0, fontSize: '22px' }}>{service.title}</h3>
                  <span style={{ background: '#f5f5f5', padding: '8px 12px', borderRadius: '999px', fontWeight: 600 }}>
                    {service.price}
                  </span>
                </div>
                <p style={{ marginTop: '16px', color: '#525252' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" style={styles.packageSection}>
        <div style={styles.container}>
          <div style={{ maxWidth: '760px', marginBottom: '30px' }}>
            <div style={styles.eyebrow}>Packages</div>
            <h2 style={styles.h2}>Simple pricing for agents and landlords</h2>
            <p style={{ color: '#525252' }}>
              Designed to save time, simplify coordination and keep everything under one roof.
            </p>
          </div>

          <div style={styles.grid3}>
            {packages.map((pkg) => (
              <div key={pkg.title} style={pkg.featured ? styles.packageCardFeatured : styles.packageCard}>
                {pkg.featured && <div style={styles.badge}>Most Popular</div>}
                <h3 style={{ margin: 0, fontSize: '28px' }}>{pkg.title}</h3>
                <div style={styles.price}>{pkg.price}</div>
                <ul style={styles.ul}>
                  {pkg.includes.map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ color: '#525252', marginTop: '18px' }}>{pkg.note}</p>
                <a href="#contact" style={{ ...styles.buttonDark, marginTop: '20px' }}>Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ maxWidth: '760px', marginBottom: '30px' }}>
            <div style={styles.eyebrow}>Trust</div>
            <h2 style={styles.h2}>Built for busy property professionals</h2>
            <p style={{ color: '#525252' }}>
              Straightforward pricing, reliable communication and a polished finish that helps properties get to market faster.
            </p>
          </div>

          <div style={{ ...styles.grid3, ...styles.trustWrap }}>
            <div>
              <h3>One booking</h3>
              <p style={{ color: '#525252' }}>Reduce admin and coordinate multiple services through one provider.</p>
            </div>
            <div>
              <h3>Professional finish</h3>
              <p style={{ color: '#525252' }}>Present properties clearly with quality visuals, clean plans and essential certificates.</p>
            </div>
            <div>
              <h3>London focused</h3>
              <p style={{ color: '#525252' }}>A service designed around the fast pace and expectations of London property marketing.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 30px 0' }}>
        <div style={styles.container}>
          <div style={styles.faqWrap}>
            <div style={styles.eyebrow}>FAQ</div>
            <div style={styles.grid3}>
              <div>
                <h3>How quickly can you attend?</h3>
                <p style={{ color: '#525252' }}>Appointments are arranged around availability, with a fast turnaround for standard property marketing packs.</p>
              </div>
              <div>
                <h3>Do you cover all of London?</h3>
                <p style={{ color: '#525252' }}>Yes - the service is positioned for London estate agents, landlords and property professionals.</p>
              </div>
              <div>
                <h3>Can everything be arranged together?</h3>
                <p style={{ color: '#525252' }}>Yes - photography, floor plans and compliance services can be booked together for a simpler process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contact}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={{ ...styles.eyebrow, color: '#a3a3a3' }}>Contact</div>
              <h2 style={{ ...styles.h2, color: '#ffffff' }}>Need a quote for a property?</h2>
              <p style={styles.mutedDark}>
                Get in touch for pricing, availability and tailored packages for estate agents, landlords and property professionals.
              </p>
            </div>

            <div style={styles.contactCard}>
              <p><strong>Email:</strong> hello@londonpropertymedia.co.uk</p>
              <p><strong>Phone:</strong> 07900 000000</p>
              <p><strong>Location:</strong> London, UK</p>
              <p><strong>Hours:</strong> Mon - Sat, 8am - 6pm</p>
              <p><strong>WhatsApp:</strong> Fast response for quotes and availability</p>
              <a href="mailto:hello@londonpropertymedia.co.uk" style={{ ...styles.buttonLight, marginTop: '16px', display: 'inline-block' }}>
                Email to Enquire / Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/447900000000" style={styles.whatsapp}>WhatsApp Us</a>
    </div>
  );
}
