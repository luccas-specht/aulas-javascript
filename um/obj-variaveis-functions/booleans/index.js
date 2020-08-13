
/*
conceito: Tudo no js é truthy. or falsy.
temValor? true:false
truthy{
    true,
    1,
    2,
    -8,
    6.980,
    ...,
    'crescer', "crescer", `crescer${variaveloKa}`,
    {},
    []
}
falsy{
    false,
    0,
    "",
    null,
    undefined
}

obs: por conversão converte pra boolean
*/

const arroz = 'oi'
if (!!arroz) {
    console.log('entra')
}

/*
!!arroz ==> verdadeiro
!arroz ==> false
*/