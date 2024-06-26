//Services
export const getServicesAllSelector = state => {
    return state.Services
}

//Header
export const getHeaderListDataSelector = state => {
    return state.Header.ListData
}

//Plan
export const getPlansDataSelector = state => {
    return state.Plan.plans
}

export const getPlansTitleAndTextDataSelector = state => {
    return {title: state.Plan.title, text: state.Plan.text}
}

//GlobalNetwork
export const getGlobalNetworkTitleAndTextDataSelector = state => {
    return {title: state.GlobalNetwork.title, text: state.GlobalNetwork.text}
}

//Reviews
export const getReviewsTitleAndTextDataSelector = state => {
    return {title: state.Reviews.title, text: state.Reviews.text}
}

export const getReviewsDataSelector = state => {
    return state.Reviews.reviews || []
}

//SubscribeNow
export const getSubscribeNowTitleAndTextDataSelector = state => {
    return {title: state.SubscribeNow.title, text: state.SubscribeNow.text}
}