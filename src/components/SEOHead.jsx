// components/CourseMetaTags.js
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ course }) => {
  useEffect(() => {
    // Log the received course data
    console.log('Course data received in CourseMetaTags:', course);

    if (!course) {
      console.warn('No course data available!');
      return;
    }

    // Log the individual meta fields for debugging
    console.log('Meta Title:', course?.data?.meta_title);
    console.log('Meta Description:', course?.data?.meta_description);
    console.log('Meta Keywords:', course?.data?.meta_keyword);

    // Set Meta Title
    document.title = course?.data?.meta_title || `${course?.name} - Arena Animation`;

    // Set Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      console.log('Updating existing meta description');
      metaDescription.content = course?.data?.meta_description || course?.data?.meta_description?.replace(/<\/?[^>]+(>|$)/g, "") || 'Explore our course offerings at Arena Animation.';
    } else {
      console.log('Creating new meta description');
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = course?.data?.meta_description || 'Explore our course offerings at Arena Animation.';
      document.head.appendChild(newMetaDescription);
    }

    // Set Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      console.log('Updating existing meta keywords');
      metaKeywords.content = course?.data?.meta_keyword || 'Arena Animation, Online Learning, Course Details';
    } else {
      console.log('Creating new meta keywords');
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = course?.data?.meta_keyword || 'Arena Animation, Online Learning, Course Details';
      document.head.appendChild(newMetaKeywords);
    }

  }, [course]);

  return (
    <>
      <Helmet>
        <title>{course?.data?.meta_title || 'Default Course Title'}</title>
        {/* <meta name="description" content={course?.data?.meta_description || 'Default Description'} /> */}
        {/* <meta name="keywords" content={course?.data?.meta_keyword || 'Default Keywords'} /> */}
      </Helmet>

    </>
  ) // This component does not render any UI
};

export default SEOHead;
