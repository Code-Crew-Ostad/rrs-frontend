import React from 'react'
import ClientCard from './ClientCard'

const Clients = () => {
  return (
    <div className='flex flex-col  items-center mb-20'>
        <div className='text-4xl font-thin mb-10'>Hear from our valued clients</div>
        <div className='flex flex-wrap w-8/12 justify-center'>
            <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
            <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
            <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
            <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
            <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
             <ClientCard 
            description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugit accusantium velit quia ex ipsam vitae laborum, corporis voluptatem ipsa?"}
            name={"John Doe"}
            company={"Green Town"}
            />
        </div>
    </div>
  )
}

export default Clients