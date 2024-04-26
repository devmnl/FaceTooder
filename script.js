window.onload = function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
};

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
});


//----------------------------------------------------------------------------
document.getElementById('buscar').addEventListener('click', function() {
    const loginId = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Chave para busca no banco de dados
    const chave = `${loginId}:${senha}`;

    const pessoas = {
        'luis:1234': {
            'nomeh1': 'Luis Fernando Franco Fernandes',
            'setor': 'Colagem',
            'funcao': 'Clichêista',
            'nivel' : 'Diamante&#x1F48E;',
            'foto': 'img/luisimg.jpeg',
            'apelido': 'Lebrinho&#x1F430;'
        },
        'manoel:1234': {
            'nomeh1': 'Manoel Franco Fernandes Neto',
            'setor': 'Acabamento',
            'funcao': 'Rebobinador',
            'nivel' : 'Diamante&#x1F48E;',
            'foto': 'img/manoelimg.jpeg',
            'apelido': 'Mion&#x1F969;'
        },
        'wesley:1234': {
            'nomeh1': 'Wesley Andreata',
            'setor': 'Acabamento',
            'funcao': 'Rebobinador',
            'nivel' : 'Ouro&#x1F947;',
            'foto': 'img/wesleyimg.jpeg',
            'apelido': 'Lingua&#x1F445;'
        },
        'iago:1234': {
            'nomeh1': 'Iago',
            'setor': 'Administrativo',
            'funcao': 'Faturamento',
            'nivel' : 'Ouro&#x1F947;',
            'foto': 'img/fotopadrao.jpeg',
            'apelido': 'Vovôzão&#x1F474;'
        },
        'vitor:1234': {
            'nomeh1': 'Vitor Andreata',
            'setor': 'Acabamento',
            'funcao': 'Revisor',
            'nivel' : 'Prata&#x1F948;',
            'foto': 'img/fotopadrao.jpeg',
            'apelido': 'Cowboy&#x1F920;'
        },
        'marcio:1234': {
            'nomeh1': 'Marcio Fonseca',
            'setor': 'Acabamento',
            'funcao': 'Rebobinador',
            'nivel' : 'Madeira&#x1FA93;',
            'foto': 'img/marcioimg.jpeg',
            'apelido': 'Peroba&#x1F98C;'
        },
        'luiz:1234': {
            'nomeh1': 'Luiz Monteiro',
            'setor': 'Acabamento',
            'funcao': 'Rebobinador',
            'nivel' : 'Ouro&#x1F947;',
            'foto': 'img/luizimg.jpeg',
            'apelido': 'Neguinho&#x1F466;&#x1F3FF;'
        },
        'cleiton:1234': {
            'nomeh1': 'Cleiton Adolfo',
            'setor': 'Acabamento',
            'funcao': 'Revisor',
            'nivel' : 'Bronze&#x1F5FF;',
            'foto': 'img/cleitonimg.jpeg',
            'apelido': 'Já morreu&#x26B0;'
        },
        'cassioli:1234': {
            'nomeh1': 'Luiz Antônio Cassioli',
            'setor': 'Geral',
            'funcao': 'Diretor',
            'nivel' : 'Triplo Diamente&#x1F48E;&#x1F48E;&#x1F48E;',
            'foto': 'img/cassioliimg.jpeg',
            'apelido': 'Felonius Gru&#x1F9E3;'
        },
        'eric:1234': {
            'nomeh1': 'Eric Santos',
            'setor': 'Acabamento',
            'funcao': 'Rebobinador',
            'nivel' : 'Cannabs&#x1F33F;',
            'foto': 'img/ericimg.jpeg',
            'apelido': 'Zóio &#x1F441;'
        }
    };

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    if (chave in pessoas) {
        const pessoa = pessoas[chave];
        resultado.innerHTML = `
            <h2>${pessoa.nomeh1}</h2>
            <img src="${pessoa.foto}" alt="Foto de ${pessoa.nomeh1}">
            <p>Setor: <strong>${pessoa.setor}</strong></p>
            <p>Função: <strong>${pessoa.funcao}</strong></p>
            <p>Nível: <strong>${pessoa.nivel}</strong></p>
            <p>Apelido: <strong>${pessoa.apelido}</strong></p>
        `;
    } else {
        resultado.innerHTML = '<p>Pessoa não encontrada.</p>';
    }
});


