import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import {userContext, userParams} from '../store/login';

function MyApp({Component, pageProps}) {
    return (
        <userContext.Provider value={userParams}>
            <Component {...pageProps} />
        </userContext.Provider>
    )

}

export default MyApp
