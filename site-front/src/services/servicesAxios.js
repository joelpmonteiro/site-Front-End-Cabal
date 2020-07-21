import axios from 'axios';
//import VueJwtDecode from 'vue-jwt-decode'
// eslint-disable-next-line
/* eslint-disable */
//Endereço da API
axios.defaults.baseURL = 'http://localhost:3000/api/user/'
let tokenUserData = localStorage.getItem('user-data') == null ? false : true;
//const token = null;
const decryp = null;
let AuthStr = 'Bearer ';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-data') === null ? null : localStorage.getItem('user-data');

//const decrypToken = null;
//const decrypToken = VueJwtDecode.decode(localStorage.getItem('user-data')) == true ? true : null;
//console.log(axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-data') === null ? null : localStorage.getItem('user-data'))
const authLogin = async(dados) => {
    let loginSite = await axios.post('account/login', dados)

    if (loginSite.status === 200) {
        const tokenAuth = loginSite.data.token;
        localStorage.setItem('user-data', tokenAuth);
        return loginSite
    } else {
        return loginSite
    }

}

const register = async(dados) => {
    let register = await axios.post('account/create', dados);

    if (register.status === 201) {
        return register;
    } else {
        return register;
    }

}

const download = async() => {
    let download = await axios.get('/download');
    if (download.status === 200) return download;
}

const ranking = async() => {
    let ranking = await axios.get('/ranking/character/');
    if (ranking.status == 200) return ranking.data;
    else return ranking.data;
}

const guild = async() => {
    let guild = await axios.get('/ranking/guild/');
    if (guild.status == 200) return guild.data;
    else return guild.data;
}

const activationAccount = async(activeAccount) => {
    AuthStr = 'Bearer '.concat(localStorage.getItem('user-data'));
    let act = await axios.put('/account/activation/', activeAccount, { headers: { Authorization: AuthStr } })
    if (act.status == 200) return act;
    else return act;
}

const recoveryPasswordAccount = async(recoveryData) => {
    let recovery = await axios.put('account/recoveryPassword/', recoveryData)
    if (recovery.status == 200) return recovery;
    else return recovery;
}

const searCharacterNation = async(nation) => {
    console.log(nation)
    let charNation = await axios.get(`character/nation/${nation}`)
    console.log(charNation);
    if (charNation.status == 200) return charNation;
    else return charNation;
}

const playersOnline = async() => {
    let playOnline = await axios.get('/online');
    if (playOnline.status == 200) return playOnline
    else return 0;
}
const infoBasic = async() => {
    let infBasic = await axios.get('infoServer');
    if (infBasic.status == 200) return infBasic;
    else return 0;
}

const noticeAll = async() => {
    let notice = await axios.get('notice/');
    if (notice.status == 200) return notice;
    else return 0
}

export default { authLogin, register, download, ranking, guild, activationAccount, recoveryPasswordAccount, searCharacterNation, playersOnline, infoBasic, noticeAll };