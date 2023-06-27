// import react
import { useContext, useState } from 'react'

// import asset
import { menu, close, trash } from '../assets'

// import context
import GlobalContext from '../context/GlobalContext'

// import firestore
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

function ListOffice() {

  const { offices, setSelectOffice, setShowAddOffice } = useContext(GlobalContext)

  const [toggle, setToggle] = useState(false)

  async function deleteOffice(id) {
    const userDoc = doc(db, "/office", id);
    await deleteDoc(userDoc)
    setSelectOffice(null)
  }

  return (
    <div>
        <img 
          src={toggle ? close : menu} 
          alt="List Office" 
          className=' bg-blue-gradient rounded-md w-[28px] h-[28px] object-contain' 
          onClick={() => {
            setToggle((prev) => !prev)
            if (setShowAddOffice){
              setShowAddOffice(false)
            }
          }}/>

        <div className={`${toggle ? 'flex' : 'hidden'} flex-col p-6 bg-black-gradient absolute z-10 md:left-0 xs:left-8 -left-4 md:top-8 xs:top-0 top-8 min-w-[300px] mx-4 my-2 rounded-xl sidebar`}>

          <div className=' md:max-h-fit max-h-[80px] overflow-y-auto'>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {offices.map((office) => (
                <li 
                  key={office.id}
                  className={` w-full font-normal cursor-pointer text-[16px] mb-4 text-white self-start flex justify-between`}
                  onClick={() => setSelectOffice(office)}
                >
                  <p>
                    Cabang {office.city}, {office.employee} Pegawai
                  </p>
                  <img 
                    src={trash} alt="trash" 
                    className=' bg-blue-gradient rounded-md m-1 w-[20px] h-[20px] object-contain' 
                    onClick={() => {deleteOffice(office.id)}}
                  />
                </li>
              ))}
            </ul>

          </div>
          <button 
            className='py-1 px-3 bg-blue-gradient font-medium text-[16px] text-primary outline-none rounded-[10px] self-start'
            onClick={() => setShowAddOffice(true)}
          >
            Add Office
          </button>
        </div>
    </div>
  )
}

export default ListOffice