import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
   
    const [name,setName] = useState('')
     const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const dispatch = useDispatch()
   
    const addTodoHandler = (e) => {         
    e.preventDefault()
    dispatch(addTodo({name,number,address,pincode}))
        
        setName('')
        setNumber('')
        setAddress('')
        setPincode('')
     
  
}


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Number"
        value={Number}
        onChange={(e) => setNumber(e.target.value)}
      />
       <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Address"
        value={Address}
        onChange={(e) => setAddress(e.target.value)}
      />
        <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Pincode"
        value={Pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
    </form>
  )
}

export default AddTodo
