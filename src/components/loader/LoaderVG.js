import React from 'react'
import './loaderVG.css'

export default function LoaderVG(loaderVisibility) {
    return (
        <div className="loaderVG">
            <div className="loader-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e63e6d" class="bi bi-lightning-charge-fill loader-svg" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#e63e6d" class="bi bi-lightning-charge loader-svg" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
            </svg>
            </div>
        </div>
    )
}
