let professor1 = new Professor('Clécio' , '092.252.658-25', '10/02/1982', '1353511', 'Geografia');
let professor2 = new Professor('Robério' , '055.212.008-11', '22/10/1985', '1311111', 'Informática');
let aluno1 = new Aluno('Felipe', '211.282.688-02', '17/01/2005', 'AL135341');
let aluno2 = new Aluno('Marcos', '092.111.158-61', '19/11/2006', 'AL666511');
let aluno3 = new Aluno('Ryan', '697.101.155-26', '12/06/2006', 'AL668781');

let rogadx = new EventoAcademico();

rogadx.cadastrarParticipante(professor1);
rogadx.cadastrarParticipante(professor2);
rogadx.cadastrarParticipante(aluno1);
rogadx.cadastrarParticipante(aluno2);
rogadx.cadastrarParticipante(aluno3);

console.log(rogadx);
