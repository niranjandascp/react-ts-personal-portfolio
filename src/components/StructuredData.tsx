import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Niranjan Das C.P',
      url: 'https://niranjandas.in/',
      image: 'https://niranjandas.in/assets/profile.png',
      jobTitle: 'Full Stack Developer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kaduppassery, Thrissur',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/niranjandascp',
        'https://linkedin.com/in/niranjandascp',
        'https://dev.to/niranjandascp',
        'https://x.com/niranjandascp',
        'https://leetcode.com/u/niranjandascp/'
      ],
      knowsAbout: [
        'Full Stack Development',
        'MERN Stack',
        'Nest.js',
        'React.js',
        'Next.js',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'Web Development',
        'Software Engineering',
      ],
    };

    // ProfessionalService Schema
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Niranjan Das C.P - Full Stack Development Services',
      description:
        'Full Stack Developer (MERN, Nest.js) specializing in React, Next.js, Node.js, Nest.js, TypeScript, MongoDB, and PostgreSQL.',
      provider: {
        '@type': 'Person',
        name: 'Niranjan Das C.P',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Web Development',
        'Full Stack Development',
        'Software Development',
      ],
    };

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Niranjan Das C.P Portfolio',
      url: 'https://niranjandas.in/',
      description:
        'Portfolio website of Niranjan Das C.P - Full Stack Developer',
      author: {
        '@type': 'Person',
        name: 'Niranjan Das C.P',
      },
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach(script => script.remove());

    // Add Person schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add ProfessionalService schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(professionalServiceSchema);
    document.head.appendChild(serviceScript);

    // Add Website schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
}
