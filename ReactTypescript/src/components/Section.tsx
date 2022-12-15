import React, { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}
                                        //default value of title
export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}