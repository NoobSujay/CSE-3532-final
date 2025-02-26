

import React from 'react'

const App = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_13_1170)">
                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FF6B6B"/>
                  <path d="M32 16H0C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" fill="#FF1F3D"/>
                  <path d="M11.6249 25.0625C11.4791 25.0625 11.3329 25.0286 11.1982 24.9597C10.8847 24.7994 10.6875 24.4771 10.6875 24.125V7.875C10.6875 7.52294 10.8848 7.20056 11.1982 7.04031C11.5116 6.88006 11.8884 6.90888 12.1739 7.115L23.4239 15.24C23.6679 15.4163 23.8125 15.699 23.8125 16C23.8125 16.301 23.6679 16.5838 23.4239 16.76L12.1739 24.885C12.0111 25.0026 11.8185 25.0625 11.6249 25.0625Z" fill="#F9F9F9"/>
                  <path d="M10.6875 16V24.125C10.6875 24.4771 10.8848 24.7994 11.1982 24.9597C11.3328 25.0286 11.4791 25.0625 11.6249 25.0625C11.8184 25.0625 12.0111 25.0026 12.1739 24.885L23.4239 16.76C23.6679 16.5838 23.8125 16.301 23.8125 16H10.6875Z" fill="#E2DFF4"/>
                </g>
                <defs>
                  <clipPath id="clip0_13_1170">
                    <rect width="32" height="32" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <h1><span class="text-red-600">PH</span>tube</h1>
            </div>
            <div className="navbar-center">
            <button className=" p-2 bg-orange-200 rounded-lg">Sort by View</button>

            </div>
            <div className="navbar-end">
            <button className="btn btn-error text-white">Blog</button>

            </div>
        </div>
    )
}

export default App
