export interface GOOGLE_NEARBY_API_RESPONSE_TYPE {
    html_attributions: string[];
    results: GOOGLE_PLACE_RESPONSE_TYPE[];
    status: GOOGLE_NEARBY_API_RESPONSE_STATUS;
    error_message?: string;
    info_messages?: string[];
    next_page_token?: string;
}


// for purposes of this exam below type is shortened greatly. Full interface example can be found in https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/google.maps/index.d.ts
export interface GOOGLE_PLACE_RESPONSE_TYPE {
    formatted_address?: string;
    rating?: string;
    url?: string;
}

export enum GOOGLE_NEARBY_API_RESPONSE_STATUS {
    OK = "OK",
    ZERO_RESULTS = "ZERO_RESULTS",
    INVALID_REQUEST = "INVALID_REQUEST",
    OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
    REQUEST_DENIED = "REQUEST_DENIED",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}