import React from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineFavoriteBorder, MdOutlineMarkUnreadChatAlt} from 'react-icons/md'
import {SiWpexplorer} from 'react-icons/si'
import {FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='sidebar__container'>
                <div className='logo'>
                    DataSite
                </div>

                <Link to='/profile' className='sidebar_item'>
                    <AiOutlineUser  />
                    <p className='sidebar_item--text'>Профиль</p>
                </Link>
                <Link to='/favorite' className='sidebar_item'>
                    <MdOutlineFavoriteBorder  />
                    <p className='sidebar_item--text'>Избранное</p>
                </Link>
                <Link to='/lenta' className='sidebar_item'>
                    <SiWpexplorer />
                    <p className='sidebar_item--text'>Лента</p>
                </Link>

                <Link to='/chat' className='sidebar_item'>
                    <MdOutlineMarkUnreadChatAlt />
                    <p className='sidebar_item--text'>Чат</p>
                </Link>
                

                <div className='sidebar_item'>
                    <FiLogOut />
                    <p className='sidebar_item--text'>Выход</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;