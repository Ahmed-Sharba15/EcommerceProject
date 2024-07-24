import React from 'react'
import Footer from '../Components/Footer'
import HeadlineCards from '../Components/HeadlineCards'



function About() {
  return (
    <div>
      <HeadlineCards/>
        <div className='mb-16'>
        <h3 className='lg:ml-20 lg:mr-20 font-semibold
         '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt. Error hic laudantium nihil fuga 
          tenetur neque odit nisi ratione? Unde eos consequatur omnis voluptas itaque ipsa, totam quibusdam quas.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus qui, aperiam veniam libero quisquam soluta esse recusandae nobis,
           enim rerum eligendi tenetur delectus sequi deleniti doloremque nesciunt voluptas labore exercitationem laboriosam dolores molestiae quas 
           nulla quae omnis? Dolorum veritatis voluptas eum ad distinctio doloremque, ipsa alias dolores labore suscipit, hic quod, autem vitae sint ab! 
           Deserunt ab, atque tenetur suscipit iste at porro. Deleniti odio dolorem pariatur ab quae, alias voluptatum, doloribus laudantium ducimus vel magni
            tempore possimus officia esse excepturi veritatis a quas qui quo, maxime libero sequi nulla optio. Asperiores, ad quia? Veritatis, at! Rem 
            adipisci sequi quod!
            </h3>
        </div>
        

        <section className='h-full max-h-[640px] mb-8 xl:mb-10 '>
        <div className='flex flex-col lg:flex-row mb-24 '>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src="https://i.pinimg.com/236x/ce/ce/60/cece605f90c7d063083ffc6c616071f6.jpg" alt=""  />
          <img src="https://i.pinimg.com/236x/39/1f/6b/391f6b3af33ab938367e305f921de0ef.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/ed/8f/12/ed8f125fcd7bebe66686d498b091e33a.jpg" alt="" />
        
          </div>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
          lg:items-start text-center lg:text-left 
          justify-center flex-1 px-4 lg:px-0'>
          <p className='mx-w-[480px] mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus!
              adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus!
              adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus!</p>
              <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white px-20 py-3 rounded-md mt-4" 
                >
                  Order Now
                </a>
                
        </div>
      
        </div>
        </section>
        
        <div className="bg-gray-100 lg:ml-20 lg:mr-20">

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-500 mb-8 flex justify-center">Group Member</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src="./images/Aglad.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex justify-center">
                Abdullahi Abdi Hashi
              </h3>
              <p className="text-gray-600 mb-4 flex justify-center">Group Leader</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src="./images/suleyman.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex justify-center">
                Suleiman Ali Abshir
              </h3>
              <p className="text-gray-600 mb-4 flex justify-center">Member</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src="./images/mahad.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex justify-center">
                Mahad Abdi Hussein
              </h3>
              <p className="text-gray-600 mb-4 flex justify-center">Member</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src="./images/Abdi.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex justify-center">
                Abdifitax Mahad Ali 
              </h3>
              <p className="text-gray-600 mb-4 flex justify-center">Member</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <img
                src="./images/muno.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex justify-center">
                Muno Bashiir Saciid
              </h3>
              <p className="text-gray-600 mb-4 flex justify-center">Member</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, magna vel ultricies tincidunt, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>

        <Footer/>
    </div>
  )
}

export default About