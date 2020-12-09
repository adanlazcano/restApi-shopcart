import app from './app';
import './database';

(() => {
    try {
        app.listen(app.get('port'));
        console.log(`Server on Port: ${app.get('port')}`);
    } catch (error) {
        console.log(error);
    }
})();