import { useState } from 'react';
import Navbar from './Navbar'


const Landing = () => {
  const [isEmployeeSelected, setIsEmployeeSelected] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    { name: 'Linkedin', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' },
    { name: 'Indeed', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Indeed_logo.png' },
    { name: 'Meetup', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png' },
    { name: 'AngeList', logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/AngelList_logo.svg' },
  ];

  const handleCompanyClick = (index) => {
    // Toggle selection on click
    setSelectedCompany((prevSelected) => (prevSelected === index ? null : index));
  };



  return (
    <>
      <Navbar />

      <body className=' pt-20 pb-20 mb-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400'>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Company to Export</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded shadow-md ${selectedCompany === index ? 'border-4 border-blue-500' : ''
                  }`}
                onClick={() => handleCompanyClick(index)}
              >
                <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-24 object-contain mb-4" />
                <p className="text-center font-semibold">{company.name}</p>
              </div>
            ))}
          </div>


        </div>
        <div className='flex items-center justify-center h-screen'>

          <div className='grid grid-cols-2 w-3/4 p-10 m-10'>

            <div className="bg-gray-100 items-center justify-center p-10">
              <h1 className="text-3xl font-semibold mb-4">Accuwork</h1>
              <p className=" mb-4">
                Get the proof of work experience and secure it
              </p>
              <p>
                0.001 ethereum for one request
              </p>
            </div>

            <div className="bg-gray-100 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xl">
                <div>
                  <div class="text-center">
                    <button class="w-1/2 bg-blue-600 text-white font-bold py-2 px-4 rounded-l transition duration-300 ease-in-out hover:bg-blue-700 hover:text-gray-100 focus:outline-none focus:bg-blue-700 focus:border-blue-500 focus:shadow-outline-blue focus:text-black"
                      onClick={() => setIsEmployeeSelected(true)}>
                      Employee
                    </button>
                    <button class="w-1/2 bg-green-700 text-white font-bold py-2 px-4 rounded-r transition duration-300 ease-in-out hover:bg-green-800 hover:text-gray-100 focus:outline-none focus:bg-green-800 focus:border-green-600 focus:shadow-outline-green focus:text-black"
                      onClick={() => setIsEmployeeSelected(false)}>
                      Employer
                    </button>
                  </div>
                  {isEmployeeSelected ? (
                    <>
                      <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                      <input type="url" id="website" className="bg-gray-50  border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name" required />
                      <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Position" required />
                      <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
                      <div date-rangepicker class="flex items-center mt-3">
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div>
                        <span class="mx-4 text-gray-500">to</span>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <input type="url" id="website" className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Employee Address" required />
                    </>
                  )}

                </div>
                <div>
                  <div class="mt-5 text-right">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Export</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Landing; 