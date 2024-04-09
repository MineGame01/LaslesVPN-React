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