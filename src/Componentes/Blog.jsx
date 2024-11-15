import React from 'react';
import Navbar from './Navbar';
import BlogCover from './BlogCover';
import SectionsBlog from './SectionsBlog'
import Footer from './Footer'
import SearchAppBar from './ImputSearch'


const Blog = () => {
  return (
    <>
      <div>
        <Navbar />
        <BlogCover />
        <SearchAppBar />


        <div className='contenedorGBlog'>
        <div className='cajaSecctiones' sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.6)',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #d3d3d3 100%)',
          padding: '10%',
        }}>
          <SectionsBlog />
        </div>
          
          <div className='enlaces'>
            <p>
              ACA VAN LOS ENLACES
            </p>
          </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;