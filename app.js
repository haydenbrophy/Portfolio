let intro = document.querySelector('.Sintro');
let logo = document.querySelector('.Slogo-header');
let logoSpan = document.querySelectorAll('.Slogo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)

        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 400)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })

})