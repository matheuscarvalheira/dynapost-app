export default function login() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'idowjdqwiodnskaldmweopd2i3920ejwqiodmkldj230',
        email: 'acarolwcosta@gmail.com'
      })
    }, 2000)
  })
}