import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo:Logo1,
        Heading:"Leadership",
        Description:"Fully commited to the success company"
    },
    {
        Logo:Logo2,
        Heading:"Responsibility",
        Description:"Students will always be our top priority"
    },
    {
        Logo:Logo3,
        Heading:"Flexibility",
        Description:"The ability to switch is an important skills"
    },
    {
        Logo:Logo4,
        Heading:"Solve the Problem",
        Description:"Code your way to a solution"
    },
]
const TimeLineSection = () => {
  return (
    <div>
      <div className='flex flex-row items-center gap-15'>
         
         <div className='w-[45%] flex flex-col gap-5'>
            {
                timeline.map( (element,index) => {
                    return (
                        <div className='flex gap-5' key={index}>

                            <div className='w-[50px] h-[50px] bg-white items-center flex'>
                                <img src={element.Logo} />
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                                <p className='text-base'>{element.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
         </div>

         <div>
            
            <img src={timelineImage} alt='timelineImage' className='h-fit shadow-lg shadow-pure-greys-400 object-cover' />

         </div>

      </div>
    </div>
  )
}

export default TimeLineSection
