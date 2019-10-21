function  traerDatos(){
    console.log('============trayendo datos')
    fetch('http://localhost:3001/').then(res => console.log())
    const response = await fetch('https://localhost:3001/examples')
    console.log('================response',response)
}