import { call, put } from "redux-saga/effects";
import api from "~/services/api";
import AuthActions from '../ducks/auth';
import { actions as  toastrActions} from 'react-redux-toastr';
export function* signIn({ email, password }) {

try {
    const response = yield call(api.post, 'sessions', { email, password});
   
    localStorage.setItem('@Omni:token', response.data.token);
    
    yield put(AuthActions.signInSuccess(response.data.token));

    } catch (err) {
        console.log(err);
        yield put (toastrActions.add({
            type: 'error',
            title: 'Falha no login',
            message: 'Verifique seu e-mail/Senha' 
        }))

  }
}
