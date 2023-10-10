import { useState } from 'react';
import { Button, Checkbox, Label, Modal, Progress } from 'flowbite-react'
import filter from '../../assets/icons/filter.svg'
import chevron from '../../assets/icons/chevron.svg'
import './styles.scss'

const Filters = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <section className="filters-container">
      <section className='filters'>
        <Button
          className='filters__button'
          onClick={() => setOpenModal('form-elements')}
        >
          <span className='filters__text-button'>Filters</span>
        </Button>
        <Modal show={openModal === 'form-elements'} size='md' popup onClose={() => setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <div className='space-y-6'>
              <div className='filters__wrapper-title'>
                <img src={filter} alt='filter icon' />
                <h3 className='filters__wrapper-title--title text-xl font-medium text-gray-900 dark:text-white'>Filters</h3>
              </div>
              <div className='filters__bar'></div>
              <div className='filters__wrapper-subtitle'>
                <h3 className='filters__wrapper-subtitle--title'>No. of transit</h3>
                <img src={chevron} alt="" />
              </div>
              <div className='filters__checkbox-wrapper flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='direct' />
                  <Label className='filters__label' htmlFor='direct'>Direct</Label>
                </div>
              </div>
              <div className='filters__checkbox-wrapper flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='transit' />
                  <Label className='filters__label' htmlFor='transit'>1 transit</Label>
                </div>
              </div>
              <div className='filters__bar'></div>
              <div className='filters__wrapper-subtitle'>
                <h3 className='filters__wrapper-subtitle--title'>Transit point</h3>
                <img src={chevron} alt="" />
              </div>
              <div className='filters__checkbox-wrapper flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='departure' />
                  <Label className='filters__label' htmlFor='departure'>Osaka (ITM)</Label>
                </div>
              </div>
              <div className='filters__checkbox-wrapper flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='arrival' />
                  <Label className='filters__label' htmlFor='arrival'>Kuala Lumpur (KUL)</Label>
                </div>
              </div>
              <div className='filters__bar'></div>
              <div>
                <div className='filters__wrapper-subtitle'>
                  <h3 className='filters__wrapper-subtitle--title'>Transit duration</h3>
                  <img src={chevron} alt="" />
                </div>
                <Progress color='purple' progress={45} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
      <section className='filters-desktop'>
        <h1>hola hola hola lola</h1>
      </section>
    </section>
  )
}

export default Filters
