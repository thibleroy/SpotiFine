import {identifiers} from '../src/html_identifiers';
const target_maker = (identifier: string) => {
    return `[data-cy=${identifier}]`
}

export const targets = {
    email_input: target_maker(identifiers.email_input),
    password_input: target_maker(identifiers.password_input),
    login_button: target_maker(identifiers.login_button),
    status_img: target_maker(identifiers.status_img)
}