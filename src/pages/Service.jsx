import React from 'react'
import Header from '../component/Header'
import MoveWithCursor from '../component/MoveWithCursor'
import Shape from '../component/Shape'
import About from '../component/About'
import Card from '../component/Service-card';

const Service = () => {
  const data = [
    {
      id: 1, name: "UI/UX Designer", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333"></path>
        <path d="M56 24H24v32"></path>
      </svg>
    },
    {
      id: 2, name: "Web Devlopment", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56"></path>
      </svg>
    }, {
      id: 3, name: "Degital Marketing", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16"></path>
      </svg>
    }, {
      id: 4, name: "Graphic Desing", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20  text-blue-500">
        <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44"></path>
        <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56"></path>
        <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z"></path>
      </svg>
    }, {
      id: 5, name: "Mobile App", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20 text-blue-500">
        <path d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334"></path>
      </svg>
    }, {
      id: 6, name: "Video Editing", img: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-12 w-12 text-primary lg:h-20 lg:w-20 text-blue-500">
        <path d="m49.621 47.333-10.4.715h-.072a36.88 36.88 0 0 0-9.925 2.208l-6.696 2.421a10.962 10.962 0 0 1-8.765-.576 10.188 10.188 0 0 1-5.28-6.738l-3.67-16.134a9.784 9.784 0 0 1 1.43-7.626 10.57 10.57 0 0 1 6.637-4.43l30-6.277c5.699-1.195 11.325 2.267 12.568 7.733l3.741 16.432a9.806 9.806 0 0 1-1.858 8.23 10.686 10.686 0 0 1-7.707 4.032v.005l-.003.005Z"></path>
        <path d="M24 26.667 27.221 40l11.446-10.667L24 26.667Z"></path>
      </svg>
    }

  ];
  return (
    <div>
      <MoveWithCursor />
      <Shape />
      <div className="md:container mx-auto">
        <Header />
        <div className="lg:grid grid-cols-3">
          <div>
            <About />
          </div>

          <div className="service col-span-2">
            <section className='m-5 px-10 pt-8 pb-4 bg-white rounded-xl'>
              <div className='lg:flex justify-between'>
                <div className="title">
                  <h2 className='text-4xl font-bold'>Services I <span className='text-blue-800 mr-2'>Offered</span>👋</h2>
                </div>
                <div class="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-slate-100 px-4 py-2 text-center text-base font-medium leading-none text-blue-600 lg:text-lg">
                  <span class="relative flex h-3 w-3 shrink-0">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex h-3 w-3 rounded-full bg-blue-700"></span>
                  </span>
                  <span>Available For Hire</span>
                </div>
              </div>
              <div className="content lg:w-[75%] w-full">
                <p className='text-2xl text-slate-400 mt-8'>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className='font-bold text-black'>Product Design and Development</span> Services!</p>
              </div>
              <div className="service-box sm:grid grid-cols-2 xl:grid-cols-3 gap-y-5 lg:my-14">
                {data.map((item, index) => (
                  <Card item={item} />
                ))}
              </div>
              <div class="mt-10 lg:mt-14">
                <div class="group flex gap-6 overflow-hidden rounded-lg bg-slate-200 p-6">
                  <div class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                    <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                      Let's 👋 Work Together
                    </a>
                    <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                      Let's 👋 Work Together
                    </a>
                  </div>
                  <div class="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                    <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                      Let's 👋 Work Together
                    </a>
                    <a href="contact.html" class="relative inline-block whitespace-nowrap text-3xl font-medium text-slate-500 transition before:mr-3 before:content-['\2022'] hover:text-black  md:text-[40px]">
                      Let's 👋 Work Together
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
