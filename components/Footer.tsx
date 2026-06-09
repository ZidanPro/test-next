import Link from "next/link";
import Image from "next/image";

const socialUrl = [
    {
        name: 'Facebook',
        url: '#',
        icon:
        <svg viewBox="0 0 320 512" className="w-5 h-5 fill-current">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13C204.45 110.16 217 86 256.82 86h40.42V6.26S260.43 0 225.36 0C152.14 0 104.28 44.38 104.28 124.72V195H22.89V288h81.39v224h100.17V288z" />
        </svg>
    },
    {
        name: 'Instagram',
        url: '#',
        icon:
        <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
    },
    {
        name: 'Youtube',
        url: '#',
        icon:
        <svg viewBox="0 0 576 512" className="w-5 h-5 fill-current">
            <path d="M549.65 124.08C543.37 100.43 524.86 81.81 501.37 75.49 458.77 64 288 64 288 64s-170.78 0-213.37 11.49c-23.49 6.32-42 24.94-48.28 48.59C15 167 15 256 15 256s0 89 11.35 131.92c6.27 23.64 24.78 42.27 48.26 48.59 42.6 11.49 213.38 11.49 213.38 11.49s170.78 0 213.37-11.49c23.49-6.32 42-24.95 48.28-48.59C561 345 561 256 561 256s0-89-11.35-131.92zM231.8 338.9V173.1L358.6 256l-126.8 82.9z" />
        </svg>
    },
    {
        name: 'Discord',
        url: '#',
        icon:
        <svg className="w-5 h-5 fill-current" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
        </svg>
    },
    {
        name: 'Tiktok',
        url: '#',
        icon:
        <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
            <path d="M448 209.91a209.9 209.9 0 0 1-122.8-39.25V349.4a162.5 162.5 0 1 1-142-161V278a74.6 74.6 0 1 0 52.2 71.2V0h88a122 122 0 0 0 1.9 22.17 122.2 122.2 0 0 0 67 80.2 121.4 121.4 0 0 0 67 20.14z" />
        </svg>
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-primary/5 pt-10 pb-6 overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 translate-x-6 w-64 h-64 pointer-events-none z-0 text-primary">
                <svg
                    className="w-full h-full object-contain"
                    viewBox="0 0 450 556"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="277"
                        cy="63"
                        r="225"
                        fill="url(#paint0_linear_25:217)"
                    />
                    <circle
                        cx="17.9997"
                        cy="182"
                        r="18"
                        fill="url(#paint1_radial_25:217)"
                    />
                    <circle
                        cx="76.9997"
                        cy="288"
                        r="34"
                        fill="url(#paint2_radial_25:217)"
                    />
                    <circle
                        cx="325.486"
                        cy="302.87"
                        r="180"
                        transform="rotate(-37.6852 325.486 302.87)"
                        fill="url(#paint3_linear_25:217)"
                    />
                    <circle
                        opacity="0.8"
                        cx="184.521"
                        cy="315.521"
                        r="132.862"
                        transform="rotate(114.874 184.521 315.521)"
                        stroke="url(#paint4_linear_25:217)"
                    />
                    <circle
                        opacity="0.8"
                        cx="356"
                        cy="290"
                        r="179.5"
                        transform="rotate(-30 356 290)"
                        stroke="url(#paint5_linear_25:217)"
                    />
                    <circle
                        opacity="0.8"
                        cx="191.659"
                        cy="302.659"
                        r="133.362"
                        transform="rotate(133.319 191.659 302.659)"
                        fill="url(#paint6_linear_25:217)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_25:217"
                            x1="-54.5003"
                            y1="-178"
                            x2="222"
                            y2="288"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#currentColor" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient
                            id="paint1_radial_25:217"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                        >
                            <stop offset="0.145833" stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
                        </radialGradient>
                        <radialGradient
                            id="paint2_radial_25:217"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                        >
                            <stop offset="0.145833" stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
                        </radialGradient>
                        <linearGradient
                            id="paint3_linear_25:217"
                            x1="226.775"
                            y1="-66.1548"
                            x2="292.157"
                            y2="351.421"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_25:217"
                            x1="184.521"
                            y1="182.159"
                            x2="184.521"
                            y2="448.882"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_25:217"
                            x1="356"
                            y1="110"
                            x2="356"
                            y2="470"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint6_linear_25:217"
                            x1="118.524"
                            y1="29.2497"
                            x2="166.965"
                            y2="338.63"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 -translate-x-6 -translate-y-2 w-64 h-64 pointer-events-none z-0 text-primary">
                <svg
                    className="w-full h-full object-contain"
                    viewBox="0 0 364 201"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                        stroke="url(#paint0_linear_25:218)"
                    />
                    <path
                        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                        stroke="url(#paint1_linear_25:218)"
                    />
                    <path
                        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                        stroke="url(#paint2_linear_25:218)"
                    />
                    <path
                        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                        stroke="url(#paint3_linear_25:218)"
                    />
                    <circle
                        opacity="0.8"
                        cx="214.505"
                        cy="60.5054"
                        r="49.7205"
                        transform="rotate(-13.421 214.505 60.5054)"
                        stroke="url(#paint4_linear_25:218)"
                    />
                    <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_25:218"
                            x1="184.389"
                            y1="69.2405"
                            x2="184.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_25:218"
                            x1="156.389"
                            y1="69.2405"
                            x2="156.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_25:218"
                            x1="125.389"
                            y1="69.2405"
                            x2="125.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_25:218"
                            x1="93.8507"
                            y1="67.2674"
                            x2="89.9278"
                            y2="210.214"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" stopOpacity="0" />
                            <stop offset="1" stopColor="currentColor" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_25:218"
                            x1="214.505"
                            y1="10.2849"
                            x2="212.684"
                            y2="99.5816"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="currentColor" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient
                            id="paint5_radial_25:218"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(220 63) rotate(90) scale(43)"
                        >
                            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" stopOpacity="0.08" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <Image
                    src="/assets/img/logo-putih.png"
                    alt="Logo Footer"
                    className="mx-auto mb-4 transition-transform hover:scale-105"
                    width={160}
                    height={40}
                />
                <p className="text-white/80 mb-4 max-w-xl mx-auto text-sm">
                    Merupakan Komunitas Game Online dari GTA 5 Modifikasi untuk bermain roleplay.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-5 mb-6">
                    {socialUrl.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="text-white hover:text-primary transition-colors"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-6">
                    <p className="text-xs text-white">
                        © {new Date().getFullYear()}{" "}
                        <Link
                            href="https://aklgaming.tebex.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary no-underline hover:underline font-medium"
                        >
                            Gusti Agung
                        </Link>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}