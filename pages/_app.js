import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/GlobalMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {userContext, userParams} from '../store/login';

function MyApp({Component, pageProps}) {
    return (
        <userContext.Provider value={userParams}>
            <Component {...pageProps} />
        </userContext.Provider>
    )

}

export default MyApp
