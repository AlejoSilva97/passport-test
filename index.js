
const googleAuth = async() => {

    console.log('hola');

    const data = await axios({
        method: 'GET',
        url: 'http:localhost:3100/google',
        Headers: {
            'Access-Control-Allow-Origin' : '*'
        }
    })

    console.log(data);

}