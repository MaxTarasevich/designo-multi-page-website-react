import React from 'react'
import AboutCards from '../components/aboutCards/AboutCards'
import AboutHeader from '../components/aboutHeader/AboutHeader'
import AboutInfo from '../components/aboutInfo/AboutInfo'
import Footer from '../components/footer/Footer'
import Nav from '../components/navigation/Nav'
import Talk from '../components/Talk/Talk'

import images from '../constants/images'

const AboutCardInfoData=[
  {
    img:`${images.aboutTalent}`,
    title:'World-class talent',
    text1:'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    text2:'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    revers:false,
  },
  {
    img:`${images.aboutDeal}`,
    title:'The real deal',
    text1:'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
    text2:'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    revers:true,
  }
]


const AboutHeaderData = {
  title:'About Us',
  text:'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
  image:`${images.aboutHero}`
}

const About = () => {
  return (
    <>
    <Nav dark={false} header/>
    
    <AboutHeader title={AboutHeaderData.title}
                  text={AboutHeaderData.text}
                  image={AboutHeaderData.image} />
       
    <AboutInfo img={AboutCardInfoData[0].img}
                  title={AboutCardInfoData[0].title}
                  text1={AboutCardInfoData[0].text1}
                  text2={AboutCardInfoData[0].text2}
                  revers={AboutCardInfoData[0].revers}/>

    <AboutCards />
      
    <AboutInfo img={AboutCardInfoData[1].img}
                  title={AboutCardInfoData[1].title}
                  text1={AboutCardInfoData[1].text1}
                  text2={AboutCardInfoData[1].text2}
                  revers={AboutCardInfoData[1].revers}/>

    <Talk />

    <Footer />
  </>
  )
}

export default About