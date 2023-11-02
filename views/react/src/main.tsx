import ReactDOM from 'react-dom/client';
import { chatStore } from './stores/chat.store';
import { Provider } from 'react-redux';
import { ChatBox } from './ChatBox';
// import bg from './bg.png';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={chatStore}>
        {/* <div */}
        {/* className="w-screen h-screen" */}
        {/* style={{ background: `url(${bg}) no-repeat center center`, backgroundSize: 'cover' }} */}
        {/* > */}
        <ChatBox />
        {/* </div> */}
    </Provider>,
);
