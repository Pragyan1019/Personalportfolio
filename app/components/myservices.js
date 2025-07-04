import React from 'react'

const Myservices = ({link,topic,desc}) => {
  return (
      <div className="webdev grid  border-neutral-800 bg-neutral-900 rounded-lg border relative hover:-translate-y-1 hover:!border-teal-500  transition-all duration-300 hover:cursor-pointer py-4 px-2">
         <div className="absolute inset-0 h-1/2 bg-gradient-to-b rounded-lg from-white/5 to-transparent webdev-hover:from-white/10 transition-all duration-300 ease-in-out"></div>
         <div className="relative">
        
          <img src={link} alt="" width="40" height="20" />
<h3 className="mb-3 text-xl font-bold text-neutral-100">
      {topic}
    </h3>
     <p className="text-neutral-400 leading-relaxed">
{desc}    </p>
    </div>
      </div>
  )
}

export default Myservices
