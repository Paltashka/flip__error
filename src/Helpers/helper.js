export function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    let res = match && decodeURIComponent(match[1].replace(/\+/g, ' '));

    return res===null?undefined:res;
}
export function getSubdomen() { //3d level domain
    let [subdomen, domen1, domen0 ] = window.location.host.split('.');

    return subdomen;
}