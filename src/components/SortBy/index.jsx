import { Button, Label, Modal, Radio } from 'flowbite-react'
import { useState } from 'react'
import './styles.scss'

const SortBy = () => {
  const [openModal, setOpenModal] = useState();

  return (
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
  )
}

export default SortBy
