import ShortLinkDescription from "../../shared/components/ShortLinkDescription"
import './shortLinkStyle.css';

function ShortLinks() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full w-full">
            {/* GitHub */}
            <a href="https://github.com/Muhammad-Shah-zaib" target="_blank" className="shortLink flex items-center hover:shadow-lg rounded-l-xl shadow-black transition duration-200">
                <div className="github-icon-ctn w-[120px] h-full bg-zinc-900 flex justify-center items-center rounded-xl">
                        <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.0696 0C10.3302 0 0 10.3284 0 23.0696C0 33.2625 6.61012 41.9099 15.7764 44.9604C16.9293 45.1739 17.3527 44.4599 17.3527 43.8505C17.3527 43.3005 17.3312 41.4831 17.3214 39.5554C10.9032 40.951 9.54898 36.8335 9.54898 36.8335C8.49958 34.167 6.98754 33.4581 6.98754 33.4581C4.89454 32.0262 7.14532 32.0555 7.14532 32.0555C9.46195 32.2183 10.6818 34.4329 10.6818 34.4329C12.7393 37.9598 16.0786 36.9401 17.395 36.3508C17.602 34.8596 18.2 33.842 18.8597 33.2659C13.7357 32.6824 8.34905 30.7043 8.34905 21.8648C8.34905 19.3462 9.25026 17.2881 10.7261 15.6726C10.4866 15.0914 9.69698 12.7451 10.9496 9.56744C10.9496 9.56744 12.8868 8.94738 17.2953 11.9322C19.1354 11.4209 21.109 11.1647 23.0696 11.156C25.0301 11.1647 27.0052 11.4209 28.8489 11.9322C33.2522 8.94738 35.1867 9.56744 35.1867 9.56744C36.4423 12.7451 35.6524 15.0914 35.4128 15.6726C36.892 17.2881 37.787 19.346 37.787 21.8648C37.787 30.7253 32.3902 32.6764 27.2532 33.2475C28.0806 33.9634 28.8179 35.3674 28.8179 37.5196C28.8179 40.6063 28.7911 43.0906 28.7911 43.8505C28.7911 44.4644 29.2064 45.1838 30.3759 44.9573C39.5372 41.9034 46.139 33.259 46.139 23.0696C46.139 10.3284 35.8102 0 23.0696 0Z" fill="white" />
                            <path d="M8.6403 32.8632C8.58964 32.9777 8.40907 33.0121 8.24497 32.9336C8.07761 32.8583 7.98352 32.702 8.0378 32.5869C8.08756 32.4689 8.26813 32.436 8.43513 32.5152C8.60285 32.5903 8.69838 32.7481 8.6403 32.8632ZM9.7751 33.8757C9.6651 33.9777 9.44997 33.9303 9.30396 33.7691C9.15306 33.6083 9.12484 33.3933 9.23647 33.2896C9.34992 33.1878 9.55853 33.2353 9.70979 33.3964C9.86068 33.559 9.89 33.7727 9.77492 33.8758L9.7751 33.8757ZM10.5537 35.1711C10.4122 35.2694 10.1809 35.1773 10.0382 34.9721C9.89687 34.7671 9.89687 34.521 10.0413 34.4224C10.1846 34.3238 10.4122 34.4125 10.5569 34.616C10.698 34.8246 10.698 35.0707 10.5535 35.1713L10.5537 35.1711ZM11.8701 36.6716C11.7436 36.8109 11.4744 36.7736 11.2772 36.5833C11.0756 36.3973 11.0194 36.1333 11.1462 35.9938C11.2741 35.8541 11.545 35.8934 11.7436 36.0821C11.9439 36.2678 12.0051 36.5337 11.8703 36.6716H11.8701ZM13.5716 37.1782C13.516 37.3588 13.2566 37.4409 12.9953 37.3642C12.7344 37.2851 12.5636 37.0734 12.6163 36.8909C12.6705 36.709 12.9311 36.6235 13.1943 36.7056C13.4549 36.7843 13.626 36.9944 13.5718 37.1782H13.5716ZM15.5083 37.393C15.5148 37.5833 15.2931 37.7411 15.0188 37.7445C14.7429 37.7505 14.5198 37.5965 14.5169 37.4094C14.5169 37.2173 14.7335 37.061 15.0093 37.0564C15.2835 37.051 15.5083 37.2039 15.5083 37.393ZM17.4106 37.32C17.4435 37.5057 17.2528 37.6964 16.9805 37.747C16.7127 37.7959 16.4648 37.6814 16.4307 37.4974C16.3974 37.307 16.5917 37.1165 16.8589 37.0671C17.1318 37.0197 17.3758 37.1313 17.4106 37.32Z" fill="white" />
                        </svg>
                </div>
                <ShortLinkDescription title={"GitHub"} description={"Check out my repositories"} />
            </a>

            {/* Twitter */}
            <a href="https://x.com/ItxShaxaib" target="_blank" className="shortLink flex items-center hover:shadow-lg rounded-l-xl shadow-black transition duration-200">
                <div className="twitter-icon-ctn w-[120px] h-full bg-zinc-950 flex justify-center items-center rounded-xl">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z" fill="white" />
                    </svg>
                </div>
                <ShortLinkDescription title={"Twitter"} description={"Check out my profile"} />
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/muhammad-shahzaib-311724292/" target="_blank" className="shortLink flex items-center hover:shadow-lg rounded-l-xl shadow-black transition duration-200">
                <div className="icon-ctn w-[120px] h-full bg-zinc-900 flex justify-center items-center rounded-xl">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z" fill="#0A66C2" />
                        </svg>
                </div>
                <ShortLinkDescription title={"Linkedln"} description={"Lets Connect!"} />
            </a>

            {/* chaatGPT */}
            <a href="https://chat.openai.com/" target="_blank" className="shortLink flex items-center hover:shadow-lg rounded-l-xl shadow-black transition duration-200">
                <div className="chatgpt-icon-ctn w-[120px] h-full bg-zinc-900 flex justify-center items-center rounded-xl">
                    <svg width="75" height="75" viewBox="0 0 167 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M155.946 69.2499C157.843 63.554 158.501 57.5187 157.876 51.5479C157.251 45.5771 155.358 39.8087 152.324 34.6288C147.825 26.7938 140.954 20.5906 132.701 16.9143C124.449 13.2379 115.241 12.2784 106.408 14.1743C102.424 9.68411 97.526 6.09679 92.0431 3.65246C86.5602 1.20814 80.6184 -0.0368106 74.6155 0.000956317C65.5841 -0.0208414 56.7791 2.82598 49.4699 8.13099C42.1608 13.436 36.7252 20.9251 33.9467 29.5185C28.0633 30.7228 22.5049 33.1701 17.6439 36.6966C12.7828 40.223 8.73115 44.7472 5.76014 49.9663C1.22579 57.7795 -0.709738 66.8311 0.232705 75.8154C1.17515 84.7998 4.94685 93.2527 11.0039 99.9549C9.10732 105.651 8.44941 111.686 9.07415 117.657C9.6989 123.628 11.5919 129.396 14.6264 134.576C19.1253 142.411 25.9966 148.614 34.2492 152.29C42.5018 155.966 51.7089 156.926 60.5422 155.031C64.5266 159.521 69.4241 163.108 74.907 165.552C80.3899 167.997 86.3317 169.242 92.3347 169.204C101.37 169.227 110.18 166.379 117.492 161.071C124.804 155.763 130.24 148.268 133.017 139.67C138.9 138.465 144.459 136.018 149.32 132.492C154.181 128.965 158.232 124.441 161.203 119.222C165.732 111.409 167.663 102.36 166.718 93.3792C165.774 84.3983 162.002 75.9493 155.946 69.2499ZM92.348 158.143C84.9308 158.153 77.7461 155.555 72.0503 150.804C72.3072 150.664 72.7575 150.417 73.051 150.237L106.742 130.777C107.587 130.296 108.289 129.598 108.776 128.756C109.263 127.913 109.516 126.956 109.51 125.983V78.4864L123.75 86.7089C123.825 86.7461 123.889 86.8012 123.938 86.8693C123.986 86.9374 124.017 87.0164 124.027 87.0992V126.434C124.016 134.835 120.676 142.89 114.739 148.833C108.801 154.777 100.749 158.124 92.348 158.143ZM24.2199 129.046C20.5045 122.626 19.1655 115.104 20.4372 107.797C20.6874 107.947 21.1243 108.214 21.4379 108.394L55.1284 127.855C55.9679 128.345 56.9229 128.604 57.8953 128.604C58.8678 128.604 59.8227 128.345 60.6623 127.855L101.795 104.105V120.549C101.799 120.633 101.783 120.717 101.748 120.794C101.712 120.87 101.658 120.936 101.591 120.986L67.5338 140.65C60.249 144.846 51.5973 145.98 43.4771 143.805C35.3569 141.629 28.4313 136.321 24.2199 129.046ZM15.3569 55.4968C19.0561 49.0688 24.8989 44.1471 31.8619 41.5937C31.8619 41.8839 31.8452 42.3976 31.8452 42.7545V81.6753C31.8393 82.6474 32.0924 83.6035 32.5784 84.4453C33.0644 85.2872 33.7658 85.9844 34.6105 86.4654L75.7429 110.212L61.5029 118.435C61.4326 118.481 61.3519 118.509 61.2681 118.517C61.1843 118.524 61.1 118.511 61.0225 118.478L26.9618 98.7974C19.6897 94.5861 14.3844 87.6629 12.209 79.5459C10.0335 71.4289 11.1656 62.7805 15.3569 55.4968ZM132.353 82.7228L91.2205 58.9726L105.461 50.7535C105.531 50.7072 105.612 50.6791 105.695 50.6715C105.779 50.6639 105.863 50.6772 105.941 50.7101L140.002 70.374C145.22 73.3882 149.471 77.8267 152.258 83.1697C155.045 88.5127 156.252 94.5391 155.738 100.543C155.224 106.547 153.01 112.281 149.355 117.072C145.7 121.864 140.756 125.515 135.102 127.598C135.102 127.304 135.102 126.791 135.102 126.434V87.5128C135.109 86.5423 134.859 85.5872 134.376 84.7455C133.893 83.9037 133.195 83.2056 132.353 82.7228ZM146.526 61.391C146.276 61.2376 145.839 60.974 145.526 60.7939L111.835 41.3335C110.995 40.8435 110.04 40.5853 109.068 40.5853C108.096 40.5853 107.141 40.8435 106.301 41.3335L65.1688 65.0836V48.6387C65.1641 48.5547 65.1802 48.4709 65.2157 48.3946C65.2512 48.3184 65.305 48.2521 65.3723 48.2017L99.4297 28.5545C104.647 25.5459 110.614 24.0854 116.631 24.3437C122.648 24.602 128.468 26.5685 133.408 30.0131C138.349 33.4577 142.206 38.2381 144.529 43.7948C146.852 49.3516 147.545 55.455 146.526 61.391ZM57.4267 90.7017L43.1833 82.4792C43.1085 82.442 43.0442 82.3869 42.9959 82.3188C42.9476 82.2507 42.9168 82.1718 42.9064 82.089V42.7545C42.9103 36.73 44.6302 30.8312 47.8648 25.7487C51.0993 20.6661 55.7148 16.61 61.1708 14.0553C66.6268 11.5005 72.6976 10.5527 78.6727 11.3229C84.6478 12.093 90.2799 14.5492 94.9098 18.404C94.653 18.5441 94.206 18.7909 93.9091 18.971L60.2186 38.4314C59.3733 38.912 58.6712 39.6091 58.1846 40.4509C57.698 41.2928 57.4444 42.2491 57.45 43.2215L57.4267 90.7017ZM65.1621 74.0233L83.4817 63.4425L101.801 74.0166V95.1715L83.4817 105.746L65.1621 95.1715V74.0233Z" fill="#d4d4d4" />
                    </svg>
                </div>
                <ShortLinkDescription title={"ChatGpt"} description={"Solve your queries"} />
            </a>

        </div>
    )
}

export default ShortLinks