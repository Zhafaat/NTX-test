// import react
import { useContext, useRef } from 'react'

// import context
import GlobalContext from '../context/GlobalContext'

// import firestore
import { collection, addDoc} from "firebase/firestore";
import { db } from "../firebase-config"


function AddAttendance({id}) {

  const { setShowAddAttendance } = useContext(GlobalContext)

  const date = useRef();
  const present = useRef();
  const sick = useRef();
  const leave = useRef();
  const onProject = useRef();
  const inOffice = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const query = collection(db, `/office/${id}/attendance`)
    const timestamps = new Date(date.current.value)
    await addDoc(query, {
      date: timestamps,
      present: present.current.value,
      sick: sick.current.value,
      leave: leave.current.value,
      onProject: onProject.current.value,
      inOffice: inOffice.current.value
    })
    e.target.reset()
    setShowAddAttendance(false)
  }

  return (
    <div className='absolute z-30 m-4 w-[50%] h-fit top-0 right-0 p-6 bg-black-gradient rounded-xl sidebar'>
      <form
        className=' flex flex-col'
        onSubmit={handleSubmit}
      >
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="date" ref={date} placeholder='Date...' />
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="number" ref={present} placeholder='Present...' />
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="number" ref={sick} placeholder='Sick...' />
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="number" ref={leave} placeholder='leave' />
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="number" ref={onProject} placeholder='On Project...' />
        <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' type="number" ref={inOffice} placeholder='In Office' />
        <div className=' flex justify-between'>
            <button className='py-1 px-3 bg-blue-gradient font-medium text-[16px] text-primary outline-none rounded-[10px]' type='submit'>Add</button>
            <button 
                className='py-1 px-3 bg-blue-gradient font-medium text-[16px] text-primary outline-none rounded-[10px]' 
                onClick={() => setShowAddAttendance(false)}
            >
                close
            </button>
        </div>
      </form>

    </div>
  )
}

export default AddAttendance