import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from 'reactstrap';

const MenuItem = (props) => {
  return (
    <div style={styles.menuItem} className='container text-align-center'>
      <div className='row d-flex justify-content-center'>
        <div className='col-4'>
          <img style={styles.itemPicture} src={props.orderItem.image} alt="" height={60} width={60} />
        </div>
        <div className='col-5'>
          <div >{props.orderItem.name}</div>
          <div >{`$${props.orderItem.cost}`}</div>
        </div>
        <div className='col-2'>
          <div onClick={() => props.edit(null, props.orderItem.id, true, true)}>
            <i style={styles.menuIcon} className='fa fa-plus-circle fa-lg' />
          </div>
          <div>{props.orderItem.quantity}</div>
          <div onClick={() => props.edit(null, props.orderItem.id, true, false)}>
            <i style={styles.menuIcon} className='fa fa-minus-circle fa-lg' />
          </div>
        </div>
      </div>
      <div style={styles.menuItem, styles.menuCustom}
        className='row d-flex justify-content-center'
        onClick={() => props.modal(props.orderItem)}
      >
        <div><i className='fa fa-plus fa-lg' />{' '}Special</div>
      </div>
      <div style={styles.menuCustom} className='row d-flex justify-content-center ml-2'>
        <div>Instructions</div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div style={styles.menuItemUnderline} />
      </div>
      <div>
      </div>
    </div>
  )
}

const RightSidebar = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false);
  const [itemToEdit, setCurrentItem] = useState('');

  const toggle = () => setModal(!modal);
  const handleSpecialInstructions = (currentItem) => {
    setCurrentItem(currentItem)
    setModal(!modal)
  }

  const getSubtotal = (inCart) => {
    const costs = inCart.map(item => parseFloat(item.cost) * item.quantity)
    console.log(costs)
    const reducer = (a, c) => a + c
    const subtotal = costs.reduce(reducer, 0).toFixed(2)
    return subtotal
  }

  return (
    <div className='container'>
      <div className='row'>
      <div className=' '>
    <div className={`outer ${isOpen ? 'right-open' : ''}`} style={{ display: 'flex' }}>
      <div className='right-sidebar-tab' style={{ marginTop: 150 }} onClick={() => setIsOpen(!isOpen)}>
        O<br />R<br />D <br />E<br />R
        </div>
      <div className={`container right-side-bar text-center `} >
        <div className='row d-flex justify-content-center'>
          <div className='col-12'></div>
          <h4 style={styles.headerTitle}>Your Order</h4>
          <div className='' style={styles.underline} />
        </div>
        <div style={styles.menuItems}>
          {props.inCart.map(orderItem => {
            return <MenuItem id={orderItem.id} orderItem={orderItem}
              modal={handleSpecialInstructions}
              modalOpen={modal}
              edit={props.edit}
            />
          })}
        </div>

        <Form style={styles.form}>
          <div className=' d-flex justify-content-start'>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='diningChoice' onChange={e => props.editPref('delivery', 'diningChoice')} />
                  Delivery
              </Label>
            </FormGroup>
          </div>
          <div className=' d-flex justify-content-start'>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='diningChoice' onChange={e => props.editPref('pick up', 'diningChoice')} />
                  Pick Up
              </Label>
            </FormGroup>
          </div>
          <div className=' d-flex justify-content-start'>
            <FormGroup check>
              <Label check>
                <Input type='radio' onChange={e => props.editPref('dine in', 'diningChoice')} name='diningChoice' />
                  Dine In
              </Label>
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="time">Pick Up Time</Label>
            <Input
              type="time"
              name="time"
              id="time"
              placeholder="time placeholder"
              // value={props.preferences.pickUpTime}
              onChange={e => props.editPref(e.target.value, 'pickUpTime')}
            />
          </FormGroup>
          <div>
            Subtotal: ${getSubtotal(props.inCart)}
          </div>
          <div className='container d-flex justify-content-center'>
            <div style={styles.submitButton} onClick={props.submit} >
              <div className='d-flex justify-content-center'>Checkout</div>
            </div>
          </div>
        </Form>

        <div>
          <Modal className='d-flex justify-content-center' style={styles.modal} isOpen={modal} toggle={toggle}>
            <ModalHeader className='text-center' style={styles.modalHeader} toggle={toggle}>Special Instructions</ModalHeader>
            <ModalBody>
              {itemToEdit.name}
              <Input type='textarea' onChange={e => props.edit(e, itemToEdit.id)} value={itemToEdit.specInstructions} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Done</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
const styles = {
  headerTitle: {
    marginTop: 80,
  },
  underline: {
    borderBottom: '2px solid #707070',
    width: '70%'
  },
  menuItems: {
    marginTop: 10,
    height: '40%',
    border: '1px solid #dedede',
    overflowY: 'scroll'
  },
  menuItem: {
    marginTop: 30,
  },
  menuCustom: {
    color: '#3057C2',
    cursor: 'pointer'
  }
  ,
  itemPicture: {
    borderRadius: 5,
    height: 70,
    width: 90
  },
  menuItemUnderline: {
    marginTop: 10,
    borderBottom: '2px solid #707070',
    width: '50%',
  },
  menuIcon: {
    cursor: 'pointer'
  },
  modal: {
    position: 'absolute',
    right: 10,
    width: '40%'
  },
  modalHeader: {
    backgroundColor: '#3057C2',
    color: '#fff'
  },
  form: {
    marginTop: 10
  },
  submitButton: {
    marginTop: 10,
    width: '35%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#3057C2',
    color: '#fff',
    cursor: 'pointer'
  }
}

export default RightSidebar