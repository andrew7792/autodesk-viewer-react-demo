import { createFetchAction} from './actionUtils';
import { getBuckets } from  '../libs/ossQueries'
import { GET_DESIGN_DATA } from "./constants/getDesignData";

const actions = {
    getDesignData: createFetchAction(GET_DESIGN_DATA),
};

export function getDesignDataAction() {
    const { getDesignData } = actions;

    return (dispatch) => {
        dispatch( getDesignData.fetching());
        console.log('success+++')
        getBuckets()
            .then(data => {
                dispatch(getDesignData.success(data));
            })
            //.catch(errorHandling(dispatch, getCompanyLicenses));
    };
}

export default actions;
