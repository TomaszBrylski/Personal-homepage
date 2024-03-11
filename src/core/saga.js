import { all } from 'redux-saga/effects';
import { personalHomepageSaga } from '../features/presonalHomepage/personalHomepageSaga';

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}