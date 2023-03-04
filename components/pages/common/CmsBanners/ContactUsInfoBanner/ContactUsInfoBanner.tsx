import Image from "next/image"
import Link from "next/link"
import React, { FormEvent } from "react"
import { ContactUsInfoBannerData } from "../../../../../lib/cms"
import { Button } from "../../UI/Button"
import { Container } from "../../UI/Container"
import s from "./ContactUsInfoBanner.module.css"

export type ContactUsInfoBannerProps = {
  data: ContactUsInfoBannerData
}


export const ContactUsInfoBanner: React.FC<ContactUsInfoBannerProps> = ({ data }) => {
  const { items, title } = data

  return (
    <Container>
      <div className="lg:grid grid-cols-[auto_minmax(150px,450px)] flex flex-col gap-16">
        <div className={s.formWrapper}>
          <div className="text-heading pb-6 mt-2">Get in touch with us for any inquiries. We will contact you back as soon as possible</div>
          <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
          }} className="md:grid flex flex-col md:grid-cols-[1fr_1fr] gap-x-8 gap-y-2">
            <label>
              <span className={s.label}>Name *</span>
              <input type="text" className={s.input} name="name" />
            </label>
            <label>
              <span className={s.label}>Email *</span>
              <input type="email" className={s.input} name="email" />
            </label>
            <label>
              <span className={s.label}>Phone *</span>
              <input type="tel" className={s.input} name="phone" />
            </label>
            <label>
              <span className={s.label}>Company *</span>
              <input type="text" className={s.input} name="company" />
            </label>
            <label className="col-span-2">
              <span className={s.label}>Your Message *</span>
              <textarea style={{ minHeight: "100px"}} placeholder="Type your message here..." className={s.input} name="name" />
            </label>
            <div className="col-span-2 text-heading">Required fields are marked *</div>
            <div className={s.file}>
              <div className="flex flex-col items-center justify-center">
                <span>Drag & Drop or <label htmlFor="upload">browse</label></span>
                <p>Max. files: 3</p>
                <p>Max. file size: 10 MB</p>
                <input id="upload" className="hidden" type="file" />
              </div>
            </div>
            <label className="col-span-2 flex items-contact flex-row-reverse justify-end cursor-pointer my-2">
              <span className="pl-4 text-base text-text-primary">By submitting this completed form, I give my consent to process my personal data as set out in the <Link href="/privacy-policy" className="text-primary">Privacy Policy</Link>. For more details please contact info@amitechgrp.com</span>
              <input type="checkbox" className={s.inputCheckbox} name="privacy" />
            </label>
            <Button href="" type="primary" submit>CONTACT US</Button>
          </form>
        </div>
        <div className="flex flex-col justify-center w-auto">
          <div className={s.info}>
            <div className="mb-4 text-[1.75rem] text-text-primary font-semibold">{title}</div>
            <div>
              {items.map(({ image, items, title }, index) => {
                return (
                  <div key={index} className="flex gap-8 py-3">
                    <div className="w-8 h-8">
                      <Image src={image?.url || ""} style={{ objectFit: "contain" }} alt={image?.alternativeText || ""} width={32} height={32} />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-text-primary">{title}</div>
                      {items.map(({ text }, index) => <div key={index} className="text-text-primary">{text}</div>)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}