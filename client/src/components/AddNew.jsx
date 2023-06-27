// import react
import { useContext, useRef } from 'react';

// import firestore
import { collection, addDoc} from "firebase/firestore";
import { db } from '../firebase-config';
import { GeoPoint } from "firebase/firestore";

// import context
import GlobalContext from '../context/GlobalContext';

function AddNew() {

    const { setShowAddOffice, setSelectOffice } = useContext(GlobalContext)

    const city = useRef();
    const latitude = useRef();
    const longitude = useRef();
    const employee = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        const officesCollectionRef = collection(db, '/office')
        await addDoc(officesCollectionRef, {
            city: city.current.value,
            geocode: new GeoPoint(latitude.current.value, longitude.current.value),
            employee: employee.current.value,
        })
        e.target.reset()
        setSelectOffice(null)
        setShowAddOffice(false)
    }

  return (
    <div className=' flex flex-col p-6 bg-black-gradient absolute z-10 md:left-0 xs:left-8 -left-4 md:top-8 xs:top-0 top-8 min-w-[300px] mx-4 my-2 rounded-xl sidebar'>
        <form
            onSubmit={handleSubmit}
        >
            <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' placeholder='city...' type="text" ref={city} />
            <div className=' flex justify-around'>
                <input className=' w-[45%] bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' placeholder='latitude...' type="number" step={`any`} ref={latitude} />
                <input className=' w-[45%] bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' placeholder='longitude...' type="number" step={`any`} ref={longitude} />
            </div>
            <input className=' bg-transparent outline-none text-white border-b-2 border-indigo-500 pl-2 mb-2' placeholder='employee...' type="number" ref={employee} />
            <div className=' flex justify-between'>
                <button className='py-1 px-3 bg-blue-gradient font-medium text-[16px] text-primary outline-none rounded-[10px] self-start' type='submit'>Add</button>
                <button 
                    className='py-1 px-3 bg-blue-gradient font-medium text-[16px] text-primary outline-none rounded-[10px] self-start' 
                    onClick={() => setShowAddOffice(false)}
                >
                    close
                </button>
                
            </div>
        </form>
    </div>
  )
}

export default AddNew