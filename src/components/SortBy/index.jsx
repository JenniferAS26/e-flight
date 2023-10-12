import React from 'react'
import { useState } from 'react'
import { Button, Label, Modal, Radio } from 'flowbite-react'
import chevron from '../../assets/icons/chevron.svg'
import options from '../../assets/icons/options.svg'
import './styles.scss'

const SortBy = () => {
  const [openModal, setOpenModal] = useState();


  return (
    <section className='sortby-container'>
      <section className='sortby'>
        <Button
          className='sortby__button'
          onClick={() => setOpenModal('form-elements')}
        >
          <span className='sortby__text-button'>Sort by</span>
        </Button>
        <Modal show={openModal === 'form-elements'} size='md' popup onClose={() => setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <div className='sortby__content-container space-y-6'>
              <h3 className='sortby__title text-xl font-medium text-gray-900 dark:text-white'>Sort by</h3>
              <div className='sortby__bar'></div>
              <fieldset
                className='flex max-w-md flex-col gap-4'
                id='radio'
              >
                <legend className='mb-4 sortby__legend'>
                  Price
                </legend>
                <div className='flex items-center gap-2'>
                  <Radio
                    id='lowest'
                    name='price'
                    value='lowest'
                    className='sortby__radio'
                    defaultChecked
                  />
                  <Label htmlFor='lowest' className='sortby__label'>
                    Lowest price
                  </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio
                    id='highest'
                    name='price'
                    value='highest'
                    className='sortby__radio'
                  />
                  <Label htmlFor='highest' className='sortby__label'>
                    Highest price
                  </Label>
                </div>
              </fieldset>
            </div>
          </Modal.Body>
        </Modal>
      </section>
      <section className='sortby-desktop'>
        <div className='sortby-desktop__top-container'>
          <div className='sortby-desktop__top-container--left'>
            <img src={options} alt='bars icon' />
            <h3 className='title'>Sort by</h3>
          </div>
          <span className='sortby-desktop__top-container--span'>Reset</span>
        </div>
        <div className='sortby-desktop__bar-desktop'></div>
        <div className='sortby-desktop__bottom-container'>
          <div className='sortby-desktop__bottom-container--top'>
            <h4 className='title'>Price</h4>
            <img className='cursor-pointer' src={chevron} alt='chevron icon' />
          </div>
          <form className='sortby-desktop__bottom-container--form'>
            <div className='input-container'>
              <input className='input-container__radio-button' type='radio' id='lowest' />
              <label className='input-container__label' htmlFor='lowest'>Lowest price</label>
            </div>
            <div className='input-container'>
              <input className='input-container__radio-button' type='radio' id='highest' />
              <label className='input-container__label' htmlFor='highest'>Highest price</label>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default SortBy
