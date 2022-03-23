import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    const [text, setText] = useState('');
    return(
        <>
          {/* <p>Hello from Menu</p> */}
          <Header/>
          <Search setText={setText} />
          <Conversations text={text} />
        </>
    )
}

export default Menu;