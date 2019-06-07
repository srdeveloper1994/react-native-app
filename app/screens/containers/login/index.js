import { connect } from 'react-redux';
import { userLogin } from '../../../actions/user';
import Login from '../../component/login/index';

const handleLocalAction = (dispatch, action, navigation) => {
    const { type } = action;
    switch (type) {
        case localActions.LOGIN:
            return dispatch(userLogin(action.userName, action.password));
        default: break;
    }
};

export const localActions = {
    LOGIN: 'LOGIN'
};

const mapStateToProps = (state) => {
    const { userDetail } = state.user;
    return {
        localActions,
        userDetail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: (actionType, navigation) => handleLocalAction(dispatch, actionType, navigation)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
