import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [activeButton, setActiveButton] = useState<number | null>(null);

    const handleLogoClick = () => {
        window.location.reload();
    };
    const handleSortClick = () => {
        setPopupVisible(!isPopupVisible);
    };
    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    return (
        <header className='relative flex justify-between items-center p-6 shadow-lg z-20'>
            <button onClick={handleLogoClick} className='flex-shrink-0'>
                <Image
                    src="https://zukan.pokemon.co.jp/img/logo.svg"
                    alt="Left Logo"
                    width={100}
                    height={50}
                />
            </button>

            <div className='flex space-x-4'>
                <button onClick={handleSortClick}>
                    <Image
                        src="https://zukan.pokemon.co.jp/img/icon_sort.svg"
                        alt="Sort Icon"
                        width={30}
                        height={30}
                    />
                </button>
                <button>
                    <Image
                        src="https://zukan.pokemon.co.jp/img/icon_search.svg"
                        alt="Search Icon"
                        width={30}
                        height={30}
                    />
                </button>
            </div>

            {/* the sort popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between">
                            <div className='flex mr-32'>
                                <Image
                                    src="https://zukan.pokemon.co.jp/img/icon_sort.svg"
                                    alt="Sort Icon"
                                    width={30}
                                    height={30}
                                />
                                <h2 className='ml-3 font-bold '>表示順を変える</h2>
                            </div>
                            <button onClick={handleSortClick}>✖</button>
                        </div>

                        {/* first row */}
                        <div className='flex justify-start mt-12'>
                            <Image
                                src="https://zukan.pokemon.co.jp/img/ball.svg"
                                alt="Ball Icon"
                                width={30}
                                height={30}
                            />
                            <h3 className='font-bold ml-3 mt-1'>ずかん番号</h3>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-center items-center mt-2 space-x-4'>
                            <button
                                onClick={() => handleButtonClick(1)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 1
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                1
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                9
                            </button>
                            <button
                                onClick={() => handleButtonClick(2)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 2
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                9
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                1
                            </button>
                        </div>

                        {/* second row */}
                        <div className='flex justify-start mt-12'>
                            <Image
                                src="https://zukan.pokemon.co.jp/img/ball.svg"
                                alt="Ball Icon"
                                width={30}
                                height={30}
                            />
                            <h3 className='font-bold ml-3 mt-1'>なまえ</h3>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-center items-center mt-2 space-x-4'>
                            <button
                                onClick={() => handleButtonClick(3)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 3
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                ア
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                ン
                            </button>
                            <button
                                onClick={() => handleButtonClick(4)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 4
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                ン
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                ア
                            </button>
                        </div>

                        {/* the third row */}
                        <div className='flex justify-start mt-12'>
                            <Image
                                src="https://zukan.pokemon.co.jp/img/ball.svg"
                                alt="Ball Icon"
                                width={30}
                                height={30}
                            />
                            <h3 className='font-bold ml-3 mt-1'>高さ</h3>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-center items-center mt-2 space-x-4'>
                            <button
                                onClick={() => handleButtonClick(5)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 5
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                高い
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                低い
                            </button>
                            <button
                                onClick={() => handleButtonClick(6)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 6
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                低い
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                高い
                            </button>
                        </div>

                        {/* the fourth row */}
                        <div className='flex justify-start mt-12'>
                            <Image
                                src="https://zukan.pokemon.co.jp/img/ball.svg"
                                alt="Ball Icon"
                                width={30}
                                height={30}
                            />
                            <h3 className='font-bold ml-3 mt-1'>重さ</h3>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-center items-center mt-2 space-x-4'>
                            <button
                                onClick={() => handleButtonClick(7)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 7
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                重い
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                軽い
                            </button>
                            <button
                                onClick={() => handleButtonClick(8)}
                                className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-md border-2 transition-colors ${activeButton === 8
                                    ? 'bg-yellow-200 border-yellow-400'
                                    : 'bg-white text-gray-800 border-gray-300'
                                    }`}
                            >
                                軽い
                                <FontAwesomeIcon icon={faArrowRight} className="mx-2 text-gray-800" />
                                重い
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
