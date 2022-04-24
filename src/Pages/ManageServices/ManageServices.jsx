import React from 'react'
import useServices from '../../Hooks/useServices'

const ManageServices = () => {
    const[services] = useServices();
  return (
    <div className='w-50 mx-auto'>
        <h2>Manage Services</h2>
        {
            services.map(service => <div key={service._id}>
                <h5>{service.name} <button>X</button></h5>
            </div>)
        }
    </div>
  )
}

export default ManageServices