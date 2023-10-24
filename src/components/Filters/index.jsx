import { useState } from 'react';
import { Button, Checkbox, Label, Modal, Progress } from 'flowbite-react'
import filter from '../../assets/icons/filter.svg'
import chevron from '../../assets/icons/chevron.svg'
import './styles.scss'

const Filters = () => {
  const [openModal, setOpenModal] = useState();

  const { departure, arrival } = JSON.parse(localStorage.getItem('searchDetail'))

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
                  <Label className='filters__label' htmlFor='departure'>Departure city</Label>
                </div>
              </div>
              <div className='filters__checkbox-wrapper flex justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='arrival' />
                  <Label className='filters__label' htmlFor='arrival'>Arrival city</Label>
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
        <div className='filters-desktop__top-container'>
          <div className='filters-desktop__top-container--left'>
            <img src={filter} alt="filter icon" />
            <h3>Filters</h3>
          </div>
          <span className='filters-desktop__top-container--span'>Reset</span>
        </div>
        <div className='filters-desktop__bar-desktop'></div>
        <div className='filters-desktop__transit-container'>
          <div className='filters-desktop__transit-container--top'>
            <h4 className='title'>No. of transit</h4>
            <img className='cursor-pointer' src={chevron} alt='chevron icon' />
          </div>
          <form className='filters-desktop__transit-container--form'>
            <div className='wrapper'>
              <div className='input-container'>
                <input className='check-input' type="checkbox" name="" id="direct" />
                <label className='check-label' htmlFor="direct">Direct</label>
              </div>
              <span>30 USD</span>
            </div>
            <div className='wrapper'>
              <div className='input-container'>
                <input className='check-input' type="checkbox" name="" id="transit" />
                <label className='check-label' htmlFor="transit">Transit</label>
              </div>
              <span>45 USD</span>
            </div>
          </form>
        </div>
        <div className='filters-desktop__bar-desktop'></div>
        <div className='filters-desktop__point-container'>
          <div className='filters-desktop__point-container--top'>
            <h4 className='title'>Transit point</h4>
            <img className='cursor-pointer' src={chevron} alt='chevron icon' />
          </div>
          <form className='filters-desktop__point-container--form'>
            <div className='input-container'>
              <input 
                className='check-input' 
                type="checkbox" 
                id="departure" 
                value='departure'
              />
              <label className='check-label' htmlFor="departure">{ departure }</label>
            </div>
            <div className='input-container'>
              <input 
                className='check-input' 
                type="checkbox" 
                id="arrival" 
                value='arrival'
              />
              <label className='check-label' htmlFor="arrival">{ arrival }</label>
            </div>
          </form>
        </div>
        <div className='filters-desktop__bar-desktop'></div>
        <Progress color='purple' progress={45} />
      </section>
    </section>
  )
}

export default Filters
