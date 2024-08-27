import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../utils'

const buttonVariants = cva(
    "btn rounded-xl hover:scale-105 text-base px-[19px] py-2 font-[SFProDisplay-Bold] tracking-wider",
    {
        variants: {
            variant: {
                primary: "btn-primary text-white",
                white: "bg-white hover:bg-slate-100 text-black"
            },
            size: {
                sm: "h-6 w-18",
                md: "h-10 w-30"
            },
            type: {
                signup: "h-[55px] w-[147px]",
                signin: "w-[130px] lg:h-[55px] w-[130px] lg:w-[147px]",
                button: "h-[55px] w-[126px]"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            type: "button"
        }
    }
)


function Button({children, className, variant, size, type, onclick}) {
  return (
    <button className={cn(buttonVariants({ variant, size, type, className }))} style={{fontWeight: '800'}} onClick={onclick}>{children}</button>
  )
}

export default Button
