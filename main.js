const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'fb56aa7740msh76e5a73e9c2cf5fp131febjsn668618a2c062',
        'x-rapidapi-host': 'ip-directory.p.rapidapi.com'
    }

};

const fetchIpInfo = ip => {
    return fetch('https://ip-directory.p.rapidapi.com/${ip}', OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err));
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
    

})


/* 142.147.89.228?risk=true&hostname=false */