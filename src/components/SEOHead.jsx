// components/CourseMetaTags.js
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ metaTitle, metaDescription, metaKeywords }) => {
  useEffect(() => {
    // Set Document Title
    document.title = metaTitle || 'Arena Animation';

    // Helper function to update or create meta tags
    const updateOrCreateMetaTag = (name, content) => {
      if (!content) return;
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        metaTag.content = content;
      } else {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    // Set Meta Tags
    updateOrCreateMetaTag('description', metaDescription || 'Explore our course offerings at Arena Animation.');
    updateOrCreateMetaTag('keywords', metaKeywords || 'Arena Animation, Online Learning, Course Details');

  }, [metaTitle, metaDescription, metaKeywords]);


  return null;
};

export default SEOHead;
