import React from "react"

interface IconProps {
  className?: string
}

export const TechIcons = {
  javascript: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path
        d="M75.5 100.2c3.5 5.8 8.4 9.6 16.5 9.6 7 0 11.6-3.5 11.6-8.3 0-5.8-4.7-7.9-12.7-11.4-11.6-5-19.1-11.3-19.1-23.7 0-11.6 8.9-20.4 22.9-20.4 9.9 0 17 3.5 22.1 12.3l-10.9 7c-2.8-5-6-7.2-11.2-7.2-5.1 0-8.6 3.3-8.6 7.4 0 5.1 3.5 7.2 11.4 10.7 13.5 5.8 20.7 11.8 20.7 24.6 0 14.2-11.1 21.4-25.8 21.4-14.7 0-23.7-7-28-17.1l11.1-4.9zM25 101.4l11.6-7c3.1 5.3 5.8 9.3 12.3 9.3 6.3 0 10.5-2.5 10.5-12.3V48h14.2v43.5c0 17.5-10.2 25.1-24.6 25.1-13 0-20.4-6.8-24-15.2z"
        fill="#000000"
      />
    </svg>
  ),

  typescript: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        d="M80.6 83.2c3.2 4.4 7.6 7.3 14.8 7.3 6.2 0 10.2-2.7 10.2-6.5 0-4.5-3.8-6.1-11.2-8.9-10.3-3.9-16.8-8.8-16.8-18.7 0-9.2 7.7-16.1 20.1-16.1 8.7 0 15 2.8 19.3 9.7l-9.5 6.1c-2.4-3.9-5.3-5.6-9.8-5.6-4.5 0-7.6 2.6-7.6 5.8 0 4 3.1 5.6 10 8.3 11.9 4.6 18.2 9.2 18.2 19.4 0 11.2-9.7 16.9-22.7 16.9-12.9 0-20.8-5.5-24.6-13.4l9.6-4.3zM28.3 42h43.3v11.8H51.4v60H37.8v-60H28.3V42z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  python: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#3776AB"
        d="M63.4 12c-27.2 0-25.5 11.8-25.5 11.8l.1 12.2h26v3.7H27.2S12 38 12 65.2c0 27.2 13.3 26.2 13.3 26.2h7.9v-11.1s-.4-13.3 13.1-13.3h22.6s12.5.2 12.5-12.2V24.2s1.8-12.2-18-12.2zm-13.8 7.4a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6z"
      />
      <path
        fill="#FFD43B"
        d="M64.6 116c27.2 0 25.5-11.8 25.5-11.8l-.1-12.2h-26v-3.7h36.8s15.2 1.7 15.2-25.5c0-27.2-13.3-26.2-13.3-26.2h-7.9v11.1s.4 13.3-13.1 13.3H39.1s-12.5-.2-12.5 12.2v30.6s-1.8 12.2 18 12.2zm13.8-7.4a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6z"
      />
    </svg>
  ),

  java: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#5382A1"
        d="M48.2 92.5s-4.6 2.3.8 3.3c6.5 1.1 10.3 1.1 17.8-1.1 7.6-2.2 12.7-2.2 12.7-2.2s-4.1 1.7-7 2.3c-9.2 2.3-17.3 2.9-23.7-.9-.4-.3-.6-.8-.6-.6zm-3.5-12.1s-5.2 2.9.6 3.5c7.5.6 14.4 1.7 25.9-1.7 0 0 5.2-1.7 8.6-3.5-6.3 1.1-12.1 2.3-20.2 2.3-6.9 0-14.9-.6-14.9-.6zm35.1-27c3.5 3.5 5.2 8.1 1.7 15.5-4.6 8.6-12.7 13.2-19.6 20.1-2.3 2.3-4.6 4.6-4.6 7.5 0 0 2.9-1.1 5.8-2.9 5.8-3.5 12.1-7.5 15.5-13.8 5.8-9.2 4-18.4 1.2-26.4zm-13.8-30.5c-3.5 8.1-6.9 17.8 1.2 25.9 6.3 6.3 13.8 9.8 19 16.7 6.9 9.2 6.9 19 2.3 28.2 4-5.2 6.9-12.1 5.8-19-1.7-9.8-9.8-15-16.7-21.3-6.3-5.8-9.2-12.7-11.6-30.5zm-32.8 74.7c9.8 2.9 22.4 4 36.8 1.1 10.3-2.3 17.8-6.9 17.8-6.9s-5.2 2.9-12.7 4.6c-13.8 2.9-27.6 2.3-41.9-1.1 0 0-2.3 1.1 0 2.3z"
      />
      <path
        fill="#E76F00"
        d="M97.7 98.2c-4.6 3.5-12.1 5.8-20.7 6.3-12.1 1.1-25.3-.6-35.1-4.6 0 0-2.3 1.7 2.3 2.9 9.2 2.9 21.3 4 32.8 2.9 10.9-.6 19.6-3.5 20.7-7.5zm-50.6-40.2c-1.7 6.9 3.5 13.8 8.1 19 5.8 5.8 12.7 10.3 15 18.4-5.8-6.9-12.7-11.5-16.7-19-3.5-5.8-4.6-12.1-6.4-18.4z"
      />
    </svg>
  ),

  cpp: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 8l54 31.2v62.4L64 123 10 99.6V37.2L64 8z" fill="#00599C" />
      <path d="M64 16.5l46.7 27v53.9L64 104.4 17.3 97.4V43.5L64 16.5z" fill="#004482" />
      <path
        d="M48.2 81.3c-9.6 0-17-7.4-17-17.3s7.4-17.3 17-17.3c6.4 0 11.2 2.9 14.1 7.6l-7.3 4.2c-1.6-2.5-3.8-3.7-6.8-3.7-5.1 0-8.9 4-8.9 9.2s3.8 9.2 8.9 9.2c3 0 5.2-1.2 6.8-3.7l7.3 4.2c-2.9 4.7-7.7 7.6-14.1 7.6zm29.8-13.8h-4.8v4.8h-3.4v-4.8H65v-3.4h4.8v-4.8h3.4v4.8H78v3.4zm16.5 0h-4.8v4.8h-3.4v-4.8h-4.8v-3.4h4.8v-4.8h3.4v4.8h4.8v3.4z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  c: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 8l54 31.2v62.4L64 123 10 99.6V37.2L64 8z" fill="#659AD2" />
      <path d="M64 16.5l46.7 27v53.9L64 104.4 17.3 97.4V43.5L64 16.5z" fill="#00599C" />
      <path
        d="M64 86.5c-12.8 0-22.5-9.8-22.5-22.5S51.2 41.5 64 41.5c8.6 0 15 3.9 18.8 10.2l-9.8 5.6c-2.1-3.3-5-5-9-5-6.8 0-11.8 5.4-11.8 12.2s5 12.2 11.8 12.2c4 0 6.9-1.7 9-5l9.8 5.6C79 82.6 72.6 86.5 64 86.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  react: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="64" rx="56" ry="22" stroke="#61DAFB" strokeWidth="6" />
      <ellipse cx="64" cy="64" rx="56" ry="22" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 64 64)" />
      <ellipse cx="64" cy="64" rx="56" ry="22" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 64 64)" />
      <circle cx="64" cy="64" r="10" fill="#61DAFB" />
    </svg>
  ),

  nextjs: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="60" fill="#000000" stroke="#333333" strokeWidth="3" />
      <path
        d="M84.5 44v40M43.5 44v40l41-40"
        stroke="#FFFFFF"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  html5: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M16 10l9.8 103.5L64 125l38.2-11.5L112 10H16z" fill="#E34F26" />
      <path d="M64 19v94.5l29.8-9L101.4 19H64z" fill="#EF652A" />
      <path
        d="M37.5 35h53l-1.6 17.5H64v-.5H47.5l1.2 14.5H64v-.5h23.5L84.9 96l-20.9 5.8V90l11.8-3.2 1.2-11.8H41.5L37.5 35z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  css3: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M16 10l9.8 103.5L64 125l38.2-11.5L112 10H16z" fill="#1572B6" />
      <path d="M64 19v94.5l29.8-9L101.4 19H64z" fill="#33A9DC" />
      <path
        d="M89 35H39l1.6 17.5h45.2l-1.6 16.5H64v-.5H43.9l1.2 14.5H64v-.5l20.9-5.8 2.6-28.2H41.2"
        stroke="#FFFFFF"
        strokeWidth="6"
      />
    </svg>
  ),

  tailwind: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="#38BDF8">
      <path d="M64 32c-17.6 0-28.3 9.1-32 26.7 6.9-9.1 16-12.3 26.7-10.7 6.4 1.6 10.7 6.4 16 11.2 8 8.5 17.1 18.1 34.7 18.1 17.6 0 28.3-9.1 32-26.7-6.9 9.1-16 12.3-26.7 10.7-6.4-1.6-10.7-6.4-16-11.2-8-8.5-17.1-18.1-34.7-18.1zM32 64c-17.6 0-28.3 9.1-32 26.7 6.9-9.1 16-12.3 26.7-10.7 6.4 1.6 10.7 6.4 16 11.2 8 8.5 17.1 18.1 34.7 18.1 17.6 0 28.3-9.1 32-26.7-6.9 9.1-16 12.3-26.7 10.7-6.4-1.6-10.7-6.4-16-11.2-8-8.5-17.1-18.1-34.7-18.1z" />
    </svg>
  ),

  nodejs: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="#5FA04E">
      <path d="M64 12L14 41v58l50 29 50-29V41L64 12zm-4.5 89.5c-15.5 0-26.5-9.5-26.5-23.5s11.5-23.5 26.5-23.5c9.5 0 17 3.5 21.5 9.5l-8.5 6.5c-3-3.5-7.5-5.5-13-5.5-9 0-15.5 5.5-15.5 13s6.5 13 15.5 13c6 0 10-2 13-6l8.5 6c-5 6.5-12.5 10.5-21.5 10.5z" />
    </svg>
  ),

  express: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
    </svg>
  ),

  springboot: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z"
        fill="#6DB33F"
      />
    </svg>
  ),

  mongodb: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#13AA52"
        d="M63.5 5C61 10.5 37 44.5 37 72c0 22.5 14.5 40 26.5 45.5 12-5.5 26.5-23 26.5-45.5 0-27.5-24-61.5-26.5-67z"
      />
      <path fill="#4BAE4F" d="M64 5v112.5c12-5.5 26.5-23 26.5-45.5C90.5 44.5 66.5 10.5 64 5z" />
      <path
        fill="#FFFFFF"
        d="M64 34.5v73.8c-1.1 0-2.1-.5-2.7-1.1-9-5.3-18.6-19.1-18.6-35.2 0-17.6 14.4-33 21.3-37.5z"
        opacity="0.3"
      />
    </svg>
  ),

  mysql: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path
        fill="#00618A"
        d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
      />
    </svg>
  ),

  postgresql: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="60" fill="#336791" />
      <path
        d="M64 22c-20 0-36 14-36 34 0 14 8 26 20 31v19h12v-17c1.3.1 2.7.2 4 .2s2.7-.1 4-.2v17h12V87c12-5 20-17 20-31 0-20-16-34-36-34zm-14 36c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm28 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  sqlite: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="20" fill="#003B57" />
      <path
        d="M32 40h64v12H32V40zm0 20h64v12H32V60zm0 20h64v12H32V80z"
        fill="#00ADEF"
      />
    </svg>
  ),

  firebase: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#FFCA28" d="M22.5 87L36.3 14c.6-2.1 3.2-3.2 4.8-1.6l17.6 32.5L22.5 87z" />
      <path fill="#FFA000" d="M82.1 40.5L69.3 16.5c-1.1-2.1-4.3-2.1-5.3 0L22.5 87l59.6-46.5z" />
      <path
        fill="#F57C00"
        d="M70.4 115.2c2.7 1.6 5.9 1.6 8.5 0l33.6-19.2c2.7-1.6 3.2-4.8 1.1-6.9L86.4 17.1c-1.1-2.1-4.3-2.1-5.3 0l-10.7 20.3 42.1 77.8H70.4z"
      />
    </svg>
  ),

  git: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="#F05032">
      <path d="M115.7 58.1L69.9 12.3c-2.1-2.1-5.3-2.1-7.4 0L49.9 24.6l15.5 15.5c2.1-.5 4.3 0 5.9 1.6 2.1 2.1 2.1 5.3 0 7.4l-14.4 14.4v22.4c2.1 1.1 3.7 3.2 3.7 5.9 0 4.3-3.7 8-8 8s-8-3.7-8-8c0-2.7 1.6-4.8 3.7-5.9V63.4c-2.1-1.1-3.7-3.2-3.7-5.9 0-2.7 1.6-4.8 3.7-5.9L32.6 42.3 12.3 62.6c-2.1 2.1-2.1 5.3 0 7.4l45.9 45.9c2.1 2.1 5.3 2.1 7.4 0l50.1-50.1c2.1-2.1 2.1-5.6 0-7.7z" />
    </svg>
  ),

  github: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 10.7C34.5 10.7 10.7 34.6 10.7 64c0 23.6 15.3 43.6 36.5 50.7 2.7.5 3.6-1.2 3.6-2.6 0-1.3 0-4.6-.1-9.1-14.8 3.2-18-7.2-18-7.2-2.4-6.2-5.9-7.8-5.9-7.8-4.8-3.3.4-3.2.4-3.2 5.4.4 8.2 5.5 8.2 5.5 4.8 8.2 12.5 5.8 15.5 4.4.5-3.5 1.9-5.8 3.4-7.1-11.8-1.3-24.3-5.9-24.3-26.4 0-5.8 2.1-10.6 5.5-14.3-.5-1.3-2.4-6.8.5-14.1 0 0 4.5-1.4 14.7 5.5 4.3-1.2 8.9-1.8 13.5-1.8s9.2.6 13.5 1.8c10.2-6.9 14.7-5.5 14.7-5.5 2.9 7.3 1.1 12.8.5 14.1 3.4 3.7 5.5 8.5 5.5 14.3 0 20.6-12.5 25-24.4 26.3 1.9 1.6 3.6 4.9 3.6 9.9 0 7.1-.1 12.9-.1 14.7 0 1.4 1 3.1 3.7 2.6 21.2-7.1 36.5-27.1 36.5-50.7 0-29.4-23.9-53.3-53.3-53.3z"
      />
    </svg>
  ),

  postman: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039z" />
      <path fill="#ffffff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328.242.25-3.72 3.69-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537 7.137 7.293c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208 3.778 3.778 0 0 0-.483-.306l-.244-.264a3.778 3.778 0 0 0-.582-.29c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z" />
    </svg>
  ),

  vscode: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="#007ACC">
      <path d="M93.3 13.3L38.4 54.9 18.7 40 10.7 45.3l18.7 18.7L10.7 82.7l8 5.3 19.7-14.9 54.9 41.6 24-10.7V24l-24-10.7zm0 25.6v50.1L56 64l37.3-25.1z" />
    </svg>
  ),

  vercel: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M64 10.7L10.7 105.6h106.6L64 10.7z" />
    </svg>
  ),

  figma: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M32 64a16 16 0 1 1 32 0v-16H32a16 16 0 0 0 0 16z" fill="#0ACF83" />
      <path d="M32 32a16 16 0 0 1 16-16h16v32H48a16 16 0 0 1-16-16z" fill="#F24E1E" />
      <path d="M64 16h16a16 16 0 1 1 0 32H64V16z" fill="#FF7262" />
      <path d="M64 48h16a16 16 0 1 1 0 32H64V48z" fill="#1ABCFE" />
      <path d="M32 96a16 16 0 0 1 16-16h16v16a16 16 0 1 1-32 0z" fill="#A259FF" />
    </svg>
  ),

  jwt: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="60" fill="#000000" stroke="#FB015B" strokeWidth="4" />
      <path
        d="M64 24l36 20v40L64 104 28 84V44L64 24z"
        stroke="#FB015B"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="64" cy="64" r="14" fill="#00B9F1" />
      <circle cx="64" cy="40" r="6" fill="#D63AFF" />
      <circle cx="85" cy="76" r="6" fill="#D63AFF" />
      <circle cx="43" cy="76" r="6" fill="#D63AFF" />
    </svg>
  ),

  framer: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M28 20h72v44H64L28 20z" fill="#0055FF" />
      <path d="M28 64h36l36 44H28V64z" fill="#0055FF" opacity="0.85" />
      <path d="M28 108l36-44v44H28z" fill="#0055FF" opacity="0.5" />
    </svg>
  ),

  responsive: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <rect x="14" y="8" width="6" height="7" rx="1" fill="#0284c7" stroke="#38bdf8" />
    </svg>
  ),

  dbms: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),

  os: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),

  sysdesign: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="6" height="6" rx="1" />
      <rect x="16" y="2" width="6" height="6" rx="1" />
      <rect x="9" y="16" width="6" height="6" rx="1" />
      <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
      <line x1="12" y1="13" x2="12" y2="16" />
    </svg>
  ),

  api: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    </svg>
  ),

  dsa: ({ className = "h-5 w-5" }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M10 7.5L6.5 16.5M14 7.5l3.5 9M7.5 19h9" />
    </svg>
  ),
}

export function getSkillIcon(name: string, className = "h-5 w-5") {
  const lower = name.toLowerCase()
  if (lower.includes("javascript")) return <TechIcons.javascript className={className} />
  if (lower.includes("typescript")) return <TechIcons.typescript className={className} />
  if (lower.includes("python")) return <TechIcons.python className={className} />
  if (lower.includes("java") && !lower.includes("javascript")) return <TechIcons.java className={className} />
  if (lower.includes("c++")) return <TechIcons.cpp className={className} />
  if (lower === "c" || lower.startsWith("c ") || lower.endsWith(" c") || lower === "c language") return <TechIcons.c className={className} />
  if (lower.includes("next")) return <TechIcons.nextjs className={className} />
  if (lower.includes("react")) return <TechIcons.react className={className} />
  if (lower.includes("html")) return <TechIcons.html5 className={className} />
  if (lower.includes("tailwind")) return <TechIcons.tailwind className={className} />
  if (lower.includes("css")) return <TechIcons.css3 className={className} />
  if (lower.includes("framer")) return <TechIcons.framer className={className} />
  if (lower.includes("responsive")) return <TechIcons.responsive className={className} />
  if (lower.includes("node")) return <TechIcons.nodejs className={className} />
  if (lower.includes("express")) return <TechIcons.express className={className} />
  if (lower.includes("jwt") || lower.includes("auth")) return <TechIcons.jwt className={className} />
  if (lower.includes("spring")) return <TechIcons.springboot className={className} />
  if (lower.includes("mongo")) return <TechIcons.mongodb className={className} />
  if (lower.includes("postgres")) return <TechIcons.postgresql className={className} />
  if (lower.includes("sqlite")) return <TechIcons.sqlite className={className} />
  if (lower.includes("mysql") || lower.includes("sql")) return <TechIcons.mysql className={className} />
  if (lower.includes("firebase")) return <TechIcons.firebase className={className} />
  if (lower.includes("github")) return <TechIcons.github className={className} />
  if (lower.includes("git")) return <TechIcons.git className={className} />
  if (lower.includes("postman")) return <TechIcons.postman className={className} />
  if (lower.includes("vs code") || lower.includes("vscode")) return <TechIcons.vscode className={className} />
  if (lower.includes("vercel")) return <TechIcons.vercel className={className} />
  if (lower.includes("figma")) return <TechIcons.figma className={className} />
  if (lower.includes("dbms")) return <TechIcons.dbms className={className} />
  if (lower.includes("operating") || lower.includes("organization")) return <TechIcons.os className={className} />
  if (lower.includes("system design")) return <TechIcons.sysdesign className={className} />
  if (lower.includes("algorithm") || lower.includes("structure") || lower.includes("dsa")) return <TechIcons.dsa className={className} />
  return <TechIcons.api className={className} />
}
