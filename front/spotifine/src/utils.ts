export const randomString = (length: number): string => {
    let res = '';
    for(res; res.length < length;){
        res += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"[(Math.random() * 60) | 0]
    }
    return res;
}
export const set_header = (access_token: string) => {
    if (access_token) {
        return {
            setHeaders: {
                access_token: access_token
            }
        }
    } else return {}
}