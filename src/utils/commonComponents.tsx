import Lottie from "lottie-react";
import Loading from '../loading.json';

const customStyles = {
    navItem1: 'inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive',
    navItem2: 'inflex-flex items-center py-3  my-3 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive text-center'
};

export const navData = [
    {
        id: 1,
        name: 'My Notes',
        style: 'inflex-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-white text-4xl font-bold tracking-widest',
        to: '/',
    },
    {
        id: 2,
        name: 'Preps',
        style: customStyles.navItem1,
        to: '/Preperations',
    },
    {
        id: 3,
        name: 'Unique Solutions',
        style: customStyles.navItem1,
        to: '/UniqueSolutions',
    },
    {
        id: 4,
        name: 'To do s',
        style: customStyles.navItem1,
        to: '/ToDOs',
    },
    {
        id: 5,
        name: 'People to follow',
        style: customStyles.navItem1,
        to: '/PeopleToFollow',
    }
];

export const Loader = (props:any) => {
    const { open } = props;
    return (
        <div className=''>
            {/* <Backdrop
                sx={{ color: '#fff', zIndex: (theme:any) => theme.zIndex.drawer + 1 }}
                open={open}
            > */}
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl flex justify-center cursive text-white mt-10 absolute'>Fetching Data from content lake</h1>
                    <Lottie
                        animationData={Loading}
                        loop={true}
                        // className={'h-90'}
                    />
                </div>
            {/* </Backdrop> */}
        </div>
    )
};