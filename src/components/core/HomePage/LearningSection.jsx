import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningSection = () => {
  return (
    <div className='mt-[100px] mb-28'>
      <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl text-center font-semibold'>
            Your swiss knife for
            <HighlightText text={" learning any language"} />
        </div>

        <div className='text-center text-richblack-600 mx-auto mt-3 text-base font-semibold w-[70%]'>
            Using spin making learning multiple languages easy. With 20+ languages realistic voice-over,
            progress tracking, custom schedule and more.
        </div>

        <div className='flex items-center justify-center mt-5'>
            <img src={knowYourProgress} className='object-contain -mr-32' />

            <img src={compare_with_others} className='object-contain' />

            <img src={plan_your_lesson} className='object-contain -ml-36' />
        </div>

        <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>

      </div>
    </div>
  )
}

export default LearningSection
