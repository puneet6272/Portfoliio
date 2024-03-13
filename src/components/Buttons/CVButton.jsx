import React from 'react'
import './CVButton.css'

function CVButton() {
    return (
        <a href="images/Professional CV Resume.pdf" download="imagesProfessional CV Resume.pdf">
            <div className="button" data-tooltip="Size: 315 kb">
                <div className="button-wrapper">
                    <div className="text">Download CV</div>
                    <span className='icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="2em"
                            height="2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    )
}

export default CVButton
