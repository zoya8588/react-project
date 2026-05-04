import Section1 from './components/section-1/section1'
import Section2 from './components/section-2/section2'
import LeftContent from './components/section-1/LeftContent'
import RightContent from './components/section-1/RightContent'
import RightCard from './components/section-1/RightCard'
import Navbar from './components/section-1/Navbar'


const App = () => {
  const users= [

    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'We prioritize delivering consistent value to our core audience to ensure long term success this segment represents the gold standard of our loyalty and stability!',
      tag:'Satisfied',
      count:"1"
    },

    {img:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'We prioritize delivering consistent value to our core audience to ensure long term success this segment represents the gold standard of our loyalty and stability!',
      tag:'Management',
      count:"2"
    },

    {img:'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'We prioritize delivering consistent value to our core audience to ensure long term success this segment represents the gold standard of our loyalty and stability!',
      tag:'Adaptable',
      count:"3"
    },

    {img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixcount=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Identifying gaps in the current market allows us to reach individuals with unmet needs we are dedicated to developing inclusive solutions that provide high quality access!',
      tag:'Underserved',
      count:"4"
      },

    {img:'https://plus.unsplash.com/premium_photo-1681823043769-a7c20809a756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixcount=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'We help users to build a financially stable future this segment drives our innovation towards creating a more equitable economic landscape for our valuable users with security!',
      tag:'Underbanked',
      count:"5"

      },
      
      {img:'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixcount=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'We provide secure,digital-first tools designed for those excluded from conventional systems through transparent and flexible options!',
      tag:'Professional',
      count:"6"

      },

  ]
  return (
  <div className="relative min-h-screen">
    
    <div className="shapes-bg">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>

    <Section1 users={users} />
    

    

  </div>
)
}

export default App