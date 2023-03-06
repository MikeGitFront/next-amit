import React from 'react'
import { OnBoardingCreateStoreBannerData } from '../../../../../lib/cms'
import { Button } from '../../UI/Button'

export type OnBoardingCreateStoreBannerProps = {
  data: OnBoardingCreateStoreBannerData
}

export const OnBoardingCreateStoreBanner: React.FC<OnBoardingCreateStoreBannerProps> = ({ data }) => {
  const { button } = data
  return (
    <div className="h-24 flex justify-center z-100 items-center fixed bottom-0 left-0 w-full shadow-[0_0_15px_rgba(0,0,0,.1)] bg-white z-[3]">
      <Button href={button?.href} type={button?.buttonType}>
        {button?.label}
      </Button>
    </div>
  )
}
