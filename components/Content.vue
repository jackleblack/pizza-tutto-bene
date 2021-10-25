<template>
  <div class="flex flex-wrap">
    <div class="w-full px-6 py-6 bg-gray-800 lg:w-8/12 rounded-3xl">
      <div class="flex items-center justify-between mb-8 text-white">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="">December, 12</p>
      </div>
      <div class="flex flex-wrap items-center justify-between pb-8">
        <div class="flex flex-wrap text-white">
          <div class="pr-10">
            <div class="text-2xl font-bold">45</div>
            <div class="">In Progress</div>
          </div>
          <div class="pr-10">
            <div class="text-2xl font-bold">24</div>
            <div class="">Upcoming</div>
          </div>
          <div>
            <div class="text-2xl font-bold">62</div>
            <div class="">Total Projects</div>
          </div>
        </div>
        <div class="flex items-center mt-4 md:mt-0">
          <button class="text-white bg-transparent" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button class="p-2 ml-2 text-white bg-gray-700" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div
              class="p-4 rounded-3xl"
              :style="{ backgroundColor: '#fee4cb' }"
            >
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-6/12 h-1 bg-yellow-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">60%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    to-golden-600
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="p-4 bg-gray-300 rounded-3xl">
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-5/12 h-1 bg-indigo-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">50%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-indigo-700
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="p-4 bg-green-200 rounded-3xl">
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-7/12 h-1 bg-green-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-green-700
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="p-4 bg-blue-200 rounded-3xl">
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-7/12 h-1 bg-blue-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-blue-700
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="p-4 bg-red-200 rounded-3xl">
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-7/12 h-1 bg-red-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-red-700
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="p-4 bg-purple-200 rounded-3xl">
              <div class="flex items-center justify-b">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mt-5 mb-4 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="
                    w-full
                    h-1
                    mx-0
                    my-2
                    overflow-hidden
                    bg-white
                    rounded-md
                  "
                >
                  <span class="block w-7/12 h-1 bg-purple-700 rounded-md" />
                </div>
                <p class="m-0 text-sm font-bold text-right">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="object-cover w-5 h-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="
                      flex
                      items-center
                      justify-center
                      w-5
                      h-5
                      p-0
                      ml-3
                      bg-white
                      border-none
                      rounded-full
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="
                    flex flex-shrink-0
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-purple-700
                    rounded-lg
                  "
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="px-6 pt-6 bg-gray-800 rounded-3xl">
        <div class="flex pb-6 text-2xl font-bold text-white">
          <p>Client Messages</p>
        </div>
        <div>
          <div
            class="
              flex
              w-full
              p-4
              border-t border-gray-700
              solid
              2xl:items-start
              hover:bg-gray-700
            "
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              class="object-cover w-10 h-10 rounded-full"
            />
            <div class="w-full pl-4">
              <div class="flex items-center justify-between w-full">
                <div class="font-medium text-white">Stephanie</div>
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    h-7
                    w-7
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                I got your first assignment. It was quite good. 🥳 We can
                continue with the next assignment.
              </p>
              <p class="text-sm text-right text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="
              flex
              w-full
              p-4
              border-t border-gray-700
              solid
              2xl:items-start
              hover:bg-gray-700
            "
          >
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              class="object-cover w-10 h-10 rounded-full"
            />
            <div class="w-full pl-4">
              <div class="flex items-center justify-between w-full">
                <div class="font-medium text-white">Mark</div>
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    h-7
                    w-7
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p class="text-sm text-right text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="
              flex
              w-full
              p-4
              border-t border-gray-700
              solid
              2xl:items-start
              hover:bg-gray-700
            "
          >
            <img
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              class="object-cover w-10 h-10 rounded-full"
            />
            <div class="w-full pl-4">
              <div class="flex items-center justify-between w-full">
                <div class="font-medium text-white">David</div>
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    h-7
                    w-7
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p class="text-sm text-right text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="
              flex
              w-full
              p-4
              border-t border-gray-700
              solid
              2xl:items-start
              hover:bg-gray-700
            "
          >
            <img
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              class="object-cover w-10 h-10 rounded-full"
            />
            <div class="w-full pl-4">
              <div class="flex items-center justify-between w-full">
                <div class="font-medium text-white">Mark</div>
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    h-7
                    w-7
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                I am really impressed! Can't wait to see the final result.
              </p>
              <p class="text-sm text-right text-gray-400">Dec, 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
