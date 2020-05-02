class apiErrors {
    NOT_FOUND: string;
    DB_PROBLEM: string;
    ALREADY_EXISTS: string;
    BAD_REQUEST_BODY: string;
    BAD_REQUEST_HEADERS: string;
    BAD_REQUEST_QUERY: string;
    BAD_REQUEST_PARAMS: string;
    constructor(dataName: string) {
        this.NOT_FOUND =  dataName + ' not found in db';
        this.DB_PROBLEM =  dataName + ' db problem';
        this.ALREADY_EXISTS = dataName + ' already existing';
        this.BAD_REQUEST_BODY = dataName + ' problem in body';
        this.BAD_REQUEST_HEADERS =  dataName + ' problem in headers';
        this.BAD_REQUEST_QUERY = dataName + ' problem in query';
        this.BAD_REQUEST_PARAMS =dataName + ' problem in params';
    }
}

export const artistsErrors = new apiErrors('Artists');
export const playlistErrors = new apiErrors('Playlist');
export const callbackErrors = new apiErrors('Callback');
export const loginErrors = new apiErrors('Login');
export const tokenErrors = new apiErrors('Token');
export const userErrors = new apiErrors('User');