import { createFetchAction} from './actionUtils';
import { getBuckets } from  '../libs/ossQueries'
import { GET_DESIGN_DATA } from "./constants/getDesignData";

const actions = {
    getDesignData: createFetchAction(GET_DESIGN_DATA),
};

export function getDesignDataAction() {
    const { getDesignData } = actions;
    console.log('dispatch', getBuckets().then(data => {
        console.log('success',data)
        //dispatch(getDesignData.success(data));
    }))
    return (dispatch) => {
        dispatch( getDesignData.fetching());
        console.log('success+++')
        getBuckets()
            .then(data => {
                console.log('return dispatch',data)
                dispatch(getDesignData.success(data));
            })
            //.catch(errorHandling(dispatch, getCompanyLicenses));
    };
}

export default actions;
