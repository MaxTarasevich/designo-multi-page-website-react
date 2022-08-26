import React from 'react'

import Button from '../button/Button'

import './Talk.scss'


const Talk = () => {
  return (
    <section className="talk">
        <div className="talk__info">
            <h2 className="talk__title">
                Let’s talk about your project
            </h2>

            <p className="talk__text">
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
        </div>

        <Button text={'Get in touch'} dark={false} link={'/contact'}/>
    </section>
  )
}

export default Talk