// alert('How are you')

const  showAlert = () => {
    alert('Subidha badi der theke sabdhan')
}

const lendMoney = () => {
   const result =  confirm('will you lend me 500Tk')
    console.log(result);
    if(result === true){
        alert('tui amar jan er dosto!!!!')
    }
    else {
        console.log('DGM .....toke ajke a block maira dimu')
    }
}
const getInfo = () => {
    // alert
    // confirm
    const name =  prompt('tell me your name')
    console.log(name);
    if(name === null){
        alert('Nam na dile kam nai !! Ja Foooooot')

    }
    else{
        console.log(name,'welcome to this world');
    }
}