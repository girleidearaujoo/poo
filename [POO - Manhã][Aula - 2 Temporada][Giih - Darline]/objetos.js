let a2 = new Aluno("Darline", 'Silva', "2 ano", "8947152AL", '29/10/2006', 'https://drive.google.com/file/d/1mGY2Y1oyIks5f7OvgCtd5lEysC5oe1uX')
let a3 = new Aluno("Jaciane", 'Santos', "2 ano", "3326453AL", '04/03/2007', 'https://drive.google.com/file/d/1d5oA9rmApqBH6Mt3n75Dto7bETmuus6x')
let a4 = new Aluno("Girleide", 'Silva', "2 ano", "098635AL", '03/09/2006', 'https://drive.google.com/file/d/1D0tK367ziUWFUs2PgIVZKbTHEuiPV43r')
let a5 = new Aluno("Thiago",  'Melo',"2 ano", "92863AL", '12/02/2007', 'https://drive.google.com/file/d/1yK1BWGSRxuHt4gP6mmYNOIRHs4plJ8gR')
let a6 = new Aluno("Kemylly", 'Rodrigues', "2 ano", "28364AL", '04/03/2006', 'https://drive.google.com/file/d/1uWL4Z7JRW478UM_pObd4dGNp--USG5or')
let a7 = new Aluno("Ellen", 'Viana', "2 ano", "0292827AL", '05/12/2006', 'https://drive.google.com/file/d/1xkGio1rSh25XTFnKAHcwXXsFliwU22HQ')
let a8 = new Aluno("Thayslane", 'Nascimento', "2 ano", "36436AL", '10/07/2006', 'https://drive.google.com/file/d/1kQcfoPxzC3k0Jje8t6Qwo8we7JQhsdvR')
let a9 = new Aluno("Catarina", 'Silva', "2 ano", "376253AL", '24/05/2007', 'https://drive.google.com/file/d/1tCJ1hVCp7445_lj-Dj4LZ0yOaTAfxwA2')
let a10 = new Aluno("Rebeca", 'Santos', "2 ano", "297373AL", '07/09/2006', 'https://drive.google.com/file/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0')
let a11 = new Aluno("Helysson", 'Silva', "2 ano", "3736552AL", '11/06/2006', 'https://drive.google.com/file/d/1IVyT8vEVgMC7UoKOcgqo3Nol9tBSmSLs')


let listaDeAlunos = [a2, a3, a4, a5, a6, a7, a8, a9 ,a10, a11]

listaDeAlunos.sort((a, b) => {
    if (a.primeiroNome[0] > b.primeiroNome[0]) {
        return 1
    } else if (a.primeiroNome[0] < b.primeiroNome[0]){
        return -1
    } else {
        return 0
    }
})

