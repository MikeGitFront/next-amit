import Link from 'next/link'
import { FormEvent } from 'react'
import { Button } from '../../common/UI/Button'
import { Container } from '../../common/UI/Container'
import s from './OnBoardingStartPage.module.css'

const OnBoardingStartPage = () => {
  return (
    <Container>
      <div className="min-h-screen flex px-6 pt-6 flex-col items-center text-text-primary">
        <h1 className="text-4xl mt-10 mb-6 font-bold sm:text-[2.8rem]">{`Let's get started!`}</h1>
        <p className="text-center max-w-[28rem]">
          Please specify the essential information to create your store. You can always change it later
        </p>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
          }}
          className={s.form}
        >
          <div className="shadow-[0_0_15px_rgba(0,0,0,.15)] p-6 grid gap-y-4 bg-[#fff]">
            <label className="w-full">
              <span className={s.label}>Store Name *</span>
              <input type="text" className={s.input} name="name" />
            </label>
            <label>
              <span className={s.label}>Store Owner Email *</span>
              <input type="email" className={s.input} name="email" />
            </label>
            <label>
              <span className={s.label}>Phone *</span>
              <input type="tel" className={s.input} name="phone" />
            </label>
            <label className="relative">
              <span className={s.label}>Store Domain *</span>
              <input type="text" className={s.input} name="company" />
              <span className="absolute right-2 top-[2.5rem] text-heading">.my.amitechgrp.cloud</span>
            </label>
            <div className="text-heading py-4">Required fields are marked *</div>
            <label className="flex items-contact flex-row-reverse justify-end cursor-pointer my-2">
              <span className="pl-4 text-base text-text-primary">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-primary">
                  Privacy Policy
                </Link>
              </span>
              <input type="checkbox" className={s.inputCheckbox} name="privacy" />
            </label>
          </div>
          <div className="justify-self-center">
            <Button href="" type="primary" submit>
              GO TO FINAL STEP
            </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default OnBoardingStartPage
