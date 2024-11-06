import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredReadList } from './Utility/addToDb';
import ListedBooks from './ListedBooks/ListedBooks';


export default function Dashboard() {
   const [readBooks, setReadBooks] = useState([]);
   console.log(readBooks);
   

   const allBooks = useLoaderData();
   

   useEffect(() => {
    const stoerReadList = getStoredReadList()
    const stroedRedListInt = stoerReadList.map(id => parseInt(id));

    const readBooks = allBooks.filter(book => stroedRedListInt.includes(book.id))
    setReadBooks(readBooks);
    
   }, [])
   

  return (
    <>
    <div className=' text-center text-xl font-bold my-10'>Dashboard</div>
    <h2 className=' text-center text-xl font-bold my-10'>{readBooks.length}</h2>
    
    <div>

      {readBooks.map(storageBooks => <div key={storageBooks.id}>
        <div className=' flex flex-col justify-center items-center my-10'>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=' h-[400px] rounded-xl'>
                    <img className="p-8 rounded-t-lg h-full w-full object-cover rounded-full" src={storageBooks.img_url} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{storageBooks.name}</h5>
                    <h5 className="text-xl font-semibold tracking-tight text-yellow-300 my-2">{storageBooks.author}</h5>
                </a>
               <div>
               <button onClick={()=> deleteRead(storageBooks.id)} className='btn btn-accent'>Delete</button>
               </div>

            </div>
        </div>
    </div>
      </div>)}
    </div>
    </>
  )
}
